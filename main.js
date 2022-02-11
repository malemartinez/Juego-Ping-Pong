class Board{

  constructor(width, height){
    this.height = height;
    this.width = width;
    this.playing = false;
    this.gameOver = false;
    this.bars = [];
    this.ball = null;
    
  }

  get elements(){
    // let elements = this.bars.map( bar => bar);
    // elements.push(this.ball)
    return this.bars
  }
}

class BoardView{
  constructor(canvas, board){
    this.canvas = canvas;
    this.board = board;
    this.canvas.height = board.height;
    this.canvas.width = board.width;
    this.contexto = canvas.getContext("2d")
  }
  
}
window.addEventListener( "load", main)

function main(){
  let board = new Board(700,300);

  let canvas = document.getElementById("canvas")

  let boardView = new BoardView(canvas,board);

  
}
