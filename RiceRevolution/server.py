from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

from data import varietiesData

# Home page
@app.route('/')
def home():
   return render_template('home.html')

# Varieties page
@app.route('/varieties')
def varieties():
   return render_template('varieties.html', varietiesData=varietiesData)

# No Rice Cooker page
@app.route('/no_rice_cooker')
def no_rice_cooker():
   return render_template('no_rice_cooker.html')

# Rice Cooker page
@app.route('/rice_cooker')
def rice_cooker():
   return render_template('rice_cooker.html')

# Quiz page
@app.route('/quiz')
def quiz():
   return render_template('quiz.html')


if __name__ == '__main__':
   app.run(port=8000, debug = True)
