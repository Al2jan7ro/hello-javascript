//clases
/*Esu un objeto completo
no es un tipo de dato primitivo, y sirve
para crear objetos, o plantillas de objetos*/

/*No se le dan los valores  de premira*/
//creacion de la plantilla
class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

//sintaxis

let persona = new Persona("Juan", "Perez", 30)
console.log(persona)

let persona2 = new Persona("jose", "daniel", 22)
console.log(persona2)

// De esta manera podemos repetir varias veces el objeto

console.log(typeof persona)//Todos lo que no es primitivo es un objeto

// valores por defecto

class DefaultPersona {

    constructor(nombre = "AGUACATE", apellido = "sin apellido", edad = 0) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

}
let persona3 = new DefaultPersona()
console.log(persona3)

//acceso a propiedades

console.log(persona3.nombre)

persona3.apellido = "perez"
console.log(persona3.apellido)

// Funciones en clases

class Persona2 {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    walk() {
        console.log("Estoy caminando")
    }
}

let persona4 = new Persona2("Juan", "Perez", 30)
console.log(persona4)
persona4.walk()

// Propiedades privadas

class PrivatePersona {


    #bank
    constructor(nombre, apellido, edad, bank) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.#bank = bank
    }

    pay() {
        console.log("Pago con el banco: ", this.#bank)
    }

}

let persona5 = new PrivatePersona("Juan", "Perez", 30, "Banco de España")
console.log(persona5)
//console.log(persona5.#bank)// es privado y ya no se puede acceder

persona5.pay()

persona5.bank = "Banco holandes"
console.log(persona5.bank)

// getters y setters

class GetPersona {
    #nombre
    #apellido
    #edad
    constructor(nombre, apellido, edad, banco) {
        this.#nombre = nombre
        this.#apellido = apellido
        this.#edad = edad

    }


    get nombre() {// aqui permitimos leer esta propiedad
        return this.#nombre
    }

}

persona5 = new GetPersona("Juan", "Perez", 30)
console.log(persona5)

console.log(persona5.nombre)

class SetPersona {
    #nombre
    #apellido
    #edad
    #banco
    constructor(nombre, apellido, edad, banco) {
        this.#nombre = nombre
        this.#apellido = apellido
        this.#edad = edad
        this.#banco = banco
    }


    get nombre() {// aqui permitimos leer esta propiedad
        return this.#nombre
    }

    set banco(nuevobanco) {
        this.#banco = nuevobanco
    }

    /* get banco(){// aqui permitimos leer esta propiedad
         return this.#banco
     }*/


}

let persona6 = new SetPersona("Juan", "Perez", 30)
console.log(persona6)
console.log(persona6.nombre)

persona6.banco = "Banco de España"
console.log(persona6.banco)
// herencia

class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hablar() {
        console.log("Mi nombre en este momento es", this.nombre)
    }
}

class Perro extends Animal {

    hablar() {
        console.log("guauu!")
    }

    correr() {
        console.log("el perro corre")
    }
}

class Gato extends Animal {

    constructor(nombre, tamaño) {
        super(nombre)
        this.tamaño = tamaño
    }

    sonido() {
        console.log("el Gato hace miau")
    }

}

let miPerro = new Perro("nick")
miPerro.correr()
miPerro.hablar()

let miGato = new Gato("wito", 5)
miGato.hablar()
miGato.sonido()


//Metodos estaticos
/*Estos metodos sirven para acceder a datos especificos
como lo pueden ser operaciones matematicas,
se pueden acceder a ellos sin necesidad de realizar
una instancia de la clase*/
class operacionesM {

   static sumar(a, b) {//
        return a + b
    }
}
console.log(operacionesM.sumar(2, 3))
console.log(operacionesM.sumar(5, 3))
console.log(operacionesM.sumar(0, 3))