# 📘 Variables

## 1️⃣ ¿Qué es una variable?

Una **variable** es un espacio en la memoria de la computadora que se utiliza para almacenar información.  
Su valor puede cambiar durante la ejecución del programa.

Podemos imaginar una variable como una **caja con etiqueta**:

- 📌 La etiqueta es el **nombre de la variable**
- 📦 Dentro de la caja está el **valor**

Ejemplo:

```python
edad = 20
```

Aquí:

- `edad` es el nombre de la variable  
- `20` es el valor almacenado  

---

## 2️⃣ Reglas para nombrar variables

En Python, los nombres de variables:

✔ Deben comenzar con una letra o guion bajo  
✔ Pueden contener letras y números  
❌ No pueden comenzar con número  
❌ No pueden tener espacios  

Ejemplos válidos:

```python
nombre = "Ana"
edad2 = 25
_total = 100
```

Ejemplos incorrectos:

```python
2edad = 20      # ❌ Empieza con número
mi edad = 30    # ❌ Tiene espacio
```

---

## 3️⃣ Tipos de datos básicos

Las variables pueden almacenar diferentes tipos de datos.

| Tipo | Ejemplo | Descripción |
|------|---------|------------|
| `int` | 10 | Número entero (sin decimales) |
| `float` | 3.14 | Número decimal |
| `str` | "Hola" | Texto |
| `bool` | True | Verdadero o falso |

Ejemplos:

```python
edad = 20          # int
altura = 1.75      # float
nombre = "Luis"    # str
es_mayor = True    # bool
```

---

## 4️⃣ Asignación de valores

Asignar significa guardar un valor en una variable usando el símbolo `=`.

```python
numero = 10
```

⚠ El símbolo `=` no significa "igual", significa **asignar un valor**.

---

## 5️⃣ Modificar el valor de una variable

El valor puede cambiar durante el programa.

```python
puntos = 10
puntos = 20
```

Ahora `puntos` vale 20.

También podemos actualizar usando el valor anterior:

```python
contador = 5
contador = contador + 1
```

Resultado:

```
contador = 6
```

---

## 6️⃣ Uso de variables en operaciones

Las variables pueden utilizarse en operaciones matemáticas:

```python
a = 10
b = 5
suma = a + b
print(suma)
```

Resultado:

```
15
```

---

## 7️⃣ Entrada de datos con variables

Las variables también pueden almacenar información ingresada por el usuario:

```python
nombre = input("Escribe tu nombre: ")
edad = int(input("Escribe tu edad: "))

print("Hola", nombre)
print("Tienes", edad, "años")
```

🔎 Aquí:

- `input()` recibe texto
- `int()` convierte texto en número entero

---

## 8️⃣ Buenas prácticas

✔ Usar nombres descriptivos  
✔ Mantener coherencia en el idioma  
✔ Evitar nombres muy cortos como `x` o `a`  

Ejemplo recomendado:

```python
precio_producto = 150
```

---

## 9️⃣ Ejercicio propuesto

Crea un programa que:

1. Pida el nombre de un alumno.
2. Pida su edad.
3. Pida su carrera.
4. Muestre un mensaje con toda la información.

Ejemplo de salida esperada:

```
Hola Ana, tienes 20 años y estudias Ingeniería.
```

---

## 🔟 Conclusión

Las variables son uno de los conceptos fundamentales en programación.  
Permiten almacenar información, realizar cálculos y controlar el flujo de un programa.

Sin variables no sería posible desarrollar aplicaciones dinámicas.
