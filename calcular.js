const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
//const form = document.querySelector('#form'); //seria asi si uso formulario 

const btn1 = document.querySelector('#btnSumar');
const btn2 = document.querySelector('#btnMultiplicar');
const btn3 = document.querySelector('#btnDividir');
const Result = document.querySelector('#result');

//form.addEventListener("submit", btnSumar); //seria asi si uso formulario con submit 

btn1.addEventListener("click", btnSumar); // simplifica el poner onclick="btnSumar() en el html
btn2.addEventListener("click", btnMultiplicar);
btn3.addEventListener("click", btnDividir);

function btnSumar() {
   //event.preventDefault(); //si uso 'form', usar event como parametro 'btnSumar(event)'  
   const result =  parseFloat(input1.value) + parseFloat(input2.value);
   Result.value = result;
}
function btnMultiplicar() {
   //event.preventDefault(); //si uso 'form', usar event como parametro 'btnMultiplicar(event)' 
   const result =  parseFloat(input1.value) * parseFloat(input2.value);
   Result.value = result.toFixed(2);
  }
function btnDividir() {
    //event.preventDefault(); //si uso 'form', usar event como parametro 'btnDividir(event)' 
    const result =  parseFloat(input1.value) / parseFloat(input2.value);
    Result.value = result.toFixed(2);
}

