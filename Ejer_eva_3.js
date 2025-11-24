import { generarTabla } from "./modulos/Ejer_3.js";
// Pido el número base al usuario
let numero = parseInt(prompt("Ingrese el número para generar su tabla de multiplicar: "));

// Uso la función flecha
let tabla = generarTabla(numero);

// Mostramos los resultados en consola
console.log("Tabla de multiplicar del número:", numero);
console.log(tabla);

