var n1 = 11;

if (n1 < 0){
    console.log("É obrigatorio informar um numero maior igual a zero.")
}else{
    maiorIgual(n1);
}
function maiorIgual (n1){
    if (n1 % 2 == 0) {
        console.log ("Esse numero é par")
    }else{
        console.log ("Esse numero é impar")
    }
    
}




var numeros = [1,2,3];

/*function multiplicado(){
    for (var i = 0 ; numeros.length ; i++){
        console.log(numeros[i]*2);
    }
}*/
if (numeros.length === 0){
    console.log("É obrigatorio informar pelo menos um numero.")
}else{
    numeros.map(function(elemento){
        console.log(elemento*2);
    });//Percorre o array mutiplicando por 2 gerando um novo array
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
