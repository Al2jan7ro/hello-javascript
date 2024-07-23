// 1. Concatena dos cadenas de texto

let oracion= "Mi juego favorito"
let juego= "Minecraft, siempre ha sido " + oracion
console.log(juego)

// 2. Muestra la longitud de una cadena de texto
console.log(juego.length)

// 3. Muestra el primer y último carácter de un string

console.log("el primer caracter es la letra: "+ juego[0]+" y el ultimo caracte es la letra :"+juego[43])
// 4. Convierte a mayúsculas y minúsculas un string

console.log(oracion.toUpperCase())
console.log(juego.toLowerCase())
// 5. Crea una cadena de texto en varias líneas

console.log("no tengo la tecla para poner esas comillas")

console.log(`esto es una cadena
    en diferentes lineas`)

    let mensaje = `esta es otra forma
    de hacer 
    la cadena de texto`

    console.log(mensaje)

// 6. Interpola el valor de una variable en un string

console.log(juego.replace("Minecraft","COD"))

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(juego.replace(/ /g, "-"))
/* al usar .replace(/ /g, "-"), estás diciendo 
“reemplaza todos los espacios en blanco
en el string con guiones" 
entre los "//" se especifica lo que se quiere buscar
y con la letra g, se especifica que es global.*/


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(juego.includes("Minecraft"))

// 9. Comprueba si dos strings son iguales
console.log(oracion===juego)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(oracion.length===juego.length)