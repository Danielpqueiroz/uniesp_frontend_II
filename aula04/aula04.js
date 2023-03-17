var alunos = ["João Pedro", "Maria da Silva"];
typeof alunos;
alunos.push(false);//Adiciona o valor no array
alunos.push(10.8);

var pessoas = {noem: "Glaucio", idade: 20};
typeof pessoas;

var p2 = [8,9,10,5,4,2,6];
console.log(p2);
p2 [7] = 8;//Atribui o valor 8 na posição 7

p2.length;//mostra o tamanho do array
p2.push(10);//Adiciona no final do array o valor 10

p2.unshift(10);//Adiciona o valor 10 no indice 0 do array

p2.pop()//Remove o utimo valor e o mostra

p2.shift()//Remove o primeiro valor e o mostra

p2.toString()//Transforma os valores em string

p2.join(";")//Retorna os valores separados por ";" neste caso

delete p2[5]//Deleta o valor da posição "5"

p2.forEach(function(elemento){
    console.log(elemento);
});//Percorre a lista mostrando os valores

p2.map(function(elemento){
    return elemento*2;
});//Percorre o array mutiplicando por 2 gerando um novo array

p2.find()

var p2m = p2.filter(function(elemento){
    return elemento ==10;
});
p2.filter(function(element) { return element.nome === "Glaucio"});

