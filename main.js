let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

let speed = 5;

let blockCount = 20;
let blockSize = canvas.width / blockCount;
let headX = 10;
let headY = 10;

let xSpeed = 0;
let ySpeed = 0;

let score = document.getElementById('score');
let highScore = document.getElementById('highscore');

// Game Process
function drawGame() {
    // console.log('draw game');
    clearScreen();
    changePosition();
    drawSnake();
    setTimeout(drawGame, 1000 / speed);
}

drawGame();

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(headX * blockCount, headY * blockCount, blockSize, blockSize)
}

function changePosition() {
    headX = headX + xSpeed;
    headY = headY + ySpeed;
}

// Event Listener
document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    // up
    if(event.keyCode == 38) {
        ySpeed = -1;
        xSpeed = 0;
    }
    // down
    if(event.keyCode == 40) {
        ySpeed = 1;
        xSpeed = 0;
    }
    // right
    if(event.keyCode == 39) {
        ySpeed = 0;
        xSpeed = 1;
    }
    // left
    if(event.keyCode == 37) {
        ySpeed = 0;
        xSpeed = -1;
    }
}


// Set up for Canvas rendering
// game.setAttribute('height', getComputedStyle(game)['height']);
// game.setAttribute('width', getComputedStyle(game)['width']);


// Entitites
// class Crawler {
//     constructor(x, y, color, width, height) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;

//         this.render = function() {
//             context.fillstyle = this.color;
//             context.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
// }


// window.onload = function() {
//     board = document.getElementById('game');
//     board.height = rows * blockSize;
//     board.width = columns * blockSize;
//     snake = new Crawler(10, 10, 'green', 10, 10);
// }


// food
// let foodX;
// let foodY;

// function getFood() {
//     foodX = Math.floor(Math.random() * columns) * blockSize;
//     foodY = Math.floor(Math.random() * rows) * blockSize;
// }