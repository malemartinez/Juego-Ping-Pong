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
  clean(){
    this.contexto.clearRect(0,0,this.board.width,this.board.height)
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
  play(){
    if(this.board.playing){
      this.clean()
      this.drawElement()
      this.board.ball.move()
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

class Balls{
  constructor(x,y,radius, board){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.board = board;
    this.speed_x = 2;
    this.speed_y = 0;
    board.ball= this
    this.board.bars.push(this)

    this.kind="circle"
    this.direction = 1

  }

  move(){
    this.x += (this.speed_x * this.direction);
    this.y += this.speed_y;
  }
}

let board = new Board(700,300);

let canvas = document.getElementById("canvas")

let boardView = new BoardView(canvas,board);
let ball = new Balls(40,100,10,board)
let Bar = new Bars(0,50,20,100,board);
let Bar2 = new Bars(680,80,20,100,board);

boardView.drawElement();

document.addEventListener("keydown", (ev)=>{
  if(ev.code == "ArrowDown"){
    ev.preventDefault;
    Bar2.down()
  }else if( ev.code == "ArrowUp"){
    ev.preventDefault;
    Bar2.up()
  }
  if(ev.code == "KeyS"){
    ev.preventDefault;
    Bar.down()
  }else if( ev.code == "KeyW"){
    ev.preventDefault;
    Bar.up()
  }else if(ev.code == "Space"){
    ev.preventDefault;
    board.playing = !board.playing

  }
})


function Controller(){
  boardView.play()
  window.requestAnimationFrame(Controller)
}
window.requestAnimationFrame(Controller)
