import * as  functions from './functions.js';

$(document).ready(function() {
    functions.logData();
    // Render the homepage
    renderHomepage();
});


// Function to display some welcome text on the homepage
function renderHomepage() {
    // Render global margins
    functions.renderMargins();

    // Render the rest of the page
    renderHeaders();
    renderButtons();
}

// Function to render the header and subheader
function renderHeaders() {
    // Get the div with ID mainCol
    let mainColHandle = document.getElementById("mainCol");

    let headerText = "Welcome to Rice Revolution!";
    let subHeaderText = "Your one-stop shop for all things rice."

    // Create a row
    let row = document.createElement("div");
    row.setAttribute("class", "row");

    // Create a column
    let col = document.createElement("div");
    col.setAttribute("class", "col text-center");

    // Create the header
    let header = document.createElement("h1");
    header.innerHTML = headerText;

    // Create the subheader
    let subHeader = document.createElement("h3");
    subHeader.innerHTML = subHeaderText;

    // Append the header and subheader to the column
    col.appendChild(header);
    col.appendChild(subHeader);

    // Append the column to the row
    row.appendChild(col);

    // Append the row to the mainCol
    mainColHandle.appendChild(row);
}

// Function to render the buttons
function renderButtons() {
    // Get the div with ID mainCol
    let mainColHandle = document.getElementById("mainCol");

    let numButtons = 3;
    let buttonNames = ["Varieties", "No Rice Cooker", "Rice Cooker"];
    let buttonLinks = ["/varieties", "/no_rice_cooker", "/rice_cooker"];   

    for(let i = 0; i < numButtons; i++) {
        // Create row
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("id", "row" + i);

        // Give it a bit of padding
        row.style.paddingTop = "5px";
        row.style.paddingBottom = "5px";

        // Create button in the row
        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("id", "button" + i);
        button.innerHTML = buttonNames[i];
        button.onclick = function() {
            window.location.href = buttonLinks[i];
        }

        // Center the button in the row
        let col = document.createElement("div");
        col.setAttribute("class", "col text-center");

        col.appendChild(button);
        row.appendChild(col);
        mainColHandle.appendChild(row);
    }
}
