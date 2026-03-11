## ¿Qué es una función?

Una **función** es un bloque de código que realiza una tarea específica.

Las funciones permiten **organizar mejor un programa**, evitar repetir código y hacer que el programa sea más fácil de entender.

Una función puede:

- recibir información
- realizar una operación
- devolver un resultado

---

## Estructura de una función

En Python, una función se define usando la palabra **def**.

```python
def nombre_funcion():
    instrucciones
```

Después de definir la función, se puede usar escribiendo su nombre.

---

## Ejemplo

```python
def saludar():
    print("Hola")
```

Para ejecutar la función:

```python
saludar()
```

El resultado será:

```
Hola
```
[[EJERCICIO:funciones_1]]

---

## Funciones con parámetros

Las funciones también pueden recibir **parámetros**.  
Los parámetros son valores que la función utiliza para realizar su tarea.

Ejemplo:

```python
def mostrar_numero(numero):
    print(numero)
```

Uso de la función:

```python
mostrar_numero(5)
```

Resultado:

```
5
```

[[EJERCICIO:funciones_2]]

---

## Funciones que devuelven valores

Algunas funciones no solo realizan una acción, sino que también **devuelven un resultado**.

Para eso se usa la palabra **return**.

Ejemplo:

```python
def sumar(a, b):
    return a + b
```

Uso de la función:

```python
resultado = sumar(3, 4)
print(resultado)
```

Resultado:

```
7
```

[[EJERCICIO:funciones_3]]

---

## Ventajas de usar funciones

Las funciones ayudan a:

- organizar mejor el código
- evitar repetir instrucciones
- dividir problemas grandes en partes pequeñas
- hacer programas más fáciles de entender

---

## Ejemplo

```python
def duplicar(numero):
    return numero * 2

resultado = duplicar(6)
print(resultado)
```

Resultado:

```
12
```

[[EJERCICIO:funciones_4]]

---

## Reflexión

Si entendiste esta sección, entonces ya sabes:

- qué es una función
- cómo crear una función
- cómo usar parámetros
- cómo devolver resultados con `return`
