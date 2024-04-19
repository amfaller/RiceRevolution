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

let dragDataArray = [];

function renderQuestion() {
    // Render global margins
    functions.renderMargins();

    // Render question header
    let header = document.createElement("h1");
    header.innerHTML = questionData.question;
    document.getElementById("mainCol").appendChild(header);

    // If the question is draggable:
    if (questionData.isDragQ) {

        for (let i = 0; i < questionData.answers.length; i++) {
            // Create a bootstrap row
            let row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("id", "row-" + i);
            document.getElementById("mainCol").appendChild(row);

            // Create a col-2 to hold each draggable element
            let col1 = document.createElement("div");
            col1.classList.add("col-2");
            row.appendChild(col1);

            // Create a col-8 to hold each droppable element
            let col2 = document.createElement("div");
            col2.classList.add("col-8");
            row.appendChild(col2);

            // Note: The remaining col-2 is left empty; it will hold
            // the dragged answers.

            // Create a div for each draggable element
            {
                let draggable = questionData.answers[i];

                let draggableDiv = document.createElement("div");
                draggableDiv.innerHTML = draggable;
                draggableDiv.setAttribute("id", "draggable-" + i);
                draggableDiv.classList.add("draggable");
                draggableDiv.classList.add("ui-widget-content");

                let drgDivHandle = $(draggableDiv);
                drgDivHandle.draggable({
                    revert: "invalid",
                    cursor: "move"
                });

                // Change the color of the row when hovered over
                $(draggableDiv)
                    .mouseover(function() {
                        $(this).css("background-color", "lightyellow"); 
                    })
                    .mouseout(function() {
                        $(this).css("background-color", "");
                    });

                col1.appendChild(draggableDiv);
            }

            // Create a div for each droppable element
            {
                let droppable = questionData.slots[i];

                let droppableDiv = document.createElement("div");
                droppableDiv.innerHTML = droppable;
                droppableDiv.setAttribute("id", "droppable-" + i);
                droppableDiv.classList.add("ui-widget-content");

                let drpDivHandle = $(droppableDiv);
                drpDivHandle.droppable({
                    accept: ".draggable",
                    drop: function(event, ui) {
                        console.log("Dropped");

                        // Get the ID of the draggable element
                        let draggableId = ui.draggable.attr("id");
                        
                        // Get the ID of the droppable element
                        let droppableId = $(this).attr("id");

                        // Get the row-i row element
                        let rowId = droppableId.split("-")[1];
                        let row = document.getElementById("row-" + rowId);

                        // Create a col-2
                        let col1 = document.createElement("div");
                        col1.classList.add("col-2");

                        // Get the text of the draggable element and append it to the col-2
                        let draggableText = ui.draggable.text();
                        col1.innerHTML = draggableText;

                        // Remove the draggable element from the row
                        ui.draggable.remove();

                        // Append the col-2 to the row
                        row.appendChild(col1);

                        // Add the id (i.e. index) of the draggable element to the dragDataArray
                        dragDataArray.push(draggableId.split("-")[1]);
                    }
                });

                col2.appendChild(droppableDiv);
            }

            // Append row
            document.getElementById("mainCol").appendChild(row);
        }
        
        // Add a reset button 
        let resetButton = document.createElement("button");
        resetButton.innerHTML = "Reset";
        resetButton.onclick = function() {
            location.reload();
        }
        document.getElementById("mainCol").appendChild(resetButton);

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
    // Check that the dragDataArray is equal to questionData.correctAnswerIdx
    let correct = true;
    for (let i = 0; i < dragDataArray.length; i++) {
        if (parseInt(dragDataArray[i]) != questionData.correctAnswerIdx[i]) {
            correct = false;
            break;
        }
    }
    console.log("Correct: " + correct)

    if (correct) {
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
    let mainCol = document.getElementById("mainCol");
    mainCol.innerHTML = "";

    // Varieties Quiz
    {
        const varietiesQuizRow = document.createElement('div');
        varietiesQuizRow.classList.add('row');

        // Button
        {
            const varButtonCol = document.createElement('div');
            varButtonCol.classList.add('col-6');

            const varietiesQuizButton = document.createElement('button');
            varietiesQuizButton.innerText = 'Varieties Quiz';
            varietiesQuizButton.onclick = function () {
                postQuizSelection(0);
            }

            // Right-align the button
            varietiesQuizButton.classList.add('btn');
            varietiesQuizButton.classList.add('btn-primary');
            varietiesQuizButton.style.float = "right";

            varButtonCol.appendChild(varietiesQuizButton);
            varietiesQuizRow.appendChild(varButtonCol);
        }

        // Score
        {
            const varScoreCol = document.createElement('div');
            varScoreCol.classList.add('col-6');

            const varietiesScoreRow = document.createElement('div');
            varietiesScoreRow.classList.add('row');

            const varScore = document.createElement('p');
            varScore.innerText = "Previous score: " + varietiesQuizScore + "/" +  maxVarScore;
            varietiesScoreRow.appendChild(varScore);

            varScoreCol.appendChild(varietiesScoreRow);

            varietiesQuizRow.appendChild(varScoreCol);
        }

        mainCol.appendChild(varietiesQuizRow);
    }

    // Cooking Quiz
    {
        const cookingQuizRow = document.createElement('div');
        cookingQuizRow.classList.add('row');

        // Button
        {
            const cooButtonCol = document.createElement('div');
            cooButtonCol.classList.add('col-6');

            const cookingQuizButton = document.createElement('button');
            cookingQuizButton.innerText = 'Cooking Quiz';
            cookingQuizButton.onclick = function () {
                postQuizSelection(1);
            }

            // Right-align the button
            cookingQuizButton.classList.add('btn');
            cookingQuizButton.classList.add('btn-primary');
            cookingQuizButton.style.float = "right";

            cooButtonCol.appendChild(cookingQuizButton);
            cookingQuizRow.appendChild(cooButtonCol);
        }

        // Score
        {
            const cookingScoreCol = document.createElement('div');
            cookingScoreCol.classList.add('col-6');

            const cookingScoreRow = document.createElement('div');
            cookingScoreRow.classList.add('row');

            const cooScore = document.createElement('p');
            cooScore.innerText = "Previous score: " + cookingQuizScore + "/" +  maxCooScore;
            cookingScoreRow.appendChild(cooScore);

            cookingScoreCol.appendChild(cookingScoreRow);

            cookingQuizRow.appendChild(cookingScoreCol);
        }

        mainCol.appendChild(cookingQuizRow);
    }
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
