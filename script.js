//DOM cach
const container = document.querySelector('.canvasContainer');

// Global Variables
//let resolution = '16';
//let content = '1';

//Logic
function createPixel() {
    let canvasPixel = document.createElement('div');
    canvasPixel.classList.add('canvasPixel');
    let pixelStyle = {
        'background-color': 'rgb(255, 255, 255)',
        'border-style': 'solid',
        'border-color': 'black',
        'border-width': '1px'
    };
    Object.assign(canvasPixel.style, pixelStyle);
    return container.appendChild(canvasPixel);
};

function setCanvasResolution(resolution) {
    let res = resolution
    let canvasStyle = {
        'grid-template-columns' :`repeat(${res}, auto)`,
        'grid-template-rows' :`repeat(${res}, auto)`
    }
   return Object.assign(container.style, canvasStyle);
};

function appendPixels(resolution) {
    let numPixels = resolution * resolution;
    for(let i = 0; i <= numPixels; i++) {
        createPixel();
        container.appendChild(canvasPixel);
    }
}; 

setCanvasResolution('16');
appendPixels('16');
