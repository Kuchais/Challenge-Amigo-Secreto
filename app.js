let listaAmigos = []; //Lista para guardar los amigos JS

let listaHTML = document.getElementById('listaAmigos'); //Referenciar la lista HTML
//Nota: las listas HTML no tienen propiedad .value

function agregarAmigo(){ //Funcion principal al presionar el boton agregar amigo
    nombreAmigo = document.getElementById('amigo').value; //Guardar el dato del input en la variable
    if (nombreAmigo == ''){ //Si no se ha ingresado un nombre
        alert("Por favor, inserte un nombre") //Lanzar alerta
    }
    else{ //Si ha puesto un nombre
        listaAmigos.push(nombreAmigo); //En la lista JS agrega el nombre del amigo
        listaHTML.innerHTML = ""; //Limpiamos la lista para que no se repita al agregar uno nuevo
        
        /*Para cada amigo que haya en la lista JS, agregamos
        el amigo en la lista HTML
        */
        
        for (let amigo of listaAmigos){
            let li = document.createElement('li'); //Primero creamos un elemento de tipo li (Lista)
            li.textContent = amigo; //El contenido de la lista va a ser el nombre del amigo
            listaHTML.appendChild(li); //Finalmente agregamos el tipo li a la lista HTML
        }
    }
    document.getElementById('amigo').value = (''); //Al acabar, limpiamos el input
}

function sortearAmigo(){
    if (listaAmigos == ''){
        alert("Agregue al menos 2 amigos");
    }
}