let listaAmigos = [];

// Capturar o valor do campo de entrada para obter o texto inserido pelo usuário.
function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value;

// Valida entrada para que o campo não esteja vazio. Exibi um alerta caso esteja vazio.    
    if (amigos === '') {
        alert('Por favor, insira um nome.');
// Se o valor for válido, armazena os nomes dos ''amigos'' usando o método .push() na ''listaAmigos''.
// Adicionado função limparCampo();
    } else {
        listaAmigos.push(amigos);
        console.log(listaAmigos);
        limparCampo();
    }
}
// Função para Limpar o campo de entrada: Após adicionar o nome, redefine o campo de texto para uma string vazia.
function limparCampo() {
    document.getElementById('amigo').value = ''; 
}
