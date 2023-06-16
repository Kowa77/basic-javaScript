let nombres = [
    { nombre: "Esteban", apellido: "Garriga" },
    { nombre: "David", apellido: "Bermudez" },
    { nombre: "Ana", apellido: "Rodriguez" },
    { nombre: "Martina", apellido: "Nuñez" },
];

//------------------------------------------------------------
function mostrarPrimero(nombres){
    var encuentraPrimero = nombres.find(function(n){
        return n;
    });
    return encuentraPrimero
}
mostrarPrimero(nombres);

//------------------------------------------------------------

function readObject(datos) {
    for (let key in datos) {
      console.log(datos[key]);
       }
   }
  readObject(nombres);