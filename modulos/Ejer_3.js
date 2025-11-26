export const generarTabla = (numero) => { //creo una constante llamada generarTabla y le asigno una funcion flecha donde recibo los paramentros
    let resultados = []; // Arreglo donde guardaremos los resultados

    // Ciclo for para multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) { //creo un for dento de el inicializo el indice (i)en i despues la condicion de que i sea meno igual a 10 de elementos despues ejecuta el bloque de codigo y incrementa  hasta q la condicion no se cumpla
        resultados.push(`${numero} x ${i} = ${numero * i}`);//agrego en la ultima posicion del arreglo la tabla del numero elegido donde se multiplica por el indice las 10 veces
    }

    // Retornamos el arreglo con los resultados
    return resultados;
};

