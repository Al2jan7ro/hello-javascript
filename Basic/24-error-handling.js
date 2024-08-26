// Exeption

/* esto produce una ecepcion, debido 
a que es algo que no existe
let miObjeto 
console.log(miObjeto.email)*/

//Tratamiendo de errores

//Try-catch, mecanismo simple
console.log("Ejemplo de try-catch")

let miObjeto
try {

    //codigo que intenta ejecutar
    console.log(miObjeto.email)
    console.log("Finaizar la ejecucion")

} catch {
    //Bloque de error donde llega el error
    console.log("Error en la ejecucion")

}

// capturacion del error

try {

    //codigo que intenta ejecutar
    console.log(miObjeto.email)
    console.log("Finaizar la ejecucion")

} catch (error) {
    //Bloque de error donde llega el error
    console.log("Error en la ejecucion: ", error.message)

}

// Finally

console.log("Ejemplo de finally")

try {
    console.log(miObjeto.email)
} catch (error) {
    console.log("Error en la ejecucion: ", error.message)

} finally {
    console.log("Finalizar la ejecucion")
}

/*try {
    console.log(miObjeto.email)
} finally {
    console.log("Finalizar la ejecucion")
}
    de esta forma no funciona*/

//lanzamiento de errorres con el termino throw
//throw new Error("Error en la ejecucion: ")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}



// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}