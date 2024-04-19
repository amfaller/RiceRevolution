import * as functions from './functions.js';

$(document).ready(function() {
    functions.logData();
    renderLogs();
});

function renderLogs() {
    // Render global margins
    functions.renderMargins();

    let mainCol = document.getElementById("mainCol");
    let logs = document.createElement("div");
    logs.id = "logs";
    mainCol.appendChild(logs);

    for (let timestamp of timestamps) {
        let p = document.createElement("p");
        p.textContent =  timestamp["timestamp"] + ": " + timestamp["page"];
        logs.appendChild(p);
    }
}
