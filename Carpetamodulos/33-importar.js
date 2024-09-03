
// 9. Exporta una función, una constante y una clase desde una carpeta
console.log("respuesta 9")
//Funcion
export function menorEdad (edad){
    if (edad <=18) {
        console.log("Eres un niño")
    }else{
        console.log("Eres un viejo por que tu edad es: ", edad)

    }
    
    return edad 
}
menorEdad(19)

//Constante no se pueden exportar como default

export const PI = 3.14

//Clase
export class motos{
    constructor(marca, modelo, color){
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }
    
    mostrar(){
        console.log("la moto es de la marca", this.marca, "y el modelo", this.modelo, "y el color", this.color) 
    }
}

let moto = new motos("Honda", "Civic", "Azul")
moto.mostrar()

export let saludo = "hola"

