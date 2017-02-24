/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	/* SACAR LUEGO DE PROBAR 

	var sueldo;
	var resultado;
	//var aumento;PRIMER INTENTO haciendo operacion completa y creando otras variables
	
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	
	//aumento=(sueldo*10)/100; 
	//aumento=(sueldo*1.10);
	//resultado=sueldo+aumento;
	resultado=(sueldo*1.1);

	document.getElementById('resultado').value=resultado;

	/*resultado a la derecha para que tome lo anterior
	declarar variables, tomar el id del primero que es el que ingresa el usuario, cambiar a entero con parseint, declarar 
	variable descuento con operacion que calcule el porcentaje, declarar variable resultado juntando las anteriores en este 
	caso restando una con la otra, por ultimo declarar que el id tiene que tener la informacion de la variable resultado
	

	//console.log(resultado+aumento);
	
	SACAR LUEGO DE PROBAR*/
// A TERMINAR
//a ingresar:
	var notas;
	var sexo;

//contador:	
	var contador=0;

	var acumuladorNotas=0;

	var promedio;

	var notaMasBaja;//MINIMO

	var acumuladorVaronesNotaMas6=0;

	while(contador<=100) 
	{

		notas=prompt('Ingrese las notas');
		notas=parseInt(notas);
		acumuladorNotas=acumuladorNotas+notas;
		acumuladorNotas=parseInt(acumuladorNotas);
		
		while(notas<0 && notas>10)
		{
			notas=prompt('ERROR Ingrese las notas correctamente');
			notas=parseInt(notas);
		}


		sexo=prompt('Ingrese su sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('Ingrese su sexo correctamente');
	
		}

		if(contador==0)
		{
			notaMasBaja=notas;
		}
		else
		{
			if(notaMasBaja<notas)
			{
				notaMasBaja=notas;
			}
		}


		if(sexo=='m' && notas>=6)
		{
			acumuladorVaronesNotaMas6++;
		}

	contador++;

	}

	promedio=(acumulador/contador);

	alert('el promedio de las notas totales es: '+promedio);
	alert('la nota mas baja es: '+notaMasBaja);
	alert('Los varones con nota 6 o mayor son: '+acumuladorVaronesNotaMas6);
}
