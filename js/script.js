//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

/* 

// mi version
function setRandomColor() {
    var color = colors[Math.floor(colors.length * Math.random())];
    document.body.style.backgroundColor = color
}
*/

function setBgYellow(){
    document.body.style.backgroundColor = "yellow"
}

/**
 * 1. Necesitamos crear una función que devuelva un color aleatorio entre todos los colores del array 'colors'. Crea esta función o mira por Internet como hacer para escoger una posición aleatorio de un array
 */

function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.

    var color = colors[Math.floor(colors.length * Math.random())];

   return color;

}


/**
 * 2. Debemos seleccionar el botón a clicar, y todo el elemento 'body'. Guarda cada uno de los elementos en una variable. Deberían ser tan solo dos líneas de código. Muestra por consola el valor de las variables para comprobar que has seleccionado los elementos adecuados
 */

 let body = document.body;
 let button = document.getElementById('buttonRandomColor')

 /**
  * 3. Asocia al botón 'button' un evento onclick. Dicho evento debe llamar a una función; que se va a encargar de:
  * 
  *   A) Llamar a la otra función 'getRandomColor' y obtener un color aleatorio
  *    B) Modificar el 'backgroundColor' del body con el valor que hemos conseguido. Deves investigar como cambiar el color del fondo de un elemento HTML a través de JavaScript
  */

 button.addEventListener("click", changeBgColor);

 function changeBgColor(){

    var color = getRandomColor();

    body.style.background = color;

 }