//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');
const resetButton = document.querySelector('#resetButton');
const resolutionButton = document.querySelector('#resButton');
const brushButton = document.querySelector('#brushButton');
const rainbowBrushButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraser');
const eyeDropper = document.querySelector('#eyeDropper');
const brushColorChoice = document.getElementById('colorPicker');

// Global Variables
let pixelStyle = {
    'background-color': 'rgb(255, 255, 255)',
    'transition': '0.35s'
};

let brushColor = '#000000';
let resolution = 16;

//Logic
setCanvasresolution(resolution);
appendPixels(resolution);
clickToPaint(brushColor)
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

function clickToPaint(brushColor) {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColor}`
            };
            if(mouseIsDown) {
            Object.assign(this.style, hoverColor);
            }
        })
        item.addEventListener('click', function() {
            let hoverColor =  {
            'background-color': `${brushColor}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
}

function paintPixel(brushColor) {  //this function is curently not being used
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': `${brushColor}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
}

function pickEraser() {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            let hoverColor =  {
            'background-color': '#ffffff'
            };
            if(mouseIsDown) {
            Object.assign(this.style, hoverColor);
            }
        })
        item.addEventListener('click', function() {
            let hoverColor =  {
            'background-color': '#ffffff'
            };
            Object.assign(this.style, hoverColor);
        })
      })
    }

function changeColor() {
    let brushColor = brushColorChoice.value;
    clickToPaint(brushColor)
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
};

function randomColor() {
    brushColor = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
    return brushColor;
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

    function eyeDrop() {
        document.querySelectorAll('.canvasPixel').forEach(item => {
            item.addEventListener('mouseover', function() {
                rgbColor = this.style.backgroundColor;
                console.log(String(rgb2hex(rgbColor)));
                document.getElementById('colorPicker').value = String(rgb2hex(rgbColor));
                })
        })
        document.querySelectorAll('.cavasPixel').forEach(item => {
            item.addEventListener('click', () => {
                clickToPaint(brushColor);
                brushButton.classList.add('pannelButtonPressed');
                eraserButton.classList.remove('pannelButtonPressed');
                rainbowBrushButton.classList.remove('pannelButtonPressed');
                eyeDropper.classList.remove('pannelButtonPressed');
            })
        })
    }
    
    function rgb2hex (rgb) {
       hexcolor = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
                                    .slice(1).map(n => parseInt(n, 10)
                                    .toString(16).padStart(2, '0'))
                                    .join('')}`;
        return hexcolor;
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
    clickToPaint('#000000');
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    document.getElementById('colorPicker').value = '#000000';
    clickToPaint('#000000');
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
});

brushButton.addEventListener('click', function() {
    let brushColor = brushColorChoice.value;
    clickToPaint(brushColor);
    brushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');

})

eraserButton.addEventListener('click', function() {
    pickEraser();
    eraserButton.classList.add('pannelButtonPressed');
    brushButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
})

rainbowBrushButton.addEventListener('click', function() {
    rainbowBrush();
    rainbowBrushButton.classList.add('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    brushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
})

eyeDropper.addEventListener('click', () => {
    eyeDrop();
    rainbowBrush(0);
    eyeDropper.classList.add('pannelButtonPressed');
    brushButton.classList.remove('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
})