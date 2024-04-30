import * as functions from './functions.js';

// Software-defined equivalent of images used for this section
const rc_images = {
    RiceCookerImage_closed: "RiceCookerImage_closed",
    RiceCookerImage_open: "RiceCookerImage_open",
    WaterImage: "WaterImage",
    RawRice: "RawRice",
    LadleWithHand: "LadleWithHand",
    BakingSheet: "BakingSheet",
    FryingPan: "FryingPan",
    Oven: "Oven",
    CrispyRice: "CrispyRice",
};
Object.freeze(rc_images);

$(document).ready(function() {
    functions.logData();
    renderRcHome();
});

function renderRcHome() {
    // Render global margins
    functions.renderMargins();

    renderPage();
}

// Function to render an entire page of the rice cooker guide
function renderPage() {
    functions.renderHeaders("Cooking Rice with a Rice Cooker");
    let numActionsNeededForNextStep = 0;

    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Get the divisor for how many columns to create
    let divisor = stepData.images.length;
    let numCols = 12 / divisor;
    
    for (let i = 0; i < stepData.images.length; i++) {
        let image = stepData.images[i];
        let isClickable = stepData.clickable[i];
        let isDraggable = stepData.draggable[i];
        let isDroppable = stepData.droppable[i];

        let handle = null;

        if (isDraggable) {
            numActionsNeededForNextStep++;
        }
        else if (isClickable) {
            numActionsNeededForNextStep++;
        }

        switch (image) {
            case rc_images.RiceCookerImage_closed:
                functions.displayRiceCookerImage(false, isClickable, isDraggable, isDroppable);
                handle = document.getElementById("RiceCookerImage_closed");
                break;
            case rc_images.RiceCookerImage_open:
                functions.displayRiceCookerImage(true, isClickable, isDraggable, isDroppable);
                handle = document.getElementById("RiceCookerImage_open");
                break;
            case rc_images.WaterImage:
                functions.displayWater(isClickable, isDraggable, isDroppable);
                handle = document.getElementById("WaterImage");
                break;
            case rc_images.RawRice:
                functions.displayRawRice(isClickable, isDraggable, isDroppable);
                handle = document.getElementById("RawRice");
                break;
            case rc_images.LadleWithHand:
                functions.displayLadleWithHand(isClickable, isDraggable, isDroppable);
                handle = document.getElementById("LadleWithHand");
                break;
            default:
                console.error("Invalid image type: " + image);
        }

        if (handle != null) {
            handle.setAttribute("class", "rcImage");
        }

        let col = document.createElement("div");
        col.setAttribute("class", "col-" + numCols + " text-center");

        col.appendChild(handle);
        row.appendChild(col);
    }
    functions.setNumActionsNeededForNextStep(numActionsNeededForNextStep);

    let mainColHandle = document.getElementById("mainCol");
    mainColHandle.appendChild(row);

    // Render back and next buttons
    functions.renderSpacingDiv();
    functions.displayButtons("/rice_cooker/");
}


