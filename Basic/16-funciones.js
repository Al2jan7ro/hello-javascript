/*es un bloque de codigo diseñado
para realizar una accion especifica*/
console.log("Funciones normal")

function miFunc() {
    console.log("hola esta es mi funcion")
}

miFunc()

for (let i = 0; i <= 5; i++) {
    miFunc()
}
console.log("Funciones con parametros")

//funcion con parametros
function miFuncConParametros(nombre) {
    console.log(`Hola como estas, ${nombre}`)
}

miFuncConParametros("ale") // se puede reutilizar
miFuncConParametros("wito")

//Funciones anonimas
console.log("Funciones anonimas")
const miFunc2 = function (nombre) {
    console.log(`hola, ${nombre}`)
}

miFunc2("alejandro")
/*Tienen la capicidad de almacenarse 
en una variale o constante */


console.log("Funciones arrow")

// Arrow functions o funciones flechas
const miFunc3 = (nombre) => {
    console.log(`hola que tal, ${nombre}`)

}

miFunc3("Alejandro guillen")
//variacion de arrow
const miFunc4 = (nombre) => console.log(`Ey que tal, ${nombre}`)

miFunc4("luis guillen")

console.log("Suma con funciones normal")

function suma(a, b) {
    console.log("El resultado de la suima es", a + b)
}

suma(5, 10)
suma(5)
suma()

console.log("Suma con valores por defecto")

function sumaValorDefecto(a = 0, b = 0) {
    console.log("El resultado de la suima es", a + b)
}

sumaValorDefecto(5, 10)
sumaValorDefecto(5)
sumaValorDefecto()

// valores de retorno
console.log("Funcion con valores de retorno")
function multi(a, b) {

    return a * b
}
let resultado = multi(5, 5)
console.log("la multiplicacion es: ", resultado)

// Funciones aninadas

function externa(){
    console.log("Funcion Externa")
        function interna(){
            console.log("Funcion interna")
        }

        interna()//Hay que llamarla dentro para poder invocarla tambien
}

externa()
//interna() : ERROR, fuera del scope (no esta en el rango de los {} de la primera funcion que esatmos llamando)

//Funciones de orden superior

function miFuncSuperior(func,param){

    func(param)

}
miFuncSuperior(miFunc4,"funcion de orden superior")

// las funciones de orden superior sirven para anidar otras funciones

//Funcion for each
/*El método forEach en JavaScript es una 
función de orden superior que se utiliza 
para iterar sobre los elementos de un array. */
console.log("for each")
miarreglo = [1,2,3,4]
miset = new Set(["Ale","Gato",2024])
mimapi = new Map([
    ["hola", "adios"],
    ["como estas",2024],
])
miarreglo.forEach(function (value){
    console.log(value)
})

console.log("for each version corta")

miarreglo.forEach((value)=>console.log(value))

console.log("for each version corta, para set")

miset.forEach((value)=>console.log(value))

console.log("for each version corta, para map")

mimapi.forEach((value)=>console.log(value))


