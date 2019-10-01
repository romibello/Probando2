class obstacle {
  constructor(id,valor) {
    this.domElement = document.getElementById(id);
    this.w = this.domElement.getBoundingClientRect().width;
    this.h = this.domElement.getBoundingClientRect().height;
    this.pos = {top: this.domElement.getBoundingClientRect().top, left: this.domElement.offsetLeft};
    this.valor = valor;
  }

  init() {
    this.domElement.classList.add('obstacleanimate');
    setTimeout(() => {
      this.domElement.classList.add('obstaclemove');
    }, this.valor);
  }

  updatePosition() {
    this.pos.top = this.domElement.getBoundingClientRect().top;
    this.pos.left = this.domElement.offsetLeft;
  }

  stop() {
    this.domElement.classList.remove('obstaclemove');
  }
}