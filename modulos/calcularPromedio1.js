export function calcularPromedio(notas) {
    let suma = 0;

    // Recorremos el arreglo con un ciclo for
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calculamos el promedio
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

    // Mostramos directamente los resultados sin redondear
    console.log("Promedio:", promedio);
    console.log("Rendimiento:", rendimiento);

    alert(`Promedio: ${promedio}\nRendimiento: ${rendimiento}`);
}