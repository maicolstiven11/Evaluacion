import { buscarElemento } from "./modulos/Ejer_5.js" //importo el modulo  necesario para el ejercicio 5
let Cant_elem= parseInt(prompt("Ingrese la cantidad de elementos:  "))// creo una variable llamda Cant_elem y la candena de texto que ingrese el usuario la conviento en numeros enteros donde le asigno a la variable
let lista =[] //creo una variable a la cual le asigno un array vacio
for(let i=1; i<=Cant_elem ;i++){ //creo un for dento de el inicializo el indice (i)en 1 despues la condicion de que i sea meno igual a la cantidad de elementos despues ejecuta el bloque de codigo y incrementa  hasta q la condicion no se cumpla
    let elem=prompt(`Ingrese el elemento #${i} a agregar al arreglo`) //creo una variable llamada elem donde le asigno la cadena de texto que ingrese el usuario
    lista.push(elem)  //agrego en la ultima posicion de el arreglo el elemento que ingreso el usuario
}
let elemento=prompt("Ingrese el elemento a buscar: ") // creo una varible llamada elemento donde el asigno la cadena de texto que ingrese el usuario
let consulta= buscarElemento(lista, elemento) //creo una variable llamada consulta donde le asigno el valor que retorne la funcion y envio los argumentos
if(consulta==true){  //si el valor que retorno la funcion es igual a true entonces el elemento se encuentra dentro del arreglo
    console.log(`El elemento se encuntra dentro del arreglo`);
}
else{   //si no el elemento no se encuentra alli 
    console.log(`El elemento no se encuentra dentro del arreglo`);
}