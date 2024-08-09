//set

let miset = new Set () //Set va en mayus
//let miset2 = {} esto no es correcto.

console.log(miset)

//inicialización
//Se usan corchetes despues del ()
miset = new Set(["ale","gato",2002,"abril"])
console.log(miset)

//metodos comunes
/*para añadir o elminar datos tenemos
add y delete */

//add añade elementos al final
miset.add("Facebook")
console.log(miset)

miset.delete("Facebook")
//hay que decir que elemento exacto es
//no funciona con indices
console.log(miset)
console.log(miset.delete("ale"))//para confirmar si elminamos
console.log(miset.delete(2))//verificar si cierto elemento se elimino

//has para ver si el elemento existe dentro del set


console.log(miset.has("gato"))
console.log(miset.has("pedro"))

//size para saber el tamaño del set
console.log(miset)
console.log("el tamaño es: ",miset.size)

//Como convertir un set a array
let miarreglo = Array.from(miset)
console.log("Mi set como arreglo: ",miarreglo)

//convertir un array a set

miset = new Set(miarreglo)
console.log(miset)

//Diferencias

miset.add("gato")
//los set no admiten duplciados de elementos
console.log("Diferencia de set y array",miset)

/*Esto sera si siemrpe y cuando
el elemento que se añada sea
exactamente igual al anterior
si cambia una minima cosa si se añade */
