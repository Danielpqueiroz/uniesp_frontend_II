function somar(numero1, numero2){
    var total = numero1+numero2;
    return total;
}

var resultado = somar(1,5);
console.log(resultado);

//Função
function boasVindas(){
    console.log("-------------SISTEMA TAL  ----------");
    console.log("Seja bem vindo, quinta-feira!");
    console.log("Versão do sistema: tal.");
}

boasVindas();
//Declaração de função
var multiplicar = function(n1,n2){
    return (n1*n2);
}

console.log(multiplicar(2,6));
