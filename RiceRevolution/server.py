from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

from data import *

# Rice Styles array because working with enums in python is terrible
# 0 - Normal
# 1 - Congee
# 2 - Crispy
riceStyles = [0, 1, 2]
targetStyle = 0

# Basic array to store timestamps
timestamps = []

# Quiz IDs because working with enums in python is terrible
# 0 - Varieties
# 1 - Cooking
quizIDs = [0, 1]
quizId = 0
varietiesQuizScore = 0
cookingQuizScore = 0
maxScore = 0

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
   global targetStyle
   stepData=None
   stepLength = 0
   step = "0"
   if targetStyle == 0:
      stepData = noRiceCookerSteps.get(step)
      stepLength = len(noRiceCookerSteps)
   elif targetStyle == 1:
      stepData = noRiceCookerSteps_Congee.get(step)
      stepLength = len(noRiceCookerSteps_Congee)
   elif targetStyle == 2:
      stepData = noRiceCookerSteps_Crispy.get(step)
      stepLength = len(noRiceCookerSteps_Crispy)
   else:
      stepData = noRiceCookerSteps.get(step)
      stepLength = len(noRiceCookerSteps)
   if stepData is None:
      return "Step not found", 404
   return render_template('no_rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength, targetStyle=targetStyle)

# No Rice Cooker step pages
@app.route('/no_rice_cooker/<step>')
def no_rice_cooker_step(step):
   global targetStyle
   stepData=None
   stepLength = 0
   print(targetStyle)
   if targetStyle == 0:
      stepData = noRiceCookerSteps.get(step)
      stepLength = len(noRiceCookerSteps)
   elif targetStyle == 1:
      stepData = noRiceCookerSteps_Congee.get(step)
      stepLength = len(noRiceCookerSteps_Congee)
   elif targetStyle == 2:
      stepData = noRiceCookerSteps_Crispy.get(step)
      stepLength = len(noRiceCookerSteps_Crispy)
   else:
      stepData = noRiceCookerSteps.get(step)
      stepLength = len(noRiceCookerSteps)
   if stepData is None:
      return "Step not found", 404
   return render_template('no_rice_cooker.html', imageData=imageData, stepData=stepData, stepLength=stepLength, targetStyle=targetStyle)

# Route for rice style
@app.route('/rice_style', methods=['GET', 'POST'])
def rice_style():
   global targetStyle
   data = request.get_json()
   print(data)
   targetStyle = data['style']
   print(targetStyle)
   return jsonify(data)

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
   return render_template('quiz.html', questionData=None)

# Per-question page
@app.route('/quiz/<id>')
def quiz_question(id):
   global quizId
   global varietiesQuizScore
   global cookingQuizScore
   global maxScore

   question = None
   if quizId == 0:
      question = quizData_Varieties.get(id)
      maxScore = len(quizData_Varieties)
   elif quizId == 1:
      question = quizData_Cooking.get(id)
      maxScore = len(quizData_Cooking)

   if question is None:
      return "Question not found", 404
   return render_template('quiz.html', questionData=question)

# Route for quiz selection
@app.route('/quiz_selection', methods=['GET', 'POST'])
def quiz_selection():
   global quizId
   data = request.get_json()
   print(data)
   quizId = data['quiz']
   return jsonify(data)

# Route for answer submission
@app.route('/submit_answer', methods=['POST'])
def submit_answer():
   global quizId
   global varietiesQuizScore
   global cookingQuizScore
   global maxScore

   data = request.get_json()
   print(data)
   if quizId == 0:
      if data['correct']:
         varietiesQuizScore += 1
   elif quizId == 1:
      if data['correct']:
         cookingQuizScore += 1

   return jsonify(data)

# Route to see logs
@app.route('/logs')
def logs():
   return render_template('logs.html', timestamps=timestamps)

# Endpoint for logging timestamps
@app.route('/enter_log', methods=['POST'])
def log():
   data = request.get_json()
   # Insert a page-timestamp pair into the timestamps array
   timestamps.append(data)
   print(data)
   return jsonify(data)


if __name__ == '__main__':
   app.run(port=8000, debug = True)
