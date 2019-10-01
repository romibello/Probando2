let loop = false;
let pj = new myCharacter();
let obj = new obstacle('obstacle',5000);
let obj2 = new obstacle('points',1000);
let points=0;


function keyHandler(event) {//movimiento
  event.preventDefault();
  
  if (event.type == 'keydown' && event.keyCode == 38) {
    pj.jump();
  }
  if (event.type == 'keydown' && event.keyCode == 37 || event.keyCode == 39) {
    pj.move(event.keyCode);
  }
}

function gameLoop() {
  if (pj.checkCollision(obj) ) {
    loop = false;
    pj.die();
    gameOver();
  }
  if (pj.checkCollision(obj2) ) {
    points++;
    obj2.stop();
    pj.getMilkshake();
    obj2.init();
    pointsText.innerHTML ="points: " + points;
  }
  if (loop) {
    requestAnimationFrame(gameLoop);
  }
}       

function start() {
  pj.init();
  //obj.init();
  obj2.init();
  loop = true;
  pointsText.innerHTML ="points: " + points;
  requestAnimationFrame(gameLoop);
}

function gameOver() {
  obj.stop();
  obj2.stop();
  setTimeout(() => {
    pj.stop();
  }, 1200);
}


const empezarButton = document.getElementById('empezar');
const pointsText = document.getElementsByClassName('card-text')[0];
empezarButton.onclick = function() {
  start();
};

window.addEventListener('keydown', keyHandler);