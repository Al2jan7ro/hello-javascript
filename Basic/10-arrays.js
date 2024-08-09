//Arrays (Estructuras de datos)
/* permite asignar varios datos a una
sola variable, son utiles cuando
necesitamos manejar listados de elementos*/

//Declaracion o inicialización
let miarreglo = [] //forma sencilla
let miarreglo2 = new Array()//forma compleja (reserva espacios)

console.log("arreglo forma simple: ",miarreglo)
console.log("arreglo forma compleja :",miarreglo2)
//se muestran los arreglos vacios

/*Se pueden juntar diferentes tipos
de datos en un array */
miarreglo = [2002, "Ale", 22]
console.log("arreglo forma simple: ",miarreglo)

miarreglo2 = new Array(1, 2, 3, 4)
console.log("arreglo forma compleja :",miarreglo2)
//esta es la manera de inicializar

/*Tambien se pueden agregar valores
especificos a cada espacio del array */

miarreglo2 = new Array(3)
miarreglo2[2]= "Ale"
console.log("forma compleja",miarreglo2)

// de esta forma detecta solo los espacios
miarreglo = []
miarreglo[3] = "ale"
miarreglo[5] = "2024"
console.log("forma simple",miarreglo)

//metodos comunes
let miarreglo3 = []

// push y pop

miarreglo3.push("Gatito")
miarreglo3.push("wito")
miarreglo3.push("5 años")
console.log("el push; ",miarreglo3)
/*push sirve para introducir
elementos en el array 
en orden creciente */

miarreglo3.pop()
console.log("el pop:", miarreglo3)
/*El pop elimina el ultimo alemento
que se encuentra en el array
ademas tambien lo devuelve. */
console.log("El pop que elmine:", miarreglo3.pop())
console.log("como quedo con los 2 pop: ", miarreglo3)

//shift y unshift
miarreglo3.push("ale","wito","2024")
console.log(miarreglo3)
/*shift funciona igual que el pop
pero al contrario elimina el primer
elemento del array */
miarreglo3.shift()
console.log("el shift:",miarreglo3)
console.log("el shift, ahora elimine: ", miarreglo3.shift(),", y quedo asi el arreglo: ",miarreglo3)

/*unshift sirve para añadir
los elementos al principio del array */

miarreglo3.unshift("venezuela","aguacate")
console.log("el unshift: ", miarreglo3)

//lenght sirve para sabaer la longitud

console.log("la longitud es: ", miarreglo3.length)

/*para limpiar el array 
se vuelve a inicializar */

miarreglo3=[] //manera buena
miarreglo3.length=0 //no se recomienda
console.log("el arreglo esta vacio", miarreglo3)

//slice

miarreglo3.push(2002,"ale","abril","curso")
console.log("arreglo para slice: ", miarreglo3)
/*lo que hace es recortar el arreglo
dependiendo del espacio que se asigne
el ultimo numero no se cuenta
significa que mostrara los elementos
que hay entre el 1 y el 3 */
let nuevoarreglo = miarreglo3.slice(1,4)
console.log(miarreglo3)
console.log(nuevoarreglo)

//splice 
/*splice sirve para elminar
indices especificos de un arerglo
o tambien para modificar los indices */
miarreglo3.push("madrid","ronaldo")
console.log("arreglo para splice:",miarreglo3)

miarreglo3.splice(1,2)
console.log("elminando 2 indices",miarreglo3)
miarreglo3.splice(1,0,"hola","adios")
console.log("añadiendo indice a partir de 1:",miarreglo3)