function Mostrar()
{
	var contador=0;
	//pasa una sola vez popr la primera en la que inicializo, y luego pasa solo por la segunda y la tercera
	//DEJAR ; SI NO NO FUNCIONA
	//SE PUEDE ULTILIZAR SOLO UNA O LAS TRES O SOLO 2 DE LAS CONDICIONES O NINGUNA

/*
	for(contador=0;contador<5;contador++)
	{
		console.log(contador);
		contador++;
//MANERA DE SALIR PARA CUALQUIERA CONDICION:
		if (contador==5)
		{
			break;
		}
	}
*/
	var numeroRandom;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;


	for(;contador<10000;contador++)
	{
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		//console.log(numeroRandom); MUESTRA TODOS LOS NUMEROS
		
		switch(numeroRandom)
		{
			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;

			case 5:
			contador5++;
			break;

			case 6:
			contador6++;
			break;

			case 7:
			if(contador7>=(contador*0.07))//REVISAR
			{
				continue;//SE SALTA EL CONTADOR, Y EMPIEZA DE NUEVO EL FOR
			}
			contador7++;
			break;//CORTA LA CONDICION

			case 8:
			contador8++;
			break;

			case 9:
			contador9++;
			break;

			case 10:
			contador10++;
			break;

		}
	}

	console.log('La cantidad de 1 es '+contador1/contador*100+"%");
	console.log('La cantidad de 2 es '+contador2/contador*100+"%");
	console.log('La cantidad de 3 es '+contador3/contador*100+"%");
	console.log('La cantidad de 4 es '+contador4/contador*100+"%");
	console.log('La cantidad de 5 es '+contador5/contador*100+"%");
	console.log('La cantidad de 6 es '+contador6/contador*100+"%");
	console.log('La cantidad de 7 es '+contador7/contador*100+"%");
	console.log('La cantidad de 8 es '+contador8/contador*100+"%");
	console.log('La cantidad de 9 es '+contador9/contador*100+"%");
	console.log('La cantidad de 10 es '+contador10/contador*100+"%");
	console.log('La cantidad de vueltas es '+contador);
	//console.log(7*contador/100);


}