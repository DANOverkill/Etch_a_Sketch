//DOM cach
const container = document.querySelector('.canvasContainer');
const canvasPixel = document.querySelector('.cavasPixel');
const resetButton = document.querySelector('#resetButton');
const resolutionButton = document.querySelector('#resButton');


// Global Variables
let pixelStyle = {
    'background-color': 'rgb(255, 255, 255)',
    'transition': '0.5s'
};

let resolution = 16;
setCanvasresolution(resolution);
appendPixels(resolution);
paintPixel();


//Logic
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

function paintPixel() {
document.querySelectorAll('.canvasPixel').forEach(item => {
    item.addEventListener('mouseover', function() {
          let hoverColor =  {
        'background-color': 'black'
        };
        Object.assign(this.style, hoverColor);
    })
  })
}

resolutionButton.addEventListener('click', function() {
    resolution = parseInt(prompt('please choose resolution up to a max of 100 pixels', 16));
    console.log(resolution);
    if (resolution > 64) {
        resolution = 64;
    }
    if (resolution === 0) {
        resolution = 16;
    }
    if (resolution === NaN || resolution === null) {
        resolution = 16;
    }
    container.innerHTML = '';
    console.log(resolution);
    setCanvasresolution(resolution);
    appendPixels(resolution);
    paintPixel();
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
    setCanvasresolution(resolution);
    appendPixels(resolution);
    paintPixel();
});




// let canvas = container.querySelectorAll('.canvasPixel')
//     let resetColor =  {
//         'background-color': 'white'
//         };
//     for (let i = 0; i < canvas.length; i++) {
//         let pixel = canvas[i];
//         Object.assign(pixel[i].style, resetColor);
//     }