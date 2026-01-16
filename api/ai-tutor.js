// AI Tutor API - Supports both Claude and OpenAI
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, context, type, provider } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const selectedProvider = provider || 'anthropic'; // Default to Claude

        if (selectedProvider === 'anthropic') {
            return await handleClaude(req, res, prompt, context, type);
        } else if (selectedProvider === 'openai') {
            return await handleOpenAI(req, res, prompt, context, type);
        } else {
            return res.status(400).json({ error: 'Invalid AI provider' });
        }
    } catch (error) {
        console.error('AI Tutor Error:', error);
        return res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}

async function handleClaude(req, res, prompt, context, type) {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
        return res.status(400).json({
            error: 'Missing ANTHROPIC_API_KEY environment variable'
        });
    }

    const systemPrompts = {
        'quiz': 'You are an expert ServiceNow certification exam creator. Generate challenging, realistic practice questions with detailed explanations.',
        'explain': 'You are a patient ServiceNow tutor. Explain concepts clearly with examples, analogies, and best practices.',
        'summarize': 'You are a concise technical writer. Create clear, structured summaries of ServiceNow concepts.',
        'study-plan': 'You are an expert study coach. Create personalized, effective study plans based on learning science principles.',
        'flashcard': 'You are a flashcard expert. Create effective question-answer pairs using active recall principles.'
    };

    const systemPrompt = systemPrompts[type] || systemPrompts['explain'];

    const messages = [];

    if (context) {
        messages.push({
            role: 'user',
            content: `Context: ${context}\n\nQuestion: ${prompt}`
        });
    } else {
        messages.push({
            role: 'user',
            content: prompt
        });
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 2048,
                system: systemPrompt,
                messages: messages
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'Claude API error',
                details: data
            });
        }

        return res.status(200).json({
            ok: true,
            response: data.content[0].text,
            provider: 'claude',
            model: 'claude-3-5-sonnet-20241022'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Failed to call Claude API',
            details: error.message
        });
    }
}

async function handleOpenAI(req, res, prompt, context, type) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(400).json({
            error: 'Missing OPENAI_API_KEY environment variable'
        });
    }

    const systemPrompts = {
        'quiz': 'You are an expert ServiceNow certification exam creator. Generate challenging, realistic practice questions with detailed explanations.',
        'explain': 'You are a patient ServiceNow tutor. Explain concepts clearly with examples, analogies, and best practices.',
        'summarize': 'You are a concise technical writer. Create clear, structured summaries of ServiceNow concepts.',
        'study-plan': 'You are an expert study coach. Create personalized, effective study plans based on learning science principles.',
        'flashcard': 'You are a flashcard expert. Create effective question-answer pairs using active recall principles.'
    };

    const systemPrompt = systemPrompts[type] || systemPrompts['explain'];

    const messages = [
        { role: 'system', content: systemPrompt }
    ];

    if (context) {
        messages.push({
            role: 'user',
            content: `Context: ${context}\n\nQuestion: ${prompt}`
        });
    } else {
        messages.push({
            role: 'user',
            content: prompt
        });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo-preview',
                messages: messages,
                max_tokens: 2048,
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'OpenAI API error',
                details: data
            });
        }

        return res.status(200).json({
            ok: true,
            response: data.choices[0].message.content,
            provider: 'openai',
            model: 'gpt-4-turbo-preview'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Failed to call OpenAI API',
            details: error.message
        });
    }
}
