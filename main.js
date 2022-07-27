const container = document.getElementById("sketch");
const sketchPad = document.querySelector(".gridCell");
const paintBrush = document.querySelector(".color");
const eraser = document.querySelector(".erase");
const clear = document.querySelector(".clear");
const gridSize = document.querySelector(".gridSize")

function makeGrid(size){
    container.style.gridTemplateRows = 'repeat(64, 1fr)';
    container.style.gridTemplateColumns = 'repeat(64, 1fr)';

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
        cell.addEventListener('mouseover', draw);
        clear.addEventListener('click', refresh)
    }
}

function draw (e){
    e.target.style.backgroundColor = 'black';
}

function refresh(){
    window.location.reload(true);
}

makeGrid(64);