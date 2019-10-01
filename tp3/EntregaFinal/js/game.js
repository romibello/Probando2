window.addEventListener('DOMContentLoaded', (event) => {
    let loop = false;
    const pj = new myCharacter();
    
    
    function keyHandler(event) {//movimiento
      event.preventDefault();
      
      if (event.type == 'keydown' && event.keyCode == 38) {
        pj.jump();
      }
      if (event.type == 'keydown' && event.keyCode == 37 || event.keyCode == 39) {
        pj.move(event.keyCode);
      }
    }
       
    
    function start() {
      pj.init();
    }
    
    const empezarButton = document.getElementById('empezar');
    empezarButton.onclick = function() {
      start();
    };
    
    window.addEventListener('keydown', keyHandler);
  });