//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');
const resetButton = document.querySelector('#resetButton');
const resolutionButton = document.querySelector('#resButton');
const brushColorButton = document.querySelector('#brushColorButton');
const eraserButton = document.querySelector('#eraser');
const etchOrSketch = document.querySelector('#etchOrSketch');
let brushColorChoice = document.getElementById('colorPicker');


// Global Variables
let pixelStyle = {
    'background-color': 'rgb(255, 255, 255)',
    'transition': '0.35s'
};

let brushColors = 'black';
let resolution = 16;
let onClick = true;

//Logic
setCanvasresolution(resolution);
appendPixels(resolution);
clickToPaint(brushColors)
brushColorButton.classList.add('pannelButtonPressed');

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

function clickToPaint (brushColors) {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColors}`
            };
            if(mouseIsDown) {
            Object.assign(this.style, hoverColor);
            }
        })
    })
    return onClick = true;
}

function paintPixel(brushColors) {
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColors}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
    return onClick = false;
}

function pickEraser() {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': 'white'
            };
            if(mouseIsDown) {
            Object.assign(this.style, hoverColor);
            }
        })
      })
    }

function toggleMode() { //toggleMode is not working
    let onClick = true;
    if (onClick === true) {
        paintPixel(brushColors);
        etchOrSketch.innerHTML = 'Etch-a-Sketch'; 

    } else if (onClick === false) {
        clickToPaint(brushColors);
        etchOrSketch.innerHTML = 'Click to Draw';
    }
};

function changeColor() {
    let brushColors = brushColorChoice.value;
    clickToPaint(brushColors)
};

// Control Pannel Buttons
resolutionButton.addEventListener('click', function() {
    resolution = parseInt(prompt('Please choose resolution up to a max of 100 pixels', 16));
    console.log(resolution);
    if (resolution > 100) {
        resolution = 100;
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
    clickToPaint(brushColors);
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    document.getElementById('colorPicker').value = '#000000';
    clickToPaint(brushColors);
});

brushColorButton.addEventListener('click', function() {
    let brushColors = brushColorChoice.value;
    clickToPaint(brushColors);
    brushColorButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
})

eraserButton.addEventListener('click', function() {
    pickEraser();
    eraserButton.classList.add('pannelButtonPressed');
    brushColorButton.classList.remove('pannelButtonPressed');
})




// document.getElementById('#colorPicker').onchange = function() {
//     brushColorChoice = this.value;
//     console.log(brushColorChoice);
//   }

// etchOrSketch.addEventListener('click', function(){
//   toggleMode();
// })
