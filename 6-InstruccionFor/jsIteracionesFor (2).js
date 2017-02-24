function Mostrar()
{
	var mascota;
	var contador=0;
	var contadorMascota=0;
	var contadorNoMascota=0;
	var tipoMascota;
	var edad;
	var edadMasVieja;
	var edadMasViejaSinMascota;

	for(;contador<1000;)
	{
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

		}

		else //if(mascota=='no') NO HACE FALTA
		{
			contadorNoMascota++;
		}

		edad=prompt('Ingrese su edad');

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

}

//pensar otras maneras de pedir informacion
//TAREA: NECESITO SABER EL NOMBRE DEL PRIMER GATO QUE SEA DE UNA MUJER MAYOR A 30 AÑOS Y EL GATO NO TENGA MAS DE 5 AÑOS 
//DE EDAD