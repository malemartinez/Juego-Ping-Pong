class Bars{
  constructor(x,y,width,height,board){
    this.x = x;//posicion de la barra en x
    this.y = y;//posicion de la barra en y
    this.width = width;
    this.height = height;
    this.board = board;

    this.board.bars.push(this)
    this.kind = "square"; //sirve para identificar el tipo de figura a realizar
    this.speed = 10; //pixeles que se va a correr la barra
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