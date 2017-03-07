//1: 

	var baseCuadrado;
	var perimetro;

	baseCuadrado=document.getElementById('baseCuadrado').value;
	baseCuadrado=parseInt(baseCuadrado);

	perimetro=(baseCuadrado*4);

	alert('El perimetro del cuadrado es: '+perimetro);


//2:

	var importeProducto;
	var iva;
	var importeFinal;

	importeProducto=prompt('Ingrese el importe de su producto');
	importeProducto=parseInt(importeProducto);

	iva=(0.21*importeProducto);
	iva=parseInt(iva);

	importeFinal=(importeProducto+iva);

	alert(importeFinal);


//3:

	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var alambre;

	largoTerreno=document.getElementById('largoTerreno').value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=document.getElementById('anchoTerreno').value;
	anchoTerreno=parseInt(anchoTerreno);

	perimetro=(2*largoTerreno)+(2*anchoTerreno);

	alambre=(perimetro*3);

	alert('Se necesitan '+alambre+' hilos de alambre');


/*4: ) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write*/

	var numeroUno;
	var numeroDos;
	var operacion;

	numeroUno=prompt('Ingrese el primer numero');
	numeroDos=prompt('Ingrese el segundo numero');

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		operacion=(numeroUno*numeroDos);
		document.write('Los numeros ingresados eran iguales, se multiplicaron y el resultado es: '+operacion);
	}

	if(numeroUno>numeroDos)
	{
		operacion=(numeroUno-numeroDos);
		document.write('El primer numero ingresado era mayor que el segundo, se restaron y el resultado es: '+operacion);
	}

	else
	{
		operacion=(numeroUno+numeroDos);
		document.write('Los numeros se sumaron y el resultado es= '+operacion);
	}

/*5: realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!”*/

	var diaSemana;

	diaSemana=prompt('Ingrese un dia de la semana');

	switch(diaSemana)
	{
		case "Sabado":
		case "Domingo":
		alert("Es fin de semana");
		break;

		default:
		alert("a trabajar!!");
		break;
	}

/*6: realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta*/

	var importeVentas;
	var contador=0;
	var importeVentasMinimo;
	var importeVentasMaximo;

	while(contador<=24)
	{
		importeVentas=prompt('Ingrese el importe de las ventas');
		importeVentas=parseInt(importeVentas);
		
		while(importeVentas<=0)
		{
			importeVentas=prompt('ERROR Ingrese el importe de las ventas');
			importeVentas=parseInt(importeVentas);
		}

		if(contador==0)
		{
			importeVentasMinimo=importeVentas;
			importeVentasMaximo=importeVentas;
		}

		if(importeVentas<importeVentasMinimo)
		{
			importeVentasMinimo=importeVentas;
		}
		else
		{
			if(importeVentasMaximo>importeVentas)
			{
				importeVentasMaximo=importeVentas;
			}	
		}

		contador++;
	}

/*7: - realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6*/

	var notas;
	var sexo;
	var contador=0;
	var promedio;
	var notaMasBaja;
	var notaVarones6=0;
	var acumuladorNotas=0;

	while(contador<=100)
	{
		notas=prompt('Ingrese las notas');
		notas=parseInt(notas);
		while(notas<=0 && notas>10)
		{
			notas=prompt('ERROR Ingrese las notas correctamente');
			notas=parseInt(notas);
		}
		acumuladorNotas=acumuladorNotas+notas;

		sexo=prompt('Ingrese el sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('ERROR Ingrese el sexo correctamente');
		}

		if(contador==0)
		{
			notaMasBaja=notas;
		}
		else if(notas<notaMasBaja)
		{
			notaMasBaja=notas;
		}

		if(sexo=='m' && notas>=6)
		{
			notaVarones6++;
		}

	}
	promedio=(acumuladorNotas/contador);

	alert('El promedio de las notas totales es: '+promedio);
	alert('La nota mas baja es: '+notaMasBaja);
	alert('La cantidad de los varones con notas mayores o iguales a 6 es: '+notaVarones6);

/*8: realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

	var numeroIngresado;
	var respuesta='si';
	var contador=0;
	var promedio;
	var acumuladorNumeros=0;
	var numeroMaximo;
	var numeroMinimo;
	var contadorPares=0;

	while(respuesta=='si')
	{
		numeroIngresado=prompt('Ingrese un numero positivo');
		numeroIngresado=parseInt(numeroIngresado);
		while(numeroIngresado<0)
		{
			numeroIngresado=prompt(' ERROR Ingrese un numero positivo');
			numeroIngresado=parseInt(numeroIngresado);
		}

		acumuladorNumeros=acumuladorNumeros+numeroIngresado;

		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}

		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}

		contador++;
		respuesta=prompt('Ingrese no para dejar de ingresar numeros o si para comtinuar');
	}
	promedio=(acumuladorNumeros/contador);

	document.write('La cantidad de numeros pares es: '+contadorPares+"<br>");
	document.write('El promedio de todos los numeros es: '+promedio+"<br>");
	document.write('La suma de todos los numeros es: '+acumuladorNumeros+"<br>");
	document.write('El numero maximo es: '+numeroMaximo+"<br>");
	document.write('El numero minimo es: '+numeroMinimo+"<br>");
