/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	nombre=document.getElementById('elNombre').value;
	//sin poner .value no nos da el valor, si no el elemento

	alert(nombre);
}


