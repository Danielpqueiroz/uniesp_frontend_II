var altura = [];
var sexo = [];
var soma = 0;
var contador = 0;
var qtdMulher = 0;
var maiorAltura = 0;
var menorAltura = 0;
var resultado = 0;

for (var i = 1; i<=15; i++){
    altura[i]= parseFloat(prompt("Informe sua altura: Ex(1.70)"));    
    sexo[i]= prompt("Informe seu sexo: Ex:(Digite M para masculino  e F para feminino)");    
    
}   

maioraAltura = altura[1];
menorAltura = altura[1];
for (var i = 1; i<=15; i++){
    
    if (altura[i] > maiorAltura){
        maiorAltura = altura[i];
    } 
    if (menorAltura > altura[i]) {
        menorAltura = altura[i]
    } 
    

    if (sexo[i] == "M" || sexo[i] == "m"){//Ou sexo.toLocalUpperCase() e retorna os caracteres em caixa alta
        soma = soma + altura[i];
        contador++;

    }else if(sexo[i] == "F" || sexo[i] == "f"){
        qtdMulher++;
    }else{
        alert("ERRO")
    }
}

resultado = (soma/contador).toFixed(2);

var mensagem = "A maior altura é: " + maiorAltura + "\nA menor altura é: " + menorAltura + "\nA media da altura dos homens é: " + resultado + "\nA quantidade de mulheres é: " + qtdMulher;
alert(mensagem);
