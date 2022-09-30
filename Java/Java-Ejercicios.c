// NOTA: Solo presentaré los primeros dos ejercicios dado que tengo pocos conocimientos sobre Java. El código del Ej. 2 está hecho en C por eso mismo, mas quería presentar algo.
// La programación es algo que me realmente me apasiona y por eso mismo estaría encantado de aprender Java (o al menos lo suficiente para resolver este test) en el menor tiempo posible si me dan la oportunidad.

// Desde ya pido disculpas por no cumplir con los conocimientos esperados, aunque estoy feliz de saber más que ayer =)

//Ejercicio 1
// 1. Describe what Hibernate is and what it is used for.

//Hibernate es un framework que facilita el mapeo de atributos entre una base de datos relacional tradicional y el modelo de objetos de una aplicación. Es decir, agiliza la relación entre la aplicación y la base de datos.

//Ejercicio 2
#include <stdio.h>
#include <string.h>

void generarCuadrado(int n)
{
	int cuadradoMagico[n][n];

	memset(cuadradoMagico, 0, sizeof(cuadradoMagico));

	int i = n / 2;
	int j = n - 1;

	for (int num = 1; num <= n * n;) {
		if (i == -1 && j == n)
		{
			j = n - 2;
			i = 0;
		}
		else {
			if (j == n)
				j = 0;
			if (i < 0)
				i = n - 1;
		}
		if (cuadradoMagico[i][j]) 
		{
			j -= 2;
			i++;
			continue;
		}
		else
			cuadradoMagico[i][j] = num++;

		j++;
		i--; 
	}

	printf("El cuadrado mágico para n = %d\nLa suma "
		"de cada fila, columna o diagonal es: %d:\n\n",
		n, n * (n * n + 1) / 2);
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++)
			printf("%3d ", cuadradoMagico[i][j]);
		printf("\n");
	}
}

int main()
{   
    int n;
    
    printf("Ingrese un número primo: ");
    scanf("%d", &n);
	generarCuadrado(n);
	return 0;
}