// 1. Exporta una función

console.log("respuesta 1")

export function mayorEdad (edad){

    if (edad <=18) {
        console.error("Error, Debes ser mayor de edad")
    }else{
        console.log("Eres mayor de edad, tu edad es:", edad)

    }
    
    return edad
}
mayorEdad(19)


// 2. Exporta una constante
console.log("respuesta 2")
export const añoactual = 2022
export const mesactual = "febrero"

// 3. Exporta una clase

console.log("respuesta 3")
export class futbol {
    constructor(equipo, jugadorE, liga){
        this.equipo = equipo
        this.jugadorE = jugadorE
        this.liga = liga
    }
    
    ganar(){
        console.log("El jugador", this.jugadorE, "del equipo", this.equipo, "ha ganado la liga", this.liga)
    }

}

let team = new futbol("madrid", "Cristiano Ronaldo", "La Liga Española")
team.ganar()  // 4. Importa una función


// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

console.log("respuesta 7")
//Funcion
/*export default function menorEdad (edad){
    if (edad <=18) {
        console.log("Eres un niño")
    }else{
        console.log("Eres un viejo por que tu edad es: ", edad)

    }
    
    return edad 
}
menorEdad(19)*/

//Constante no se pueden exportar como default

const PI = 3.14
//export default PI 

//Clase
export default class carros{
    constructor(marca, modelo, color){
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }
    
    mostrar(){
        console.log("El carro es de la marca", this.marca, "y el modelo", this.modelo, "y el color", this.color)
    }
}

let carro = new carros("Ford", "Mustang", "rojo")
carro.mostrar()




