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