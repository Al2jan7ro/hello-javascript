// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

console.log("respuesta 1: ")
let numeros = 0

for (numeros = 1; numeros <= 20; numeros++) {
    console.log("Contando ...", numeros)

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("respuesta 2: ")


let i = 0
let suma = 0

while (i < 100) {
    i++

    suma += i
} console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("respuesta 3: ")
let numero = 0

do {

    numero++
    let pares = 0
    pares += numero
    if (pares % 2 === 0) {
        console.log(pares)
    }

} while (numero <= 50)



// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("respuesta 4:")
let nombres = []
nombres = ["sofia", "alejandro", "luisana"]

for (let valor of nombres) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("respuesta 5: ")

let vocales = "hola como estas"
vocales=vocales.toLowerCase()
let contador = 0
let vocal
for (let t = 0; t < vocales.length; t++) {// de esta forma se pueden recorrer arreglos

    vocal = vocales[t]

    if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
        contador++; // asi se pueden hacer contadores
        console.log("el numero de vocales es :", vocal, contador)

    }

}
/* una forma para tomar ejemplo
let numVocales = 0
let cadeTexto = "Cuenta el numero de vocales"
for (let valor of cadeTexto) {
    if ('aeiouAEIOU'.includes(valor)) {
        numVocales++
    }
}
console.log(numVocales)
*/
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log("respuesta 6 : ")
let number = [2,3,4,5,6,7]
let multiplicar = 1
for (t = 0; t < number.length; t++) {

    multiplicar *= number[t]

}
console.log("la multiplicacion del array es: ", multiplicar )


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("respuesta 7: ")    
let tabla = [5*1,5*2,5*3,5*4,5*5,5*6,5*7,5*8,5*9,5*10]
    let j = 0
do {
    console.log(`Respuesta de : 5 x ${j+1} es :` ,tabla[j])
    
    j++

}while( j < tabla.length)

// 8. Usa un bucle para invertir una cadena de texto

console.log("respuesta 8: ")
let texto = "Hola como estas"
 let textoinvertado = ""
 for (let i = texto.length - 1; i >= 0; i--) {
     textoinvertado += texto[i]
 }
 console.log("el texto invertido es :", textoinvertado)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("respuesta 9: ")
let fibonacci = 0   
let numeronew = 0
let numeroSiguiente = 1
console.log("cadena de fibonacci :")

for (let i = 0; i < 10; i++) {
    fibonacci += numeronew
    numeronew = numeroSiguiente
    numeroSiguiente = fibonacci
    console.log(fibonacci)
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("respuesta 10: ")

let numerosnormales = [1,2,3,4,5,6,7,8,9,10,12,13,14]
let numerosmayores = []
console.log("los numeros mayores son :")
for (let i = 0; i < numerosnormales.length; i++) {

    if (numerosnormales[i] >= 10) {

        numerosmayores[i]=numerosnormales[i]
        console.log(numerosmayores[i])

    }

}