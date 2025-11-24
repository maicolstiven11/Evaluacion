import { calcularPromedio } from "./modulos/calcularPromedio1.js";

let cant_notas = parseInt(prompt("Ingrese la cantidad de notas del estudiante: "));
let notas = [];

for (let i = 1; i <= cant_notas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
    notas.push(nota);
}

// Llamamos la función (ella misma muestra los resultados)
calcularPromedio(notas);