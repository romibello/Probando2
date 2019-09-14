class figurePolygon {
  constructor(ctx) {
    this.ctx = ctx;
    this.closed = false;
    this.lineColor = 'yellow';
    this.elements = [];
  }
  
  addVertex(elem) {
    this.elements.push(elem);
    if(this.elements.length > 1){
      this.connect(this.elements[this.elements.length-2].getPos(), this.elements[this.elements.length-1].getPos());
    }
  }

  close() {
    this.closed = true;
    if (this.elements.length > 1){
      this.connect(this.elements[0].getPos(), this.elements[this.elements.length-1].getPos());      
    }
  }

  connect(p,p2){
    this.ctx.strokeStyle = 'yellow';
    this.ctx.moveTo(p.x,p.y);
    this.ctx.lineTo(p2.x,p2.y);
    this.ctx.lineTo(p.x,p.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  isClosed() {
    return this.closed;
  }

  clean(){
    while(this.elements.length >0){
      this.elements.pop();
    }
  }
   
}


function writeMessage(c1) {
  ctx.fillStyle = 'red';
  c1.draw(ctx);  
 
}

function closePolygon(){
  p1.close();
}


function getMousePos(canvas, evt) {
  return {
    x: evt.clientX - canvas.offsetLeft,
    y: evt.clientY - canvas.offsetTop
  };
}

function cleanCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p1.clean();      
}


let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.6;
let ctx = canvas.getContext('2d');
let btClean = document.getElementById("clean");
btClean.addEventListener('click',cleanCanvas);
let btConnect = document.getElementById("connect");
btConnect.addEventListener('click',closePolygon);
let p1 = new figurePolygon(ctx);


canvas.addEventListener('click', function(evt) {
  let mousePos = getMousePos(canvas, evt);
  let c1 = new Circle(mousePos.x, mousePos.y , 10);
  p1.addVertex(c1);
  writeMessage(c1);
}, false);