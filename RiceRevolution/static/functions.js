// Global lesson flag to indicate if the user has completed all necessary 
// actions on a particular step in order to move on to the next step
let lessonStepConditionsMet = false;
let numActionsTaken = 0;
let numActionsNeededForNextStep = 0;
let nextRoute = "";

export function setNumActionsNeededForNextStep(numActionsNeeded) {
    numActionsNeededForNextStep = numActionsNeeded;
}

export function logData() {
    // Publish via AJAX the current timestamp to the server
    $.ajax({
        url: "/enter_log",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            page: window.location.pathname, timestamp: new Date().toISOString()}),
        success: function(data) {
            console.log(data);
        }
    });
}  

export function renderMargins() {
    let mainDivHandle = document.getElementById("main");
    mainDivHandle.innerHTML = "";

    let mainCol = document.createElement("div");
    mainCol.setAttribute("class", "col-12");
    mainCol.setAttribute("id", "mainCol");

    mainDivHandle.appendChild(mainCol);
}

// Helper function to render instructional page headers
export function renderHeaders(mainHeaderText) {
    {
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        let header = document.createElement("h1");
        header.innerHTML = mainHeaderText;
        
        col.appendChild(header);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

    {
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        let subheader = document.createElement("h4");
        subheader.innerHTML = stepData.subheader;

        col.appendChild(subheader);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

    {
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        let instructions = document.createElement("p");
        instructions.innerHTML = stepData.instructions;

        col.appendChild(instructions);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }
} 

//////////////////////////////////////////////////////////////////////////////////

// Helper function to display the rice cooker image
export function displayRiceCookerImage(openLid = false, isClickable = false, isDraggable = false, isDroppable = false) {
    let image = document.createElement("img");

    let imgData = openLid ? imageData["RiceCookerImage_open"] : imageData["RiceCookerImage_closed"];

    image.src = imgData.url;
    image.alt = imgData.altText;
    image.id = imgData.id
    setAttributes(image, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(image);
}

// Helper function to display the pots
export function displayPots(openLid = false, isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = openLid ? imageData["OpenPot"] : imageData["ClosedPot"];

    let pots = document.createElement("img");

    pots.src = imgData.url;
    pots.alt = imgData.altText;
    pots.id = imgData.id
    setAttributes(pots, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(pots);
}

// Helper function to display the water image
export function displayWater(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["WaterImage"];

    let water = document.createElement("img");
    
    water.src = imgData.url;
    water.alt = imgData.altText;
    water.id = imgData.id
    setAttributes(water, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(water);
}

// Helper function to display the raw rice image
export function displayRawRice(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["RawRice"];

    let rice = document.createElement("img");

    rice.src = imgData.url;
    rice.alt = imgData.altText;
    rice.id = imgData.id
    setAttributes(rice, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(rice);
}

// Helper function to display the stovetop
export function displayStove(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["Stove"];

    let stovetop = document.createElement("img");

    stovetop.src = imgData.url;
    stovetop.alt = imgData.altText;
    stovetop.id = imgData.id
    setAttributes(stovetop, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(stovetop);
}

// Helper function to display the ladle with hand
export function displayLadleWithHand(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["LadleWithHand"];

    let ladle = document.createElement("img");

    ladle.src = imgData.url;
    ladle.alt = imgData.altText;
    ladle.id = imgData.id
    setAttributes(ladle, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(ladle);
}

// Helper function to display BakingSheet
export function displayBakingSheet(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["BakingSheet"];

    let sheet = document.createElement("img");

    sheet.src = imgData.url;
    sheet.alt = imgData.altText;
    sheet.id = imgData.id
    setAttributes(sheet, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(sheet);
}

// Helper function to display FryingPan
export function displayFryingPan(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["FryingPan"];

    let pan = document.createElement("img");

    pan.src = imgData.url;
    pan.alt = imgData.altText;
    pan.id = imgData.id
    setAttributes(pan, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(pan);
}

// Helper function to display the Oven
export function displayOven(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["Oven"];

    let oven = document.createElement("img");

    oven.src = imgData.url;
    oven.alt = imgData.altText;
    oven.id = imgData.id
    setAttributes(oven, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(oven);
}

// Helper function to display the CrispyRice
export function displayCrispyRice(isClickable = false, isDraggable = false, isDroppable = false) {
    let imgData = imageData["CrispyRice"];

    let crispy = document.createElement("img");

    crispy.src = imgData.url;
    crispy.alt = imgData.altText;
    crispy.id = imgData.id
    setAttributes(crispy, isClickable, isDraggable, isDroppable);

    document.getElementById("mainCol").appendChild(crispy);
}

//////////////////////////////////////////////////////////////////////////////////

// Internal helper function to set drop/drag/click attributes
function setAttributes(element, isClickable, isDraggable, isDroppable) {
    if (isClickable) {
        makeClickable(element);
    }
    if (isDraggable) {
        makeDraggable(element);
    }
    if (isDroppable) {
        makeDroppable(element);
    }
}

// Internal helper function to make something clickable
function makeClickable(element) {
    element.style.cursor = "pointer";
    element.onclick = function() {
        console.log("Clicked " + element.id);
        numActionsTaken++;

        // Get the ID of the element that was clicked
        let clickedElement = document.getElementById(element.id);

        // If this ID is "ClosedPot", replace it with "OpenPot"
        if (clickedElement.id == "ClosedPot") {
            clickedElement.src = imageData["OpenPot"].url;
            clickedElement.id = imageData["OpenPot"].id;
            clickedElement.alt = imageData["OpenPot"].altText;
        }

        // If this ID is "RiceCookerImage_Closed", replace it with "RiceCookerImage_Open"
        else if (clickedElement.id == "RiceCookerImage_closed") {
            clickedElement.src = imageData["RiceCookerImage_open"].url;
            clickedElement.id = imageData["RiceCookerImage_open"].id;
            clickedElement.alt = imageData["RiceCookerImage_open"].altText;
        }

        // If this ID is "RiceCookerImage_Open", replace it with "RiceCookerImage_Closed"
        else if (clickedElement.id == "RiceCookerImage_open") {
            clickedElement.src = imageData["RiceCookerImage_closed"].url;
            clickedElement.id = imageData["RiceCookerImage_closed"].id;
            clickedElement.alt = imageData["RiceCookerImage_closed"].altText;
        }

        if (numActionsTaken == numActionsNeededForNextStep) {
            lessonStepConditionsMet = true;
            displayButtons(nextRoute);
        }
    };

}

// Internal helper function to make something draggable
function makeDraggable(element) {
    element.draggable = true;

    element.ondragstart = function(event) {
        console.log("Dragging " + event.target.id);
        event.dataTransfer.setData("text", event.target.id);
    };
}

// Internal helper function to make something droppable
function makeDroppable(element) {
    element.ondragover = function(event) {
        event.preventDefault();
        console.log("Dragged over " + event.target.id);
    };

    element.ondrop = function(event) {
        event.preventDefault();
        console.log("Dropped " + event.dataTransfer.getData("text") + " on " + event.target.id);
        lessonStepConditionsMet = true;

        // Remove the img element which was dropped by getting its ID
        let droppedElement = document.getElementById(event.dataTransfer.getData("text"));
        droppedElement.remove();

        numActionsTaken++;

        if (numActionsTaken == numActionsNeededForNextStep) {
            lessonStepConditionsMet = true;
            displayButtons(nextRoute);
        }
    };
}

//////////////////////////////////////////////////////////////////////////////////

// Helper function to display the back and next buttons
export function displayButtons(route) {

    // Remove the existing row holding the buttons, if it exists
    let buttonRow = document.getElementById("buttonRow");
    if (buttonRow) {
        buttonRow.remove();
    }


    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "buttonRow")

    nextRoute = route;
    if (numActionsNeededForNextStep == 0) {
        lessonStepConditionsMet = true;
    }

    // Get the current step
    let currentStep = parseInt(stepData.step);
    let nextStep = currentStep + 1;
    let previousStep = currentStep - 1;

    // Remove the backButton by ID if it exists
    let backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.remove();
    }

    // If we're not on the home page, display a back button
    if (currentStep != 0) {
        let col = document.createElement("div");
        col.setAttribute("class", "col-6 text-center");

        let backButton = document.createElement("button");
        backButton.innerHTML = "Back";
        backButton.id = "backButton";
        backButton.onclick = function() {
            window.location.href = route + previousStep;
        };

        // Left-align
        backButton.style.float = "left";
        backButton.classList.add("btn");
        backButton.classList.add("btn-primary");
        
        col.appendChild(backButton);
        row.appendChild(col);
    }
    
    let handle = null;

    {
        let col = document.createElement("div");
        col.setAttribute("class", "col-6 text-center");

        // Remove previous nextButton and quizButton by ID if they exist
        let nextButton = document.getElementById("nextButton");
        if (nextButton) {
            nextButton.remove();
        }

        let quizButton = document.getElementById("quizButton");
        if (quizButton) {
            quizButton.remove();
        }

        // If we're not on the last page, display a next button
        if (currentStep != stepLength - 1) {
            let nextButton = document.createElement("button");
            nextButton.innerHTML = "Next";
            nextButton.id = "nextButton";
            nextButton.onclick = function() {
                window.location.href = route + nextStep;
            };

            // Right-align
            nextButton.style.float = "right";
            nextButton.classList.add("btn");
            nextButton.classList.add("btn-primary");
            
            // Disable if the user hasn't completed the necessary actions
            if (!lessonStepConditionsMet) {
                nextButton.disabled = true;
            }

            handle = nextButton;
            col.appendChild(nextButton);
        }

        // If we're on the last page, display a "Quiz me" button
        if (currentStep == stepLength - 1) {
            let quizButton = document.createElement("button");
            quizButton.innerHTML = "Quiz me!";
            quizButton.id = "quizButton";
            quizButton.onclick = function() {
                window.location.href = `/quiz`;
            };

            // Right-align
            quizButton.style.float = "right";
            quizButton.classList.add("btn");
            quizButton.classList.add("btn-primary");

            // Disable if the user hasn't completed the necessary actions
            if (!lessonStepConditionsMet) {
                quizButton.disabled = true;
            }

            col.appendChild(quizButton);
        }
        
        row.appendChild(col);
    }

    // Only enable the next buttons if the user has completed the action on the current step
    if (lessonStepConditionsMet && handle != null) {
        handle.disabled = false;
    }

    document.getElementById("mainCol").appendChild(row);
}

// Helper function to render a pre-sized top/bottom margin div
export function renderSpacingDiv(){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("class", "quizPadding")
    document.getElementById("mainCol").appendChild(row);
}
