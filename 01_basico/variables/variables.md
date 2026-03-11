
## ¿Qué es una variable?

Una **variable** es un espacio donde un programa guarda información para poder usarla después.

Podemos imaginar una variable como una **caja con un nombre** donde guardamos un valor.

Por ejemplo, si guardamos el número 10 en una variable llamada `x`, estamos diciendo:
x = 10


Ahora el programa puede usar `x` más adelante.

---

## Ejemplo sencillo


a = 5
b = 3
suma = a + b


En este ejemplo:

- `a` guarda el valor **5**
- `b` guarda el valor **3**
- `suma` guarda el resultado de **5 + 3**

---

## ¿Para qué sirven las variables?

Las variables permiten:

- guardar información
- hacer cálculos
- usar resultados después
- controlar el comportamiento del programa

---

# Ejercicio

Supongamos que tenemos el siguiente código:


x = 4
y = 6
resultado = x + y


**Pregunta:**

¿Cuál será el valor de la variable `resultado`?

<input id="respuestaVariables" placeholder="Escribe tu respuesta aquí">

<button onclick="verificarVariables()">Enviar respuesta</button>

<p id="mensajeVariables"></p>

<script>

let intentosVariables = 0;

function verificarVariables(){

const respuesta = document.getElementById("respuestaVariables").value.trim();
const mensaje = document.getElementById("mensajeVariables");

if(respuesta == "10"){

mensaje.innerHTML = "🎉 ¡Felicidades! Tu respuesta es correcta.";

}else{

intentosVariables++;

if(intentosVariables == 1){

mensaje.innerHTML = "❌ No es correcto. Pista: suma los valores de x y y.";

}else if(intentosVariables == 2){

mensaje.innerHTML = "❌ Intenta nuevamente. Recuerda que x vale 4 y y vale 6.";

}else{

mensaje.innerHTML = "La respuesta correcta es **10** porque 4 + 6 = 10.";

}

}

}

</script>
