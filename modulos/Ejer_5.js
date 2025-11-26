export const buscarElemento = (lista, elemento) => {
    //creo el for que recorra toda la lista del array
    for(let i =1;i<=lista.length; i++){ //creo un for dento de el inicializo el indice (i)en 1 despues la condicion de que i sea meno igual a la cantidad de elementos que tiene la lista o array despues ejecuta el bloque de codigo y incrementa  hasta q la condicion no se cumpla
        if(lista[i-1]===elemento){ //me ayuda a mirar si hay algun elemento en esta lista estrictamente igual
            return true //retorna verdadero si esta o si no false 
        }
    }
    return false
}