// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("respuesta 1: ")
function suma(a, b) {
    return a + b
} console.log("el resultado de la suma es:", suma(2, 3))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("respuesta 2: ")
function numeromayor(numeros) {
    let mayor = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor

} console.log("El numero mayor es: ", numeromayor([2, 3, 1, 5, 4, 20, 32, 42]))



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

console.log("respuesta 3 : ")

function letras(palabra) {
    palabra = palabra.toLowerCase()
    let contador = 0
    let vocal
    for (let t = 0; t < palabra.length; t++) {// de esta forma se pueden recorrer arreglos

        vocal = palabra[t]

        if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
            contador++;
            console.log("el numero de vocales es :", vocal, contador)

        }

    }


} letras("adios amigo mio")


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("respuesta 4 : ")

function textomayus(textomayus) {
    let textomayus2 = []
    for (let i = 0; i < textomayus.length; i++) {//para convertir array a otro, se puede usar bucles
        textomayus2[i] = textomayus[i].toUpperCase()
    }
    return textomayus2

} console.log("el texto en mayusculas es: ", textomayus(["hola", "adios", "amigo"]))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }
    if (numero === 2) {
        return true // 2 es el único número primo par
    }
    if (numero % 2 === 0) {
        return false// Si es divisible por 2 y no es 2, no es primo
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

console.log("¿El número es primo?", esPrimo(29))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

console.log("respuesta 6:")

function comunes(array1, array2) {
let elementosComunes = []   

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                elementosComunes.push(array1[i])
            }
        }
    }
    return elementosComunes 

} console.log("los comunes son:", comunes([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]))    

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

console.log("respuesta 7: ")

function sumaPares(numeros) {

let suma = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        suma += numeros[i]
    }
}
return suma


}console.log("la suma de los numeros pares es:", sumaPares([1,2,3,4,5,6,7,8,9,10]))



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

console.log("respuesta 8: ")
function numeroelevado (numeroArray){


    let numeroElevado = []
    for (let i = 0; i < numeroArray.length; i++) {
        numeroElevado[i] = numeroArray[i] ** 2
    }
    return numeroElevado


}console.log("el arrray con los numeros elevados al cuadrado es :", numeroelevado([2,3,4,5,6,7]))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertir(cadena){
    cadena = cadena.toLowerCase()
    let textoinvertado = ""
    for (let i = cadena.length - 1; i >= 0; i--) {
        textoinvertado += cadena[i]
    }
    return textoinvertado

}console.log("el texto invertido es :", invertir("Hola como estas"))


// 10. Crea una función que calcule el factorial de un número dado

console.log("respuesta 10: ")

function factorial(numerofact){
    

if (numerofact === 0||numerofact === 1){
    return 1
}
else{
    return numerofact * factorial(numerofact - 1)
}
}console.log("el factorial de 5 es :", factorial(6))