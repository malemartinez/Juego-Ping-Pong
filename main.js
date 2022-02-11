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