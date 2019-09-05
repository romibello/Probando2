//******************* punto4 *******************************

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = parent.innerWidth*0.4;
canvas.height =  parent.innerHeight*0.3;
let width = canvas.width;
let height = canvas.height;
prop = 255/height; 

window.onresize = () => {
    canvas.width = parent.innerWidth*0.4;
    canvas.height =  parent.innerHeight*0.3;
    width = canvas.width;
    height = canvas.height;
    prop = 255/height; 
    drawPoint4()
}

const drawPoint4 = () => {

    let imageData = ctx.createImageData(width,height);

    let color = 0;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            index = (x + y * width) * 4;
            imageData.data[index] = color; 
            imageData.data[index+1] = color; 
            imageData.data[index+2] = color; 
            imageData.data[index+3] = 255;
            color+= prop;
        }
        color=0;
    }
    ctx.putImageData(imageData,0,0)
}

drawPoint4()

//******************* punto4 *******************************
