let x = 100;
let y = 200;
let width = 50;
let fillColor = "Red";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    if (ev.code === "ArrowUp") {
        y = y-10;
    } else if (ev.code === "ArrowDown") {
        y = y+10;
    } else if (ev.code === "ArrowRight") {
        x = x+10; 
    } else if (ev.code === "ArrowLeft") {
        x = x-10;
    }

    if (ev.code === "KeyG") {
        fillColor = "green";
    } else if (ev.code === "KeyR") {
        fillColor = "red"; 
    } else if (ev.code === "KeyB") {
        fillColor = "lightblue";
    }

    if (ev.code === "Space") {
        width = width + 10;
    } else if (ev.code === "Delete") {
        width = width - 10;
    }

    clear();
    fill(fillColor);
    circle(x, y, width);
    // drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
