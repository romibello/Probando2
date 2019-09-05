//******************* punto2 *******************************

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = parent.innerWidth*0.4;
canvas.height =  parent.innerHeight*0.3;
let width = canvas.width;
let height = canvas.height; 

window.onresize = () => {
    canvas.width = parent.innerWidth*0.4;
    canvas.height =  parent.innerHeight*0.3;
    width = canvas.width;
    height = canvas.height; 
    drawPoint2();
}

function drawPoint2(){
    ctx.fillStyle = "#3498db ";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

drawPoint2();
//******************* punto2 *******************************
