let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

let speed = 10;

let blockCount = 20;
let blockSize = canvas.width / blockCount;
let headX = 10;
let headY = 10;
const snakeBody = [];
let tail = 2;

let xSpeed = 0;
let ySpeed = 0;

// food
let foodX = 3;
let foodY = 3;

let score = document.getElementById('score');

let highScore = document.getElementById('highscore');

// Entitites
class Crawler {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.render = function() {
            context.fillstyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

// Game Process
function drawGame() {
    // console.log('draw game');
    changePosition();
    let crashWall = gameOver();
    if (crashWall) {
        return;
    }
    clearScreen();
    collision();
    getFood();
    drawSnake();
    setTimeout(drawGame, 1000 / speed);
}



function gameOver() {
    let gameEnds = false;

    if (ySpeed === 0 && xSpeed === 0) {
        return false;
    }

    if (headX < 0) {
        gameEnds = true;
    } else if (headX === blockCount) {
        gameEnds = true;
    } else if (headY < 0) {
        gameEnds = true;
    } else if (headY === blockCount) {
        gameEnds = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        let body = snakeBody[i];
        if (body.x === headX && body.y === headY) {
            gameEnds = true;
            break;
        }
    }


    if (gameEnds) {
        ctx.fillStyle = 'white';
        ctx.font = '50px Copperplate';
        ctx.fillText('You Lose!', 100, 200);
    }

    return gameEnds;
}

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function collision() {
    if (foodX === headX && foodY === headY) {
    foodX = Math.floor(Math.random() * blockCount);
    foodY = Math.floor(Math.random() * blockCount);
    tail++;
    let newScore = Number(score.textContent) + 1;
    score.textContent = newScore;
    }
}

function getFood() {
    ctx.fillStyle = 'navajowhite';
    ctx.fillRect(foodX * blockCount, foodY * blockCount, blockSize, blockSize);
}

function drawSnake() {
    ctx.fillStyle = 'blueviolet';
    for (let i = 0; i < snakeBody.length; i++) {
        let body = snakeBody[i];
        ctx.fillRect(body.x * blockCount, body.y * blockCount, blockSize, blockSize);
    }

    snakeBody.push(new Crawler(headX, headY));
    while (snakeBody.length > tail) {
        snakeBody.shift();
    }

    ctx.fillStyle = 'blueviolet';
    ctx.fillRect(headX * blockCount, headY * blockCount, blockSize, blockSize);

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
        if (ySpeed == 1)
            return;
        ySpeed = -1;
        xSpeed = 0;
    }
    // down
    if(event.keyCode == 40) {
        if (ySpeed == -1)
            return;
        ySpeed = 1;
        xSpeed = 0;
    }
    // right
    if(event.keyCode == 39) {
        if (xSpeed == -1)
            return;
        ySpeed = 0;
        xSpeed = 1;
    }
    // left
    if(event.keyCode == 37) {
        if (xSpeed == 1)
            return;
        ySpeed = 0;
        xSpeed = -1;
    }
}

drawGame();

// Set up for Canvas rendering
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);