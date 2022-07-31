const container = document.getElementById("sketch");
const sketchPad = document.querySelector(".gridCell");
const paintBrush = document.getElementById("#color");
const eraser = document.getElementById("#erase");
const gridSize = document.getElementById("#gridSize")
const clear = document.querySelector(".clear");
let selection;
function draw(e){
    const artistSelections = document.querySelectorAll('.paint')
    artistSelections.forEach (artistSelection => artistSelection.addEventListener('click', tool));
    function tool(brush){
        let selection = brush.target.id;
    
    if(selection == 'color'){
        e.target.style.backgroundColor = 'black';
    }else if(selection == 'erase'){
        e.target.style.backgroundColor = 'white';
    }
    
    }
}
console.log(selection)

function makeGrid(size){
    container.style.gridTemplateRows = 'repeat(64, 1fr)';
    container.style.gridTemplateColumns = 'repeat(64, 1fr)';

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
        cell.addEventListener('mouseover', draw);
        clear.addEventListener('click', refresh);
    }
}

function refresh(){
    window.location.reload(true);
}

makeGrid(64);

