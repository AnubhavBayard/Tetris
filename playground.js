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


function drawBoard(){
    for(let i =0;i<ROWS;i++){
        for(let j =0;j<COLS;j++){
            
        }
    }
}
// comment because the value we are changing here


function drawBoard() {
    console.log("drawBoard(")
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

 