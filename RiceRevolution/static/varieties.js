import * as functions from './functions.js';

$(document).ready(function() {
    renderVarietiesHome();
});

function renderVarietiesHome() {
    // Render global margins
    functions.renderMargins();

    renderHeaders();
    renderVarietiesMap();
}


// Function to render the header and subheader
function renderHeaders() {
    // Get the div with ID mainCol
    let mainColHandle = document.getElementById("mainCol");

    let headerText = "Varieties of Rice";
    let subHeaderText = "Click on a geographic location to see popular rice varieties."

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

function renderVarietiesMap() {
    // Create a button for each element in varietiesData
    let mainColHandle = document.getElementById("mainCol");

    // Create a centered continer for the map
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let col = document.createElement("div");
    col.setAttribute("class", "col text-center");
    row.appendChild(col);

    // Append a div with ID "map" to the column
    let mapDiv = document.createElement("div");
    mapDiv.setAttribute("id", "map");
    mapDiv.classList.add("mx-auto");
    col.appendChild(mapDiv);

    // Append the row to the mainCol
    mainColHandle.appendChild(row);
}