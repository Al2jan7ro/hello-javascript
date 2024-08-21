//la destructuracion

/*La destructuracion es una sintaxis
que nos permite extraer valores de arrays
o de objetos y asignarlos a varaibles
de manera concisa */

let myArray = [1, 2, 3, 4, 5]

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}

let mivalor = myArray[0]
console.log(mivalor)

// La destructuracion de arrays

let miarray = [1, 2, 3, 4, 5]
let [miarray1, miarray2, miarray3, miarray4, miarray5] = miarray
console.log(miarray1, miarray2, miarray3, miarray4, miarray5)

// Sintaxis arrays con valores predeterminados

 let [miarray6, miarray7, miarray8, miarray9, miarray10 = 0, miarray11 = 0] = miarray
console.log(miarray6, miarray7, miarray8, miarray9, miarray10,miarray11)

// ignorar elementos array
let [miarray12, , miarray14, miarray15] = miarray
console.log(miarray12, miarray14, miarray15)

// Destructurar de objetos

let {nombre, apellido, edad} = persona
console.log(nombre, apellido, edad)

// Sintaxis de objetos con valores predeterminados
// Para desestructurar el objeto tenemos que usar el nombre exdacto de la llave
let {nombre2, apellido2, edad2 = 0, email ="hol@gmail.com"} = persona
console.log(nombre2, apellido2, edad2, email)   

// Sintaxis objetos, pero con nuevos nombres de varaibles
let {nombre: nombre3, apellido: apellido3, edad: edad3} = persona
console.log(nombre3, apellido3, edad3)


//Destrutrar objetos anidados

let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,

    direccion: {
        calle: 'calle 1',
        numero: 1
    },
    work: function() {
        console.log('trabajo')
    }
}

let {nombre : name, edad: age, direccion: {calle, numero}} = persona2
console.log(name, age, calle, numero)                       

// Propagacion de array (9...)
/*permite expandir elementos
de un array a otro array, o de objetos a otros objetos*/

let myArray2 = [...miarray]// copia de array
console.log(myArray2)

let myArray3 = [...miarray, 10, 11, 12]
console.log(myArray3)


// Combinacion de elementos de array

console.log("combinacion de objetos")
let myArray4 = [...miarray, ...myArray3, ...myArray2]
console.log(myArray4)

// Propagacion a objetos

let persona3 = {
    nombre: 'jose',
    apellido: 'ramon',
    edad: 58,
    direccion: {
        calle: 'calle 58',
        numero: 22
    },
    work: function() {
        console.log('trabajo e mi casa')
    }
}


// copia de objetos
let persona4 = {...persona}
console.log(persona4)

//sintaxis de objetos
let persona5  = {...persona, ...persona2, email:"email@gmail.com"}
console.log(persona5)   