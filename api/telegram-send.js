export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
        const { message, chatId: clientChatId, botToken: clientToken } = body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const token = clientToken || process.env.TELEGRAM_BOT_TOKEN;
        const chatId = clientChatId || process.env.TELEGRAM_CHAT_ID;

        if (!token) {
            return res.status(400).json({ error: 'Missing Telegram bot token (set TELEGRAM_BOT_TOKEN)' });
        }
        if (!chatId) {
            return res.status(400).json({ error: 'Missing Telegram chat ID (provide in request or TELEGRAM_CHAT_ID)' });
        }

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const result = await response.json();

        if (!response.ok || !result.ok) {
            const description = result?.description || 'Telegram API error';
            return res.status(response.status || 500).json({ error: description });
        }

        return res.status(200).json({ ok: true, result });
    } catch (error) {
        console.error('Telegram API handler error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
