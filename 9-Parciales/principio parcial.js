//PARCIAL:
//ENTRADA Y SALIDA
//1:

	var base;
	base=document.getElementById('base').value;
	base=parseInt(base);
	var perimetro;
	perimetro=parseInt(perimetro);
	perimetro=(base*base);
	alert(perimetro);

//2:

	var importeProducto;
	importeProducto=prompt('Ingresa importe').value;
	importeProducto=parseInt(importeProducto);
	var iva;
	iva=parseInt(iva);
	iva=(importeProducto*21)/100;
	var resultadoFinal;
	resultadoFinal=parseInt(resultadoFinal);
	resultadoFinal=(importeProducto+iva);
	alert('Su importe final sera de '+resultadoFinal);

//3:

	var largo;
	var ancho;
	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	var perimetro;
	perimetro=parseInt(perimetro);
	perimetro=(2*largo)+(2*ancho);
	var alambre;
	alambre=parseInt(alambre);
	alambre=(perimetro*3);
	alert('Se necesitan '+alambre)

//IF Y SWITCH
//4: IF

	var numeroUno;
	var numeroDos;
	numeroUno=prompt('inserte numero uno').value;
	numeroDos=prompt('inserte numero dos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resultadoFinal;

	if(numeroUno==numeroDos)
	{
		resultadoFinal=(numeroUno*numeroDos);
		//NO ES ALERT, ES POR DOC WRITE QUE NO SE COMO SE HACE alert('Se multiplicaron y el resultado es: '+resultadoFinal);
	}
	if(numeroUno>numeroDos)
	{
		resultadoFinal=(numeroUno-numeroDos);
		//DOC WRITE
	}
	else
	{
		resultadoFinal=(numeroUno+numeroDos);
		//DOC WRITE
	}

//5: SWITCH

	var 