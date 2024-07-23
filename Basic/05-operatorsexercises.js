// 1. Crea una variable para cada operación aritmética

let suma= 5+5
let resta= 5-5
let multiplicacion= 5*5
let division=5/5
let resto=5%5
let exponencial=5**5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = 5
asignacion+= suma
console.log(asignacion)

let asignacion2 = 5
asignacion2-=resta
console.log(asignacion2)

let asignacion3 = 5
asignacion3*= multiplicacion
console.log(asignacion3)

let asignacion4 = 5
asignacion4/= division
console.log(asignacion4)

let asignacion5 = 5
asignacion5%= resto
console.log(asignacion5)

let asignacion6 = 5
asignacion6 **= exponencial
console.log(asignacion6)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log("respuesta 3:")

console.log(suma<multiplicacion)
console.log(resta<=multiplicacion)
console.log(division!=suma)
console.log(exponencial>suma)
console.log(multiplicacion>=division)



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("respuesta 4:")
console.log(suma==resta)
console.log(exponencial<=multiplicacion)
console.log(division<resto)
console.log(suma!=suma)
console.log(multiplicacion===exponencial)
// 5. Utiliza el operador lógico and
console.log("respuesta 5 operador logico and : ")
console.log(suma < multiplicacion && resta < exponencial)

// 6. Utiliza el operador lógico or
console.log("respuesta 6 operador logico or : ")

console.log(multiplicacion > suma || multiplicacion < exponencial)
// 7. Combina ambos operadores lógicos

console.log("respuesta 7 usando ambos operadores logicos : ")

console.log(multiplicacion === multiplicacion && suma>resta || resto < exponencial)

// 8. Añade alguna negación

console.log("respuesta 8 añadiendo alguna negación : ")

console.log(multiplicacion === multiplicacion && suma>resta || resto != exponencial)

// 9. Utiliza el operador ternario

const tiempolibre = false

tiempolibre ? console.log("Alejandro esta jugando minecraft ahora mismo"): console.log("Alejandro esta estudiando o trabajando")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log("Respuesta numero 10:")
console.log(5+5 === suma && multiplicacion > 5*5 || resto != resta  )