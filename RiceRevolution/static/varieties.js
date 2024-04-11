import * as functions from './functions.js';

$(document).ready(function() {
    renderVarietiesHome();
});

function renderVarietiesHome() {
    // Render global margins
    functions.renderMargins();

    renderVarieties();
}

function renderVarieties() {
    // Create a button for each element in varietiesData
    let mainColHandle = document.getElementById("mainCol");
    mainColHandle.innerHTML = "";

    for(let key in varietiesData) {
        const variety = varietiesData[key];

        const row = document.createElement("div");
        row.classList.add("row");

        const column = document.createElement("div");
        column.classList.add("col");

        const button = document.createElement("button");
        button.textContent = variety.name;

        column.appendChild(button);
        row.appendChild(column);
        mainColHandle.appendChild(row);
    }
}