/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;
	//var descuento;
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	//descuento=(importe*25)/100; PRIMER INTENTO CON DIF VARIABLES Y CUENTA
	//resultado=(importe-descuento);


	//descuento=(importe*0.25); otro intento
	//resultado=(importe-descuento);
	resultado=(importe*0.75);
	document.getElementById('resultado').value=resultado;


/*declarar variables, tomar el id del primero que es el que ingresa el usuario, cambiar a parseint, declarar variable descuento
con operacion, declarar variable recultado juntando las anteriores en este caso restando una con la otra, por ultimo declarar
que el id tiene que tener la informacion de la variable resultado*/
}
