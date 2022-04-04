// important variables from html
const container = document.querySelector("#grid");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

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
}

//creates default grid
makeGrid(16)

//hover effect on grid
for (i = 0; i < cells.length; i ++) {
    cells[i].addEventListener('mouseenter', (event) => {
        event.target.classList.add("hovered");
    })
}