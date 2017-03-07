/*1: realizar el algoritmo que lea la base por ID de un cuadrado e informar la superficie del mismo por alert.*/

	var base;
	var superficie;

	base=document.getElementById('base').value;
	base=parseInt(base);

	superficie=(base*base);

	alert('La superficie del cuadrado es: '+superficie);

/*2: realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
descontando un (25%) por fin de temporada*/

	var importeProducto;
	var descuento;
	var importeFinal;

	importeProducto=prompt('Ingrese el importe del producto');
	importeProducto=parseInt(importeProducto);

	descuento=(0.25*importeProducto);

	importeFinal=(importeProducto-descuento);

	alert('El importe despues del descuento es: '+importeFinal);

/*3: realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego que
muestre la suma y el promedio de los precios.*/

	var precio1;
	var precio2;
	var precio3;
	var sumaPrecios;
	var promedio;

	precio1=document.getElementById('precio1').value;
	precio2=document.getElementById('precio2').value;
	precio3=document.getElementById('precio3').value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	sumaPrecios=(precio1+precio2+precio3);

	promedio=(sumaPrecios/3);

	alert('La suma de los precios es: '+sumaPrecios+' y el promedio es: '+promedio);

/*4: (IF) realizar el algoritmo que pida dos números por prompt, lo sume e informe si el resultado de la suma
“positivo”,” negativo” o “cero” por document.write.*/

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt('Ingrese el primer numero');
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt('Ingrese el segundo numero');
	numeroDos=parseInt(numeroDos);

	suma=(numeroUno+numeroDos);

	if(suma<0)
	{
		document.write('El resultado de la suma es negativo');
	}
	if(suma==0)
	{
		document.write('El resultado de la suma es cero');
	}
	else
	{
		document.write('El resultado de la suma es positivo');
	}

/*5: (SWITCH) realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert “Se
vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario informar por alert
“no es enero, ni diciembre”*/

	var mes;

	mes=prompt('Ingrese un mes del año');

	switch(mes)
	{
		case "Diciembre":
		alert('Se vienen las fiestas');
		break;

		case "Enero":
		alert('Comienza el año');
		break;

		default:
		alert('No es enero, ni diciembre');
	}

/*6: realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”) de cada uno de los 50
contenedores (pedir 50 veces) de un deposito por prompt, e informar cual fue el más pesado y cuál fue el
menos pesado.*/

	var contenedor;
	var contador=0;
	var contenedorMaximo;
	var contenedorMinimo;

	while(contador<=50)
	{
		contenedor=prompt('Ingrese el peso del contenedor');
		contenedor=parseInt(contenedor);
		while(contenedor<=0)
		{		
			contenedor=prompt('ERROR Ingrese el peso del contenedor');
			contenedor=parseInt(contenedor);
		}

		if(contador=0)
		{
			contenedorMinimo=contenedor;
			contenedorMaximo=contenedor;
		}
		else
		{
			if(contenedores<contenedorMinimo)
			{
				contenedorMinimo=contenedores;
			}
			else if(contenedor>contenedorMaximo)
			{
				contenedorMaximo=contenedores;
			}
		}
		contador++;
	}

	alert('El contenedor mas pesado fue de: '+contenedorMaximo);
	alert('El contenedor menos pesado fue de: '+contenedorMinimo);

/*7: realizar el algoritmo que permita el ingreso por prompt de edades (validar entre 0 y 100) y el sexo (validar
el sexo “f” o “m”) de 100 personas, informar por alert:
a) el promedio de edad.
b) la edad más baja.
c) la cantidad de varones que su edad sea mayor o igual a 20.*/

	var edad;
	var sexo;
	var promedio;
	var contador=0;
	var acumuladorEdades=0;
	var edadMinima;
	var varonesEdad20=0;

	while(contador<=100)
	{
		edad=prompt('Ingrese la edad');
		edad=parseInt(edad);
		while(edad<=0 && edad>100)
		{
			edad=prompt('ERROR Ingrese la edad correctamente');
			edad=parseInt(edad);
		}
		acumuladorEdades=acumuladorEdades+edad;

		sexo=prompt('Ingrese el sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('ERROR Ingrese el sexo correctamente');
		}

		if(contador==0)
		{
			edadMinima=edad;
		}
		else if(edad<edadMinima)
		{
			edadMinima=edad;
		}

		if(sexo=='m' && edad>=20)
		{
			varonesEdad20++;
		}
		contador++;
	}

	promedio=(acumuladorEdades/contador);

	alert('El promedio de las edades ingresadas es: '+promedio);
	alert('La edad mas baja es: '+edadMinima);
	alert('La cantidad de varones con 20 o mas años es de: '+varonesEdad20);

/*8: 8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

	var numeroIngresado;
	var respuesta='si';
	var contador=0;
	var promedio;
	var acumuladorNumeros;
	var numeroMaximo;
	var numeroMinimo;
	var contadorPares=0;

	while(respuesta=='si')
	{
		numeroIngresado=prompt('Ingrese el numero positivo');
		numeroIngresado=parseInt(numeroIngresado);
		while(numeroIngresado<0)
		{
			numeroIngresado=prompt('ERROR Ingrese el numero positivo');
			numeroIngresado=parseInt(numeroIngresado);
		}

		acumuladorNumeros=acumuladorNumeros+numeroIngresado;

		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}

		if(contador==0)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
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
		respuesta=prompt('Ingrese no para dejar de ingresar numeros o si para continuar');
	}
	promedio=(acumuladorNumeros/contador);

	document.write('La cantidad de numeros pares es: '+contadorPares+"<br>");
	document.write('El promedio de todos los numeros ingresados es: '+promedio+"<br>");
	document.write('La suma de todos los numeros ingresados es: '+acumuladorNumeros+"<br>");
	document.write('El numero maximo es: '+numeroMaximo+"<br>");
	document.write('El numero minimo es: '+numeroMinimo+"<br>");