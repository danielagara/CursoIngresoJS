//PARCIAL:
//PONER ESTOS EN JS SEPARADOS DE ENTRADA SALIDA Y ETC PARA PROBARLOS

/* dudas:
1-es necesario aclarar funciones?
2-suma de el ultimo punto */
//ENTRADA Y SALIDA
//1:

	var base;
	var perimetro;

	//base=prompt('ingrese base'); USADO PARA PROBAR YA QUE NO HABIA ID
	base=document.getElementById('base').value;
	base=parseInt(base);
	perimetro=parseInt(perimetro);
	perimetro=(base*4);
	alert(perimetro);

//2:

	var importeProducto;
	var iva;
	var resultadoFinal;

	importeProducto=prompt('Ingresa importe');//NO SE PONE VALUE
	importeProducto=parseInt(importeProducto);

	iva=(importeProducto*21)/100;
	iva=parseInt(iva);

	resultadoFinal=(importeProducto+iva);
	resultadoFinal=parseInt(resultadoFinal);

	alert('Su importe final sera de '+resultadoFinal);

//3:

	var largo;
	var ancho;
	var perimetro;
	var alambre;
	//largo=document.getElementById('largo').value;
	//ancho=document.getElementById('ancho').value;
	largo=prompt('ingrese largo');
	ancho=prompt('ingrese ancho');
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=(2*largo)+(2*ancho);
	perimetro=parseInt(perimetro);


	alambre=(perimetro*3);
	alambre=parseInt(alambre);

	alert('Se necesitan '+alambre+' metros de alambre');

//IF Y SWITCH
//4: IF

	var numeroUno;
	var numeroDos;
	var resultadoFinal;

	numeroUno=prompt('inserte numero uno');
	numeroDos=prompt('inserte numero dos');
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	if(numeroUno==numeroDos)
	{
		resultadoFinal=(numeroUno*numeroDos);
		document.writeln('Se multiplicaron y el resultado es: '+resultadoFinal+"<br>");
		//NO ES ALERT, ES POR DOC WRITE QUE NO SE COMO SE HACE alert('Se multiplicaron y el resultado es: '+resultadoFinal);
	}
	else
	{	//SI SE PONE COMO 2 IF Y UN ELSE Y SON IGUALES ME VA A MULTIPLICAR Y SUMAR, POR ESO LO PUSE ASI
		if(numeroUno>numeroDos)
		{
			resultadoFinal=(numeroUno-numeroDos);
			document.writeln('Se restaron y el resultado es: '+resultadoFinal+"<br>");
			//DOC WRITE
		}
		else
		{
			resultadoFinal=(numeroUno+numeroDos);
			document.writeln('Se sumaron y el resultado es: '+resultadoFinal+"<br>");
			//DOC WRITE
		}

	}

//5: SWITCH

	var diaDeSemana;

	diaDeSemana=prompt('Ingrese un dia de semana');
	switch(diaDeSemana)
	{
		case 'Sabado':
		case 'Domingo':
		alert('Es fin de semana!!');
		break;

		default:
		alert('A trabajar!!!!');
		break;
	}
	
//6: iteraciones:

	var importeDeVentas;
	var maximo;
	var minimo;
	var importeDeVentasMaximo;
	var importeDeVentasMinimo;
	var contador=0;

	while(contador<=24)
	{
		importeDeVentas=prompt('Ingrese el importe de las ventas');
		importeDeVentas=parseInt(importeDeVentas);
		while(importeDeVentas<=0)
		{
			importeDeVentas=prompt('ERROR Ingrese el importe de ventas correctamente');
			importeDeVentas=parseInt(importeDeVentas);
		}

		if(contador==0)
		{
			importeDeVentasMinimo=importeDeVentas;
			importeDeVentasMaximo=importeDeVentas;
		}
		else
		{
			if(importeDeVentas<importeDeVentasMinimo)
			{
				importeDeVentasMinimo=importeDeVentas;
			}
			if(importeDeVentas>importeDeVentasMaximo)
			{
				importeDeVentasMaximo=importeDeVentas;
			}
		}

		contador++;
	}

//7: mas iteraciones:

//a ingresar:
	var notas;
	var sexo;

//contador:	
	var contador=0;

//mide si seguir o no:	
	var respuesta='si';

	var acumuladorNotas=0;

	var promedio;

	var notaMasBaja;//MINIMO

	var acumuladorVaronesNotaMas6=0;

	while(respuesta!='no' && contador<99) 
	{
		contador++;

		notas=prompt('Ingrese las otas del alumno');
		notas=parseInt(notas);
		acumuladorNotas=acumuladorNotas+notas;
		while(notas<0 && notas>10)
		{
			notas=prompt('ERROR Ingrese las notas correctamente');
			notas=parseInt(notas);
		}


		sexo=prompt('Ingrese su sexo');
		while(sexo!='f' && sexo!='v')
		{
			sexo=prompt('Ingrese su sexo correctamente');
	
		}



		promedio=(acumulador/contador);



		if(contador==1)
		{
			notas=notaMasBaja;
		}
		else
		{
			if(notaMasBaja<nota)
			{
				notas=notaMasBaja;
			}
		}


		if(sexo=='v' && nota>=6)
		{
			acumuladorVaronesNotaMas6++;
		}

		respuesta=prompt('Si quiere dejar de ingresar datos, escriba no');

	}



//8: 

	var respuesta='si';

	var numero;
	var contadorNumerosPares=0;
	var promedio;
	var acumuladorNumeros=0;
	var maximo;
	var minimo;
	var contador=0;


	while (respuesta!='no')
	{
		contador++;
		numero=prompt('Ingrese el numero positivo');
		numero=parseInt(numero);
		acumuladorNumeros=acumuladorNumeros+numero;

		while(numero<0)
		{
			numero=prompt('ERROR Ingrese el numero positivo');
			numero=parseInt(numero);
		}

		if(numero % 2 == 0)
		{
			acumuladorNumerosPares++;
		}

		respuesta=prompt('Ingrese no para dejar de ingresar numeros');

		if(contador==1)
		{
			minimo=numero;
			maximo=numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo=numero;
			}

			if(numero>maximo)
			{
				maximo=numero;
			}
		}

	}

	promedio=(acumuladorNumeros/contador);

	document.writeln('Cantidad de números pares '+contadorNumerosPares+"<br>");
	document.writeln('Promedio de números ingresados '+promedio+"<br>");
	document.writeln('Suma de todos los números '+acumuladorNumeros+"<br>");
	document.writeln('Número máximo '+maximo+"<br>");
	document.writeln('Número mínimo '+minimo+"<br>");
