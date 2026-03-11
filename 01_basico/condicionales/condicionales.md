

## ¿Qué es una condicional?

Una **condicional** es una estructura que permite que un programa tome decisiones.

Sirve para que el programa revise una condición y, dependiendo del resultado, haga una cosa u otra.

Por ejemplo, un programa puede preguntarse:

- ¿el número es mayor que 0?
- ¿la edad es suficiente?
- ¿la contraseña es correcta?

Si la condición se cumple, el programa ejecuta una acción.  
Si no se cumple, puede ejecutar otra diferente.

---

## Estructura básica

Una condicional suele escribirse así:

```python
if condicion:
    accion
```

Esto significa:

- **if** quiere decir “si”
- **condicion** es lo que se quiere comprobar
- **accion** es lo que se hace si la condición es verdadera

---

## Ejemplo sencillo

Observa este ejemplo:

```python
edad = 18

if edad >= 18:
    print("Puede entrar")
```

En este caso el programa revisa si la variable `edad` es mayor o igual que `18`.

Como la condición sí se cumple, el programa muestra:

```
Puede entrar
```

## Comparaciones comunes

Las condicionales usan operadores de comparación.

Algunos de los más usados son:

- `>` mayor que
- `<` menor que
- `>=` mayor o igual que
- `<=` menor o igual que
- `==` igual a
- `!=` diferente de

Ejemplos:

```python
x > 5
edad >= 18
numero == 10
clave != 1234
```

Estas expresiones solo pueden dar dos resultados:

- **verdadero**
- **falso**

---

[[EJERCICIO:condicionales_1]]

---

## Condicional con dos caminos

A veces el programa necesita elegir entre **dos caminos**.

Para eso se usa la estructura `else`.

```python
if condicion:
    accion_1
else:
    accion_2
```

Esto significa:

- si la condición se cumple → se ejecuta la primera acción
- si no se cumple → se ejecuta la segunda

---

## Ejemplo

```python
numero = 3

if numero > 0:
    print("Es positivo")
else:
    print("No es positivo")
```

Aquí el programa revisa si `numero` es mayor que `0`.

Como `3` sí es mayor que `0`, el resultado será:

```
Es positivo
```

---

[[EJERCICIO:condicionales_2]]

---

[[EJERCICIO:condicionales_3]]

---

## Condicionales en la vida diaria

Las condicionales también existen en situaciones cotidianas.

Por ejemplo:

- **Si** llueve → llevo paraguas  
- **Si** tengo dinero → compro el producto  
- **Si no** tengo dinero → no lo compro  

La programación usa esta misma idea para decidir qué hacer según los datos.

---

## Ejemplo con calificaciones

```python
calificacion = 9

if calificacion >= 6:
    print("Aprobado")
else:
    print("Reprobado")
```

Como `9` es mayor que `6`, el resultado será:

```
Aprobado
```

[[EJERCICIO:condicionales_4]]

---

## Reflexión

Si entendiste esta sección, entonces ya sabes:

- qué es una condicional
- cómo usar `if`
- cómo usar `if` y `else`
- cómo comparar valores en un programa
