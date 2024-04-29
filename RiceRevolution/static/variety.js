import * as functions from './functions.js';

$(document).ready(function() {
    functions.logData();
    renderVariety();
});

function renderVariety() {
    // Render global margins
    functions.renderMargins();

    renderHeader();
    renderImageAndText();
    functions.renderSpacingDiv();
    renderBackButton();
    functions.renderSpacingDiv();
}

function renderHeader() {
    // Get the div with ID mainCol
    let mainColHandle = document.getElementById("mainCol");

    let headerText = varietyData.name;

    // Create a row
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Create a column
    let col = document.createElement("div");
    col.setAttribute("class", "col text-center");

    // Create the header
    let header = document.createElement("h1");
    header.innerHTML = headerText;

    // Append the header and subheader to the column
    col.appendChild(header);

    // Append the column to the row
    row.appendChild(col);

    // Append the row to the mainCol
    mainColHandle.appendChild(row);
}

function renderImageAndText() {
    let mainColHandle = document.getElementById("mainCol");

    functions.renderSpacingDiv();

    // Row and two col-6
    // Create a row
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Create two col-6
    let col1 = document.createElement("div");
    col1.setAttribute("class", "col-8 text-center");
    let col2 = document.createElement("div");
    col2.setAttribute("class", "col-4 text-left");

    // Image
    {
        // Create the image
        let image = document.createElement("img");
        image.src = varietyData.url;
        image.id = "varietyImage";

        image.setAttribute("class", "varietyImage");

        // Append the image
        col1.appendChild(image);
    }

    // Text
    {
        // Create the text
        let text = document.createElement("p");
        text.innerHTML = varietyData.desc;

        text.id = "varietyText";

        // Append the text
        col2.appendChild(text);
    }

    // Append the columns to the row
    row.appendChild(col1);
    row.appendChild(col2);

    // Append the row to the mainCol
    mainColHandle.appendChild(row);
}

function renderBackButton() {
    // Render a button which will take the user abck to the main varieties page
    let mainColHandle = document.getElementById("mainCol");

    // Create a row
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Create a column
    let col = document.createElement("div");
    col.setAttribute("class", "col text-center");

    // Create the button
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "Back";
    button.onclick = function() {
        window.location.href = "/varieties";
    };

    // Append the button
    col.appendChild(button);
    row.appendChild(col);
    mainColHandle.appendChild(row);
}