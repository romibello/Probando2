/********************************* ejercicio 1: matriz *********************************************/

let btn = document.getElementById("btn");
let btn2 = document.getElementById("maximo");
let btn3 = document.getElementById("MaxOrMin");
let prom = document.getElementById("promedio");
btn.addEventListener("click",newMatrix);
btn2.addEventListener("click",MuestraMaximo);
btn3.addEventListener("click",MuestraMaxOrMin);
prom.addEventListener("click",promedios);

let container = document.getElementById("matrix");

let guardar = [];
let n = 0;
let m = 0;

function showMatrix(matriz,n,m){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let table = document.createElement("table");
    let tBody = document.createElement("tbody");
    for(let i=0; i<n ; i++){
        let row = document.createElement("tr");
        for(let j=0; j<m ; j++){
            let colum=document.createElement("td");
            colum.innerHTML = matriz[i][j];
            row.appendChild(colum);
        }
        tBody.appendChild(row);
    }
    table.setAttribute("class", "table table-dark ");
    table.appendChild(tBody);
    container.appendChild(table);
    console.clear();
    console.log(matriz);
}

function newMatrix(){
    n = document.getElementById("n").value;
    m = document.getElementById("m").value;
    let matriz = [];

    for (let i = 0; i < n; i++) {
    matriz[i]=new Array(m);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matriz[i][j]=Math.floor(Math.random()*n);
        }
    }
    guardar=matriz;
    showMatrix(matriz,n,m);
}

newMatrix();

function MuestraMaximo(){
    let max=-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(guardar[i][j]>max){
                max=guardar[i][j];
            }
        }
    }
    console.log("Elemento mayor de la matriz: " + max);
}


function MuestraMaxOrMin(){
    let max=-1;
    let min=n;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i%2==0){
                if(guardar[i][j]>max){
                    max=guardar[i][j];
                }
            }else{
                if(guardar[i][j]<min){
                    min=guardar[i][j];
                }
            }
        }
        if(i%2==0){
            console.log("Elemento max: " + max + " fila: " + i);
        }else{
            console.log("Elemento min: " + min + " fila: " + i);
        }
    }
}


let promedio = new Array(n);

function promedios(){
    let suma=0;
    promedio = [];
    for(let i=0; i<n; i++){
        suma=0;
        for(let j=0; j<m; j++){
            suma += guardar[i][j];
        }
        promedio.push(suma/m);
    }
    console.log("arreglo de promedios: " + promedio);
}

/********************************* ejercicio 1: matriz *********************************************/