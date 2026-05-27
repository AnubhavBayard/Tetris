const ROWS = 20;
const COLS = 10;

const board = document.getElementById("board");

const cells = [];

for (let row = 0; row < ROWS; row++) {
    cells[row] = [];
    for (let col = 0; col < COLS; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
        cells[row][col] = cell;
    }
}

const gameBoard = [];

for (let row = 0; row < ROWS; row++) {
    gameBoard[row] = [];
    for (let col = 0; col < COLS; col++) {
        gameBoard[row][col] = 0;
    }
}

gameBoard[0][1] = 1;
gameBoard[1][1] = 1;
gameBoard[2][1] = 1;
drawBoard();

function drawBoard() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (gameBoard[row][col] === 0) {
                cells[row][col].style.background = "#222";
            } else {
                cells[row][col].style.background = "cyan";
            }
        }
    }
}