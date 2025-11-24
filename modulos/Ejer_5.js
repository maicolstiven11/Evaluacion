export const buscarElemento = (lista, elemento) => {
    //creo el for que recorra toda la lista del array
    for(let i =1;i<=lista.length; i++){
        if(lista[i-1]===elemento){ //me ayuda a mirar si hay algun elemento en esta lista estrictamente igual
            return true //retorna verdadero si si o si no true 
        }
    }
    return false
}