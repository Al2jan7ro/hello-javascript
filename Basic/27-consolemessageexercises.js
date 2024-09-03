// 1. Crea un función que utilice error correctamente
console.log("respuesta 1")

function mensajeError (){

    let edad = 17
    if (edad < 18) {
        console.error("Error, Debes ser mayor de edad")
    }
}
mensajeError()

// 2. Crea una función que utilice warn correctamente
console.log("respuesta 2")
function mensajeWarn (){
    let edad = 17
    if (edad < 18) {
        console.warn("Advertencia, Debes ser mayor de edad")
    }
}

mensajeWarn()
// 3. Crea una función que utilice info correctamente

console.log("respuesta 3")
function mensajeInfo (){
    let edad = 17
    if (edad < 18) {
        console.info("Información, Debes ser mayor de edad")
    }
}
// 4. Utiliza table

console.log("respuesta 4")

let data = [    
    ["pedrito", 23],
    ["gatito", 12],
    ["raton", 10]
]

console.table(data)
//Otra forma para que se vea mas bonito
let data2 = [
    {nombre: "pedrito", edad: 23},
    {nombre: "gatito", edad: 12},
    {nombre: "raton", edad: 10}
]
console.table(data2)

// 5. Utiliza group
console.log("respuesta 5")

console.group("Grupo 1")//para iniciar el grupo
console.log("Nombre: Pedrito")
console.log("Edad: 23")
console.log("Color: rojo")
console.groupEnd()//para cerrar el grupo

// 6. Utiliza time

console.log("respuesta 6")
console.time("Tiempo de ejecucion")
for (let i = 0; i < 100; i++) {
    //console.log(i)
}
console.timeEnd("Tiempo de ejecucion")

// 7. Valida con assert si un número es positivo

console.log("respuesta 7")
let numero = -4
console.assert(numero >= 0, "El numero no es positivo")

// 8. Utiliza count
console.log("respuesta 8")

console.count("clicked")
console.count("clicked")
console.count("clicked")
console.countReset("clicked")

// 9. Utiliza trace
console.log("respuesta 9")

let sumacount = 0
console.trace("Seguimiento de la ejecucion")
for (let i = 0; i < 15; i++) {
    sumacount += i
}

console.log("Sumador", sumacount)
// 10. Utiliza clear
console.log("respuesta 10")
    console.clear()