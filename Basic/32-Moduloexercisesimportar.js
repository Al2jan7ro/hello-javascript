// 5. Importa una constante

console.log("respuesta 5")
import {añoactual, mesactual} from "./31-Modulesexercises.js"
console.log(añoactual)
console.log(mesactual)  

// 6. Importa una clase

console.log("respuesta 6")

import {futbol} from "./31-Modulesexercises.js"

let team = new futbol("Leicester city", " Vardy", "Premier League")
team.ganar()  


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
//import {menorEdad} from "./31-Modulesexercises.js"

//import {PI} from "./31-Modulesexercises.js"
import carros from "./31-Modulesexercises.js"

let carro = new carros("Toyota", "supra", "Negro")
carro.mostrar()

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
console.log("respuesta 10")
import {menorEdad, PI, motos,saludo} from "../Carpetamodulos/33-importar.js"

console.log(menorEdad(19))
console.log(PI)
let motitos = new motos("Honda", "Civic", "Azul")
motitos.mostrar()
console.log(saludo)


