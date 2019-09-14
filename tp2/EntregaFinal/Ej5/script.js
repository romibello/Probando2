class FigurePolygon {
  constructor(ctx) {
    this.ctx = ctx;
    this.closed = false;
    this.lineColor = 'yellow';
    this.elements = [];
    this.center;
  }
  
  addVertex(elem) {
    elem.setColor('red');
    elem.draw(ctx);
    this.elements.push(elem);
    if(this.elements.length > 1){
      this.connect(this.elements[this.elements.length-2].getPos(), this.elements[this.elements.length-1].getPos());
    }
  }

  close() {
    this.closed = true;
    if (this.elements.length > 1){
      this.connect(this.elements[0].getPos(), this.elements[this.elements.length-1].getPos());
      this.setCenter();      
    }
  }

  connect(p,p2){
    this.ctx.strokeStyle = '#efe029';
    this.ctx.moveTo(p.x,p.y);
    this.ctx.lineTo(p2.x,p2.y);
    this.ctx.lineTo(p.x,p.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  setCenter(){
    let posX = 0; 
    let posY = 0;
    for (const elem of this.elements) {
      posX += elem.x;
      posY += elem.y;
    }
    let centroidX = posX / this.elements.length;
    let centroidY = posY / this.elements.length;
    this.center = new Circle(centroidX, centroidY, 3.5);
    this.center.setColor('green');
    this.center.draw(ctx);
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

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.6;
let ctx = canvas.getContext('2d');
let btClean = document.getElementById("clean");
btClean.addEventListener('click',cleanCanvas);
let btConnect = document.getElementById("connect");
btConnect.addEventListener('click',closePolygon);
let p1 = new FigurePolygon(ctx);


canvas.addEventListener('click', function(evt) {
  let mousePos = getMousePos(canvas, evt);
  let c1 = new Circle(mousePos.x, mousePos.y , 10);
  p1.addVertex(c1);
}, false);


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