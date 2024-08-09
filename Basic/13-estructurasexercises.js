// 1. Crea un array que almacene cinco animales

let animales = []
animales = ["gato","perro","raton","gallina","pato"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.push("leon")
animales.unshift("tigre")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición


/*el primer elemento es el indice del array
el segundo es la cantidad de elementos
del array que eliminaras*/
animales.splice(3,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

console.log("respuesta 4:")
let libros = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
console.log("respuesta 5:")

libros.add("Libro 6")
libros.add("Libro 4")
console.log(libros)

// 6. Elimina uno concreto a tu elección

console.log("respuesta 6: ")
libros.delete("Libro 1")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

console.log("respuesta 7: ")

let meses = new Map([
    [1,"enero"],
    [2,"febrero"],
    [3,"marzo"],
    [4,"abril"],
    [5,"mayo"],
    [6,"junio"],
    [7,"julio"],
    [8,"agosto"],
    [9,"septiembre"],
    [10,"octubre"],
    [11,"noviembre"],
    [12,"diciembre"],
])

console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("respuesta 8: ")

console.log("El mes numero 5 si existe?: ",meses.has(5), ", y su valor es", meses.get(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("respuesta 9: ")


let verano = []
verano = ["junio","julio","agosto"]

meses.set("meses verano", verano)
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("respuesta 10: ")

let futbol = []
futbol = ["madrid","barsa","manchester"]

console.log(futbol)

//asi se transforma a un set, solo se llama la variable

let futbolset = new Set(futbol)
console.log(futbolset)

let mapafutb = new Map([
    ["Clubs", futbolset]
])

console.log(mapafutb)