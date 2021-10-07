//DOM cach
const container = document.querySelector('.canvasContainer');
const pixel = document.querySelector('.canvasPixel');

// Global Variables
// let resolution = '16';

//Logic
function setCanvasresolution(resolution) {
    let canvasStyle = {
        'grid-template-columns' :`repeat(${resolution}, auto)`,
        'grid-template-rows' :`repeat(${resolution}, auto)`
    }
   return Object.assign(container.style, canvasStyle);
};

function createPixel() {
    let canvasPixel = document.createElement('div');
    canvasPixel.classList.add('canvasPixel');
    let pixelStyle = {
        'background-color': 'rgb(255, 255, 255)',
        'border-style': 'solid',
        'border-color': 'black',
        'border-width': '1px',
        'transition': '0.25s'
    };
    Object.assign(canvasPixel.style, pixelStyle);
    return container.appendChild(canvasPixel);
};

function appendPixels(resolution) {
    let numPixels = resolution * resolution;
    for(let i = 1; i <= numPixels; i++) {
        createPixel();
    }
    console.log(numPixels);
};

// pixel.addEventListener('hover', function(e) {
//     let hoverColor =  {
//         'background-color': 'black'
//     }
//     if (document.container.contains(pixel) === true) {
//         Object.assign(pixel.style, hoverColor);
//     };
// });

setCanvasresolution('16');
appendPixels('16');
