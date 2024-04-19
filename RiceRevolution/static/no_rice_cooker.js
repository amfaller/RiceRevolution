import * as functions from './functions.js';

// Software-defined equivalent of images used for this section
const nrc_images = {
    OpenPot: "OpenPot",
    ClosedPot: "ClosedPot",
    WaterImage: "WaterImage",
    RawRice: "RawRice",
    Stove: "Stove",
    LadleWithHand: "LadleWithHand",
    BakingSheet: "BakingSheet",
    FryingPan: "FryingPan",
    Oven: "Oven",
    CrispyRice: "CrispyRice"
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
    let numActionsNeededForNextStep = 0;
    
    for (let i = 0; i < stepData.images.length; i++) {
        let image = stepData.images[i];
        let isClickable = stepData.clickable[i];
        let isDraggable = stepData.draggable[i];
        let isDroppable = stepData.droppable[i];

        if (isDraggable) {
            numActionsNeededForNextStep++;
        }
        else if (isClickable) {
            numActionsNeededForNextStep++;
        }

        switch (image) {
            case nrc_images.OpenPot:
                functions.displayPots(true, isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.ClosedPot:
                functions.displayPots(false, isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.WaterImage:
                functions.displayWater(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.RawRice:
                functions.displayRawRice(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.Stove:
                functions.displayStove(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.LadleWithHand:
                functions.displayLadleWithHand(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.BakingSheet:
                functions.displayBakingSheet(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.FryingPan:
                functions.displayFryingPan(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.Oven:
                functions.displayOven(isClickable, isDraggable, isDroppable);
                break;
            case nrc_images.CrispyRice:
                functions.displayCrispyRice(isClickable, isDraggable, isDroppable);
                break;
            default:
                console.error("Invalid image type: " + image);
        }


    functions.setNumActionsNeededForNextStep(numActionsNeededForNextStep);
    }

    // Render back and next buttons
    functions.displayButtons("/no_rice_cooker/");
}

// Function to render the rice style selection page
function renderStyleSelection() {

    // Header
    {
        // Create a bootstrap row with centered text
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        // Create the header text
        let header = document.createElement("h2");
        header.innerText = "Select a Rice Style";

        // Append
        col.appendChild(header);
        row.appendChild(col);
        document.getElementById("mainCol").appendChild(row);
    }

    // Row to hold all the rice stuff
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Normal rice
    {
        // col-4
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 text-center");

        // Button
        let normalButton = document.createElement("button");
        normalButton.innerText = "Normal";
        normalButton.onclick = function() {
            targetStyle = riceStyles[0];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Image
        let image = document.createElement("img");
        image.src = "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-square640.jpg";
        image.setAttribute("class", "nrcStyleImage");   
        image.onclick = function() {
            targetStyle = riceStyles[0];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Append
        col.appendChild(image);
        col.appendChild(normalButton);
        row.appendChild(col);
    }

    // Congee
    {
        // col-4
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 text-center");

        // Button
        let congeeButton = document.createElement("button");
        congeeButton.innerText = "Congee";
        congeeButton.onclick = function() {
            targetStyle = riceStyles[1];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Image
        let image = document.createElement("img");
        image.src = "https://static01.nyt.com/images/2020/05/06/dining/06pantry-blog/06pantry-blog-mediumSquareAt3X-v2.jpg";
        image.setAttribute("class", "nrcStyleImage");
        image.onclick = function() {
            targetStyle = riceStyles[1];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Append
        col.appendChild(image);
        col.appendChild(congeeButton);
        row.appendChild(col);
    }

    // Crispy
    {
        // col-4
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 text-center");

        // Button
        let crispyButton = document.createElement("button");
        crispyButton.innerText = "Crispy";
        crispyButton.onclick = function() {
            targetStyle = riceStyles[2];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Image
        let image = document.createElement("img");
        image.src = "https://takestwoeggs.com/wp-content/uploads/2023/07/Crispy-Rice-Recipe-takestwoeggs-sq.jpg";
        image.setAttribute("class", "nrcStyleImage");
        image.onclick = function() {
            targetStyle = riceStyles[2];
            publishStyle();
            functions.renderMargins();
            renderPage();
        };

        // Append
        col.appendChild(image);
        col.appendChild(crispyButton);
        row.appendChild(col);
    }

    // Add some bottom padding to the row
    row.style.paddingBottom = "30px";

    document.getElementById("mainCol").appendChild(row);
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
