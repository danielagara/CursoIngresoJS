function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
		alert('Este mes no tiene mas de 29 días');
		break;
		//solo voy a dejar un caso especifico para un mes
		default:
		//y usando default directamente les plancho a todos los otros meses el mismo alert, else pero de switch
		alert('Este mes tiene mas de 29 días');

	}
	


}//FIN DE LA FUNCIÓN