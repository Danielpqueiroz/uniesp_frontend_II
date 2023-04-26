//Resposta item 01
let pessoa = {nome : "Daniel", idade : 25, profição :"engenheiro", endereço: {logradouro:"Rua", bairro : "Bancarios", cidade : "João Pessoa", cep : 58051572 }};

//Resposta item 02
function Mostrar(pessoa){
    console.log(pessoa, pessoa.endereço);
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Profissão: " + pessoa.profição);
    console.log("Logradouro: " + pessoa.endereço.logradouro);
    console.log("Bairro: " + pessoa.endereço.bairro);
    console.log("Cidade: " + pessoa.endereço.cidade);
    console.log("CEP: " + pessoa.endereço.cep);

    
}

//Resposta item 03
pessoa.telefone = 88065465;

//Resposta item 04
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
//Resposta item 05
function comparar(){
    let exemplo ={nome: "Daniel", idade: 25};
    if (pessoa.nome === exemplo.nome && pessoa.idade === exemplo.idade){
        return true;
    }else{
        return false;
    }
}

//Resposta item 06
let pessoa2 = {nome : "Dayse", idade : 30, profição :"Administradora", endereço: {logradouro:"Rua", bairro : "Bancarios", cidade : "João Pessoa", cep : 58051572 }};

//Resposta item 07
function comparar2(){
    if (pessoa.nome === pessoa2.nome && pessoa.idade === pessoa2.idade){
        return true;
    }else{
        return false;
    }
}

Mostrar(pessoa);
obterDados(pessoa);
console.log(obterDados());
console.log(comparar());
console.log(comparar2());
