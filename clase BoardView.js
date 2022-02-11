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
  //metodo que inicia el juego
  play(){
    if(this.board.playing){
      this.clean()
      this.drawElement()
      this.check_collisions()
      this.board.ball.move()
    }
  }

  check_collisions(){
    //verificamos si una de las barras fue o no colisionada
    for (let i = this.board.bars.length - 1; i > 0; i--) {
      const bar = this.board.bars[i];
      
      //evaluamos si algun elemento ha colisionado
      if (this.hit( bar, this.board.ball) ){
        this.board.ball.collision(bar)
      }
      
    }
  }

  hit(a,b){
    //valida la colision entre elementos. Devuelve true o false
    //Revisa si a colisiona con b
    let hit = false;
    //Colisiones horizontales
    if(b.x + b.width > a.x && b.x < a.x + a.width){

      //Colisiones verticales
      if (b.y + b.height >= a.y && b.y < a.y + a.height){
        hit = true;

      } 
    }

    //Colisión de a con b
    if(b.x <= a.x && b.x + b.width >= a.x + a.width){
    
      if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
        hit = true;

      }
    }

    //Colision b con a
    if(a.x <= b.x && a.x + a.width >= b.x + b.width){
    //Colisiona verticales
      if (a.y <= b.y && a.y + a.height >= b.y + b.height){
        hit = true;

      } 
    }
    return hit;
  }
}