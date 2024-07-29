// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("respuesta 1: ")
let nombre = "alejandro"

if (nombre == "alejandro") {
    console.log("tu nombre es: ", nombre)

} else {
    console.log("no eres alejandro")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("respuesta 2: ")
const usuario = "alejandro"
const contrasena = "1234"

if (usuario == "alejandro" && contrasena == 1234) {
    console.log("Los datos coinciden")
} else {
    console.log("Los datos no coinciden")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

console.log("respuesta 3: ")
let numero = 0
if (numero > 0) {
    console.log("el numero es positivo")
} else if (numero < 0) {
    console.log("el numero es negativo")
} else if (numero === 0) {
    console.log("el numero es 0")
} else {
    if (isNaN(numero)) // de esta forma se pueden validar numero facilmente
        console.log("No es un numero, ingrese un caracter numerico")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

console.log("respuesta 4: ")

let edad = 18
let añosfaltantes = 18 - edad

if (edad >= 18) {
    console.log("La persona puede  votar")
} else {
    if (edad < 18) {
        console.log("La persona es menor de edad le faltan : ", añosfaltantes, " años por cumplir")
    }
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 


console.log("respuesta 5 :")
let persona
persona = edad >= 18 ? "adulto" : "menor"//para asignar valores con ternarios se hace asi
console.log("la persona es: ", persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("respuesta 6:")

let mes = "febrero"
mes = mes.toLowerCase()
let hemisferio = "norte"
hemisferio = hemisferio.toLowerCase()
/* para que las condiciones de los operadores funciones correctamente
es importante separarlas en parentesis */
if ((mes == "marzo" || mes == "abril" || mes == "mayo") && hemisferio == "norte") {
    console.log("En el hemisferio norte, la estación del año que nos encontramos es primavera")

} else if ((mes == "junio" || mes == "julio" || mes == "agosto") && hemisferio == "norte") {
    console.log("En el hemisferio norte, la estación del año que nos encontramos es verano")

} else if ((mes == "septiembre" || mes == "octubre" || mes == "noviembre") && hemisferio == "norte") {
    console.log("En el hemisferio norte, la estación del año que nos encontramos es otoño")

} else if ((mes == "diciembre" || mes == "enero" || mes == "febrero") && hemisferio == "norte") {
    console.log("En el hemisferio norte, la estación del año que nos encontramos es invierno")

} else if ((mes == "marzo" || mes == "abril" || mes == "mayo") && hemisferio == "sur") {
    console.log("En el hemisferio sur, la estación del año que nos encontramos es otoño")

} else if ((mes == "junio" || mes == "julio" || mes == "agosto") && hemisferio == "sur") {
    console.log("En el hemisferio sur, la estación del año que nos encontramos es invierno")

} else if ((mes == "septiembre" || mes == "octubre" || mes == "noviembre") && hemisferio == "sur") {
    console.log("En el hemisferio sur, la estación del año que nos encontramos es primavera")

} else if ((mes == "diciembre" || mes == "enero" || mes == "febrero") && hemisferio == "sur") {
    console.log("En el hemisferio sur, la estación del año que nos encontramos es verano")

} else {
    console.log("Mes incorrecto");
}



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

console.log("respuesta 7:")

if (mes == "enero" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre") {
    console.log("El mes", mes, "tiene 31 dias")

} else if (mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre") {
    console.log("El mes", mes, "tiene 30 dias")

} else if (mes == "febrero") {
    console.log("El mes de", mes, "tiene 29 dias en este caso, debido a que es año bisiesto")
} else {
    console.log("Mes incorrecto")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("Respuesta 8: ")

let saludo = 2
let idioma

switch (saludo) { // el valor que se le pasa al switch se representa como un numero en la variable
    case 0:
        idioma = "español"
        console.log("Hola como estas!")
        break
    case 1:
        idioma = "ingles"
        console.log("Hello what happens!")
        break
    case 2:
        idioma = "frances"
        console.log("Bonjour comment vas tu?")
        break
    case 3:
        idioma = "portugues"
        console.log("olá, como está?")
        break
    case 4:
        idioma = "coreano"
        console.log("안녕하세요, 어떻게 지내세요?")
        break

    default:
        idioma = "Idioma no existe"
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6
/*
console.log("Respuesta 9: ")

let meses = "agosto"
meses = meses.toLowerCase()
let hemis ="norte"
hemis = hemis.toLowerCase()

let estacion = 1

switch (estacion) {
    case 0:
        if ((meses == "marzo" || meses == "abril" || meses == "mayo") && hemis == "norte") {
            console.log("En el hemisferio norte, en el mes de ",meses,"la estación del año que nos encontramos es primavera")
        }
        break
    case 1:
        if ((meses == "junio" || meses == "julio" || meses == "agosto") && hemis == "norte") {
            console.log("En el hemisferio norte, en el mes de ",meses,"la estación del año que nos encontramos es verano")
        }
        break
    case 2:
        if ((meses == "septiembre" || meses == "octubre" || meses == "noviembre") && hemis == "norte") {
            console.log("En el hemisferio norte, en el mes de ",meses,"la estación del año que nos encontramos es otoño")
        }
        break
    case 3:
        if ((meses == "diciembre" || meses == "enero" || meses == "febrero") && hemis == "norte") {
            console.log("En el hemisferio norte, en el mes de ",meses,"la estación del año que nos encontramos es invierno")
        }
        break
    case 4:
        if ((meses == "marzo" || meses == "abril" || meses == "mayo") && hemis == "sur") {
            console.log("En el hemisferio sur, en el mes de ",meses,"la estación del año que nos encontramos es otoño")
        }
        break
    case 5:
        if ((meses == "junio" || meses == "julio" || meses == "agosto") && hemis == "sur") {
            console.log("En el hemisferio sur, en el mes de ",meses,"la estación del año que nos encontramos es invierno")
        }
        break
    case 3:
        if ((meses == "septiembre" || meses == "octubre" || meses == "noviembre") && hemis == "sur") {
            console.log("En el hemisferio sur, en el mes de ",meses,"la estación del año que nos encontramos es primavera")
        }
        break
    case 3:
        if ((meses == "diciembre" || meses == "enero" || meses == "febrero") && hemis == "sur") {
            console.log("En el hemisferio sur, en el mes de ",meses,"la estación del año que nos encontramos es verano")
        }
        break

        default:
            estacion ="no existe"
}
*/

console.log("respuesta 9 alternativa: ")
let meses = "agosto"
meses = meses.toLowerCase()
let hemis ="sur"
hemis = hemis.toLowerCase()

let estacion;

switch (meses) {
    case "marzo":
    case "abril":
    case "mayo":
        estacion = hemis == "norte" ? "primavera" : "otoño"
        break;
    case "junio":
    case "julio":
    case "agosto":
        estacion = hemis == "norte" ? "verano" : "invierno"
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        estacion = hemis == "norte" ? "otoño" : "primavera"
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        estacion = hemis == "norte" ? "invierno" : "verano"
        break;
    default:
        console.log("Mes incorrecto")
        return;
}

console.log("En el hemisferio", hemis, ", en el mes de", meses, ", la estación del año que nos encontramos es", estacion)




// 10. Usa un switch para hacer de nuevo el ejercicio 7

console.log("Respuesta 10: ")

let dias
mes= "abril"
switch (mes){
    case "enero":
    case "mayo":   
    case "julio": 
    case "agosto": 
    case "octubre": 
    case "diciembre": 
        console.log("El mes",mes,"tiene 31 dias")
    break    
    
    
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("El mes",mes,"tiene 30 dias")
    break

    case "febrero":
        console.log("el mes de",mes,"tiene 29 dias en este caso, debido a que es año bisiesto")
    break

    default:
        dias="el mes es incorrecto"
    
}





