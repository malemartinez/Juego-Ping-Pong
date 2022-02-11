class Balls{
  constructor(x,y,radius, board){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.board = board;
    this.speed_x = 2; //pixeles que se debe mover en la posicion x
    this.speed_y = 0;
    board.ball= this
    this.board.bars.push(this) 

    this.kind="circle"
    this.direction = 1

    //atributos necesarios para mover la bola 
    this.bounce_angle = 0;
    this.max_bounce_angle = Math.PI / 12;
    this.speed = 2;
  }

  get width(){
    return this.radius * 2;

   }
  get height(){
    return this.radius * 2;

  }
  move(){
    this.x += (this.speed_x * this.direction);
    this.y += this.speed_y;
  }

  //metodo para cambiar los atributos despues de que colisione con la barra
  collision(bar){
    let relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

    let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

    this.speed_y = this.speed * -Math.sin(this.bounce_angle);
    this.speed_x = this.speed * Math.cos(this.bounce_angle);

    if (this.x > this.board.width/2){
      this.direction = -1;
      
    }else {
      this.direction = 1
    }
    
  }

}