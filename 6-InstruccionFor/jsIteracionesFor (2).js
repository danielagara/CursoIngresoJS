function Mostrar()
{
	var bandera="nadie";

	var mascota;
	var contador=0;
	var contadorMascota=0;
	var contadorNoMascota=0;
	var tipoMascota;
	var edad;
	var edadMasVieja;
	var edadMasViejaSinMascota;
	var nombrePrimerGato;
	var edadGato;
	var sexo;

	for(;contador<2;)
	{
		edad=prompt('Ingrese su edad');

		sexo=prompt('Ingrese su sexo');
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt('ERROR Ingrese su sexo');
		}

		mascota=prompt('Tiene mascota?');
		
		while(mascota!='si' && mascota!='no')
		{
			mascota=prompt('ERROR Ingrese si tiene mascota con si o no');
		}

		if(mascota=='si')
		{
			contadorMascota++;

			tipoMascota=prompt('Que tipo de mascota es?');
			while(tipoMascota!='perro' && tipoMascota!='gato')
			{
				tipoMascota=prompt('ERROR Ingrese si es perro o gato');
			}

			if(tipoMascota=='gato' && edad>=30 && sexo=='f')
			{
				
				edadGato=prompt('Ingrese la edad de su gato');
				edadGato=parseInt(edadGato);
				while(edadGato>15)
				{
					edadGato=prompt('ERROR Ingrese la edad de su gato correctamente');
					edadGato=parseInt(edadGato);
				}

				if(edadGato<=5  && bandera=="nadie")
				{
					nombrePrimerGato=prompt('Ingrese el nombre de su gato');
					//CAMBIO EL VALOR DE LA BANDERA ASI NO ME DEJA INGRESAR OTRA VEZ
					bandera='alguien';
				}
			}


		}

		else //if(mascota=='no') NO HACE FALTA
		{
			contadorNoMascota++;
		}


		if(contador==1)
		{
			edadMasVieja=edad;
		}
		else
		{
			if(edad>edadMasVieja)
			{
				edadMasVieja=edad;
			}
		}

		if(mascota=='no' && edad==edadMasVieja)
		{
			edadMasViejaSinMascota=edadMasVieja;
		}
	
		contador++;
	}

	console.log(nombrePrimerGato); //PARA VERIFICAR
}

//pensar otras maneras de pedir informacion
//TAREA: NECESITO SABER EL NOMBRE DEL PRIMER GATO QUE SEA DE UNA MUJER MAYOR A 30 AÑOS Y EL GATO NO TENGA MAS DE 5 AÑOS 
//DE EDAD