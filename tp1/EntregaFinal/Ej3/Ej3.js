//******************* punto3 *******************************
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#3498db ";
canvas.width = parent.innerWidth*0.4;
canvas.height =  parent.innerHeight*0.3;
let width = canvas.width;
let height = canvas.height; 

window.onresize = () => {
  canvas.width = parent.innerWidth*0.4;
  canvas.height =  parent.innerHeight*0.3;
  width = canvas.width;
  height = canvas.height;
  drawPoint3()
}


function drawPoint3(){
  let imageData = ctx.createImageData(width,height);

  for(x=0; x<width; x++){
    for(y=0;y<height; y++){
      setPixel(imageData,x,y,118,68,138,255);//https://htmlcolorcodes.com/es/tabla-de-colores/
    }
  }
  ctx.putImageData(imageData,0,0);

  function setPixel (imageData, x, y, r, g, b, a){
    index = (x+y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
  }
}

drawPoint3();
//******************* punto3 *******************************
