//Importar módulos


import {suma,PI,nombre,Circle} from "./28-exportmodules.js"

//import restar from "./28-exportmodules.js"
import defaultclass from "./28-exportmodules.js"


/*Esta es la exportacion por defect,
siempre se exporta por defecto a la variable global 
colocada por defecto*/



console.log(suma(1, 2))
/*Esto a error, y una solucion para ejecutarlo es colocar
los archivos usados en extension mjs, siempre y cuando 
estamos usando node.js */

/* En entorno web, podemos usar los
script, como por ejemplo : 
<script type="module" src="codigo.js"></script>
*/

/*Por ultimo podemos creara un packgaea.json
con la informacion de los modulos que usamos, y
luego usar import * as nombre from "./codigo.js"
para importar todos los modulos de un archivo*/

//Otras importacciones

console.log(PI)
console.log(nombre)

// Exportacion por defecto de la funcion de restar
//console.log(restar(1, 2))

let c = new Circle(10)
console.log(c.area().toFixed(2))//para quitar decimales
console.log(c.perimetro().toFixed(2))//para quitar decimales

// Exportacion por defecto de la clase
let myclass = new defaultclass()
myclass.fun()

//Modulos externos

