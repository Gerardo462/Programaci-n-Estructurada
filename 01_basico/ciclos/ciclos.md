
## ¿Qué es un ciclo?

Un **ciclo** es una estructura que permite repetir una acción varias veces.

En programación, los ciclos se utilizan cuando queremos que una instrucción se ejecute varias veces sin tener que escribirla muchas veces.

Por ejemplo:

- mostrar números
- repetir cálculos
- recorrer listas de datos

Los ciclos ayudan a que los programas sean **más cortos y más eficientes**.

---

## Ciclo `while`

Uno de los ciclos más comunes es el ciclo **while**.

Su estructura es:

```python
while condicion:
    accion
```

Esto significa:

- mientras la condición sea **verdadera**, el programa seguirá repitiendo la acción.

---

## Ejemplo

```python
i = 1

while i <= 3:
    print(i)
    i = i + 1
```

Este programa mostrará:

```
1
2
3
```

Porque el ciclo se repite mientras `i` sea menor o igual que `3`.

---

[[EJERCICIO:ciclos_1]]

---

## Incrementar una variable

Dentro de los ciclos es común **aumentar el valor de una variable** para evitar que el ciclo sea infinito.

Por ejemplo:

```python
contador = 0

while contador < 5:
    print(contador)
    contador = contador + 1
```

Aquí el programa muestra los números del **0 al 4**.

---

[[EJERCICIO:ciclos_2]]

---

## Ciclo `for`

Otro ciclo muy usado es el ciclo **for**.

Se utiliza para repetir una acción un número específico de veces.

Ejemplo:

```python
for i in range(3):
    print(i)
```

Este programa mostrará:

```
0
1
2
```

Porque `range(3)` genera tres valores.

---

[[EJERCICIO:ciclos_3]]

---

## Usos de los ciclos

Los ciclos se utilizan para muchas tareas, por ejemplo:

- recorrer listas
- repetir cálculos
- generar secuencias
- automatizar procesos repetitivos

---

## Ejemplo

```python
suma = 0

for i in range(3):
    suma = suma + 2

print(suma)
```

Este programa suma **2 tres veces**, por lo que el resultado será **6**.

---

[[EJERCICIO:ciclos_4]]

---

## Reflexión

Si entendiste esta sección, entonces ya sabes:

- qué es un ciclo
- cómo funciona `while`
- cómo funciona `for`
- cómo repetir acciones dentro de un programa
