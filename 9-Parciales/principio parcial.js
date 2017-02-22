//PARCIAL:
//ENTRADA Y SALIDA
//1:

	var base;
	base=document.getElementById('base').value;
	base=parseInt(base);
	var perimetro;
	perimetro=parseInt(perimetro);
	perimetro=(base*base);
	alert(perimetro);

//2:

	var importeProducto;
	importeProducto=prompt('Ingresa importe').value;
	importeProducto=parseInt(importeProducto);
	var iva;
	iva=parseInt(iva);
	iva=(importeProducto*21)/100;
	var resultadoFinal;
	resultadoFinal=parseInt(resultadoFinal);
	resultadoFinal=(importeProducto+iva);
	alert('Su importe final sera de '+resultadoFinal);

//3:

	var largo;
	var ancho;
	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	var perimetro;
	perimetro=parseInt(perimetro);
	perimetro=(2*largo)+(2*ancho);
	var alambre;
	alambre=parseInt(alambre);
	alambre=(perimetro*3);
	alert('Se necesitan '+alambre)

//IF Y SWITCH
//4: IF

	var numeroUno;
	var numeroDos;
	numeroUno=prompt('inserte numero uno').value;
	numeroDos=prompt('inserte numero dos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resultadoFinal;

	if(numeroUno==numeroDos)
	{
		resultadoFinal=(numeroUno*numeroDos);
		//NO ES ALERT, ES POR DOC WRITE QUE NO SE COMO SE HACE alert('Se multiplicaron y el resultado es: '+resultadoFinal);
	}
	if(numeroUno>numeroDos)
	{
		resultadoFinal=(numeroUno-numeroDos);
		//DOC WRITE
	}
	else
	{
		resultadoFinal=(numeroUno+numeroDos);
		//DOC WRITE
	}

//5: SWITCH

	var diaDeSemana;
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

	importeDeVentas=prompt('Ingrese el importe de las ventas');
	importeDeVentas=parseInt(importeDeVentas);
	
	while(importeDeVentas<=0)
	{
		contador++;
		prompt('ERROR Ingrese el importe de ventas correctamente');
		importeDeVentas=parseInt(importeDeVentas);

	}

	if(contador==1)
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

//7: mas iteraciones:

//a ingresar:
	var notas;
	var sexo;

//contador:	
	var contador=0;

//mide si seguir o no:	
	var respuesta='si';

	var acumulador;

	var promedio;

	var notaMasBaja;//MINIMO

	var varonesNotaMas6;

	while(respuesta!='no' && contador<99) 
	{
		contador++;

		notas=prompt('Ingrese las otas del alumno');
		notas=parseInt(notas);
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
	}

	
	




