/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;
//FALTA DEFINIR COMO SE TOMA LA ELECCION DE PERSONA

function comenzar()
{
	numero=Math.floor((Math.random() * 3) + 1);
	switch(numero)
	{
		case 1:
		eleccionMaquina="piedra";
		//alert(eleccionMaquina);
		break;

		case 2:
		eleccionMaquina="papel";
		//alert(eleccionMaquina)
		break;

		case 3:
		eleccionMaquina="tijera";
		//alert(eleccionMaquina);
		break;
	}


}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("la maquina eligio "+eleccionMaquina);
	eleccionPersona="piedra";
	if(eleccionMaquina==eleccionPersona)
	{
		alert("empate");
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("ganaste");
	}
	else
	{
		alert("ganó la máquina");
	}

}//FIN DE LA FUNCIÓN

function papel()
{
	alert("la maquina eligio "+eleccionMaquina);
	eleccionPersona="papel";
	if(eleccionMaquina==eleccionPersona)
	{
		alert("empate");
	}
	else if(eleccionMaquina=="piedra")
	{
		alert("ganaste");
	}
	else
	{
		alert("ganó la máquina");
	}

}//FIN DE LA FUNCIÓN



function tijera()
{
	alert("la maquina eligio "+eleccionMaquina);
	eleccionPersona="tijera";
	if(eleccionMaquina==eleccionPersona)
	{
		alert("empate");
	}
	else if(eleccionMaquina=="papel")
	{
		alert("ganaste");
	}
	else
	{
		alert("ganó la máquina");
	}

}//FIN DE LA FUNCIÓN