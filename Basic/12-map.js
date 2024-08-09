//Estructuras
//Map
/*un map es una coleccion de elementos
cada elemento ya no es unico a diferencia 
del array o el set, cada elemento esta formado
por un par, uno compuesto por una key
y el otro valor por un valor*/

let mimap = new Map()

console.log(mimap)

// Inicializacion

mimap = new Map ([
    ["name","Alejandro"],
    ["correo","ialejandrog15@gmail.com"],
    ["edad", 22]

])

console.log(mimap)

// Métodos y propiedades
// Operacion set

mimap.set("alias","al2jan7ro")
console.log(mimap)
mimap.set("name","luis")
console.log(mimap)

/*Sirve para añadir un nuevo elemento
para modificarlo, las llaves no se repiten*/

// Operacion get
// Para obtener valores

console.log("el valor del map es:", mimap.get("name"))

// Opreacion has
// para verificiar si el map tiene la clave

console.log("la clave existe?",mimap.has("age"))

// keys, values, entries

console.log("las llaves en el mapa es:",mimap.keys())
console.log("los valores en el mapa es:",mimap.values())
console.log("el contenido del mapa es:",mimap.entries())


// Size para ver el tamaño del mapa
console.log("el tamaño del mapa es:",mimap.size)

// delete

mimap.delete("correo")
console.log(mimap)

// clear para vaciar el map

mimap.clear()
console.log(mimap)