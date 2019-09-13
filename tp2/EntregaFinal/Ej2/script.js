function writeMessage(canvas, mousePos) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'red';
  context.beginPath();
  context.arc(mousePos.x, mousePos.y, 10, 0, Math.PI*2);
  context.fill();
  context.closePath();
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
  writeMessage(canvas, mousePos);
}, false);