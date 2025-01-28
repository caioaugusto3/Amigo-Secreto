let listaAmigos = [];
let numeroAmigo = [];

// Capturar o valor do campo de entrada para obter o texto inserido pelo usuário.
function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value;

// Valida entrada para que o campo não esteja vazio. Exibi um alerta caso esteja vazio.    
    if (amigos === '') {
        alert('Por favor, insira um nome.');
// Se o valor for válido, armazena os nomes dos ''amigos'' usando o método .push() na ''listaAmigos''.
// Adicionado função limparCampo();
// Adicionado função atualizarLista();
    } else {
        listaAmigos.push(amigos);
        console.log(listaAmigos);
        limparCampo();
        atualizarLista();
    }
}
// Função para Limpar o campo de entrada: Após adicionar o nome, redefine o campo de texto para uma string vazia.
function limparCampo() {
    document.getElementById('amigo').value = ''; 
}
// Função para atualizar a lista de amigos e exibir no html.
function atualizarLista() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = listaAmigos[i];
        listaAmigosElement.appendChild(novoAmigo);
    }
}
// Função do botão sortear amigo e verifica se tem amigo na lista.
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
    } else {
        gerarAmigoAleatorio();
        atualizarResultado();
    }
}
// Função para gerar um amigo aleatório.
function gerarAmigoAleatorio() {
    numeroAmigo = Math.floor(Math.random() * listaAmigos.length);
    console.log(listaAmigos[numeroAmigo]);
}
// Função para atualizar resultado e exibir um amigo aleatorio.
function atualizarResultado() {
    let atualizarResultadoElement = document.getElementById('resultado');
    atualizarResultadoElement.innerHTML = "";
    document.getElementById('listaAmigos').style.display = 'none';  // Oculta lista amigos.
  
    if (numeroAmigo >= 0 && numeroAmigo < listaAmigos.length) {
      let amigoSorteado = listaAmigos[numeroAmigo];
      let amigoElement = document.createElement('div');
      amigoElement.textContent = amigoSorteado;
      atualizarResultadoElement.appendChild(amigoElement);
    } 
  }


