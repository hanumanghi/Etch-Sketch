const container = document.getElementById("sketch");
const sketchPad = document.querySelector(".gridCell")

function makeGrid(size){
    container.style.gridTemplateRows = 'repeat(64, 1fr)';
    container.style.gridTemplateColumns = 'repeat(64, 1fr)';

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
        cell.addEventListener('mouseover', draw);
    }
}

function draw (e){
    e.target.style.backgroundColor = 'black';
}

makeGrid(64);