//Exportar módulos
/*Sirven para dividir los codigos en piezas
reutilizables, y en archivos separados */


//Con funciones
export function suma (a, b) {// se debe colocar la funcion como export  
  return a + b
}
suma (1, 2)
console.log(suma(1, 2))

// expórtar propiedades

export const PI = 3.14
export let nombre = "PEdrito"

//Exportacion por defecto
/*Si no se especifica el nombre de la exportacion,
se exporta por defecto a la variable global */


/*export default function restar (a, b) {
    return a - b
}*/
/*Se usa para exportar 1 sola cosa */

//Exportar clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimetro() {
        return 2 * Math.PI * this.radius
    }
}
const c = new Circle(5)
console.log(c.area())

// exportacion clase por defecto

export default class MyClase {
    fun(){
        console.log("hola")
    }

}

