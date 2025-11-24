import { buscarElemento } from "./modulos/Ejer_5.js"
let Cant_elem= parseInt(prompt("Ingrese la cantidad de elementos:  "))
let lista =[]
for(let i=1; i<=Cant_elem ;i++){
    let elem=prompt(`Ingrese el elemento #${i} a agregar al arreglo`)
    lista.push(elem)
}
let elemento=prompt("Ingrese el elemento a buscar: ")
let consulta= buscarElemento(lista, elemento)
if(consulta==true){
    console.log(`El elemento se encuntra dentro del arreglo`);
}
else{
    console.log(`El elemento no se encuntra dentro del arreglo`);
}