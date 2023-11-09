let x_1 = 100;
let y_1 = 600;
let width = 50;
let speed = 5;
let x_2 = 1200;
let y_2 = 600;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x_1 += speed;
    y_1 -= 1;
    x_2 -= speed;
    y_2 -= 1;

    if (x_2 < -100) {
        x_2 = canvasWidth + 200;
    }

    if (x_1 > 2000) {
        x_1 = -100;
    }

    if (y_2 < 0) {
        y_2 = 800;
    }

    if (y_1 < 0) {
        y_1 = 800;
    }
    clear();
    fill('lightpink');
    circle(x_1, y_1, width);
    fill('purple')
    circle(x_2, y_2, width);
    drawGrid(canvasWidth, canvasHeight);
}
