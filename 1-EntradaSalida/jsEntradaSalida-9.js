/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

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
	caso restando una con la otra, por ultimo declarar que el id tiene que tener la informacion de la variable resultado*/
	

	//console.log(resultado+aumento);

}
