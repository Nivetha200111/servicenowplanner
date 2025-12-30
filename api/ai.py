from http.server import BaseHTTPRequestHandler
import json
import urllib.request
import urllib.error

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            token = data.get('token')
            prompt = data.get('prompt')

            if not token or not prompt:
                self._send_json({'error': 'Missing token or prompt'}, 400)
                return

            req_data = json.dumps({
                'inputs': prompt,
                'parameters': {
                    'max_new_tokens': 500,
                    'temperature': 0.7,
                    'return_full_text': False
                }
            }).encode('utf-8')

            req = urllib.request.Request(
                'https://router.huggingface.co/hf-inference/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
                data=req_data,
                headers={
                    'Authorization': f'Bearer {token}',
                    'Content-Type': 'application/json'
                }
            )

            with urllib.request.urlopen(req, timeout=60) as response:
                result = json.loads(response.read().decode('utf-8'))
                generated_text = result[0].get('generated_text', '') if result else ''
                self._send_json({'text': generated_text}, 200)

        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8')
            self._send_json({'error': error_body}, e.code)
        except Exception as e:
            self._send_json({'error': str(e)}, 500)

    def _send_json(self, data, status):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
