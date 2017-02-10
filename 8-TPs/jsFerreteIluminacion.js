/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{//A:
 	var cantidad;
 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
	var precioDescuento;
	var descuento;
	var precioSinDescuento;
	var impuesto;
	var precioFinal;
 	impuesto=parseInt(impuesto);
	precioDescuento=parseInt(precioDescuento);
	precioFinal=parseInt(precioFinal);
	descuento=parseInt(descuento);
	precioSinDescuento=parseInt(precioSinDescuento);

 	if(cantidad>=6)
 	{
 		precioSinDescuento=(cantidad*35);
 		precioDescuento=(precioSinDescuento)/2;
 		document.getElementById('precioDescuento').value=precioDescuento;
	} 	
	if(precioDescuento>=120)
	{
		impuesto=(precioDescuento*10)/100;
		precioFinal=(precioDescuento+impuesto);
		alert("Usted pagó "+precioFinal+" siendo "+impuesto+" el impuesto que pagó.")
	}

}

function CalcularPrecio () 
{//B:
	var cantidad;
 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	var marca;
 	marca=document.getElementById('Marca').value;
	var precioDescuento;
	var descuento;
	var precioSinDescuento;
	var impuesto;
	var precioFinal;
	impuesto=parseInt(impuesto);
	precioDescuento=parseInt(precioDescuento);
	precioFinal=parseInt(precioFinal);
	descuento=parseInt(descuento);
	precioSinDescuento=parseInt(precioSinDescuento);

 	if(cantidad==5 && marca=='ArgentinaLuz')
 	{
 		precioSinDescuento=(cantidad*35);
 		descuento=(precioSinDescuento*40)/100;
 		precioDescuento=(precioSinDescuento-descuento);
 		//precioDescuento=((cantidad*35)*40)/100;
 		document.getElementById('precioDescuento').value=precioDescuento;
 	}
 	else if(marca!='ArgentinaLuz')
 	{
 		precioSinDescuento=(cantidad*35);
 		descuento=(precioSinDescuento*30)/100;
 		precioDescuento=(precioSinDescuento-descuento);
 		document.getElementById('precioDescuento').value=precioDescuento;
 	}
 	if(precioDescuento>=120)
	{
		impuesto=(precioDescuento*10)/100;
		precioFinal=(precioDescuento+impuesto);
		alert("Usted pagó "+precioFinal+" siendo "+impuesto+" el impuesto que pagó.")
	}

}

function CalcularPrecio () 
{//C:

	var cantidad;
 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	var marca;
 	marca=document.getElementById('Marca').value;
	var precioDescuento;
	var descuento;
	var precioSinDescuento;
	var impuesto;
	var precioFinal;
	impuesto=parseInt(impuesto);
	precioDescuento=parseInt(precioDescuento);
	precioFinal=parseInt(precioFinal);
	descuento=parseInt(descuento);
	precioSinDescuento=parseInt(precioSinDescuento);

	if(cantidad==4 && marca=="ArgentinaLuz" || cantidad==4 && marca=="FelipeLamparas"); 
	{
		precioSinDescuento=(cantidad*35);
		descuento=(precioSinDescuento*25)/100;
		precioDescuento=(precioSinDescuento-descuento);
		document.getElementById('precioDescuento').value=precioDescuento;
	} //preguntar pq poniendo else no funciona 'unexpected token else'
	if(cantidad==4 && marca=="JeLuz" || cantidad==4 && marca=="Osram" || cantidad==4 && marca=="HazIluminacion")
	{
		precioSinDescuento=(cantidad*35);
		descuento=(precioSinDescuento*20)/100;
		precioDescuento=(precioSinDescuento-descuento);
		document.getElementById('precioDescuento').value=precioDescuento;
	}
 	if(precioDescuento>=120)
	{
		impuesto=(precioDescuento*10)/100;
		precioFinal=(precioDescuento+impuesto);
		alert("Usted pagó "+precioFinal+" siendo "+impuesto+" el impuesto que pagó.")
	}
}

function CalcularPrecio () 
{//D:
	var cantidad;
 	cantidad=document.getElementById('Cantidad').value;
 	cantidad=parseInt(cantidad);
 	var marca;
 	marca=document.getElementById('Marca').value;
	var precioDescuento;
	var descuento;
	var precioSinDescuento;
	var impuesto;
	var precioFinal;
	impuesto=parseInt(impuesto);
	precioDescuento=parseInt(precioDescuento);
	precioFinal=parseInt(precioFinal);
	descuento=parseInt(descuento);
	precioSinDescuento=parseInt(precioSinDescuento);
	
	if(cantidad==3 && marca=="ArgentinaLuz")
	{
		precioSinDescuento=(cantidad*35);
		descuento=(precioSinDescuento*15)/100;
		precioDescuento=(precioSinDescuento-descuento);
		document.getElementById('precioDescuento').value=precioDescuento;
	}
	else if(cantidad==3 && marca=="FelipeLamparas")
	{
		precioSinDescuento=(cantidad*35);
		descuento=(precioSinDescuento*10)/100;
		precioDescuento=(precioSinDescuento-descuento);
		document.getElementById('precioDescuento').value=precioDescuento;

	}
	else
	{
		precioSinDescuento=(cantidad*35);
		descuento=(precioSinDescuento*5)/100;
		precioDescuento=(precioSinDescuento-descuento);
		document.getElementById('precioDescuento').value=precioDescuento;
	}
 	if(precioDescuento>=120)
	{
		impuesto=(precioDescuento*10)/100;
		precioFinal=(precioDescuento+impuesto);
		alert("Usted pagó "+precioFinal+" siendo "+impuesto+" el impuesto que pagó.")
	}

}//EL E ES LA PARTE DEL IMPUESTO *TERMINADO*