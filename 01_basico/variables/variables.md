
1. ¿Qué es una variable?

Una variable es un espacio en la memoria de la computadora que se utiliza para almacenar información.
Su valor puede cambiar durante la ejecución del programa.

Podemos pensar en una variable como una caja con etiqueta:

La etiqueta es el nombre de la variable

Dentro de la caja está el valor

Ejemplo:

edad = 20

Aquí:

edad es el nombre de la variable

20 es el valor almacenado

2. Reglas para nombrar variables

En Python, los nombres de variables:

✅ Deben comenzar con una letra o guion bajo
✅ Pueden contener letras y números
❌ No pueden comenzar con número
❌ No pueden tener espacios

Ejemplos válidos:

nombre = "Ana"
edad2 = 25
_total = 100

Ejemplos incorrectos:

2edad = 20   # ❌ empieza con número
mi edad = 30 # ❌ tiene espacio
3. Tipos de datos básicos

Las variables pueden almacenar diferentes tipos de datos.

🔢 Enteros (int)

Números sin decimales.

edad = 20
🔣 Decimales (float)

Números con punto decimal.

altura = 1.65
📝 Cadenas de texto (str)

Texto entre comillas.

nombre = "Gerardo"
✔ Booleanos (bool)

Solo pueden ser verdadero o falso.

es_estudiante = True
4. Asignación de valores

Asignar un valor significa guardar información en una variable usando el símbolo =.

numero = 10

El símbolo = no significa "igual", significa asignar.

5. Modificar el valor de una variable

El valor de una variable puede cambiar.

puntos = 10
puntos = 20

Ahora puntos vale 20.

También se puede actualizar usando el valor anterior:

contador = 5
contador = contador + 1

Resultado:

contador = 6
6. Uso de variables en operaciones

Las variables pueden participar en operaciones matemáticas.

a = 10
b = 5
suma = a + b
print(suma)

Resultado:

15
7. Entrada de datos con variables

Las variables también pueden almacenar información ingresada por el usuario.

nombre = input("Escribe tu nombre: ")
edad = int(input("Escribe tu edad: "))

print("Hola", nombre)
print("Tienes", edad, "años")

Aquí:

input() recibe texto

int() convierte texto a número entero

8. Buenas prácticas

✔ Usar nombres descriptivos
✔ Evitar nombres muy cortos como x o a
✔ Mantener coherencia en el idioma

Ejemplo recomendado:

precio_producto = 150

9. Ejercicio propuesto

Crea un programa que:

Pida el nombre de un alumno.

Pida su edad.

Pida su carrera.

Muestre un mensaje con la información completa.

10. Conclusión

Las variables son la base de cualquier programa.
Permiten almacenar información, realizar cálculos y controlar el flujo del programa.

Sin variables no sería posible desarrollar aplicaciones dinámicas.
