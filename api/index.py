from flask import Flask, render_template, send_from_directory
import os

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

# Vercel requires the app to be named 'app'
# For local development
if __name__ == '__main__':
    app.run(debug=True, port=3000)
