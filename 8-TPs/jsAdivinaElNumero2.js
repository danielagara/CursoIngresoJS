/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numeroAzar;
var contadorIntentos;
var intentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroAzar=Math.floor((Math.random() * 100) + 1);
	alert(numeroAzar);
	

}

function verificar()
{
	numeroSecreto=document.getElementById('numero').value;
	intentos++;
	
	if(numeroSecreto==numeroAzar && intentos==1)
	{
		alert("Usted es un psiquico");
		intentos = 0;
	}
	if(numeroSecreto==numeroAzar && intentos==2)
	{
		alert("Excelente percepción");
		intentos = 0;
	}
	if(numeroSecreto==numeroAzar && intentos==3)
	{
		alert("Esto es suerte");
		intentos = 0;
	}
	if(numeroSecreto==numeroAzar && intentos==4)
	{
		alert("Excelente técnica");
		intentos = 0;
	}
	if(numeroSecreto==numeroAzar && intentos==5)
	{
		alert("Usted esta en la media");
		intentos = 0;
	}
		//SE PONE IGUAL EL &&
	if(numeroSecreto==numeroAzar && intentos>=6 && intentos<=10)
	{
		alert("Usted necesita práctica");
		intentos = 0;
	}
	else if(numeroSecreto==numeroAzar && intentos>=10)
	{
		alert("Suertudo en el amor!!");
		intentos= 0;
	}
}