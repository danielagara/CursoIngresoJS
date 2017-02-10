/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numeroAzar;
var intentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroAzar=Math.floor((Math.random() * 100) + 1);
		//alert(numeroSecreto );
	alert(numeroAzar);
	intentos = 0;
}

function verificar()
{
	//console.count('intentos');
	numeroSecreto=document.getElementById('numero').value;
	//document.getElementById('intentos').value=intentos;
	intentos++;

	if (numeroSecreto<numeroAzar)
	{
		alert("Te falta")
		
	}

		else if(numeroSecreto>numeroAzar)
	{
		alert("Te pasaste")
	}

	if(numeroSecreto==numeroAzar)
	{
		/*TODOS ESOS COMENTARIOS ESTAN MAL:
		//contadorIntentos=count.'intentos';
		//contadorIntentos=(console.log('intentos'));
		//console.count(intentos)=contadorIntentos;
		//console.count(document.getElementById('intentos').value)=contadorIntentos;
		//alert(intentos);
		//alert(console.count(document.getElementById('intentos')));
		//alert("ganaste, y en tan solo "+contadorIntentos+" intentos");
		//document.getElementById('intentos').value*/
		//contadorIntentos++;
		alert("Usted es el ganador!! Y tan solo en "+intentos+" intentos!!");
		intentos=0;
		/*SOLUCION: pongo intentos en 0, uso que cuente cuantas veces uso la funcion donde la declaro,
		 y despues la vuelvo a poner en 0 para empezar en limpio*/
	}
}