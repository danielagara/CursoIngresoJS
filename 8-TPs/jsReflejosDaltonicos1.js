/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var colorMaquina;

function comenzar()
{
	colorMaquina=Math.floor((Math.random() * 6) + 1);
	switch(colorMaquina)
	{
		case 1:
		colorMaquina="AZUL";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

		case 2:
		colorMaquina="AMARILLO";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

		case 3:
		colorMaquina="MARRÓN";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

		case 4:
		colorMaquina="VERDE";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

		case 5:
		colorMaquina="CELESTE";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

		case 6:
		colorMaquina="ROJO";
		document.getElementById('ColorElejido').value=colorMaquina;
		break;

	}

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	colorMaquina=document.getElementById('ColorElejido').value;
	if(colorParametro==colorMaquina)
	{
		alert("usted no es daltonico");
	}

//SIN TERMINAR

}//FIN DE LA FUNCIÓN
