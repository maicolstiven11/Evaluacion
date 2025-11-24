export const generarTabla = (numero) => {
    let resultados = []; // Arreglo donde guardaremos los resultados

    // Ciclo for para multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }

    // Retornamos el arreglo con los resultados
    return resultados;
};

