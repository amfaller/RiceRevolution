import * as functions from './functions.js';

// Software-defined equivalent of images used for this section
const rc_images = {
    RiceCookerImage_closed: "RiceCookerImage_closed",
    RiceCookerImage_open: "RiceCookerImage_open",
    WaterImage: "WaterImage",
    RawRice: "RawRice"
};
Object.freeze(rc_images);

$(document).ready(function() {
    renderRcHome();
});

function renderRcHome() {
    // Render global margins
    functions.renderMargins();

    renderPage();
}

// Function to render an entire page of the rice cooker guide
function renderPage() {
    renderHeaders();
    
    for (let i = 0; i < stepData.images.length; i++) {
        let image = stepData.images[i];

        switch (image) {
            case rc_images.RiceCookerImage_closed:
                displayRiceCookerImage(false);
                break;
            case rc_images.RiceCookerImage_open:
                displayRiceCookerImage(true);
                break;
            case rc_images.WaterImage:
                displayWater();
                break;
            case rc_images.RawRice:
                displayRawRice();
                break;
            default:
                console.error("Invalid image type: " + image);
        }
    }

    // Render back and next buttons
    displayButtons();
}

// Helper function to render page headers
function renderHeaders() {
    let header = document.createElement("h1");
    header.innerHTML = "Cooking Rice with a Rice Cooker";
    document.getElementById("mainCol").appendChild(header);

    let subheader = document.createElement("h2");
    subheader.innerHTML = stepData.subheader;
    document.getElementById("mainCol").appendChild(subheader);
}   

// Helper function to display the rice cooker image
function displayRiceCookerImage(openLid = false) {
    let image = document.createElement("img");

    let imageData = openLid ? riceCookerData["RiceCookerImage_open"] : riceCookerData["RiceCookerImage_closed"];

    image.src = imageData.url;
    image.alt = imageData.altText;
    image.id = imageData.id

    document.getElementById("mainCol").appendChild(image);
}

// Helper function to display the water image
function displayWater() {
    let imageData = riceCookerData["WaterImage"];

    let water = document.createElement("img");
    
    water.src = imageData.url;
    water.alt = imageData.altText;
    water.id = imageData.id

    document.getElementById("mainCol").appendChild(water);
}

// Helper function to display the raw rice image
function displayRawRice() {
    let imageData = riceCookerData["RawRice"];

    let rice = document.createElement("img");

    rice.src = imageData.url;
    rice.alt = imageData.altText;
    rice.id = imageData.id

    document.getElementById("mainCol").appendChild(rice);
}

// Helper function to display the back and next buttons
function displayButtons() {

    // Get the current step
    let currentStep = parseInt(stepData.step);
    let nextStep = currentStep + 1;
    let previousStep = currentStep - 1;

    console.log("Current step: " + currentStep);
    console.log("Next step: " + nextStep);
    console.log("Previous step: " + previousStep);


    // If we're not on the home page, display a back button
    if (currentStep != 0) {
        let backButton = document.createElement("button");
        backButton.innerHTML = "Back";
        backButton.onclick = function() {
            window.location.href = '/rice_cooker/' + previousStep;
        };
        document.getElementById("mainCol").appendChild(backButton);
    }

    // If we're not on the last page, display a next button
    if (currentStep != stepLength - 1) {
        let nextButton = document.createElement("button");
        nextButton.innerHTML = "Next";
        nextButton.onclick = function() {
            window.location.href = '/rice_cooker/' + nextStep;
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
