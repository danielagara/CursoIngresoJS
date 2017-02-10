function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	/* PRIMERA MANERA DE HACERLO:
	if(edad<18 && estadoCivil=="Casado")
	{
		alert("Es muy joven para NO estar Soltero");
	}
	else
	{
		if(edad<18 && estadoCivil=="Divorciado")
		{
			alert("Es muy joven para NO estar Soltero");
		}
	//if(edad<18 && estadoCivil!=)
	}*/

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy joven para NO estar Soltero");
	}

}//FIN DE LA FUNCIÓN