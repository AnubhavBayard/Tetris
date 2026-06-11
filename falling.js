console.log(shape + "hi")
let xvalue  = Math.floor(Math.random()*7);
let piece ={
  shape: shape,
  x:xvalue,
  y:-3
}

function moveDown(){
  if( piece.y < (ROWS - piece.shape.length )){
  piece.y++;
  }
}


let  piecedown =  setInterval(() =>{
  moveDown();
  if(piece.y >=0){
   draw(piece);
   console.log(piece)
  }
  else{
    
  }
  if(piece.y  === ROWS - piece.shape.length){
    console.log("hi1")
    drawpiece()
    console.log("ji drawpiece")
    drawBoard()

  }
},1000)

console.log("hi")

//  for clearing the playing board
function clearBoard(){

  for(let i=0;i<ROWS;i++){
    for(let j =0;j<COLS;j++){
      cells[i][j].style.background ="transparent" 
    }
  }
}





// draw piece in gameboard

function drawpiece(){
  for(let i =0;i< piece.shape.length;i++){
    for(let j =0;j<piece.shape[i].length;j++){
      if(piece.shape[i][j] === 1){
        let row = piece.y+i
        let col = piece.x+j
        gameBoard[row][col] = 1; 
        
      }
      else{
        let row = piece.y+i
        let col = piece.x+j
        gameBoard[row][col] = 0;
      }
    }
  }
}
