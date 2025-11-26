export function calcularPromedio(notas) { //declaro una funcion llamada calcularPromedio donde recibo el parametro de notas que es un arreglo
    let suma = 0; //inicializo la variable suma en 0

    // Recorro el arreglo con un ciclo for
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i]; //sumo el total de notas y la agrego a la variable de incremento
    }

    // Calculamos el promedio donde el valor se lo asignamos a la variable promedio
    let promedio = suma / notas.length;

    // Determinamos el rendimiento con condicionales
    let rendimiento; 
    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Mostramos directamente los resultados en consola y con alert en pantalla como una alerta
    console.log("Promedio:", promedio);
    console.log("Rendimiento:", rendimiento);
    
    alert(`Promedio: ${promedio}\nRendimiento: ${rendimiento}`);
}