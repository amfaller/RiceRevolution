from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

from data import *

# Home page
@app.route('/')
def home():
   return render_template('home.html')

# Varieties page
@app.route('/varieties')
def varieties():
   return render_template('varieties.html', varietiesData=varietiesData)

# Per-variety page
@app.route('/varieties/<id>')
def variety(id):
   variety = varietiesData.get(id)
   if variety is None:
      return "Variety not found", 404
   return render_template('variety.html', varietyData=variety)

# No Rice Cooker home page
@app.route('/no_rice_cooker')
def no_rice_cooker():
   stepData = noRiceCookerSteps.get("0")
   if stepData is None:
      return "Step not found", 404
   stepLength = len(noRiceCookerSteps)
   return render_template('no_rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength)

# No Rice Cooker step pages
@app.route('/no_rice_cooker/<step>')
def no_rice_cooker_step(step):
   stepData = noRiceCookerSteps.get(step)
   if stepData is None:
      return "Step not found", 404
   stepLength = len(noRiceCookerSteps)
   return render_template('no_rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength)

# Rice Cooker home page
@app.route('/rice_cooker')
def rice_cooker():
   stepData = riceCookerSteps.get("0")
   if stepData is None:
      return "Step not found", 404
   stepLength = len(riceCookerSteps)
   return render_template('rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength)

# Rice Cooker step pages
@app.route('/rice_cooker/<step>')
def rice_cooker_step(step):
   stepData = riceCookerSteps.get(step)
   if stepData is None:
      return "Step not found", 404
   stepLength = len(riceCookerSteps)
   return render_template('rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength)

# Quiz page
@app.route('/quiz')
def quiz():
   return render_template('quiz.html')


if __name__ == '__main__':
   app.run(port=8000, debug = True)
