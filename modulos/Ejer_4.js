export function calcularImpuestoUnitario(valor, porcentaje) {
    //saco el impuesto con la formula 
    let impuesto = valor * (porcentaje / 100);
    return impuesto;
}

// 2. Función expresada: procesa varios productos y acumula el total
export const procesarImpuestos = function() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
    let totalImpuestos = 0;

    // Ciclo para pedir cada producto
    for (let i = 1; i <= cantidad; i++) {
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
        let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}: `));

        // Usamos la función declarada para calcular el impuesto unitario
        let impuesto = calcularImpuestoUnitario(valor, porcentaje);

        // Acumulamos el impuesto total
        totalImpuestos += impuesto;
    }

    // Retornamos el total final
    return totalImpuestos;
};

