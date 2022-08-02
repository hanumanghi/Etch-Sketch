const container = document.getElementById("sketch");
const colorPicker = document.getElementById("colorPicker");
const gridSize = document.getElementById("gridSize")
const sizeSlider = document.getElementById("sizeSlider");
const clear = document.querySelector(".clear");
const artistSelections = document.querySelectorAll('.paint');

function tool() {
    artistSelections.forEach (artistSelection => artistSelection.addEventListener('click', e =>
    selection = e.target.id))
    return selection;
}

colorPicker.addEventListener('input',changeColor)

function changeColor(e){
    let colorChange = colorPicker.value;
    return colorChange;
}


function draw(e){
    let brush = tool();
    let colorChoice = changeColor();
   
    if (brush == 'colorPicker'){
        e.target.style.backgroundColor = colorChoice;
    } else if (brush == 'erase'){
        e.target.style.backgroundColor = 'white';
    } else if (brush == 'rainbow'){
        let letters = '0123456789ABCDEF';
        let hue = '#';
        for(let i= 0; i<6; i++)
        hue += letters[Math.floor(Math.random() * 16)];
        e.target.style.backgroundColor = hue;
    } else {
        e.target.style.backgroundColor = colorChoice;
    }
}

function makeGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
        cell.addEventListener('mouseover', draw);
        clear.addEventListener('click', changeGrid);
    }
}

sizeSlider.addEventListener('input',changeGrid);
const sliderNum = document.getElementById('sliderNum');
sliderNum.innerHTML = `${sizeSlider.value} X ${sizeSlider.value}`;

sizeSlider.oninput = function(){
    sliderNum.innerHTML = `${this.value} X ${this.value}`;
}

function changeGrid(){
    refresh();
    let sliderValue = sizeSlider.value;
    makeGrid(sliderValue);   
}

function refresh(){
   container.innerHTML='';
}

console.log(changeGrid())