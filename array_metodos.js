//Metodo eliminar por posición

var frutas = ["pera", "banana", "manzana", "trigo"];
//posicion  	 0 		  1		    2	      3

frutas.splice(2,1); 
// 2= posicion, 
// 1= cantidad a borrar (desde la poscion)
frutas; // [“pera”, “banana”, “trigo”]

frutas.splice(2,2);
frutas; // [“pera”, “banana”]

//-----------------------------------------------------------
var frutas = ["pera", "banana", "manzana", "trigo"];

var arrayFrutasBorradas = frutas.splice(2,2);
arrayFrutasBorradas; // [“pera”, “banana”]
//-----------------------------------------------------------

//OTROS METODOS

//--------------------PUSH-----------------------------------
//.push() nos permite agregar uno o más elementos al final de un array. 
let numArray = [1,2,3,4,5];
numArray.push(6,7);
console.log(numArray);

//----------------------SHIFT-------------------------------- elimina el primero
//.shift() eliminar el primer elemento de un array (el índice 0)
let txtArray  = ["Ana", "Juan", "Diego", "Susana"];
console.log(txtArray);
let txtArray2 = txtArray.shift()
console.log(`(${txtArray.length})[${txtArray}] elimina el primero (${txtArray2})`);
//-----------------------------------------------------------

//--------------------POP-----------------------------------
//.pop() eliminará el último elemento de un array
let array_pop = [1,2,3,4,5];
array_pop.pop();
console.log(array_pop);
//-----------------------------------------------------------

