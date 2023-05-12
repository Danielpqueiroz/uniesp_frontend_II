function cadastrar(){

    var nome = document.getElementById("iptNome").value;
    var mensagem = document.getElementById("txaMensagem").value;

    var linha = document.createElement('tr');

    var tdNome = document.createElement('td');
    tdNome.innerHTML = nome;

    var tdMensagem = document.createElement('td');
    tdMensagem.innerHTML = mensagem;

    linha.appendChild(tdNome);
    linha.appendChild(tdMensagem);

    var tabela = document.getElementById("tabela");
    tabela.appendChild(linha);
}

function estilizarTabela(){

    var linhas = document.getElementsByTagName('tr');
    var pintar = true;

    for(var i = 1; i<linhas.length; i++){

        if(pintar){
            linhas[i].setAttribute('style', 'background-color:gray; color:write;')
            pintar = false;
        }else {
            pintar = true;
        }
    }

}
