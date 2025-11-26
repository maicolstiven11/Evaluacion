// 2. Función expresada: procesa varios productos y acumula el total
export const procesarImpuestos = function() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));//creo una variable llamada cantidad donde le asigno la cadena de texto que ingreso el usuario que convierto en numero entero
    let totalImpuestos = 0; //inicializo la variable totalImpuesto en 0

    // Ciclo para pedir cada producto
    for (let i = 1; i <= cantidad; i++) { //creo un for dento de el inicializo el indice (i)en i despues la condicion de que i sea meno igual a la  despues ejecuta el bloque de codigo y incrementa  hasta q la condicion no se cumpla
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
        let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}: `));

        // Uso la función declarada para calcular el impuesto unitario
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);

        // Acumulamos el impuesto total
        totalImpuestos += impuesto;
    }

    // Retorno el total final
    return totalImpuestos;
};
export function calcularImpuestoUnitario(valor, porcentaje) {
    //saco el impuesto con la formula 
    let impuesto = valor * (porcentaje / 100);
    return impuesto; 
}



