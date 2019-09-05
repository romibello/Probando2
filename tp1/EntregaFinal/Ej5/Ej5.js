let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = parent.innerWidth*0.4;
canvas.height =  parent.innerHeight*0.3;
let width = canvas.width;
let height = canvas.height; 
let sections = 2;
let prop = (255/width)*sections;

window.onresize = () => {
    canvas.width = parent.innerWidth*0.4;
    canvas.height =  parent.innerHeight*0.3;
    width = canvas.width;
    height = canvas.height; 
    prop = (255/width)*sections;
    drawPoint5()
}

const drawPoint5 = () => {

    let imageData = ctx.createImageData(width,height);
    let r = 0;
    let g = 0;
    let b = 0;


    for (let x = 0; x < width/2; x++) {
        for (let y = 0; y < height; y++) {
            index = (x + y * width) * 4;
            imageData.data[index] = r; 
            imageData.data[index+1] = g; 
            imageData.data[index+2] = b; 
            imageData.data[index+3] = 255;
        }
        r+= prop;
        g += prop;
    }
    r = 255;
    g = 255; 
    b = 0;
    let start = Math.floor(width/2)
    for (let x = start; x < width; x++) {
        for (let y = 0; y < height; y++) {
            index = (x + y * width) * 4;
            imageData.data[index] = r; 
            imageData.data[index+1] = g; 
            imageData.data[index+2] = b; 
            imageData.data[index+3] = 255;
        }
        g -= prop;
    }




    ctx.putImageData(imageData,0,0)
}

drawPoint5()
