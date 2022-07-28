console.log('Project One');

let canvas = document.getElementById('game');

let context = canvas.getContext('2d');
let catepillar;
let circles;
let score = document.getElementById('score');
let highScore = document.getElementById('highscore');

// Event Listener





// Set up for Canvas rendering
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);



// Entitites
class Crawler {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;

        this.render = function() {
            context.fillstyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}




// board
let blockSize = 25;
let rows = 20;
let columns = 20;
let board;

window.onload = function() {
    board = document.getElementById('game');
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    catepillar = new Crawler(10, 10, 'green', 10, 10);
}

console.log(catepillar);

// food
let foodX;
let foodY;

function getFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}