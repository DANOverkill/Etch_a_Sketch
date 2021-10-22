//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');
const resetButton = document.querySelector('#resetButton');
const resolutionButton = document.querySelector('#resButton');
const brushColorButton = document.querySelector('#brushColorButton');
const eraserButton = document.querySelector('#eraser');

// Global Variables
let pixelStyle = {
    'background-color': 'rgb(255, 255, 255)',
    'transition': '0.5s'
};

//Logic
let resolution = 16;
setCanvasresolution(resolution);
appendPixels(resolution);
paintPixel('black');

function setCanvasresolution(resolution) {
    let canvasStyle = {
        'grid-template-columns' :`repeat(${resolution}, auto)`,
        'grid-template-rows' :`repeat(${resolution}, auto)`,
        'grid-gap': '0px'
    }
   return Object.assign(container.style, canvasStyle);
};

function createPixel() {
    let canvasPixel = document.createElement('div');
    canvasPixel.classList.add('canvasPixel');
    Object.assign(canvasPixel.style, pixelStyle);
    return container.appendChild(canvasPixel);
};

function appendPixels(resolution) {
    let numPixels = resolution * resolution;
    for(let i = 1; i <= numPixels; i++) {
        createPixel();
    }
};

function paintPixel(brushColors) {
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColors}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
}

function changeColor() {
    colorChoice = document.getElementById('#inputColor');
    colorChoice.addEventListener("change", watchColorPicker, false);
    console.log(colorChoice.value);
    return colorChoice;
}

function pickEraser() {
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': 'white'
            };
            Object.assign(this.style, hoverColor);
        })
      })
    }

resolutionButton.addEventListener('click', function() {
    resolution = parseInt(prompt('Please choose resolution up to a max of 64 pixels', 16));
    console.log(resolution);
    if (resolution > 64) {
        resolution = 64;
    }
    if (resolution === 0) {
        resolution = 16;
    }
    if (resolution === NaN || resolution === null) { //This exception isn't working
        resolution = 16;
    }
    container.innerHTML = '';
    console.log(resolution);
    setCanvasresolution(resolution);
    appendPixels(resolution);
    paintPixel('black');
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    paintPixel('black');
});

brushColorButton.addEventListener('click', function() {
    brushColors = prompt('pick colour', 'black');
    paintPixel(brushColors);
})

eraserButton.addEventListener('click', function() {
    pickEraser();
})
