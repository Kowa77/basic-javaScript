const h1 = document.querySelector('h1');
const id = document.querySelector('span');
const className = document.getElementsByClassName('parrafo');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const all = document.querySelectorAll('p');

h1.innerHTML= '<textarea> Prueba H1 </textarea>';
//h1.innerText= '<h4> Prueba2 </h4>';
// console.log({
//     h1,
//     p,
//     id,
//     className,
//     parrafito,
//     all,
// });

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
id.replaceWith(img); //remplazar 

console.log(h1.getAttribute('nuevoAtributo')); // obtengo el valor de el atributo h1
h1.setAttribute('class','text-danger'); //cambio la class por text-danger del h1
h1.classList.add('class','mt-5'); //agrego un termino en class del h1

//const parrafo = document.createElement('p');
//parrafo.setAttribute()
//input.setAttribute('placeholder','123');

const div = document.createElement("div");
const pa = document.createElement("p");
div.appendChild(pa);
const span = document.createElement("span");
pa.replaceWith(span);
console.log(div.outerHTML);
// "<div><span></span></div>"

