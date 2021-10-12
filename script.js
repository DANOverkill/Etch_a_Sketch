//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');


// Global Variables
let pixelStyle = {
    'background-color': 'rgb(255, 255, 255)',
    'transition': '0.25s'
};

// let resolution = '16';

//Logic
function setCanvasresolution(resolution) {
    let canvasStyle = {
        'grid-template-columns' :`repeat(${resolution}, auto)`,
        'grid-template-rows' :`repeat(${resolution}, auto)`,
        'grid-gap': '1px'
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

setCanvasresolution('32');
appendPixels('32');

document.querySelectorAll('.canvasPixel').forEach(item => {
    item.addEventListener('mouseover', function() {
          let hoverColor =  {
        'background-color': 'black'
        };
        Object.assign(this.style, hoverColor);
    })
  })

