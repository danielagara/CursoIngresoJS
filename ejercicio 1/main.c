#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    int resultado=0;
    int contador=0;
    int promedio;

    while(contador<=4)
    {
        printf("Ingrese el numero");
        scanf("%d", &numero);

        resultado=resultado+numero;

        contador++;

    }

      promedio=resultado/contador;

    printf("El promedio es: %d", promedio);

    return 0;
}
