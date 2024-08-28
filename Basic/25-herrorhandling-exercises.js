// 1. Captura una excepción utilizando try-catch
console.log("respuesta 1")

class prueba {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    sumar() {
        return this.a + this.b
    }
}
try {

    console.log(prueba(1, 0))

} catch (error) {
    console.log("se a producido un error: ", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

console.log("respuesta 2")
let sumar = new prueba(1, 2)
sumar.sumar()
console.log("suma es: ", sumar.sumar())
try {

    sumar.prototype.resta = function () {
        return this.a - this.b
    }

} catch (error) {

    console.log("se a producido un error: ", error.message)

} finally {
    console.log("se ha terminado de ejecutar")
}
// 3. Lanza una excepción genérica
console.log("respuesta 3")
prueba.prototype.resta = function () {
    return this.a - this.b
}

let resta = new prueba(0, 0)

try {
    if (resta.resta() == 0) {
        throw new Error("El resultado es cero")
    } else {
        console.log("La resta es: ", resta.resta())

    }

} catch (error) {
    console.log("se a producido un error: ", error.message)
}

// 4. Crea una excepción personalizada
// 5. Lanza una excepción personalizada

console.log("respueta 4 y 5")

class restaCeroError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    losNumeros() {
        console.log(this.a, " - ", this.b)
    }
}

function restarCero(a, b) {
    if (a == 0 || b == 0) {
        throw new restaCeroError("Se está intentando restar cero", a, b)
    }
    return a - b

}

try {
    console.log("El resultado de la resta es:", restarCero(4, 2))
} catch (error) {
    console.log("se a producido un error: ", error.message)
    error.losNumeros()
}



// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch
console.log("respuesta 6 y 7")
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value)
    /*de esta manera
    podemos asegurarnos de que el valor es un número, pero no es NaN*/
}

function restarExtraError(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("Solo se pueden restar números", a, b)
        /*TypeError: Ocurre cuando una operación 
        no puede ser completada debido a un tipo de 
        dato incorrecto. */
    }
    if (a == 0 || b == 0) {
        throw new restaCeroError("Se está intentando restar cero", a, b)
    }

    if (a < 0 || b < 0) {
        throw new Error("Se está intentando restar negativo", a, b)
    }


    return a - b

}

try {
    console.log("la resta es: ", restarExtraError(4, 2));
} catch (error) {
    if (error instanceof restaCeroError) {
        console.log("se ha producido un error: ", error.message);
    } else if (error instanceof TypeError) {
        console.log("se ha producido un error de tipo TypeError: ", error.message);
    } else {
        console.log("se ha producido un error de tipo: ", error.message);
    }
}

try {
    console.log(restarExtraError(-4, 2));
} catch (error) {
    if (error instanceof restaCeroError) {
        console.log("se ha producido un error: ", error.message);
    } else if (error instanceof TypeError) {
        console.log("se ha producido un error de tipo TypeError: ", error.message);
    } else {
        console.log("se ha producido un error de tipo: ", error.message);
    }
}

try {
    console.log(restarExtraError("asda", 2));
} catch (error) {
    if (error instanceof restaCeroError) {
        console.log("se ha producido un error: ", error.message);
    } else if (error instanceof TypeError) {
        console.log("se ha producido un error de tipo TypeError: ", error.message);
    } else {
        console.log("se ha producido un error de tipo: ", error.message);
    }
}

try {
    console.log(restarExtraError(0, 0));
} catch (error) {
    if (error instanceof restaCeroError) {
        console.log("se ha producido un error: ", error.message);
    } else if (error instanceof TypeError) {
        console.log("se ha producido un error de tipo TypeError: ", error.message);
    } else {
        console.log("se ha producido un error de tipo: ", error.message);
    }
}



// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("respuesta 8");

let numero = "aaaa";
let i = 0;

for (i = 0; i < numero.length; i++) {
    try {
        let floatvalor = parseFloat(numero[i]);

        if (isNaN(floatvalor)) {
            throw new TypeError("El valor no es un número");
        }

        console.log(floatvalor);
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("se ha producido un error de tipo TypeError: ", error.message);
        } else {
            console.log("se ha producido un error: ", error.message);
        }
    }
}



// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

console.log("respuesta 9")
let objeto = {
    nombre: "Pepe",
    edad: 20
}

class verificacionError extends Error {
    constructor(message, propiedad) {
        super(message)
        this.propiedad = propiedad
    }
}
function verificaPropiedad(objeto, propiedad) {
    if (propiedad in objeto) {
        console.log("El objeto tiene el propiedad: ", propiedad)

    }

    else {
        throw new verificacionError("El objeto no tiene la propiedad", propiedad)
    }
}

try {
    verificaPropiedad(objeto, "aguacate")
} catch (error) {

    if (error instanceof verificacionError) {
        console.log("se ha producido un error: ", error.message)
    }
}


try {
    verificaPropiedad(objeto, "edad")
} catch (error) {
    if (error instanceof verificacionError) {
        console.log("se ha producido un error: ", error.message)
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

console.log("respuesta 10")

function reintentosPropiedad(objeto, propiedad) {
    for (let i = 0; i < 10; i++) {

        try {
            verificaPropiedad(objeto, propiedad)
            break
        } catch (error) {
            if (error instanceof verificacionError) {
                console.log("se ha producido un error: ", error.message)
            }
        }
    }
}

reintentosPropiedad(objeto, "nombre")   