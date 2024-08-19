/*Son los datos que en realidad
no son primitivos, es una colicion 
de propiedades, y se estructura de una forma
parecida a los mapas, clave y valor */

//Inicializacion de un objeto
/*Son de instancia unica los objetos */
let persona = {
    nombre: "Ale",
    edad: 22,
    sexo: "Masculino",
}

//acceso a propiedades del objeto

//Se llaman con la notacion llamada por punto
console.log("el nombre es",persona.nombre)

//Notacion de corchete
console.log(persona["nombre"])

// Modificacion
persona.nombre = "Gato"
console.log("nombre modificado",persona.nombre)

persona.edad = "22"
console.log("la edad es",persona.edad)

//Para saber el tipo de dato usamos:
console.log(typeof persona.edad)

//Eliminar propiedades del objeto

delete persona.sexo
console.log(persona)

//Añadir una propiedades nueva
persona.sexo = "Femenino"
persona.pais = "Portugal"

console.log(persona)


//Metodos de objetos (funciones)
let carro = {
    marca: "toyota",
    color: "Blanco",

    velocidad: function(){
        console.log("El carro va muy rapido")
    }
    
}
carro.velocidad()//Tambien podemos usar funciones en los objetos

// Anidar objetos
let trabajar = {
    nombret: "programador",
    sueldo : 1000,

    especialidad: function(){
        console.log("Fronted")
    },
    carros: {
        marca: "Mustang",
        color: "negro",
        Precio: function(){
            console.log("El carro Costo 20000")
        }
    }

}

console.log("El objeto trabajar contiene",trabajar)
console.log("El objeto carros dentro del objeto trabajar es",trabajar.carros)
console.log("El color del carro es:",trabajar.carros.color)
trabajar.carros.Precio()

//Igualdad de objetos

console.log(persona)

let persona2 = {
    nombre: "Ale",
    edad: 22,
    sexo: "Masculino",
}

console.log("Son iguales? a nivel de valores",persona === persona2)
console.log("Son igualaes? a nivel de valor  y identidad?",persona === persona2)
/*los objetos se guardan en memoria con una direccion
de memoria, no con un valor   */

// Recorrer objetos

// asi recorrermos las llaves del objeto
for (let valor in persona){
    console.log(valor)
}

// asi recorrermos los valores del objeto
console.log(`Recorrido del objeto, llaves y valores
con el uso de for in, variante de for off`)
for (let key in persona){
    console.log(key + ": " + persona[key])
    
}

//Recorrido con for normal
/*Recorrido con for normal*/

console.log(`Recorrido del objeto, con for normal`)
for (i = 0; i< persona.length; i++){
    console.log(persona[i])
}

//Usar referencia this en los objetos y metodos

let persona3 = {
    nombre: "Ale",
    edad: 22,
    sexo: "Masculino",
    
    saludar: function(){
        console.log("Hola, soy",this.nombre)
    }
}
persona3.saludar()

// Usar this haciendo interpolacion
let persona4 = {
    nombre: "Ale",
    edad: 22,
    sexo: "Masculino",
    
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
persona4.saludar()

// Usar objetos como funciones


// No se recomienda crear objetos con funciones
function person (name,age){
    this.name = name
    this.age = age
}

let person1 = new person("Ale",22)
console.log(person1)
console.log(typeof person1)
console.log(typeof persona)