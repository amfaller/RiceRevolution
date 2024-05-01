import * as functions from './functions.js';

// Per server.py:
//  - 0 = Varieties
//  - 1 = Cooking
let quizType = 0;

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

let dragDataArray = [-1, -1, -1, -1, -1];

function renderQuestion() {
    // Render global margins
    functions.renderMargins();

    {
        let row = document.createElement("div");
        row.classList.add("row");
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("text-center");

        let topHeader = document.createElement("h1");
        let topHeaderText = "";
        if (quizType == 0) {
            topHeaderText = "Varieties Quiz";
        }
        else {
            topHeaderText = "Cooking Quiz";
        }
        topHeader.innerHTML = topHeaderText;

        col.appendChild(topHeader);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

    // Render question header
    {
        let questionNumber = questionData.id;

        let row = document.createElement("div");
        row.classList.add("row");

        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("text-center");

        let header = document.createElement("h3");
        header.innerHTML = "Question " + questionNumber + ": " +  questionData.question;

        col.appendChild(header);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

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
                    cursor: "move",
                    backgroundColor: "lightyellow"
                });
                drgDivHandle.css("cursor", "move");

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

                        // Remove the droppable attribute from the droppable element
                        $(this).droppable("destroy");

                        // Append the col-2 to the row
                        row.appendChild(col1);

                        // Add the id (i.e. index) of the draggable element to the dragDataArray
                        // at the index specified by droppableId
                        if (dragDataArray.length > rowId) {
                            dragDataArray[rowId] = draggableId.split("-")[1];
                        }

                        $(this).css("background-color", "lightblue");
                    },
                    over: function(event, ui) {
                        $(this).css("background-color", "lightyellow");
                    },
                    out: function(event, ui) {
                        $(this).css("background-color", "");
                    }
            });

                col2.appendChild(droppableDiv);
            }

            // Append row
            document.getElementById("mainCol").appendChild(row);
        }

        functions.renderSpacingDiv();
        
        let buttonRow = document.createElement("div");
        buttonRow.classList.add("row");
        document.getElementById("mainCol").appendChild(buttonRow);

        {
            // Add a reset button 
            let resetCol = document.createElement("div");
            resetCol.classList.add("col-6");

            let resetButton = document.createElement("button");
            resetButton.innerHTML = "Reset";
            resetButton.onclick = function() {
                location.reload();
            }

            // Right-align the button
            resetButton.classList.add('btn');
            resetButton.classList.add('btn-primary');
            resetButton.style.float = "right";

            
            resetCol.appendChild(resetButton);
            buttonRow.appendChild(resetCol);

            // Add a submit button
            let submitCol = document.createElement("div");
            submitCol.classList.add("col-6");

            let submitButton = document.createElement("button");
            submitButton.innerHTML = "Submit";
            submitButton.onclick = function() {
                postDraggableAnswer();
            }
            submitButton.classList.add('btn');
            submitButton.classList.add('btn-primary');
            
            submitCol.appendChild(submitButton);
            buttonRow.appendChild(submitCol);
        }
        functions.renderSpacingDiv();
    }
    else {
        functions.renderSpacingDiv();

        // Get the divisor for how many bootsrap columns to use
        let divisor = questionData.answers.length;
        let colSize = 12 / divisor;
        
        // Row to hold buttons
        let row = document.createElement("div");
        row.classList.add("row");

        // Render answer choices
        for (let i = 0; i < questionData.answers.length; i++) {
            let col = document.createElement("div");
            col.classList.add("col-" + colSize);
            col.classList.add("text-center");

            let answer = questionData.answers[i];

            let answerButton = document.createElement("button");
            answerButton.innerHTML = answer;
            answerButton.onclick = function() {
                postAnswer(i);
            }

            answerButton.classList.add("btn");
            answerButton.classList.add("btn-primary");

            col.appendChild(answerButton);
            row.appendChild(col);
        }

        document.getElementById("mainCol").appendChild(row);
        functions.renderSpacingDiv();
    }
}

function postDraggableAnswer() {
    // Check that the dragDataArray is equal to questionData.correctAnswerIdx
    let correctAnswerChosen = true;
    for (let i = 0; i < questionData.correctAnswerIdx.length; i++) {
        if (parseInt(dragDataArray[i]) != questionData.correctAnswerIdx[i]) {
            correctAnswerChosen = false;
            break;
        }
    }
    console.log("correctAnswerChosen: " + correctAnswerChosen)

    $.ajax({
        url: "/submit_answer",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            correct: correctAnswerChosen}),
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
    let correctAnswerChosen = value == questionData.correctAnswerIdx;
    
    // Publish via AJAX the current timestamp to the server
    $.ajax({
        url: "/submit_answer",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            correct: correctAnswerChosen}),
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

function displaySelectionButtons() {
    let mainCol = document.getElementById("mainCol");
    mainCol.innerHTML = "";

    renderHeader();

    // Create a parent container to hold the buttons
    let container = document.createElement("div");
    container.setAttribute("class", "container d-flex flex-column justify-content-center");
    container.setAttribute("id", "homeBanner");

    // Set the background image
    container.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-taobao-tmall-rice-poster-banner-home-poster-template-image_189319.jpg')";
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";

    // Right-pad the container
    container.style.paddingRight = "20vw";

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
        if (varietiesQuizTaken)
        {
            const varScoreCol = document.createElement('div');
            varScoreCol.classList.add('col-6');

            const varietiesScoreRow = document.createElement('div');
            varietiesScoreRow.classList.add('row');

            const varScore = document.createElement('p');
            varScore.innerText = "Previous score: " + varietiesQuizScore + "/" +  maxVarScore + "   ";
            varScore.classList.add('quizScore');
            
            // Iterate through varietiesQuizCorrectAnswers
            // Display a green circle if the answer was correct (i.e. value 1)
            // Display a red circle if the answer was incorrect (i.e. value 0)
            // Use unicode representation of circle
            for (let i = 0; i < varietiesQuizCorrectAnswers.length; i++) {
                const correct = varietiesQuizCorrectAnswers[i];
                const correctCircle = document.createElement('span');
                correctCircle.innerText = '\u2B24';
                correctCircle.style.color = correct ? 'green' : 'red';
                varScore.appendChild(correctCircle);
            }
            
            varietiesScoreRow.appendChild(varScore);
            varScoreCol.appendChild(varietiesScoreRow);
            varietiesQuizRow.appendChild(varScoreCol);
        }

        container.appendChild(varietiesQuizRow);
    }

    // Insert a spacing div
    let spacingDiv = document.createElement("div");
    spacingDiv.classList.add("row");
    spacingDiv.style.height = "6vh";
    container.appendChild(spacingDiv);

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
        if (cookingQuizTaken)
        {
            const cookingScoreCol = document.createElement('div');
            cookingScoreCol.classList.add('col-6');

            const cookingScoreRow = document.createElement('div');
            cookingScoreRow.classList.add('row');

            const cooScore = document.createElement('p');
            cooScore.innerText = "Previous score: " + cookingQuizScore + "/" +  maxCooScore + "   ";
            cooScore.classList.add('quizScore');

            // Iterate through cookingQuizCorrectAnswers
            // Display a green circle if the answer was correct (i.e. value 1)
            // Display a red circle if the answer was incorrect (i.e. value 0)
            // Use unicode representation of circle
            for (let i = 0; i < cookingQuizCorrectAnswers.length; i++) {
                const correct = cookingQuizCorrectAnswers[i];
                const correctCircle = document.createElement('span');
                correctCircle.innerText = '\u2B24';
                correctCircle.style.color = correct ? 'green' : 'red';
                cooScore.appendChild(correctCircle);
            }
        
            cookingScoreRow.appendChild(cooScore);
            cookingScoreCol.appendChild(cookingScoreRow);
            cookingQuizRow.appendChild(cookingScoreCol);
        }

        container.appendChild(cookingQuizRow);
    }
    mainCol.appendChild(container);
    functions.renderSpacingDiv();
}

function renderHeader() {
    // Primary header
    {
        // Create a row to hold the primary header
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        // Create a column with centered text
        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        // Create the header
        let header = document.createElement("h1");
        header.innerHTML = "Quizzes";

        // Append
        col.appendChild(header);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

    // Secondary header
    {
        // Create a row to hold the secondary header
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        // Create a column with centered text
        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        // Create the subheader
        let subHeader = document.createElement("h4");
        subHeader.innerHTML = "Select a quiz to begin.";

        // Append
        col.appendChild(subHeader);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    
    }

    // Create an empty div to pad the space
    functions.renderSpacingDiv();

}

function postQuizSelection(value) {
    quizType = value;

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
