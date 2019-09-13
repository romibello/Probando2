function writeMessage(c1) {
  ctx.fillStyle = 'red';
  c1.draw(ctx);
  polygon.push(c1);

  if (polygon.length > 1){
    let p = polygon[polygon.length-2].getPos();
    let p2 = polygon[polygon.length-1].getPos();
    ctx.strokeStyle = 'yellow';
    ctx.moveTo(p.x,p.y);
    ctx.lineTo(p2.x,p2.y);
    ctx.lineTo(p.x,p.y);
    ctx.closePath();
    ctx.stroke();
  }
 
}


function getMousePos(canvas, evt) {
  return {
    x: evt.clientX - canvas.offsetLeft,
    y: evt.clientY - canvas.offsetTop
  };
}

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.6;
let ctx = canvas.getContext('2d');
let btClean = document.getElementById("clean");
btClean.addEventListener('click',cleanCanvas);
let polygon = [];

function cleanCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while(polygon.length >0){
    polygon.pop();
  }
      
}

canvas.addEventListener('click', function(evt) {
  let mousePos = getMousePos(canvas, evt);
  let c1 = new Circle(mousePos.x, mousePos.y , 10);
  writeMessage(c1);
}, false);