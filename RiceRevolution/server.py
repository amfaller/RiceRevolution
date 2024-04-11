from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

# Home page
@app.route('/')
def home():
   return render_template('home.html')


if __name__ == '__main__':
   app.run(port=8000, debug = True)
