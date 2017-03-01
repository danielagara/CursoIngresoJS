//RECUPERATORIO:
//PONER ESTOS EN JS SEPARADOS DE ENTRADA SALIDA Y ETC PARA PROBARLOS

/*DUDAS:
6-orden del contador y el ingreso de los datos con el while, se pueden poner 2 whiles en uno*/
//ENTRADA Y SALIDA DE DATOS
//1:

	var base;
	var superficie;

	//base=prompt('ingrese la base');
	base=document.getElementById('base').value;
	base=parseInt(base);

	superficie=(base*base);

	alert('La superficie del cuadrado es '+superficie);



//2:

	
	var importeProducto;
	var descuento;
	var importeFinal;

	importeProducto=prompt('Ingrese el importe del producto');
	importeProducto=parseInt(importeProducto);


	descuento=(importeProducto*25)/100;
	descuento=parseInt(descuento);

	importeFinal=(importeProducto-descuento);

	document.getElementById('importeFinal')=importeFinal;

	//alert(importeFinal);

//3:

	var precio1;
	var precio2;
	var precio3;
	var sumaPrecios;
	var promedioPrecios;


	precio1=document.getElementById('precio1').value;
	precio2=document.getElementById('precio2').value;
	precio3=document.getElementById('precio3').value;
	//precio1=prompt('precio1');
	//precio2=prompt('precio2');
	//precio3=prompt('precio3');

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	sumaPrecios=(precio1+precio2+precio3);
	sumaPrecios=parseInt(sumaPrecios);

	promedioPrecios=(sumaPrecios)/3;
	document.getElementById('suma precios').value=sumaPrecios;
	document.getElementById('promedioPrecios').value=promedioPrecios;

	//alert(sumaPrecios);
	//alert(promedioPrecios);


//IF Y SWITCH
//4:


	var numero1;
	var numero2;
	var sumaDeNumeros;

	numero1=prompt('Ingrese el primer numero');
	numero2=prompt('Ingrese el segundo numero');

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	sumaDeNumeros=(numero1+numero2);
	sumaDeNumeros=parseInt(sumaDeNumeros);

	if(sumaDeNumeros<0)
	{
		document.write('El resultadod de la suma es negativo');
	}
	else
	{
		if(sumaDeNumeros>0)
		{
			document.write('El resultado de la suma es positivo')
		}

		if(sumaDeNumeros==0)
		{
			document.write('El resultado de la suma es 0')
		}
	}

//5:

	var mesDelAño;

	mesDelAño=prompt('Ingrese el mes del año');
	switch(mesDelAño)
	{
		case 'Diciembre':
		alert('Se vienen las fiestas!');
		break;

		case 'Enero':
		alert('Comienza el año');
		break;

		default:
		alert('No es Enero, ni Diciembre');
		break;
	}


//6:

	var pesoContenedores;
	var minimo;
	var maximo;
	var contador=0;

	while(contador<50)
	{
		
		pesoContenedores=prompt('Ingrese el peso de los contenedores');
		pesoContenedores=parseInt(pesoContenedores);
		
		while(pesoContenedores<0)
	{
		pesoContenedores=prompt('ERROR Ingrese el peso de los contenedores');
		pesoContenedores=parseInt(pesoContenedores);
	}

	if (contador==0)
	{
		maximo=pesoContenedores;
		minimo=pesoContenedores;
	}
	else
	{
		if(pesoContenedores>maximo)
		{
			maximo=pesoContenedores;
		}
		if(pesoContenedores<minimo)
		{
			minimo=pesoContenedores;
		}
	}

		contador++;
	}



//7:

	var edad;
	var sexo;
	var contador=0;
	var acumuladorEdad=0;
	var promedioEdad;
	var edadMinima;
	var contadorM20=0;

	while(contador<100)
	{
		
		edad=prompt('Ingrese la edad');
		edad=parseInt(edad);
		acumuladorEdad=acumuladorEdad+edad;
		while(edad<0 && edad>100)
		{
			edad=prompt('ERROR Ingrese la edad correctamente');
			edad=parseInt(edad);
		}

		sexo=prompt('Ingrese el sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('ERROR Ingrese el sexo correctamente')
		}

		if(sexo=='m' && edad>=20)
		{
			contadorM20++;
		}

	if(contador==0)
	{
		edadMinima=edad;
	}
	else
	{
		if(edad<edadMinima)
		{
			edadMinima=edad;
		}
	}

	contador++;

	}

	promedioEdad=(acumuladorEdad/contador);

	alert('El promedio de edad es '+promedioEdad);
	alert('La edad mas baja es '+edadMinima);
	alert('La cantidad de hombres mayores o de 20 años es '+contadorM20);


//8:

	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta;
	var contadorPares=0;
	var promedioNumeros;
	var numeroMaximo;
	var numeroMinimo;

	respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt('Ingrese su numero');
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt('ERROR Ingrese su numero');
			numero=parseInt(numero);
		}
		contador++;
		acumulador=acumulador+numero;

		if(numero % 2 == 0)
		{
			contadorPares++;
		}

		if(contador==1)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
		}
		else
		{
			if(numero<numeroMinimo)
		{
			numeroMinimo=numero;
		}
		if(numero>numeroMaximo)
		{
			numeroMaximo=numero;
		}
	}

	respuesta=prompt('ingrese no para dejar de ingresar numeros');
	}

	promedioNumeros=(acumulador/contador);



	document.writeln('La cantidad de todos los numeros pares es '+contadorPares+"<br>");
	document.writeln('El promedio de todos los numero ingresados es '+promedioNumeros+"<br>");
	document.writeln('La suma de todos los numeros ingresados es '+acumulador+"<br>");
	document.writeln('El numero minimo es '+numeroMinimo+"<br>");
	document.writeln('El numero maximo es '+numeroMaximo+"<br>");