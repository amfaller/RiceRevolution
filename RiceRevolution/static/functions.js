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
    let header = document.createElement("h1");
    header.innerHTML = mainHeaderText;
    document.getElementById("mainCol").appendChild(header);

    let subheader = document.createElement("h2");
    subheader.innerHTML = stepData.subheader;
    document.getElementById("mainCol").appendChild(subheader);

    let instructions = document.createElement("p");
    instructions.innerHTML = stepData.instructions;
    document.getElementById("mainCol").appendChild(instructions);
}   

// Helper function to display the rice cooker image
export function displayRiceCookerImage(openLid = false) {
    let image = document.createElement("img");

    let imgData = openLid ? imageData["RiceCookerImage_open"] : imageData["RiceCookerImage_closed"];

    image.src = imgData.url;
    image.alt = imgData.altText;
    image.id = imgData.id

    document.getElementById("mainCol").appendChild(image);
}

// Helper function to display the pots
export function displayPots(openLid = false) {
    let imgData = openLid ? imageData["OpenPot"] : imageData["ClosedPot"];

    let pots = document.createElement("img");

    pots.src = imgData.url;
    pots.alt = imgData.altText;
    pots.id = imgData.id

    document.getElementById("mainCol").appendChild(pots);
}

// Helper function to display the water image
export function displayWater() {
    let imgData = imageData["WaterImage"];

    let water = document.createElement("img");
    
    water.src = imgData.url;
    water.alt = imgData.altText;
    water.id = imgData.id

    document.getElementById("mainCol").appendChild(water);
}

// Helper function to display the raw rice image
export function displayRawRice() {
    let imgData = imageData["RawRice"];

    let rice = document.createElement("img");

    rice.src = imgData.url;
    rice.alt = imgData.altText;
    rice.id = imgData.id

    document.getElementById("mainCol").appendChild(rice);
}

// Helper function to display the stovetop
export function displayStove() {
    let imgData = imageData["Stove"];

    let stovetop = document.createElement("img");

    stovetop.src = imgData.url;
    stovetop.alt = imgData.altText;
    stovetop.id = imgData.id

    document.getElementById("mainCol").appendChild(stovetop);
}

// Helper function to display the ladle with hand
export function displayLadleWithHand() {
    let imgData = imageData["LadleWithHand"];

    let ladle = document.createElement("img");

    ladle.src = imgData.url;
    ladle.alt = imgData.altText;
    ladle.id = imgData.id

    document.getElementById("mainCol").appendChild(ladle);
}

// Helper function to display the back and next buttons
export function displayButtons(route) {

    // Get the current step
    let currentStep = parseInt(stepData.step);
    let nextStep = currentStep + 1;
    let previousStep = currentStep - 1;


    // If we're not on the home page, display a back button
    if (currentStep != 0) {
        let backButton = document.createElement("button");
        backButton.innerHTML = "Back";
        backButton.onclick = function() {
            window.location.href = route + previousStep;
        };
        document.getElementById("mainCol").appendChild(backButton);
    }

    // If we're not on the last page, display a next button
    if (currentStep != stepLength - 1) {
        let nextButton = document.createElement("button");
        nextButton.innerHTML = "Next";
        nextButton.onclick = function() {
            window.location.href = route + nextStep;
        };
        document.getElementById("mainCol").appendChild(nextButton);
    }

    // If we're on the last page, display a "Quiz me" button
    if (currentStep == stepLength - 1) {
        let quizButton = document.createElement("button");
        quizButton.innerHTML = "Quiz me!";
        quizButton.onclick = function() {
            window.location.href = `/quiz`;
        };
        document.getElementById("mainCol").appendChild(quizButton);
    }
}
