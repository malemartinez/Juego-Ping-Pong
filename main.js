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

  drawElement(){
    for (let i = this.board.elements.length - 1; i >= 0 ; i--) {
      let el = this.board.elements[i];
     
      this.draw(this.contexto,el)
    }
  }
  //Este metodo lo usamos para dibujar en el canvas
  draw(ctx,element){
    
    switch (element.kind) {
      case "square":
        
        ctx.fillRect(element.x, element.y, element.width, element.height)
        break;
      case "circle":
        
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.radius,0,7);
        ctx.fill();
        ctx.closePath()
        break;
    }
  }
  
}

class Bars{
  constructor(x,y,width,height,board){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.board = board;

    this.board.bars.push(this)
    this.kind = "square";
    this.speed = 10;
  }

  down(){
    this.y += this.speed
  }
  up(){
    this.y -= this.speed
  }
  toString(){
    return "x: "+ this.x + " y: " + this.y
  }
}

let board = new Board(700,300);

let canvas = document.getElementById("canvas")

let boardView = new BoardView(canvas,board);
let Bar = new Bars(0,50,20,100,board);
let Bar2 = new Bars(680,80,20,100,board);


document.addEventListener("keydown", (ev)=>{
  if(ev.code == "ArrowDown"){
    ev.preventDefault;
    Bar2.down()
  }else if( ev.code == "ArrowUp"){
    ev.preventDefault;
    Bar2.up()
  }
  
})


window.addEventListener( "load", main)

function main(){
  boardView.drawElement()
}
