/*var n1 = prompt("Digite um numero");

if (n1 < 0){
    alert("É obrigatorio informar um numero maior igual a zero.")
}else{
    maiorIgual(n1);
}
function maiorIgual (n1){
    if (n1 % 2 == 0) {
        alert ("Esse numero é par")
    }else{
        alert ("Esse numero é impar")
    }
    
}
*/

var numeros = prompt("Digite os numeros no formato: ex: 12345 sem espaços e sem virgula");

if (numeros.length === 0){
    alert("É obrigatorio informar pelo menos um numero.");
}else{
    multiplicar();
}

function multiplicar(){
    for (var i = 0 ; i<=4 ; i++){
        alert(numeros[i]*2);
    }
}
/*
var array = prompt("Digite os numeros no formato: ex: 12345 sem espaços e sem virgulas");

if (array.length === 0){
    alert("É obrigatorio informar pelo menos um numero.")
}else{
    mostrar();
    mult();  
}
function mostrar(){
    for (var i = 0 ; i <= 4 ; i++){
        alert(array[i]);
    }
}
function mult(){
    for (var i = 0 ; i<=4 ; i++){
        var num2 = parseFloat(array[i])*2;
        alert(num2);
    }
}*/