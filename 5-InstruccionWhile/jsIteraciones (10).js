function Mostrar()
{

	var contador=0;
	var numero;
	var numeroPositivo;
	var numeroNegativo;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

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
			//acumuladorNegativos=parseInt(acumuladorNegativos);
			contadorNegativos++;
		}
		else
		{
			if(numero>0)
			{
				numeroPositivo=numero;
				acumuladorPositivos=acumuladorPositivos+numeroPositivo;
				//acumuladorPositivos+=numeroPositivo; MANERA CORTA DE PONER UN ACUMULADOR
				//acumuladorPositivos=parseInt(acumuladorPositivos);
				contadorPositivos++;
			}
			if(numero==0)
			{
				contadorCeros++;
			}
		}

		if(numero % 2 == 0)
		{
			contadorPares++;
		}

	respuesta=prompt('Ingrese si para continuar');

	}

	promedioPositivos=(acumuladorPositivos/contadorPositivos);
	promedioNegativos=(acumuladorNegativos/contadorNegativos);
	diferenciaPositivosNegativos=(acumuladorPositivos-acumuladorNegativos);

	document.writeln('La suma de los positivos es '+acumuladorPositivos+"<br>");
	document.writeln('La suma de los negativos es '+acumuladorNegativos+"<br>");
	document.writeln('Cantidad de numeros positivos '+contadorPositivos+"<br>");
	document.writeln('Cantidad de numeros negativos '+contadorNegativos+"<br>");
	document.writeln('Cantidad de ceros '+contadorCeros+"<br>");
	document.writeln('Cantidad de numeros pares '+contadorPares+"<br>");
	document.writeln('Promedio de numeros positivos '+promedioPositivos+"<br>");
	document.writeln('Promedio de numeros negativos '+promedioNegativos+"<br>");


}//FIN DE LA FUNCIÓN