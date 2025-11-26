import { calcularPromedio } from "./modulos/calcularPromedio1.js";
//creo una varibale llamda cant_notas le asigno lo que ingreso el usuario ya convertido en numero entero
let cant_notas = parseInt(prompt("Ingrese la cantidad de notas del estudiante: "));
let notas = []; //creo una variable llamada notas le asigno un arreglo

for (let i = 1; i <= cant_notas; i++) { //creo un for dento de el inicializo el indice (i)en i despues la condicion de que i sea meno igual a la cantidad de notas despues ejecuta el bloque de codigo y incrementa  hasta q la condicion no se cumpla
    let nota = parseFloat(prompt(`Ingrese la nota ${i}: `)); //creo una variable llamada notas le asigno lo que ingreso el usuario convertido en numero decimal
    notas.push(nota); //agrego la nota en el ultimo puesto del arreglo
}

// Llamamos la función (ella misma muestra los resultados)
calcularPromedio(notas);