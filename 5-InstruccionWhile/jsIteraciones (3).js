function Mostrar()
{
	//nunca se valida con if, ya que este se ejecuta solo una vez, siempre se hace con while
	var clave = prompt("ingrese el número clave.");
	//PIDO DATO
	while(clave!="utn750")
	//VALIDO DATO
	{
		clave = prompt("Reingrese la clave");
		//PIDO DATO DE NUEVO, O SI NO TENGO BUCLE INFINITO
	}
	alert("Bienvenido");
	//UNA VEZ QUE SE PONE BIEN, DA EL MENSAJE 

}//FIN DE LA FUNCIÓN
