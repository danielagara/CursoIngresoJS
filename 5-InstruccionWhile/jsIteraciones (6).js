function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
		{
			contador++;
			numero=prompt("Ingrese 5 numeros");
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			//EL QUE ACUMULA, QUE LLEVA LA CUENTA MAS EL NUMERO QUE ESTOY INGRESANDO
		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN