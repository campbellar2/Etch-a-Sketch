// important variables from html
const container = document.querySelector("#grid");
const btnClear = document.getElementById("clear");
const btnSize = document.getElementById("size");

let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

// assigning functions to buttons
btnClear.onclick = clearBoard;
btnSize.onclick = resizeBoard;

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

//clear board function
function clearBoard() {
    for (i = 0; i < cells.length; i ++) {
        cells[i].classList.remove("hovered");
    };
}

//function to change the size of the board based on user input
function resizeBoard() {
    let num = parseInt(prompt("Please input the size of the new board (1-100). \n e.g. 24 = a 24x24 size board", "24"));
    if (num > 200 || num < 0 || num === NaN) {
        alert("Error, please select a number from 1 to 100");
        return;
    };
    deleteBoard();
    makeGrid(num);  
}

//deletes the old board
function deleteBoard() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
}

//creates default grid
makeGrid(24)