const formulario = document.querySelector("form") /* Se elimina el #, ya que se está haciendo referencia a una etiqueta y no a un ID */


/* Se utiliza la syntaxis correcta de onsubmit */
formulario.onsubmit = function(event) {

  event.preventDefault();
  
  /* Se sustituye var por const para y se unifican dos variables para reducir el código ymejorar legibilidad */
  const nombre = formulario.elements[0].value
  const edad = formulario.elements[1].value
  const na = formulario.elements[2]

/*   var nombre = n.value
 var edad = e.value */ 

  const i = na.selectedIndex
  const nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)


/* Se usa getElementById para agregar el estilo error al id name */
  if (nombre.length === 0) {
    document.getElementById('name').classList.add("error")
  } else if (edad < 18 || edad > 120 || edad <= 0 ) { /* se agrega  condición para que marque error al agregar edades negativas*/
    document.getElementById('age').classList.add("error")
  } else
   /* se pueden omitir estas líneas, ya que si no se cumple ninguna de las anteriores condiciones, se ejecutará la llamada a la función if (nombre.length > 0 && (edad > 18 
    && edad < 120) ) */ {
  agregarInvitado(nombre, edad, nacionalidad)
  } 
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") /* se sustituye added por add */
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}