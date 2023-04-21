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
atividade atual

let pessoa = {nome : "Daniel", idade : 25, profição :"engenheiro", endereço: {Logradouro:"Rua", bairro : "Bancarios", cidade : "João Pessoa", cep : 58051572 }};


function Mostrar(pessoa){
    console.log(pessoa, pessoa.endereço);
    
}
pessoa.telefone = 88065465;
Mostrar(pessoa);
obterDados(pessoa);




function obterDados() {
  let dados = "";
  for (let propriedade in pessoa) {
    if(propriedade == "endereço" ){
        for (let propriedade1 in pessoa.endereço){
            dados += propriedade1 + ": " + pessoa.endereço[propriedade1] + ".\n ";
        }
    }else{
    dados += propriedade + ": " + pessoa[propriedade] + ".\n ";
  }}
  // Remove a vírgula e o espaço extra no final da string
  dados = dados.slice(0, -2);
  return dados;
}

console.log(obterDados());
