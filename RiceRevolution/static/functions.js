export function renderMargins() {
    let mainDivHandle = document.getElementById("main");
    mainDivHandle.innerHTML = "";

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "container");

    {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-1");
        newDiv.appendChild(col1);
    }

    {
        let mainCol = document.createElement("div");
        mainCol.setAttribute("class", "col-10");
        mainCol.setAttribute("id", "mainCol");
        newDiv.appendChild(mainCol);
    }

    {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-1");
        newDiv.appendChild(col1);
    }

    mainDivHandle.appendChild(newDiv);
}