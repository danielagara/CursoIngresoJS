function Mostrar()
{

	var contador=0;
	var numero;
	var numeroPositivo;
	var numeroNegativo;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt('Ingrese el numero');
		numero=parseInt(numero);
		contador++;
//1		
		if(numero<0)
		{
			numeroNegativo=numero;
			acumuladorNegativos=acumuladorNegativos+numeroNegativo;
		}
		else
		{
			if(numero>0)
			{
				numeroPositivo=numero;
				acumuladorPositivos=acumuladorPositivos+numeroPositivo;
			}
			//if
		}

	respuesta=prompt('Ingrese si para continuar');
	}

	document.writeln('la suma de los positivos es '+acumuladorPositivos);
	document.writeln('la suma de los negativos es '+acumuladorNegativos);


}//FIN DE LA FUNCIÓN