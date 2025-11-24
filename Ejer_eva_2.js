import { validarAcceso } from "./modulos/Ejer_2.js";
//indico al usuario que ingrese la edad y la contraseña
let edad = parseInt(prompt("Ingrese su edad: "));
let contrasena = prompt("Ingrese su contraseña: ");

// Uso la función expresada
let mensaje = validarAcceso(edad, contrasena);

// Muestro el resultado
console.log(mensaje);
alert(mensaje);