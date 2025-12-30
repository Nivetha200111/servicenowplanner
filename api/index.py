from flask import Flask, render_template, send_from_directory, request, jsonify
import os
import requests

# Get the base directory (parent of api folder)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__,
    template_folder=os.path.join(BASE_DIR, 'templates'),
    static_folder=os.path.join(BASE_DIR, 'static'),
    static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/api/ai', methods=['POST'])
def ai_proxy():
    """Proxy requests to Hugging Face API to avoid CORS issues"""
    try:
        data = request.get_json()
        token = data.get('token')
        prompt = data.get('prompt')

        if not token or not prompt:
            return jsonify({'error': 'Missing token or prompt'}), 400

        response = requests.post(
            'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
            headers={
                'Authorization': f'Bearer {token}',
                'Content-Type': 'application/json'
            },
            json={
                'inputs': prompt,
                'parameters': {
                    'max_new_tokens': 500,
                    'temperature': 0.7,
                    'return_full_text': False
                }
            },
            timeout=60
        )

        if not response.ok:
            return jsonify({'error': response.text}), response.status_code

        result = response.json()
        generated_text = result[0].get('generated_text', '') if result else ''

        return jsonify({'text': generated_text})

    except requests.Timeout:
        return jsonify({'error': 'Request timed out. The AI model may be loading, please try again.'}), 504
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Vercel requires the app to be named 'app'
# For local development
if __name__ == '__main__':
    app.run(debug=True, port=3000)
