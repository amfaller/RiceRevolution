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
    
    for (let i = 0; i < stepData.images.length; i++) {
        let image = stepData.images[i];
        let isClickable = stepData.clickable[i];
        let isDraggable = stepData.draggable[i];
        let isDroppable = stepData.droppable[i];

        switch (image) {
            case rc_images.RiceCookerImage_closed:
                functions.displayRiceCookerImage(false);
                break;
            case rc_images.RiceCookerImage_open:
                functions.displayRiceCookerImage(true, true, false, true);
                break;
            case rc_images.WaterImage:
                functions.displayWater(isClickable, isDraggable, isDroppable);
                break;
            case rc_images.RawRice:
                functions.displayRawRice(isClickable, isDraggable, isDroppable);
                break;
            case rc_images.LadleWithHand:
                functions.displayLadleWithHand();
                break;
            default:
                console.error("Invalid image type: " + image);
        }
    }

    // Render back and next buttons
    functions.displayButtons("/rice_cooker/");
}


