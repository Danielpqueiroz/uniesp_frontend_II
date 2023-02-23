//Segunda aula
var aluno = "João";

console.log(aluno);
//teste();
console.log(teste())

function teste() {
    var aluno2 = "Pedro";
    console.log(aluno2);
    return aluno2;
}
console.log(aluno2);

if (aluno == "João"){
    let resultado = "Olá João";
    var resultado2 = "Olá João";
}else {
    let resultado = "Olá Desconhecido";
    var resultado2 = "Olá Desconhecido";
}
//console.log(resultado);//O let só funciona dentro da função.Por isso não funciona aqui.
console.log(resultado2)