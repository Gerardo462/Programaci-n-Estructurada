
## ¿Qué es un arreglo?

Un **arreglo** es una estructura que permite guardar varios valores en una sola variable.

En lugar de crear muchas variables separadas, un arreglo permite tener varios datos del mismo tipo organizados en posiciones.

Por ejemplo, en vez de escribir:

```python
calificacion1 = 8
calificacion2 = 9
calificacion3 = 10
```

podemos usar un arreglo:

```python
calificaciones = [8, 9, 10]
```

Esto hace que el programa sea más ordenado y más fácil de manejar.

---

## Posiciones dentro de un arreglo

Cada elemento dentro de un arreglo tiene una **posición**.

En programación, la primera posición casi siempre es la **0**.

Por ejemplo:

```python
numeros = [4, 7, 9]
```

Aquí:

- `numeros[0]` vale `4`
- `numeros[1]` vale `7`
- `numeros[2]` vale `9`

---

## Ejemplo

```python
frutas = ["manzana", "pera", "uva"]

print(frutas[1])
```

El resultado será:

```
pera
```

porque `"pera"` está en la posición `1`.

---


[[EJERCICIO:arreglos_1]]

---

## Cambiar un valor dentro de un arreglo

También es posible cambiar un valor dentro de un arreglo.

Ejemplo:

```python
numeros = [5, 8, 2]

numeros[0] = 10
print(numeros)
```

Resultado:

```
[10, 8, 2]
```

Porque el valor de la posición `0` cambió de `5` a `10`.

---


[[EJERCICIO:arreglos_2]]

---

## Recorrer un arreglo

Los arreglos se usan mucho con ciclos para revisar todos sus elementos.

Ejemplo:

```python
numeros = [1, 2, 3]

for n in numeros:
    print(n)
```

Resultado:

```
1
2
3
```

El ciclo recorre cada elemento del arreglo y lo muestra.

---

[[EJERCICIO:arreglos_3]]

---

## Tamaño de un arreglo

También podemos saber cuántos elementos tiene un arreglo.

Ejemplo:

```python
colores = ["rojo", "azul", "verde", "amarillo"]

print(len(colores))
```

Resultado:

```
4
```

Porque el arreglo tiene cuatro elementos.

---


[[EJERCICIO:arreglos_4]]

---

## Reflexión

Si entendiste esta sección, entonces ya sabes:

- qué es un arreglo
- cómo acceder a una posición
- cómo cambiar valores dentro de un arreglo
- cómo recorrer un arreglo
- cómo saber cuántos elementos tiene
