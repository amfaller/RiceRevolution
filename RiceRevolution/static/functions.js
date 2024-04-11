export function renderMargins() {
    let mainDivHandle = document.getElementById("main");
    mainDivHandle.innerHTML = "";

    let mainCol = document.createElement("div");
    mainCol.setAttribute("class", "col-12");
    mainCol.setAttribute("id", "mainCol");

    mainDivHandle.appendChild(mainCol);
}