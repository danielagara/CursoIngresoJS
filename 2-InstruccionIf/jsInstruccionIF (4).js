function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	/*if(edad==13&&<17)
	{
		alert("Es un adolescente");

	} MAL*/
	/*PRIMERA MANERA DE HACERLO:
	if(edad<18)
	{
		if(edad>12)
		{
			alert("Es un adolescente");
		}
	}*/
	if(edad<18 && edad>12)
	{
		alert("Es un adolescente");
	}
	//SE LEE COMO: SI tiene menos de 18 Y tiene MAS de 13, hace el alert


}//FIN DE LA FUNCIÓN