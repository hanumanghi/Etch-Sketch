const container = document.getElementById("sketch");
const sketchPad = document.querySelector(".gridCell");
const paintBrush = document.getElementById("#color");
const eraser = document.getElementById("#erase");
const gridSize = document.getElementById("#gridSize")
const sizeSlider = document.getElementById("sizeSlider");
const clear = document.querySelector(".clear");
const artistSelections = document.querySelectorAll('.paint');

function tool() {
    artistSelections.forEach (artistSelection => artistSelection.addEventListener('click', e =>
    selection = e.target.id))
    return selection;
}

function draw(e){
    let brush = tool();
    if (brush == 'color'){
        e.target.style.backgroundColor = 'black';
    } else if (brush == 'erase'){
        e.target.style.backgroundColor = 'white';
    } else if (brush == 'rainbow'){
        let letters = '0123456789ABCDEF';
        let hue = '#';
        for(let i= 0; i<6; i++)
        hue += letters[Math.floor(Math.random() * 16)];
        e.target.style.backgroundColor = hue;
    }
    console.log(brush);
}

function makeGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
        cell.addEventListener('mouseover', draw);
        clear.addEventListener('click', refresh);
    }
}

sizeSlider.addEventListener('input',changeGrid);

function changeGrid(){
    let sliderValue = sizeSlider.value;
    makeGrid(sliderValue);   
}

function refresh(){
   sketchPad.style.backgroundColor = 'white';
}

console.log(changeGrid())