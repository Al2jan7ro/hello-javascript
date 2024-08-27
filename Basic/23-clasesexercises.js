

// 1. Crea una clase que reciba dos propiedades
console.log("Respuesta 1:")
class familia {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, soy ", this.nombre, " y tengo ", this.edad, " años");
    }
}
console.log(familia)


// 2. Añade un método a la clase que utilice las propiedades
console.log("Respuesta 2:")
let miembro = new familia("Pedrito", 43)

familia.prototype.pais = function () { // usando protoype es una forma de añadir métodos a las clases
    return `España es el pais de ${this.nombre}`
}

//tambien podemos añadir metodos de esta forma:
miembro.nacionalidad = undefined

for (let propiedad in miembro) {
    console.log("estas son las propeidades que tenemos:", propiedad)
}




// 3. Muestra los valores de las propiedades e invoca a la función
console.log("Respuesta 3:")
console.log("el nombre es:", miembro.nombre, "de una edad de: ", miembro.edad)
miembro.saludar()

console.log(miembro.pais())

// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
// 6. Crea una clase que haga uso de herencia

console.log("Respuesta 4,5,6")
class capital extends familia {


    constructor(nombre, edad, salario) {
        super(nombre, edad)
        this.salario = salario

    }

    static capitalfamilia(miembro,salario) {
        return salario * miembro.edad * 0.1
    }
}

    let miembro2 = new capital("andress", 33)
    let miembro3 = new capital("jake", 83)
    let miembro4 = new capital("blanca", 13)
    console.log(capital.capitalfamilia(miembro2,1000))
    console.log(capital.capitalfamilia(miembro3,1000))
    console.log(capital.capitalfamilia(miembro4,1000))

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores



/*
Método get
El método get se utiliza para obtener el valor de una propiedad. 
Se define dentro de una clase y se llama automáticamente cuando se accede a la propiedad.

Método set
El método set se utiliza para establecer el valor de una propiedad. 
También se define dentro de una clase y se llama automáticamente cuando se asigna un valor a la propiedad.

Los métodos get y set se relacionan con las propiedades 
privadas de una clase al proporcionar una forma controlada de acceder y modificar esas propiedades. 



*/

console.log("respuesta 7,8,9")
class persona{

   #sexo
   #ciudad
    constructor(nombre, edad, sexo, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.#sexo = sexo;
        this.#ciudad = ciudad;
    }

    get sexo() {
        return this.#sexo
    }

    get ciudad() {
        return this.#ciudad
    }
    
    set ciudad(nuevaCiudad) {
        this.#ciudad = nuevaCiudad

    }


    saludar() {
        console.log("hola mi nombre es", this.nombre, "vivo en la ciudad de: ", this.ciudad, " y tengo la edad de ",this.edad);
    }
}

let humano = new persona("andressita", 33, "mujer", "Barcelona")
console.log(humano)
console.log(humano.sexo)
console.log(humano.ciudad)
humano.ciudad = "miami"
console.log(humano.ciudad)
humano.saludar()



// 10. Sobrescribe un método de una clase que utilice herencia 

console.log("Respuesta 10")

class hobbies extends persona {
    constructor(nombre, edad, sexo, ciudad, musica, deporte) {
        super(nombre, edad, sexo, ciudad)
        this.musica = musica
        this.deporte = deporte
    }


    saludar() {
        console.log("hola mi nombre es", this.nombre, "vivo en la ciudad de: ", this.ciudad, " y tengo la edad de ",this.edad);
        console.log("mi musica favorita es: ", this.musica)
        console.log("y mi deporte favorito es: ", this.deporte)
    }
}

let miHobbies = new hobbies("andress", 33, "mujer", "Barcelona", "piano", "futbol")
console.log(miHobbies)
miHobbies.saludar()