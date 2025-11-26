export const validarAcceso = function(edad, contrasenaDigitada) { //creo una funcion expresada la exporto y recibo los parametros 
    const contrasenaValida = "12345"; // Contraseña definida por la empresa y nunca cambiara 

    // Valido las dos condiciones con operadores lógicos:
    // 1. Edad mayor o igual a 18
    // 2. Contraseña estrictamente igual a la válida
    if (edad >= 18 && contrasenaDigitada === contrasenaValida) {
        return " Acceso concedido: Bienvenido al sistema.";
    } 
    else { //si la condicion no se cumple retorna que el acceso es denegado
        return " Acceso denegado: Verifique su edad o contraseña.";
    }
};

