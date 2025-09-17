//Lista para guardar los amigos JS
let listaAmigos = [];

//Referenciar la lista HTML
//Nota: las listas HTML no tienen propiedad .value
let listaHTML = document.getElementById('listaAmigos');

//Funcion principal al presionar el boton agregar amigo
function agregarAmigo(){
    //Guardar el dato del input en la variable
    nombreAmigo = document.getElementById('amigo').value;
    //Si no se ha ingresado un nombre, lanzar alerta
    if (nombreAmigo == ''){
        alert("Por favor, inserte un nombre")
    }
    //Si ha puesto un nombre hace lo siguiente
    else{
        //En la lista JS agrega el nombre del amigo
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        /*Para cada amigo que haya en la lista JS, agregamos
        el amigo en la lista HTML
        */
       //Limpiamos la lista para que no se repita al agregar uno nuevo
        listaHTML.innerHTML = "";
        for (let amigo of listaAmigos){
            //Primero creamos un elemento de tipo li (Lista)
            let li = document.createElement('li');
            //El contenido de la lista va a ser el nombre del amigo
            li.textContent = amigo;
            //Finalmente agregamos el tipo li a la lista HTML
            listaHTML.appendChild(li);
        }
    }
    //Al acabar, limpiamos el input
    document.getElementById('amigo').value = ('');
}