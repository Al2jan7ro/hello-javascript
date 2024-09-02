//console

//log

console.log("hola")// Metodo mas comun, para informacion mas general

//Variante para errores

console.error("este es un mensaje de error")

console.error ("no se pudo conectar con la base de datos", new Error ("conexion fallida"))

//Variante para advertencias

console.warn("este es un mensaje de advertencia")

//Variante para informacion
console.info("este es un mensaje de informacion")

//console table

let data = [
    ["pedrito", 23],
    ["gatito", 12],
    ["raton", 10]
]

console.table(data)

data = [
   {nombre: "pedrito", edad: 23},
   {nombre: "gatito", edad: 12},
   {nombre: "raton", edad: 10}
]

console.table(data)

// Operaciones de grupo, group () 
console.group("Grupo 1")//para iniciar el grupo
console.log("Nombre: Pedrito")
console.log("Edad: 23")
console.groupEnd()//para cerrar el grupo

// time
/*Se utiliza para medir el tiempo de
 ejecucion de una funcion, o una parte de codigo*/

 console.time("Tiempo de ejecucion")

 for (let i = 0; i < 1000; i++) {
   //console.log(i)
 }
 console.timeEnd("Tiempo de ejecucion")

 //tambien se pueden hacer mediciones en paralelo
 console.time("Tiempo de ejecucion 1")
 for (let i = 0; i < 1000; i++) {
   //console.log(i)
 }

 console.time("Tiempo de ejecucion 2")
 for (let i = 0; i < 1000; i++) {
   //console.log(i)
 }
 //Los nombres del time deben de coincidir
 console.timeEnd("Tiempo de ejecucion 1")
 console.timeEnd("Tiempo de ejecucion 2")

 //assert 
//se puede usar para comprobar condiciones
 let edad = 17

 console.assert(edad >= 18, "Debes ser mayor de edad")

 //count
//se puede usar para contar el numero de veces que se ejecuta una funcion

console.count("clicked")
console.count("clicked")
console.count("clicked")
console.countReset("clicked")

// trace
// Se puede usar para ver el seguimiento de las lineas de ejecucion del codigo

function FunA () {
    FunB()

}

function FunB () {
    console.trace("Seguimiento de la ejecucion")
}

FunA()

//clear
//se puede usar para limpiar la pantalla de la consola
//console.clear()