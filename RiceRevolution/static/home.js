$(document).ready(function() {
    // Render the homepage
    renderHomepage();
});


// Function to display some welcome text on the homepage
function renderHomepage() {
    // Get the div with ID main
    let mainDivHandle = document.getElementById("main");

    // Clear whatever is there currently
    mainDivHandle.innerHTML = "";

    // Create a new div element to hold all the page data
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container");

    // Create a bootstrap col-1 to act as a margin
    {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-1");
        newDiv.appendChild(col1);
    }


    // Create a bootstrap col-10 to hold the main data
    {
        let mainCol = document.createElement("div");
        mainCol.setAttribute("class", "col-10");
        mainCol.setAttribute("id", "mainCol");
        newDiv.appendChild(mainCol);
    }

    // Create a bootstrap col-1 to act as a margin
    {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-1");
        newDiv.appendChild(col1);
    }

    // Append the new div to the main div
    mainDivHandle.appendChild(newDiv);

    // Render the buttons
    renderButtons();
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
