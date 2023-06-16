const frutas = ["Manzana","Naranja","Plátano","Cereza", "Frutilla"];

//console.log(frutas);
console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);

var masFrutas = frutas.push("Pera");
console.log(frutas.length);

var ultimo = frutas.pop("Pera");
console.log(frutas.length);

var masFrutas = frutas.unshift("Ananá");
console.log(frutas.length);
console.log(frutas);

var masFrutas = frutas.shift("Ananá");
console.log(frutas.length);
console.log(frutas);

export function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }

  solucion();


  for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

