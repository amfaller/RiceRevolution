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

$(document).ready(function() {
    renderNrcHome();
});

function renderNrcHome() {
    // Render global margins
    functions.renderMargins();
    renderPage();
}

// Function to render an entire page of the rice cooker guide
function renderPage() {
    functions.renderHeaders("Cooking Rice without a Rice Cooker");
    
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
