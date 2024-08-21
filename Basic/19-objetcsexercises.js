// 1. Crea un objeto con 3 propiedades
console.log("respuesta 1")

let miobjeto = {
    nombre: "gato",
    color: "blanco",
    edad: 4
}

// 2. Accede y muestra su valor

console.log("respuesta 2")

console.log(miobjeto)

// 3. Agrega una nueva propiedad
console.log("respuesta 3")
miobjeto.sexo = "macho"
console.log(miobjeto)

// 4. Elimina una de las 3 primeras propiedades

console.log("respuesta 4")
delete miobjeto.color
console.log(miobjeto)

// 5. Agrega una función e invócala

console.log("respuesta 5")

let MIObjetoFunct = {
    nombre: "gato",
    color: "blanco",
    edad: 4,
    saludar: function () {
        console.log("Hola, soy", this.nombre)
    }
}
console.log(MIObjetoFunct)
MIObjetoFunct.saludar()

//6. Itera las propiedades del objeto

console.log("respuesta 6")
for (let key in miobjeto) {
    console.log(key, miobjeto[key])
}


// 7. Crea un objeto anidado

console.log("respuesta 7")
let MiObjeto2 = {
    nombre: "gato",
    color: "blanco",
    edad: 4,
    saludar: function () {
        console.log("Hola, soy", this.nombre)
    },
    dueñogato: {
        nombre: "alexs",
        edad: 92,
        sexo: "masculino",

        darcomida: function () {
            console.log("Mi dueño", this.nombre, "me da de comer")

        }
    }

}
console.log(MiObjeto2)
MiObjeto2.dueñogato.darcomida()

// 8. Accede y muestra el valor de las propiedades anidadas

console.log("respuesta 8")
console.log(MiObjeto2.dueñogato)


// 9. Comprueba si los dos objetos creados son iguales

console.log("respuesta 9")
console.log(miobjeto === MiObjeto2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log("respuesta 10")
console.log(miobjeto.nombre === MiObjeto2.dueñogato.nombre)