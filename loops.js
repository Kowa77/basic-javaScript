var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}




// var numbers = [5, 4, 3, 2, 1]

// // ❌ No cambia el array original
// for (var number of numbers) {
//   number = number * 2
// }

// console.log(numbers) // [5, 4, 3, 2, 1]

// // ✅ Cambia el array original
// for(var i=0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2
// }

// console.log(numbers) // [ 10, 8, 6, 4, 2 ]


