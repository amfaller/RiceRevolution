from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

# Home page
@app.route('/')
def home():
   return render_template('home.html')

# Varieties page
@app.route('/varieties')
def varieties():
   return render_template('varieties.html')

# No Rice Cooker page
@app.route('/no_rice_cooker')
def no_rice_cooker():
   return render_template('no_rice_cooker.html')


if __name__ == '__main__':
   app.run(port=8000, debug = True)
