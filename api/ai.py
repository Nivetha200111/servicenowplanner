from http.server import BaseHTTPRequestHandler
import json
import urllib.request
import urllib.error

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            token = data.get('token')
            prompt = data.get('prompt')

            if not token or not prompt:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Missing token or prompt'}).encode())
                return

            # Call Hugging Face API
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

                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'text': generated_text}).encode())

        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8')
            self.send_response(e.code)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': error_body}).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())
