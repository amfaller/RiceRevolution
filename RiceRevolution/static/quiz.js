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
    }
    else {
        displaySelectionButtons();
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
