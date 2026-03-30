# 📌 Lógica Matemática

La lógica matemática es la base de la programación. Permite tomar decisiones mediante condiciones verdaderas o falsas.

## 🧠 Proposiciones
Una proposición es una afirmación que puede ser:
- Verdadera (V)
- Falsa (F)

Ejemplos:
- 5 > 3 → Verdadero  
- 10 < 2 → Falso  

## 🔗 Operadores lógicos
- AND (&&): ambas condiciones deben cumplirse  
- OR (||): al menos una condición debe cumplirse  
- NOT (!): niega una condición  

## 💻 Ejemplo en C
```c
#include <stdio.h>

int main() {
    int a = 5, b = 3;

    if (a > 0 && b > 0) {
        printf("Ambos son positivos\n");
    }

    return 0;
}
```

## 🧪 Ejercicio
Crear un programa que determine si un número es positivo y par.
