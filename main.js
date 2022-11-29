/*Pre-Entrega 1*/
let nombreUsuario = prompt("Ingrese nombre de Usuario")
let password = parseInt(prompt("Ingrese su contraseña"))
const passwordAutorizado = 1234

for (let i = 0; i < 2; i++) {
    if (password === passwordAutorizado) {
        alert("Inicio Correctamente su Usuario");
        break;
    } else {
        password = parseInt(prompt("Vuelva a Intentarlo"));
        alert("Contraseña incorrecta")
    }
}

let nombreDeljuego = prompt("Ingrese el Nombre del Juego:")
let precioDeljuego = parseInt(prompt("Ingrese el Precio de su juego:"));
const impuestoIva = precioDeljuego *21/100;
const impuestoPais = precioDeljuego *35/100;
const impuestoMonedaExtranjera = precioDeljuego *8/100


//Función Flecha
const sumaPreciofinal = (a, b, c, d) => a + b + c + d;
console.log(nombreDeljuego + " cuesta un total de: " + sumaPreciofinal(precioDeljuego, impuestoIva, impuestoPais, impuestoMonedaExtranjera).toFixed(2));

/* console.log(nombreDeljuego + " cuesta un total de: " + precioFinal.toFixed(2)); */
if (sumaPreciofinal < 200){
    alert("El juego es barato");
} else if (sumaPreciofinal >= 200 && sumaPreciofinal <= 300){
    alert("El juego tiene buen precio");
} else {
    alert("El juego es caro")
}