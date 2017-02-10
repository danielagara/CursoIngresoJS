function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	//se pone igual del lado de edad ya que es lo mismo que escribirlo
	if(edad>17 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN