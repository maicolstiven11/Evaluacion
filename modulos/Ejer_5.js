export const buscarElemento = (lista, elemento) => {
    for(let i =1;i<=lista.length; i++){
        if(lista[i-1]===elemento){
            return true
        }
    }
    return false
}