function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");



	document.getElementById('Sexo').value=sexo;
	
	while(sexo!="f" && sexo!="m")
	{
		var sexo = prompt("ingrese f ó m .");
		document.getElementById('Sexo').value=sexo;
	}
	alert("yay");

}//FIN DE LA FUNCIÓN