function lab51(input){
    var table = document.createElement('table');
    table.setAttribute('border','1');

    
    for(let i = 0; i<input; i++){
        var tRow = document.createElement('tr');

        for(let j = 0; j<3; j++){
            var tData = document.createElement('td');

            if(j === 0){
                tData.textContent = i+1;
            }
            if(j === 1){
                tData.textContent = (i+1)*(i+1);
            }
            if(j === 2){
                tData.textContent = (i+1)*(i+1)*(i+1);
            }

            tRow.appendChild(tData);
        }
        table.appendChild(tRow);
    }
    document.body.appendChild(table);
}
document.write("Pruebas de 1");
lab51(3);
document.write("<br>");
lab51(4);
document.write("<br>");

function lab52(){
    let a = Math.floor(Math.random() * 20);;
    let b = Math.floor(Math.random() * 20);;

    let c = a + b;
    const t0 = performance.now();
    let input = prompt("Cual es la suma de: "+a+" y "+b);

    const t1 = performance.now();

    if(Number.parseInt(input) === c){
        document.write("<h2>Correcto!!</h2><p> Tardaste "+ (t1-t0)+ " milisegundos en responder</p>");
    }else{
        document.write("<h2>Incorrecto!!</h2><p> Tardaste "+ (t1-t0)+ " milisegundos en responder</p>");
    }
}
document.write("Pruebas del 2");
lab52();
document.write("<br>");

function contador(input){
    let negativo = 0;
    let zero = 0;
    let positivo = 0;

    for(let i = 0; i< input.length;i++){
        if(input[i]<0){
            negativo++;
        }
        if(input[i]===0){
            zero++;
        }
        if(input[i]>0){
            positivo++;
        }
    }
    document.write("<h4>Hay "+negativo+" numeros negativos, "+zero+" ceros, "+positivo+" numeros positivos</h4>");
}
const a = [-1, 0, 0, -4];
const b = [1, 0, 0, 4,-5];
document.write("Pruebas del 3");
document.write("<br>");
document.write(a);
contador(a);
document.write(b);
contador(b);

document.write("<br>");

function promedios(input){
    const promedio = [];
    for(let i of input){
        var aux = 0;
        for(let j of i){
            aux = aux + j;
        }
        promedio.push(aux/i.length);
    }
    return promedio;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10,11,12]
  ];
const matrix2 = [
    [12, 2, 33],
    [4, 52, 6],
    [7, 85, 93],
    [10,11,120]
  ];

const promedio = promedios(matrix);
const promedio2 = promedios(matrix2);
document.write("Pruebas del 4");
document.write("<br>");
document.write(matrix);
document.write("<br>");
document.write(promedio);
document.write("<br>");
document.write(matrix2);
document.write("<br>");
document.write(promedio2);
document.write("<br>");

function inverso(input){

    var n = input;
    var digitos = (""+n).split("");

    for(let i = 0; i<digitos.length;i++){
        digitos[i] = +digitos[i];
    }
    digitos.reverse();

    var aux = digitos.join('');

    let numeroInverso = parseInt(aux);

    return numeroInverso;
}

let inverse = inverso(123456789);
let inverse2 = inverso(0987654);
document.write("Pruebas del 5");
document.write("<br>");
document.write(inverse);
document.write("<br>");
document.write(inverse2);
document.write("<br>");
