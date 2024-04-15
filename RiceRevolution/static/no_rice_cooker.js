import * as functions from './functions.js';

// Software-defined equivalent of images used for this section
const nrc_images = {
    OpenPot: "OpenPot",
    ClosedPot: "ClosedPot",
    WaterImage: "WaterImage",
    RawRice: "RawRice",
    Stove: "Stove",
    LadleWithHand: "LadleWithHand"
};
Object.freeze(nrc_images);

let riceStyles = [0, 1, 2];


$(document).ready(function() {
    functions.logData();
    renderNrcHome();
});

function renderNrcHome() {
    // Render global margins
    functions.renderMargins();

    let stepNum = stepData.step;
    if (stepNum == 0) {
        renderStyleSelection();
    }
    else {
        renderPage();
    }
}

// Function to render an entire page of the rice cooker guide
function renderPage() {
    let headerText = "Cooking "
    targetStyle = parseInt(targetStyle);
    

    console.log("Rendering page for style: " + targetStyle);
    console.log(targetStyle);
    console.log(typeof targetStyle);

    if (isNaN(targetStyle)) {
        console.error("Invalid style: " + targetStyle);
        return;
    }

    if (targetStyle == 0) { 
        headerText += "Normal Rice";
    }
    else if (targetStyle == 1) {
        headerText += "Congee";
    }
    else if (targetStyle == 2) {
        headerText += "Crispy Rice";
    }

    headerText += " without a Rice Cooker";

    functions.renderHeaders(headerText);
    
    for (let i = 0; i < stepData.images.length; i++) {
        let image = stepData.images[i];

        switch (image) {
            case nrc_images.OpenPot:
                functions.displayPots(true);
                break;
            case nrc_images.ClosedPot:
                functions.displayPots(false);
                break;
            case nrc_images.WaterImage:
                functions.displayWater();
                break;
            case nrc_images.RawRice:
                functions.displayRawRice();
                break;
            case nrc_images.Stove:
                functions.displayStove();
                break;
            case nrc_images.LadleWithHand:
                functions.displayLadleWithHand();
                break;
            default:
                console.error("Invalid image type: " + image);
        }
    }

    // Render back and next buttons
    functions.displayButtons("/no_rice_cooker/");
}

// Function to render the rice style selection page
function renderStyleSelection() {
    let header = document.createElement("h2");
    header.innerText = "Select a Rice Style";
    document.getElementById("mainCol").appendChild(header);

    let normalButton = document.createElement("button");
    normalButton.innerText = "Normal";
    normalButton.onclick = function() {
        targetStyle = riceStyles[0];
        publishStyle();
        functions.renderMargins();
        renderPage();
    };

    let congeeButton = document.createElement("button");
    congeeButton.innerText = "Congee";
    congeeButton.onclick = function() {
        targetStyle = riceStyles[1];
        publishStyle();
        functions.renderMargins();
        renderPage();
    };

    let crispyButton = document.createElement("button");
    crispyButton.innerText = "Crispy";
    crispyButton.onclick = function() {
        targetStyle = riceStyles[2];
        publishStyle();
        functions.renderMargins();
        renderPage();
    };

    document.getElementById("mainCol").appendChild(normalButton);
    document.getElementById("mainCol").appendChild(congeeButton);
    document.getElementById("mainCol").appendChild(crispyButton);
}

// Function to publish targetStyle via ajax
function publishStyle() {
    $.ajax({
        url: "/rice_style",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({style: targetStyle}),
        success: function(data) {
            console.log(data);
        }
    });
}
