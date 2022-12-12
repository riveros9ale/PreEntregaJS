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
const sumaPreciofinal = (a, b, c, d) => {
    return a + b + c + d;
}
alert(nombreDeljuego + " cuesta un total de: " + sumaPreciofinal(precioDeljuego, impuestoIva, impuestoPais, impuestoMonedaExtranjera).toFixed(2));

if (sumaPreciofinal < 200){
    alert("El juego es barato");
} else if (sumaPreciofinal >= 200 && sumaPreciofinal <= 300){
    alert("El juego tiene buen precio");
} else {
    alert("El juego es caro");
}

const juegosDelaTienda = ["Dragon Ball", "Dark Souls", "God of War", "FIFA 23"]
const juegos = [
    {nombre: "Dragon Ball", precio: 2500, genero: "Acción"},
    {nombre: "FIFA", precio: 7000, genero: "Deportes"},
    {nombre: "EFOOTBALL", precio: 8000, genero: "Deportes"},
    {nombre: "God of War", precio: 5000, genero: "Acción"},
    {nombre: "Counter Strike", precio: 1200, genero: "Shooter"},
    {nombre: "Outlast", precio: 1200, genero: "Horror"},
    {nombre: "Amnesia", precio: 1200, genero: "Horror"},
    {nombre: "Call Of Duty", precio: 3200, genero: "Shooter"}
]

const juegoElegido = prompt("Ingrese el nombre del Juego que desea buscar: ");
console.log(juegos.find((juego) => juego.nombre === juegoElegido));

const generoElegido = juegos.filter((juego) => juego.genero.includes("Deportes"));
console.log(generoElegido);