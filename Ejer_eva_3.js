import { generarTabla } from "./modulos/Ejer_3.js"; //importo el modulo necesario para el punto 3
// Pido el número base al usuario
let numero = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar: "));

// Uso la función flecha
let tabla = generarTabla(numero);

// Mostramos los resultados en consola
console.log("Tabla de multiplicar del número:", numero);
console.log(tabla);

