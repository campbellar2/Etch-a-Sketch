// important variables from html
const container = document.querySelector("#grid");
const btnClear = document.getElementById("clear");
const btnSize = document.querySelector("#size");

let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

// assigning functions to buttons
btnClear.addEventListener('click', clearBoard);

//creates the grid
function makeGrid(num) {
    for (i = 0; i < num; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
        for (j=0; j < num; j++) {
            let cell = document.createElement("div");
            row.appendChild(cell).className = "cell";
        }
    };
    //adds hover effect to grid
    for (i = 0; i < cells.length; i ++) {
        cells[i].addEventListener('mouseenter', (event) => {
            event.target.classList.add("hovered");
        })
    }
}

//creates default grid
makeGrid(24)

//clear board function
function clearBoard() {
    for (i = 0; i < cells.length; i ++) {
        cells[i].classList.remove("hovered");
    };
}