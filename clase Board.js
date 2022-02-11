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