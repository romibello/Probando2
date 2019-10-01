class myCharacter {
    constructor() {
      this.domElement = document.getElementById('character');
      this.w = document.getElementById('character').getBoundingClientRect().width;
      this.h = document.getElementById('character').getBoundingClientRect().height;
      this.pos = {top: this.domElement.getBoundingClientRect().top, left: this.domElement.offsetLeft};
    }
  
    updatePosition() {
      this.pos.top = this.domElement.getBoundingClientRect().top;
      this.pos.left = this.domElement.offsetLeft;
    }

    init() {
        this.domElement.classList.remove('die');
        this.domElement.classList.add('CharacterWalk');
        this.domElement.style.display = 'block';
        this.domElement.style.left = '100px';
        this.domElement.style.bottom = '5px';
    }

    horizontalCollision(e){
        if(this.pos.left < e.pos.left + e.w && this.pos.left + this.w > e.pos.left){
            return true;
        }
        return false;
    }

    verticalCollision(e){
        if(this.pos.top < e.pos.top + e.h && this.pos.top + this.h  > e.pos.top){
            return true;
        }
        return false;
    }

    
    checkCollision(e) {
        this.updatePosition();
        e.updatePosition();
        if ( this.horizontalCollision(e) && this.verticalCollision(e)) {
        return true;
        }
        return false;
    }
    move(key) {
        this.updatePosition();
        switch (key) {
        case 37:
            this.domElement.style.left = this.pos.left - 20 + 'px';
            break;
            
        case 39:
            this.domElement.style.left = this.pos.left + 20 + 'px';
            
        default:
            break;
        }
    }
    jump() {
        this.domElement.classList.add('CharacterJump');
        setTimeout(() => {
        this.domElement.classList.remove('CharacterJump');
        }, 700);
    }
    die() {
        this.domElement.classList.add('die');
        setTimeout(() => {
        this.domElement.classList.remove('die');
        }, 1200);
    }
    stop() {
        this.domElement.style.left = '100px';
        this.domElement.style.bottom = '100px';
        this.domElement.classList.remove('CharacterWalk');
    }

    getMilkshake(){
        this.domElement.classList.add('milkshake');
        setTimeout(() => {
        this.domElement.classList.remove('milkshake');
        }, 1200);
    }
    
}
  