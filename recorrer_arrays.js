

//-------------- OBJETO ----------------
var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];
//---------------------------------------



//******************* METODO FILTER ***************************
//filter Genera un nuevo array
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});
articulosFiltrados;
//*************************************************************

//******************* METODO MAP ********************************************************
//map Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});
nombreArticulos; 
//****************************************************************************************



