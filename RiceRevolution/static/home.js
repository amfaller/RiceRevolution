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


    // Create a bootstrap col-10
    let mainCol = document.createElement("div");
    mainCol.setAttribute("class", "col-10");
    mainCol.setAttribute("id", "mainCol");
    mainCol.innerHTML = "<h1>Hello World</h1>";
    newDiv.appendChild(mainCol);

    // Create a bootstrap col-1 to act as a margin
    {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-1");
        newDiv.appendChild(col1);
    }

    // Append the new div to the main div
    mainDivHandle.appendChild(newDiv);

}
