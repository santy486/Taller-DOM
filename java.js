let inicio = prompt("Ingresa tu nombre!");
let iniciar = document.getElementById("iniciar")
iniciar.innerHTML = "Hola!, " + inicio + " esta pagina fue creada con el fin de que puedas guardar tu lista de restaurantes favritos. :)"

/* .......................................... */

let boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    let cancion = document.getElementById("canciones").value;

    let lista = document.getElementById("lista");

    let etiquetaNueva = document.createElement("li");
    etiquetaNueva.textContent = cancion;

    lista.appendChild(etiquetaNueva);
})

lista.addEventListener("dblclick", function (e) {
    
    let cancionEliminar=e.target

    lista.removeChild(cancionEliminar);
})
