#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero1;
    int numero2;
    int resultado;

    printf("Ingresar el primer numero: ");
    scanf("%d", &numero1);

    printf("Ingresar el segundo numero: ");
    scanf("%d", &numero2);

    resultado=numero1+numero2;

    printf("El resultado de la suma es: %d ", resultado);

    return 0;
}
