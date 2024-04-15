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
        window.location.href = "/quiz";
    }
}

function displaySelectionButtons() {
    // Create Bootstrap rows for buttons
    const cookingQuizRow = document.createElement('div');
    cookingQuizRow.classList.add('row');

    const varietiesQuizRow = document.createElement('div');
    varietiesQuizRow.classList.add('row');

    // Create Cooking Quiz button
    const cookingQuizButton = document.createElement('button');
    cookingQuizButton.innerText = 'Cooking Quiz';
    cookingQuizButton.onclick = function () {
        postQuizSelection(0);
    }

    // Create Varieties Quiz button
    const varietiesQuizButton = document.createElement('button');
    varietiesQuizButton.innerText = 'Varieties Quiz';
    varietiesQuizButton.onclick = function () {
        postQuizSelection(1);
    }

    // Append buttons to rows
    cookingQuizRow.appendChild(cookingQuizButton);
    varietiesQuizRow.appendChild(varietiesQuizButton);

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

    // Redirect to /quiz/1
    window.location.href = "/quiz/1";
}
