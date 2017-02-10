function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	/* if(edad<12 && edad>17)
	{
		alert("La persona no es un adolescente");
	}  MALLLL*/
	
	//--------------------------------------------------------------------------

	//PRIMERA MANERA
	/*if(edad<18 && edad>12)
	{
		alert("Es un adolescente");
	}
	else
	{
		alert("No es un adolescente");
	}*/
	
	//--------------------------------------------------------------------------

	//SEGUNDA MANERA
	/*if(!(edad<18 && edad>12))
	{
		alert("No es un adolescente");
	} ES NEGANDO */

	//--------------------------------------------------------------------------

	//TERCERA MANERA (NO ES TAN CONVENIENTE YA QUE ME PUEDO EQUIVOCAR MAS FACIL)
	if(edad>=18 || edad<=12)
	{
		alert("No es un adolescente");
	}
}//FIN DE LA FUNCIÓN