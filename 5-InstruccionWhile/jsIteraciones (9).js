function Mostrar()
{
	//BANDERA: SIRVE PARA QUE SEPAMOS SI NADIE HIXO ALGO, QUE SEA EL PRIMERO
	var bandera="nadie";

	var contador=0;

	var edad;
	var nombre;
	var maximo;
	var minimo;
	var sexo;
	var nombreDeMayor;
	var nombreDeMenor;

	var nota;
	var notaMinima;
	var sexoMinimo;

	//var notaAprobada;
	var acumuladorAprobados=0;

	var acumuladorDesaprobadosF=0;
	var acumuladorDesaprobadosM=0;

	var acumuladorNotas=0;
	var promedioNotas;
	// declarar variables

	var acumuladorEdadMujeres=0;
	var promedioEdad;
	
	var mujeresMenoresAprobadas=0;

	var nombreEdadSexo;

	var respuesta='si';
	
	//defino el while
	while(respuesta!='no')
	{
		contador++;
		nombre=prompt('Por favor ingrese nombre');
		//vuelvo a llamar a la variable que va a validar, si no no sale del bucle

		edad=prompt('Ingrese edad');
		edad=parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad=prompt('ERROR Ingrese edad');
			edad=parseInt(edad);;
		}
		//se lo define pq todo lo de prompt entra como palabra, se pone de nuevo de lado pq lo que cambia es el contenido
		//nada mas
		
		
		
//INGRESO DE SEXO Y VALIDACION DE QUE ESTA BIEN EL DATO
		sexo=prompt('Ingrese sus sexo');

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt('ERROR Ingrese sus sexo');
		}

//PROMEDIO DE LA EDAD DE LAS MUJERES PRINCIPIO(VALIDACION DE QUE SEA F PARA EMPEZAR A ACUMULAR)
	if(sexo=="f")
	{
		acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
	}


//INGRESO DE NOTA Y VALIDACION QUE ESTA BIEN EL DATO
		nota=prompt('Ingrese su nota');
		nota=parseInt(nota);
		acumuladorNotas=acumuladorNotas+nota;//ACUMULANDO NOTAS PARA PROMEDIO
		while(nota<0 || nota>11)
		{
			nota=prompt('ERROR Ingrese su nota');
			nota=parseInt(nota);
		}

//CANTIDAD DE PERSONAS APROBADAS

	if(nota>3)
	{
		acumuladorAprobados++;
	}

//DATOS DE LA PRIMERA PERSONA QUE SE SACO 10
	if(nota==10 && bandera=="nadie")
	{
		nombreDel10=nombre;
		edadDel10=edad;
		sexoDel10=sexo;
		
	}

//CANTIDAD DE MUJERES QUE APORBARON CON NOTA PAR Y SON MENORES DE EDAD
//PAR SE VALIDA POR % QUE ES EL RESTO
//DIVIDIR EN IF'S
	if(sexo=="f" && nota % 2 == 0 && nota>3 && edad<18)
	{
		mujeresMenoresAprobadas++;
	}

///PARTE DE MAXIMOS Y MINIMOS

		if(contador==1)
		{
			maximo=edad;
			minimo=edad;
			
		}

		else 
		{
			if(edad<minimo)//EDAD Y NOMBRE DEL MENOR
			{
				minimo=edad;
				nombreDeMenor=nombre;


			}
			if(edad>maximo)//EDAD Y NOMBRE DEL MAYOR
			{
				maximo=edad;
				nombreDeMayor=nombre;

			}

		}

		if(contador==1)//NOTA Y SEXO DEL MINIMA NOTA
		{
			notaMinima=nota;
			sexoMinimo=sexo;
		}
		else
		{
			if(nota<notaMinima)
			{
				notaMinima=nota;
				sexoMinimo=sexo;
			}
		}

//CANTIDAD DE F Y M DESAPROBADOS
	if(nota<4 && sexo=="f")
	{
		acumuladorDesaprobadosF++;
	}
	
	if(nota<4 && sexo=="m")
	{
		acumuladorDesaprobadosM++;
	}
//LO QUE HACE QUE EL INGRESO DE DATOS SE DETENGA O SIGA

		respuesta=prompt('Para salir teclee no');
	}
//SACO EL PROMEDIO DE TODAS LAS NOTAS
	promedioNotas=(acumuladorNotas/contador);

//SACO EL PROMEDIO DE LA EDAD DE LAS MUJERES	
	promedioEdad=(acumuladorEdadMujeres/contador);

//MOSTRAR LOS DATOS	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	


}//FIN DE LA FUNCIÓN