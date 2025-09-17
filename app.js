let listaAmigos = [];

function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == ''){
        alert("Por favor, inserte un nombre")
    }
    else{
        listaAmigos.push(nombreAmigo);
    }
    document.getElementById('amigo').value = ('');
}