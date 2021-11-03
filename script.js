//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');
const resetButton = document.querySelector('#resetButton');
const resolutionButton = document.querySelector('#resButton');
const brushButton = document.querySelector('#brushButton');
const rainbowBrushButton = document.querySelector('#rainbowButton');
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
clickToPaint(brushColors, onClick)
brushButton.classList.add('pannelButtonPressed');

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

function clickToPaint (brushColors, onClick) {
    if (onClick === false) { return;}
    else {
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
        item.addEventListener('click', function() {
            let hoverColor =  {
            'background-color': `${brushColors}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
    }
}

function paintPixel(brushColors, onClick) {
    if (onClick === true) { return;}
    else {
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColors}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
    }
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
        item.addEventListener('click', function() {
            let hoverColor =  {
            'background-color': 'white'
            };
            Object.assign(this.style, hoverColor);
        })
      })
    }

function toggleMode() { //toggleMode is not working
    if (onClick === true) {
        etchOrSketch.innerHTML = 'Etch-a-Sketch';
        return onClick = false;

    } else if (onClick === false) {
        etchOrSketch.innerHTML = 'Click to Draw';
        return onClick = true;

    }
};

function changeColor() {
    let brushColors = brushColorChoice.value;
    clickToPaint(brushColors)
};

function randomColor() {
    brushColors = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
    return brushColors;
};

function randomRgbValue() {
    let value = `${Math.floor(Math.random() * 255)}`;
    return value;
};

function rainbowBrush() {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let rainbow = randomColor();
            let hoverColor =  {
            'background-color': `${rainbow}`
            };
            if(mouseIsDown) {
            Object.assign(this.style, hoverColor);
            }
        })
        item.addEventListener('click', function() {
            let rainbow = randomColor();
            let hoverColor =  {
            'background-color': `${rainbow}`
            };
            Object.assign(this.style, hoverColor);
        })
      })
    }

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
    if (isNaN(resolution)) {resolution = 16;} 
    container.innerHTML = '';
    document.getElementById('colorPicker').value = '#000000';
    console.log(resolution);
    setCanvasresolution(resolution);
    appendPixels(resolution);
    clickToPaint('black', onClick);
    paintPixel('black', onClick);
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    document.getElementById('colorPicker').value = '#000000';
    clickToPaint('black', onClick);
    paintPixel('black', onClick);
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
});

brushButton.addEventListener('click', function() {
    let brushColors = brushColorChoice.value;
    clickToPaint(brushColors, onClick);
    paintPixel(brushColors, onClick);
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');

})

eraserButton.addEventListener('click', function() {
    pickEraser();
    eraserButton.classList.add('pannelButtonPressed');
    brushButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
})

rainbowBrushButton.addEventListener('click', function() {
    rainbowBrush();
    rainbowBrushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    brushButton.classList.remove('pannelButtonPressed')
})

// etchOrSketch.addEventListener('click', function() {
//     toggleMode();
//     clickToPaint(brushColors, onClick);
//     paintPixel(brushColors, onClick);
//     console.log(onClick);
// })
