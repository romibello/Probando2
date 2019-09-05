//******************* punto6 *******************************
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = parent.innerWidth*0.8;
canvas.height =  parent.innerHeight*0.6;

let posX=0;
let posY=0;

let myImage = new Image();
myImage.src = "2.jpg";

myImage.onload = function(){
  myDrawImageMethod(this);
}
function myDrawImageMethod(img){
  ctx.drawImage(img, posX, posY);
  let w = img.width;
  let h = img.height;
  

  let imageData = ctx.getImageData(posX,posY, img.width, img.height);
  let avg;
  let index;
  let pixels = imageData.data;
  for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
          index = (x + y * w) * 4;
          avg = (pixels[index] + pixels[index+1]  + pixels[index+2]) / 3;
          imageData.data[index] = avg;
          imageData.data[index+1] = avg;
          imageData.data[index+2] = avg;

      }

  }
  ctx.putImageData(imageData,posX,posY);
}

//******************* punto6 *******************************