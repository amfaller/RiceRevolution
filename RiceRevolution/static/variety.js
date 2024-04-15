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
    renderBackButton();
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

    // Image
    {
        // Create a row for the image
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        // Create a column for the image
        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        // Create the image
        let image = document.createElement("img");
        image.src = varietyData.url;

        // Append the image
        col.appendChild(image);
        row.appendChild(col);
        mainColHandle.appendChild(row);
    }

    // Text
    {
        // Create a row for the text
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        // Create a column for the text
        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        // Create the text
        let text = document.createElement("p");
        text.innerHTML = varietyData.desc;

        // Append the text
        col.appendChild(text);
        row.appendChild(col);
        mainColHandle.appendChild(row);
    }
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