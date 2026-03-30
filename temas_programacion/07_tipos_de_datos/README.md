# 📌 Tipos de datos

Los tipos de datos definen qué tipo de valor puede almacenar una variable.

## 🧠 Tipos básicos
- int: números enteros
- float: números decimales
- char: un carácter
- double: mayor precisión decimal

## 💻 Ejemplo
```c
#include <stdio.h>

int main() {
    int edad = 20;
    float altura = 1.75;
    char letra = 'G';

    printf("Edad: %d\n", edad);
    printf("Altura: %.2f\n", altura);
    printf("Letra: %c\n", letra);

    return 0;
}
```

## 🔄 Conversión de tipos
```c
int a = 5;
float b = (float)a;
```

## 🧪 Ejercicio
Crear un programa que muestre diferentes tipos de datos.
