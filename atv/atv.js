var n1 = 2;
function maiorIgual (n1){
    if (n1 >= 0 && n1 % 2 == 0) {
        console.log ("Esse numero é par")
    }
    if (n1 >= 0 && n1 % 2 == 1) {
        console.log ("Esse numero é impar")
    }
    if (n1 < 0){
        console.log("É obrigatorio informar um numero maior igual a zero.")
    }

}

maiorIgual(n1);


var numeros = [1,2,3];

/*function multiplicado(){
    for (var i = 0 ; numeros.length ; i++){
        console.log(numeros[i]*2);
    }
}*/
if (numeros.length === 0){
    console.log("É obrigatorio informar pelo menos um numero.")
}else{
    numeros.forEach(function(elemento){
        console.log(elemento);
    });//Percorre a lista mostrando os valores
}


var array = [1,2,3,4];

if (array.length === 0){
    console.log("É obrigatorio informar pelo menos um numero.")
}else{
    array.forEach(function(elemento){
        console.log(elemento);
    });//Percorre a lista mostrando os valores
    
    var num2 = array.map(function(elemento){
        return elemento*2;
    });//Percorre o array mutiplicando por 2 gerando um novo array
    
    num2.forEach(function(elemento){
        console.log(elemento);
    });//Percorre a lista mostrando os valores
}
