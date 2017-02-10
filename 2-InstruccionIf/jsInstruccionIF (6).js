function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	if(edad>=18)
	{
		alert("Es mayor de edad");
	}
	else if(edad<18 && edad>12)
	{/*si uso el else y desoues abro llaves para declarar un nuevo if funciona tambien y se pueden agregar variables
		arriba del alert*/
		alert("Es un adolescente");
	}
	else
	{
		alert("Es un niño");
	}
//EXPLICACION DEL ELSE IF: http://www.w3schools.com/js/js_if_else.asp
}//FIN DE LA FUNCIÓN