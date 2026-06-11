    //  it is creating a tetris of size 4x3 .
    
    //  defing this for appending grid as shape is a array
    // Creating random numbers
      let  ran = Math.floor(Math.random()*19);
      let block = "r"+ran;
      console.log(block);
      let shape;

      switch(block){

    // I Shape Horizontal
    case "r0":
      shape = [
        [1,1,1,1]
      ];
      break;

    // I Shape Vertical
    case "r1":
      shape = [
        [1],
        [1],
        [1],
        [1]
      ];
      break;

    // O Shape
    case "r2":
      shape = [
        [1,1],
        [1,1]
      ];
      break;

    // T Shape Up
    case "r3":
      shape = [
        [1,1,1],
        [0,1,0]
      ];
      break;

    // T Shape Right
    case "r4":
      shape = [
        [0,1],
        [1,1],
        [0,1]
      ];
      break;

    // T Shape Down
    case "r5":
      shape = [
        [0,1,0],
        [1,1,1]
      ];
      break;

    // T Shape Left
    case "r6":
      shape = [
        [1,0],
        [1,1],
        [1,0]
      ];
      break;

    // L Shape 1
    case "r7":
      shape = [
        [1,0],
        [1,0],
        [1,1]
      ];
      break;

    // L Shape 2
    case "r8":
      shape = [
        [1,1,1],
        [1,0,0]
      ];
      break;

    // L Shape 3
    case "r9":
      shape = [
        [1,1],
        [0,1],
        [0,1]
      ];
      break;

    // L Shape 4
    case "r10":
      shape = [
        [0,0,1],
        [1,1,1]
      ];
      break;

    // J Shape 1
    case "r11":
      shape = [
        [0,1],
        [0,1],
        [1,1]
      ];
      break;

    // J Shape 2
    case "r12":
      shape = [
        [1,0,0],
        [1,1,1]
      ];
      break;

    // J Shape 3
    case "r13":
      shape = [
        [1,1],
        [1,0],
        [1,0]
      ];
      break;

    // J Shape 4
    case "r14":
      shape = [
        [1,1,1],
        [0,0,1]
      ];
      break;

    // S Shape Horizontal
    case "r15":
      shape = [
        [0,1,1],
        [1,1,0]
      ];
      break;

    // S Shape Vertical
    case "r16":
      shape = [
        [1,0],
        [1,1],
        [0,1]
      ];
      break;

    // Z Shape Horizontal
    case "r17":
      shape = [
        [1,1,0],
        [0,1,1]
      ];
      break;

    // Z Shape Vertical
    case "r18":
      shape = [
        [0,1],
        [1,1],
        [1,0]
      ];
      break;
  }
      console.log(shape); // checking

      console.log(shape[0].length); // checking

      console.log(shape.length) //

      
  function draw(piece){ 
    // clearing the bpard 
    clearBoard();
   
      for(let i = 0; i < piece.shape.length; i++){

      for(let j = 0; j < piece.shape[i].length; j++){
        
        if(piece.shape[i][j] == 1){
          let row = piece.y+i
          let col = piece.x+j
          cells[row][col].style.background ="cyan"
        }
        else{
          let row = piece.y+i
          let col = piece.x+j
          cells[row][col].style.background ="trasparent" 
        }

      }

    }
    }    

      