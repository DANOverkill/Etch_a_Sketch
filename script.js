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
let brushColor = brushColorChoice.value;
let resolution = 32;
let mode = 'brush';

//Page Loding Logic 
setCanvasresolution(resolution);
appendPixels(resolution);
if(window.matchMedia("(pointer: coarse)").matches) {
    toolsFunctionTch('brush', '#000000')
}
else {
    toolsFunction('brush', '#000000')
}

// toolsFunction('brush', '#000000');
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

//Functionality Logic
function toolsFunction(mode, brushColor) {
    let mouseIsDown = false
    container.addEventListener('mousedown', function(){mouseIsDown = true})
    container.addEventListener('mouseup', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('mouseover', function() {
            console.log('hovering');
            if(mode === 'brush') {
                let hoverColor =  {
                'background-color': `${brushColor}`
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'eraser') {
                let hoverColor =  {
                'background-color': '#ffffff'
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'rainbow') {
                let rainbow = randomColor();
                let hoverColor =  {
                'background-color': `${rainbow}`
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'eyeDropper') {
                rgbColor = this.style.backgroundColor;
                document.getElementById('colorPicker').value = String(rgb2hex(rgbColor));
            }
        })
        item.addEventListener('click', function() {
            console.log('click');
            if(mode === 'brush') {
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'eraser') {
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'rainbow') {
                let rainbow = randomColor();
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'eyeDropper') {
                brushColor = brushColorChoice.value;
                resetButtonsDisplay();
                brushButton.classList.add('pannelButtonPressed');
                return mode = 'brush';
            }
        })
    })
}

function toolsFunctionTch(mode, brushColor) {
    let mouseIsDown = false
    container.addEventListener('touchstart', function(){mouseIsDown = true})
    container.addEventListener('touchend', function(){mouseIsDown = false})
    document.querySelectorAll('.canvasPixel').forEach(item => {
        item.addEventListener('touchmove', function() {
            container.style.overflow = "hidden";
            console.log('moving')
            if(mode === 'brush') {
                let hoverColor =  {
                'background-color': `${brushColor}`
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'eraser') {
                let hoverColor =  {
                'background-color': '#ffffff'
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'rainbow') {
                let rainbow = randomColor();
                let hoverColor =  {
                'background-color': `${rainbow}`
                };
                if(mouseIsDown) {
                Object.assign(this.style, hoverColor);
                }
            }
            if(mode === 'eyeDropper') {
                rgbColor = this.style.backgroundColor;
                document.getElementById('colorPicker').value = String(rgb2hex(rgbColor));
            }
        })
        item.addEventListener('touchstart', function() {
            console.log('touching');
            container.style.overflow = "hidden";
            if(mode === 'brush') {
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'eraser') {
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'rainbow') {
                let rainbow = randomColor();
                let hoverColor =  {
                'background-color': `${brushColorChoice.value}`
                };
                Object.assign(this.style, hoverColor);
            }
            if(mode === 'eyeDropper') {
                brushColor = brushColorChoice.value;
                resetButtonsDisplay();
                brushButton.classList.add('pannelButtonPressed');
                return mode = 'brush';
            }
        })
        item.addEventListener('touchend', function() {
            console.log('stoptouching')
            container.style.overflow = "auto";       
        })
    })
}

function paintPixel(brushColor) {                                   //this function is curently not being used 
    document.querySelectorAll('.canvasPixel').forEach(item => {     //I'm keeping is here since it was the original 
        item.addEventListener('mouseover', function() {             //purpouse of this project
            let hoverColor =  {
            'background-color': `${brushColor}`
            };
            Object.assign(this.style, hoverColor);
        })
    })
}

function changeColor() {
    let brushColor = brushColorChoice.value;
    toolsFunction('brush', `${brushColorChoice.value}`),
    resetButtonsDisplay();
    brushButton.classList.add('pannelButtonPressed');
};

function randomColor() {
    brushColor = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
    return brushColor;
};

function randomRgbValue() {
    let value = `${Math.floor(Math.random() * 255)}`;
    return value;
};
    
function rgb2hex (rgb) {
    hexcolor = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
                                .slice(1).map(n => parseInt(n, 10)
                                .toString(16).padStart(2, '0'))
                                .join('')}`;
    return hexcolor;
}

function resetButtonsDisplay() {
    brushButton.classList.remove('pannelButtonPressed');
    eraserButton.classList.remove('pannelButtonPressed');
    rainbowBrushButton.classList.remove('pannelButtonPressed');
    eyeDropper.classList.remove('pannelButtonPressed');
}



// Control Pannel Buttons
resolutionButton.addEventListener('click', function() {
    resolution = parseInt(prompt('Please choose resolution up to a max of 100 pixels', 32));
    console.log(resolution);
    if (resolution > 100) {
        resolution = 100;
    }
    if (resolution === 0) {
        resolution = 32;
    }
    if (isNaN(resolution)) {
        resolution = 32;
    } 
    container.innerHTML = '';
    document.getElementById('colorPicker').value = '#000000';
    console.log(resolution);
    setCanvasresolution(resolution);
    appendPixels(resolution);
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('brush', '#000000')
    }
    else {
        toolsFunction('brush', '#000000');
    }
    resetButtonsDisplay();
    brushButton.classList.add('pannelButtonPressed');
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    document.getElementById('colorPicker').value = '#000000';
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('brush', '#000000')
    }
    else {
        toolsFunction('brush', '#000000');
    }
    resetButtonsDisplay();
    brushButton.classList.add('pannelButtonPressed');
});

brushButton.addEventListener('click', function() {
    let brushColor = brushColorChoice.value;
    if(brushColor === '#ffffff') {
        brushColor = '#000000';
        brushColorChoice.value = brushColor;
    }
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('brush', `${brushColorChoice.value}`)
    }
    else {
        toolsFunction('brush', `${brushColorChoice.value}`);
    }
    //toolsFunction('brush', `${brushColorChoice.value}`);
    resetButtonsDisplay();
    brushButton.classList.add('pannelButtonPressed');
})

eraserButton.addEventListener('click', function() {
    brushColorChoice.value = '#ffffff';
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('eraser')
    }
    else {
        toolsFunction('eraser');
    }
    // toolsFunction('eraser');
    resetButtonsDisplay();
    eraserButton.classList.add('pannelButtonPressed');
})

rainbowBrushButton.addEventListener('click', function() {
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('rainbow')
    }
    else {
        toolsFunction('rainbow');
    }
    toolsFunction('rainbow');
    resetButtonsDisplay();
    rainbowBrushButton.classList.add('pannelButtonPressed');
})

eyeDropper.addEventListener('click', () => {
    if(window.matchMedia("(pointer: coarse)").matches) {
        toolsFunctionTch('eyeDropper')
    }
    else {
        toolsFunction('eyeDropper');
    }
    // toolsFunction('eyeDropper');
    resetButtonsDisplay();
    eyeDropper.classList.add('pannelButtonPressed');
})