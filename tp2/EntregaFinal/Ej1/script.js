function writeMessage(canvas, message,mousePos) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '18pt Calibri';
  context.fillStyle = 'black';
  context.fillText(message, 10, 25);
  context.fillRect(mousePos.x,mousePos.y,100,100);
  context.fill();
}
function getMousePos(canvas, evt) {
  return {
    x: evt.clientX - canvas.offsetLeft,
    y: evt.clientY - canvas.offsetTop
  };
}
let canvas = document.getElementById('canvas');
canvas.width = parent.innerWidth*0.8;
canvas.height = parent.innerHeight*0.6;
let context = canvas.getContext('2d');


canvas.addEventListener('click', function(evt) {
  let mousePos = getMousePos(canvas, evt);
  let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  
  writeMessage(canvas, message,mousePos);
}, false);