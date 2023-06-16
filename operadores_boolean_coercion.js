//"Coerción implicita : Cuando un valor cambia para dar un resultado" 
//"Coerción explicita : Cuando yo fuerzo a cambiar un valor ej: Number(a) o String(a)"" 



//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también



//-----------------------------------------------------------------
//Operadores de comparacion

//Simbolo	        Descripcion
//  ==	            igual que
//  ===	            estrictamente igual que
//  > or >= or >==	mayor o mayor igual que
//  < or <= or <==	menor o menor igual que
//  != or !==	    diferente que
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//Operadores aritmeticos

//Simbolo           Descripcion
//  +	            operador suma (tambien concatena dos valores)
//  -	            operador resta
//  *	            operador de multicacion
//  /	            operador de division
//  %	            operador de modulo
//  **	            operador de potenciacion
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//Operadores logicos

//  Simbolo	        Descripcion
//  !	            NOT niega un valor
//  &&	            AND
//  ||	            OR
//-----------------------------------------------------------------