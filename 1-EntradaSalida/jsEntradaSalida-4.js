/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("Ingrese su nombre");
	document.getElementById('elNombre').value=nombre;
	//al poner =nombre despues de value me devuelve lo que yo complete antes, en lugar de usarlo como variable.


}

