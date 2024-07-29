//if, else if, else

/* para verificar si las condiciones
son verdaderas */
console.log("Esto es para explicar if:")

let edad = 22

if (edad == 22) {
    console.log("ERES UN VIEJO")
} // si la edad no es 22, no se ejecuta

/*else, ejecuta una orden dependiendo
de la condicion */
console.log("Esto es para explicar else:")
if (edad == 22) {
    console.log("ESTAS JOVEN")
} else { //
    console.log("la edad no es la misma")
}

console.log("Esto es para explicar else if:")

if (edad == 22) {
    console.log("ESTAS JOVEN")

} else if (edad < 18) { // se usa entre lineas, entre if y else (si no, no)
    console.log("Eres un niño")

} else { //
    console.log("la edad no es la misma")
}
console.log("Esto es para explicar operadores ternarios:")

//operadores ternairos
// operador ternario para representar la condicional
edad == 22 ? console.log("la edad es 22") : console.log("la edad no es 22")

const mensaje = edad == 23 ? "la edad es 22" : "la edad no es 22"
console.log(mensaje)
/*De esta manera se pueden hacer 
condicionales simples, utilizando
una variable
 */

console.log("Esto es para explicar switch:")

//switch (es menos flexible)
/*es una alternativa a usar else if
varias veces, se usa para comparar
muchas condiciones contra 1
misma variable */

let meses = 12
let nombremes

switch (meses) {
    case 0:
        nombremes = "enero"
        break
    case 1:
        nombremes = "febrero"
        break
    case 2:
        nombremes = "marzo"
        break
    case 3:
        nombremes = "abril"
        break
    case 4:
        nombremes = "mayo"
        break
    case 5:
        nombremes = "junio"
        break
    case 6:
        nombremes = "Julio"
        break
    case 7:
        nombremes = "agosto"
        break
    case 8:
        nombremes = "septiembre"
        break
    case 9:
        nombremes = "octubre"
        break
    case 10:
        nombremes = "noviembre"
        break
    case 11:
        nombremes = "diciembre"
        break

        default:
            nombremes = "Mes incorrecto"         
} console.log(nombremes)
