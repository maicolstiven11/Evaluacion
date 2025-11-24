export const validarAcceso = function(edad, contrasenaDigitada) {
    const contrasenaValida = "12345"; // Contraseña definida por la empresa

    // Validamos las dos condiciones con operadores lógicos:
    // 1. Edad mayor o igual a 18
    // 2. Contraseña estrictamente igual a la válida
    if (edad >= 18 && contrasenaDigitada === contrasenaValida) {
        return " Acceso concedido: Bienvenido al sistema.";
    } else {
        return " Acceso denegado: Verifique su edad o contraseña.";
    }
};

