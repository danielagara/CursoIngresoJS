function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=Math.floor((Math.random() * 10) + 1);
	//math.random()=utiliza la funcion math para darme numeros al azar MENORES A 1 EXCLUSIVE Y MAYORES A 0 INCLUSIVE
	//math.random()*10 +1= me va a correr la coma, y darme numeros entre el 10 y el 1 inclusive 
	alert(numero);

}//FIN DE LA FUNCIÓN