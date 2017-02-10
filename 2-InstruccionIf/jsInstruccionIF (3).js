function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
/*	if(edad>=18)
	{
		alert("Es mayor de edad");

	}
	if(edad>17)
	{
		alert("Es menor de edad");
	*/
	if(edad>=18)
	{
		alert("Es mayor de edad");

	}
	else
	//if(edad>17) NO SE PONE CONDICION DESPUES DE ELSE, solo se usa despues de un if
	{
		alert("Es menor de edad");
	}	
}//FIN DE LA FUNCIÓN