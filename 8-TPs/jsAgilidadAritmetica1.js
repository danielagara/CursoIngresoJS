/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
	var respuesta;
	var numero1;
	numero1=Math.floor((Math.random() * 10) + 1);
	var numero2;
	numero2=Math.floor((Math.random() * 10) +1);
	var operator;
	operator=Math.floor((Math.random() * 4) +1);
	var resultado;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

function comenzar()
{
	/*var numero1;
	numero1=Math.floor((Math.random() * 10) + 1);
	var numero2;
	numero2=Math.floor((Math.random() * 10) +1);
	var operaciones;
	operaciones=Math.floor((Math.random() * 4) +1);*/
	switch(operator)
	{
		case 1:
		operator='+';
		resultado=(numero1+numero2);
		break;

		case 2:
		operator='-';
		resultado=(numero1-numero2);
		break;

		case 3:
		operator='*';
		resultado=(numero1*numero2);
		break;

		case 4:
		operator="/";
		resultado=(numero1/numero2);
		break;
	}
	document.getElementById('PrimerNumero').value=numero1;
	document.getElementById('SegundoNumero').value=numero2;
	document.getElementById('Operador').value=operator;
	//si no se pone value diectamente no aparece y tira error invalido de definir

}//FIN DE LA FUNCIÓN
function Responder()
{

	respuesta=document.getElementById('Respuesta').value;
	if(respuesta==resultado)
	{
		alert("GANASTE!");
	}
	else
	{
		alert("PERDISTE :( ");
	}

}//FIN DE LA FUNCIÓN
//SIN TERMINAR