import * as functions from './functions.js';

$(document).ready(function() {
    functions.logData();
    renderQuizHome();
});

function renderQuizHome() {
    // Render global margins
    functions.renderMargins();

    if (questionData) {
        console.log(questionData);
        renderQuestion();
    }
    else {
        displaySelectionButtons();
    }
}

function renderQuestion() {
    // Render global margins
    functions.renderMargins();

    // Render question header
    let header = document.createElement("h1");
    header.innerHTML = questionData.question;
    document.getElementById("mainCol").appendChild(header);

    // If the question is draggable:
    if (questionData.isDragQ) {
        // Create a div for each draggable element
        for (let i = 0; i < questionData.answers.length; i++) {
            let draggable = questionData.answers[i];

            let draggableDiv = document.createElement("div");
            draggableDiv.innerHTML = draggable;
            draggableDiv.setAttribute("draggable", "true");
            draggableDiv.setAttribute("ondragstart", "drag(event)");

            document.getElementById("mainCol").appendChild(draggableDiv);
        }

        // Add a submit button
        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = function() {
            postDraggableAnswer();
        }
        document.getElementById("mainCol").appendChild(submitButton);
    }
    else {
        // Render answer choices
        for (let i = 0; i < questionData.answers.length; i++) {
            let answer = questionData.answers[i];

            let answerButton = document.createElement("button");
            answerButton.innerHTML = answer;
            answerButton.onclick = function() {
                postAnswer(i);
            }

            document.getElementById("mainCol").appendChild(answerButton);
        }
    }
}

function postDraggableAnswer() {
    // TODO check that answer is correct

    $.ajax({
        url: "/submit_answer",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            correct: true}),
        success: function(data) {
            console.log(data);
        }
        });

    // Redirect to next question if not at max
    if (parseInt(questionData.id) < 5) {
        window.location.href = "/quiz/" + (parseInt(questionData.id) + 1);
    } 
    else {
        // Sleep for 250 ms
        setTimeout(function() {
            window.location.href = "/quiz";
        }, 125);
    }
}

function postAnswer(value) {
    if (value == questionData.correctAnswerIdx) {
        // Publish via AJAX the current timestamp to the server
        $.ajax({
            url: "/submit_answer",
            method: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                correct: true}),
            success: function(data) {
                console.log(data);
            }
        });
    }

    // Redirect to next question if not at max
    if (parseInt(questionData.id) < 5) {
        window.location.href = "/quiz/" + (parseInt(questionData.id) + 1);
    } 
    else {
        // Sleep for 250 ms
        setTimeout(function() {
            window.location.href = "/quiz";
        }, 125);
    }
}

function displaySelectionButtons() {
    // Create Bootstrap rows for buttons
    const cookingQuizRow = document.createElement('div');
    cookingQuizRow.classList.add('row');

    const varietiesQuizRow = document.createElement('div');
    varietiesQuizRow.classList.add('row');

    {
        // Create Varieties Quiz button
        const varietiesQuizButton = document.createElement('button');
        varietiesQuizButton.innerText = 'Varieties Quiz';
        varietiesQuizButton.onclick = function () {
            postQuizSelection(0);
        }

        // Create Cooking Quiz button
        const cookingQuizButton = document.createElement('button');
        cookingQuizButton.innerText = 'Cooking Quiz';
        cookingQuizButton.onclick = function () {
            postQuizSelection(1);
        }

        // Append buttons to rows
        cookingQuizRow.appendChild(cookingQuizButton);
        varietiesQuizRow.appendChild(varietiesQuizButton);
    }

    {
        // Create scores text
        const cooScore = document.createElement('p');
        cooScore.innerText = "Previous score: " + cookingQuizScore + "/" +  maxCooScore;
        cookingQuizRow.appendChild(cooScore);

        const varScore = document.createElement('p');
        varScore.innerText = "Previous score: " + varietiesQuizScore + "/" +  maxVarScore;
        varietiesQuizRow.appendChild(varScore);
    }

    // Append rows to document
    let mainCol = document.getElementById("mainCol");
    mainCol.innerHTML = "";
    mainCol.appendChild(cookingQuizRow);
    mainCol.appendChild(varietiesQuizRow);
}

function postQuizSelection(value) {
    // Publish via AJAX the current timestamp to the server
    $.ajax({
        url: "/quiz_selection",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            quiz: value}),
        success: function(data) {
            console.log(data);
        }
    });

    // Sleep for a quarter of a second
    // Sleep for 250 ms
    setTimeout(function() {
        window.location.href = "/quiz/1";
    }, 125);
}
