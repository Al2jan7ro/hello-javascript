// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

console.log("respuesta 1")
let miarreglo = [1, 2, 3, 4, 5]
let [miarray1, miarray2] = miarreglo
console.log(miarray1, miarray2)


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("respuesta 2")
let [miarray3, miarray4, miarray5, miarray6, miarray7, miarray8 = 0] = miarreglo
console.log(miarray3, miarray4, miarray5, miarray6, miarray7, miarray8)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("respuesta 3")
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
let { nombre, apellido, edad } = persona
console.log(nombre, apellido, edad)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

console.log("respuesta 4")
let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}

let { nombre: nombre2, apellido: apellido2 } = persona2
console.log(nombre2, apellido2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("respuesta 5")
let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'calle 1',
        numero: 1
    },

    work: function () {
        console.log('trabajo')
    },

    trabajo: {
        tipo: "diseñador",
        salario: 1000,
        especialidad: "diseño web"
    }

}
let { nombre: name, direccion: { calle, numero }, trabajo: { tipo, salario, especialidad } } = persona3
console.log(nombre, calle, numero, tipo, salario, especialidad)



// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("respuesta 6")

let arreglo1 = [1, 2, 3, 4, 5]
let arreglo2 = [6, 7, 8, 9, 10]
let arreglo3 = [...arreglo1, ...arreglo2]
console.log(arreglo3)


// 7. Usa propagación para crear una copia de un array
console.log("respuesta 7")

let copyarreglo = [...arreglo3]
console.log(copyarreglo)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("respuesta 8")

let objeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'calle 1',
        numero: 1
    },
    work: function () {
        console.log('trabajo')
    },
    
}
let objeto2 = {
    nombre: 'sancehz',
    apellido: 'saeez',
    edad: 23,
}

let objeto3 = {...objeto, ...objeto2, ...persona2, ...persona3} 
console.log(objeto3)

// 9. Usa propagación para crear una copia de un objeto

console.log("respuesta 9")

let objeto4 = {...objeto3}
console.log(objeto4)

// 10. Combina desestructuración y propagación

console.log("respuesta 10")
let objeto5 = {
    nombre: 'pedro',
    apellido: 'andres',
    edad: 87,
    direccion: {
        calles: 'calle 2222',
        numeros: 1221
    },
    work: function () {
        console.log('barbero')
    },
    
}

let {nombre: name2, direccion: { calles, numeros } } = objeto5
console.log(name2, calles, numeros)
objeto5.work()


let LaPropagacion = {...objeto5, ...persona3}
console.log(LaPropagacion)  