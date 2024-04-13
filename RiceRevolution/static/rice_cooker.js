import * as functions from './functions.js';

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

// Function to render an entire page of the rice cooker guide given a step number.
// Step 0 represents the home page of this section.
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
