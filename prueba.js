const cars = [
    {
        color: 'red',
        brand: 'Kia',
    },
    {
        color: 'gray',
        brand: 'Chevrolet',
        licensePlate: 'AAA111',
    },
    {
        licensePlate: 'RGB255',
    },
    ];

    function solution(cars) {
      var filtrados = cars.filter(function(car) {
      return car.licensePlate;
      });
      return filtrados;
    }
    
    solution(cars);


//primero
//-------------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
//------------------------------------------------
let x = 0;
do{
  console.log("El valor de x es: " + x);
  x++;

}while(x < 5 );


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//-------------------------------------------------



//segundo
//-------------------------------------------------
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//------------------------------------------------

let y = 10;
do{
  console.log("El valor de x es: " + y);
  y--;

}while(y >= 2 );

//-------------------------------------------------

let nombres = [
    { nombre: "Esteban", apellido: "Garriga" },
    { nombre: "David", apellido: "Bermudez" },
    { nombre: "Ana", apellido: "Rodriguez" },
    { nombre: "Martina", apellido: "Nuñez" },
];

function mostrar(nombres){
    var encuentraPrimero = nombres.find(function(n){
        return n;
    });
    
    return encuentraPrimero
}
mostrar(nombres);

function readObject(datos) {
    for (let key in datos) {
      console.log(datos[key]);
       }
   }
  readObject(nombres);