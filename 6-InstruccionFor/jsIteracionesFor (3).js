function Mostrar()
{	
	var repeticiones;
	var contador=0;
	repeticiones=prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);


	for(;repeticiones;)
	{
		alert('HOLA UTNN FRA');
		contador++;

		if(repeticiones==contador)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN