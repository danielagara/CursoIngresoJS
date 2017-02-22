/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;


//VALIDO QUE LOS DATOS SEAN CORRECTOS

//EDAD:
	edad=prompt('Ingrese su edad');
	edad=parseInt(edad);
	while(edad<17 || edad>91)
	{
		prompt('ERROR Ingrese su edad correctamente');
		edad=parseInt(edad);
	}

//SEXO:
 	sexo=prompt('Ingrese sus sexo como F y M');
	while(sexo!="F" && sexo!="M")
	{
		sexo=prompt('ERROR Ingrese su sexo correctamente');
	}

//ESTADO CIVIL:

	estadoCivil=prompt('Ingrese su estado civil');
	estadoCivil=parseInt(estadoCivil);
	while(estadoCivil!=1 && estadoCivil!=2 && estadoCivil!=3 && estadoCivil!=4)
	{
		prompt('ERROR Ingrese su estado civil correctamente');
		estadoCivil=parseInt(estadoCivil);
	}
	switch(estadoCivil)
	{
		case 1:
		estadoCivil='Soltero/a';
		break;

		case 2:
		estadoCivil='Casado/a';
		break;

		case 3:
		estadoCivil='Divorciado/a';
		break;

		case 4:
		estadoCivil='Viudo/a';
		break;
	}

//SUELDO BRUTO:

	sueldoBruto=prompt('Ingrese su sueldo bruto');
	sueldoBruto=parseInt(sueldoBruto);
	while(sueldoBruto<=7999)
	{
		sueldoBruto=prompt('ERROR Ingrese su sueldo bruto correctamente');
		sueldoBruto=parseInt(sueldoBruto);
	}	

//LEGAJO:

	legajo=prompt('Ingrese su nº de legajo');
	legajo=parseInt(legajo);
	while(legajo<=999)
	{
		legajo=prompt('ERROR Ingrese su nº de legajo correctamente, sin 0 a la izquierda');
		legajo=parseInt(legajo);
	}

	nacionalidad=prompt('Ingrese su nacionalidad')
	while(nacionalidad!='A' && nacionalidad!='E' && nacionalidad!='N')
	{
		nacionalidad=prompt('ERROR Ingrese su nacionalidad correctamente');
	}
	switch(nacionalidad)
	{
		case 'A':
		nacionalidad='Argentino/a';
		break;

		case 'E':
		nacionalidad='Extranjero/a';
		break;

		case 'N':
		nacionalidad='Nacionalizado/a'
		break;
	}

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldoBruto;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;

}
