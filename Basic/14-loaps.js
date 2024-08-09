/* Los bucles, es asociado a una estructura
de control, se usan para repetir tareas
siempre y cuando una condicion sea true*/

//bucle for
console.log("bucle for normal")

for (let i = 0; i <= 5; i++) {

    console.log(`hola ${i}`)
}

console.log("bucle for con array")

const numero = [1, 2, 3, 4, 5]

for (let i = 0; i < numero.length; i++) {//recorre el array completo

    console.log(`elemento ${numero[i]}`)
}

//bucle while

/*se evalua en cada interacion */
console.log("bucle while")

let i = 0
while (i < 5) {
    console.log(`hola ${i}`)
    i++
}

console.log("bucle do while")

// bucle do while
let z = 6
do {

    console.log(`hola ${z}`)
    z++

} while (z < 5)

//for off
/*para recorrer de algo que sea iterable
como lo pueden ser estructuras de datos */    


miarray = [1,2,"ARRAY",4,5]
miset = new Set(["Ale","Gato",2024])
mimapi = new Map([
    ["hola", "adios"],
    ["como estas",2024],
])

for(let valor of miarray){
    console.log("For Of del arreglo:",valor)
}
for(let valor of miset){
    console.log("For Of del set",valor)
}
for(let valor of mimapi){
    console.log("For Of del map",valor)
}

//Buenas practicas
//no dejar nunca bucles infinitos
// uso del break y continue
console.log("BREAK Y CONTINUE")

for (let x = 0; x < 10; x++){
    if(x==5){
        console.log("El 5 no me interesa")

        continue // se salta el 5
    }else if (x == 7){
        console.log("AQUI SE ACABA")
        break
    }

    console.log(`hola ${x}`)
}
/*Asi podemos controlar
los flujos de los bucles */
