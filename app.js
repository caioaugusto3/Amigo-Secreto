let listaAmigos = [];

// Capturar o valor do campo de entrada para obter o texto inserido pelo usuário.
function adicionarAmigo() {
    let amigos = document.getElementById('amigo').value;
    console.log(amigos);
// Valida entrada para que o campo não esteja vazio. Exibi um alerta caso esteja vazio.    
    if (amigos === '') {
        alert('Por favor, insira um nome.');
    } 
}
