const nav = document.getElementById("nav");
const viewer = document.getElementById("viewer");
const title = document.getElementById("title");
const sourceLink = document.getElementById("sourceLink");
const btnRepo = document.getElementById("btnRepo");
const search = document.getElementById("search");

const BRANCH_CANDIDATES = ["main", "master", "principal"];
let BRANCH = BRANCH_CANDIDATES[0];
let DATA = null;
const EXERCISES = {

variables_1:{
titulo:"Ejercicio 1",
introduccion:"Observa el siguiente código:",
codigo:`a = 4
b = 6
resultado = a + b`,
pregunta:"¿Cuál será el valor de la variable resultado?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"10",
pistas:[
"Suma los valores de a y b.",
"4 + 6 = ?"
],
felicitacion:"🎉 ¡Felicidades! La respuesta es correcta."
},

variables_2:{
titulo:"Ejercicio 2",
introduccion:"Observa el siguiente código:",
codigo:`numero = 7
numero = numero + 2`,
pregunta:"¿Cuál será el valor final de numero?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"9",
pistas:[
"El valor inicial es 7.",
"Se suma 2 al valor."
],
felicitacion:"🎉 ¡Muy bien!"
},

variables_3:{
titulo:"Ejercicio 3",
introduccion:"Observa el siguiente código:",
codigo:`x = 3
y = 5
resultado = x * y`,
pregunta:"¿Cuál será el valor de resultado?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"15",
pistas:[
"Debes multiplicar.",
"3 × 5 = ?"
],
felicitacion:"🎉 ¡Correcto!"
},

condicionales_1:{
titulo:"Ejercicio 1",
introduccion:"Observa el siguiente código:",
codigo:`edad = 20

if edad >= 18:
    print("Puede entrar")`,
pregunta:"¿Se cumple la condición edad >= 18?",
placeholder:"Escribe si o no",
respuestaCorrecta:"si",
pistas:[
"Compara 20 con 18.",
"20 es mayor que 18."
],
felicitacion:"🎉 ¡Correcto!"
},

condicionales_2:{
titulo:"Ejercicio 2",
introduccion:"Observa el siguiente código:",
codigo:`numero = -3

if numero > 0:
    print("Positivo")
else:
    print("No positivo")`,
pregunta:"¿Qué mensaje se mostrará?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"no positivo",
pistas:[
"El número es negativo.",
"No es mayor que 0."
],
felicitacion:"🎉 ¡Bien hecho!"
},

condicionales_3:{
titulo:"Ejercicio 3",
introduccion:"Observa la comparación:",
codigo:`x = 8
y = 8

x == y`,
pregunta:"¿La expresión es verdadera o falsa?",
placeholder:"Escribe verdadera o falsa",
respuestaCorrecta:"verdadera",
pistas:[
"Ambos valores son iguales.",
"8 es igual a 8."
],
felicitacion:"🎉 ¡Correcto!"
},

condicionales_4:{
titulo:"Ejercicio 4",
introduccion:"Observa el siguiente código:",
codigo:`calificacion = 5

if calificacion >= 6:
    print("Aprobado")
else:
    print("Reprobado")`,
pregunta:"¿Qué mensaje se mostrará?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"reprobado",
pistas:[
"5 es menor que 6.",
"Por lo tanto no aprueba."
],
felicitacion:"🎉 ¡Excelente!"
},

ciclos_1:{
titulo:"Ejercicio 1",
introduccion:"Observa el siguiente ciclo:",
codigo:`i = 1

while i <= 4:
    i = i + 1`,
pregunta:"¿Qué valor tendrá i al terminar?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"5",
pistas:[
"El ciclo termina cuando i es mayor que 4.",
"i incrementa en 1 cada vez."
],
felicitacion:"🎉 ¡Muy bien!"
},

ciclos_2:{
titulo:"Ejercicio 2",
introduccion:"Observa el siguiente código:",
codigo:`contador = 0

while contador < 3:
    contador = contador + 1`,
pregunta:"¿Cuál será el valor final de contador?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"3",
pistas:[
"Empieza en 0.",
"Se incrementa hasta llegar a 3."
],
felicitacion:"🎉 ¡Correcto!"
},

ciclos_3:{
titulo:"Ejercicio 3",
introduccion:"Observa el siguiente ciclo:",
codigo:`for i in range(4):
    print(i)`,
pregunta:"¿Cuántos números se mostrarán?",
placeholder:"Escribe un número",
respuestaCorrecta:"4",
pistas:[
"range(4) genera 4 valores.",
"Los valores son 0,1,2,3."
],
felicitacion:"🎉 ¡Excelente!"
},

ciclos_4:{
titulo:"Ejercicio 4",
introduccion:"Observa el siguiente código:",
codigo:`resultado = 0

for i in range(3):
    resultado = resultado + 4`,
pregunta:"¿Cuál será el valor final de resultado?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"12",
pistas:[
"Se suma 4 tres veces.",
"4 + 4 + 4 = ?"
],
felicitacion:"🎉 ¡Muy bien!"
},

funciones_1:{
titulo:"Ejercicio 1",
introduccion:"Observa la siguiente función:",
codigo:`def saludar():
    print("Hola estudiante")

saludar()`,
pregunta:"¿Qué texto mostrará el programa?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"hola estudiante",
pistas:[
"El texto está dentro de print.",
"La función imprime ese texto."
],
felicitacion:"🎉 ¡Correcto!"
},

funciones_2:{
titulo:"Ejercicio 2",
introduccion:"Observa la siguiente función:",
codigo:`def doble(numero):
    print(numero * 2)

doble(6)`,
pregunta:"¿Qué número mostrará el programa?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"12",
pistas:[
"La función multiplica por 2.",
"6 × 2 = ?"
],
felicitacion:"🎉 ¡Bien hecho!"
},

funciones_3:{
titulo:"Ejercicio 3",
introduccion:"Observa la siguiente función:",
codigo:`def restar(a,b):
    return a - b

resultado = restar(10,4)`,
pregunta:"¿Cuál será el valor de resultado?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"6",
pistas:[
"Debes restar.",
"10 - 4 = ?"
],
felicitacion:"🎉 ¡Excelente!"
},

funciones_4:{
titulo:"Ejercicio 4",
introduccion:"Observa la siguiente función:",
codigo:`def triplicar(numero):
    return numero * 3

valor = triplicar(4)`,
pregunta:"¿Cuál será el valor de valor?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"12",
pistas:[
"Multiplica por 3.",
"4 × 3 = ?"
],
felicitacion:"🎉 ¡Correcto!"
},

arreglos_1:{
titulo:"Ejercicio 1",
introduccion:"Observa el arreglo:",
codigo:`animales = ["perro","gato","pez"]

print(animales[1])`,
pregunta:"¿Qué valor se mostrará?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"gato",
pistas:[
"Recuerda que el índice empieza en 0.",
"La posición 1 es el segundo elemento."
],
felicitacion:"🎉 ¡Muy bien!"
},

arreglos_2:{
titulo:"Ejercicio 2",
introduccion:"Observa el siguiente código:",
codigo:`numeros = [3,6,9]

numeros[0] = 10
print(numeros)`,
pregunta:"¿Cómo quedará el arreglo?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"[10,6,9]",
pistas:[
"Se cambia la posición 0.",
"El 3 se reemplaza por 10."
],
felicitacion:"🎉 ¡Correcto!"
},

arreglos_3:{
titulo:"Ejercicio 3",
introduccion:"Observa el siguiente código:",
codigo:`letras = ["a","b","c"]

for l in letras:
    print(l)`,
pregunta:"¿Cuántas veces se ejecuta el print?",
placeholder:"Escribe un número",
respuestaCorrecta:"3",
pistas:[
"El ciclo recorre todos los elementos.",
"Hay tres letras."
],
felicitacion:"🎉 ¡Excelente!"
},

arreglos_4:{
titulo:"Ejercicio 4",
introduccion:"Observa el siguiente código:",
codigo:`numeros = [2, 4, 6, 8]

numeros[2] = numeros[2] + 5
print(numeros)`,
pregunta:"¿Cómo quedará el arreglo después de ejecutar el programa?",
placeholder:"Escribe tu respuesta",
respuestaCorrecta:"[2, 4, 11, 8]",
pistas:[
"El valor en la posición 2 es 6.",
"6 + 5 = 11."
],
felicitacion:"🎉 ¡Excelente! Entendiste cómo modificar valores dentro de un arreglo."
}

};
 
const exerciseAttempts = {};

if (window.marked) {
  marked.setOptions({ gfm: true, breaks: true });
}

function parseRepo(repoUrl) {
  const clean = repoUrl.replace("https://github.com/", "").replace(/\/+$/, "");
  const parts = clean.split("/");
  return { user: parts[0], repo: parts[1] };
}

function githubRawUrl(repoUrl, branch, path) {
  const { user, repo } = parseRepo(repoUrl);
  return encodeURI(`https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`);
}

function githubBlobUrl(repoUrl, branch, path) {
  return `${repoUrl.replace(/\/+$/, "")}/blob/${branch}/${path}`;
}

function setActiveButton(id) {
  [...nav.querySelectorAll("button")].forEach((b) => b.classList.remove("active"));
  const btn = nav.querySelector(`button[data-id="${id}"]`);
  if (btn) btn.classList.add("active");
}

function renderMenu(sections, term = "") {
  nav.innerHTML = "";
  const t = term.trim().toLowerCase();

  sections.forEach((sec) => {
    const items = !t
      ? (sec.items || [])
      : (sec.items || []).filter((i) =>
          (sec.title + " " + i.label + " " + i.id).toLowerCase().includes(t)
        );

    if (!items.length) return;

    const h = document.createElement("h3");
    h.textContent = sec.title;
    nav.appendChild(h);

    items.forEach((item) => {
      const b = document.createElement("button");
      b.textContent = item.label;
      b.dataset.id = item.id;
      b.onclick = () => load(item);
      nav.appendChild(b);
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderExercises(html) {
  return html.replace(/<p>\s*\[\[EJERCICIO:([a-zA-Z0-9_-]+)\]\]\s*<\/p>/gi, (_, exerciseId) => {
    const ex = EXERCISES[exerciseId];

    if (!ex) {
      return `<p><strong>Ejercicio no encontrado:</strong> ${escapeHtml(exerciseId)}</p>`;
    }

    const titulo = ex.titulo || "Ejercicio";
    const introduccion = ex.introduccion || "";
    const codigo = ex.codigo || "";

    return `
      <div class="exercise-card" data-exercise-id="${escapeHtml(exerciseId)}">
        <div class="exercise-card-header">
          <h3>${escapeHtml(titulo)}</h3>
        </div>

        <div class="exercise-card-body">
          ${introduccion ? `<p class="exercise-intro">${escapeHtml(introduccion)}</p>` : ""}
          ${codigo ? `<pre class="exercise-code"><code>${escapeHtml(codigo)}</code></pre>` : ""}
          <p class="exercise-question">${escapeHtml(ex.pregunta)}</p>

          <input
            type="text"
            class="exercise-input"
            placeholder="${escapeHtml(ex.placeholder)}"
          >

          <button
            class="exercise-btn"
            data-exercise-id="${escapeHtml(exerciseId)}"
            type="button"
          >
            Enviar respuesta
          </button>

          <p class="exercise-message"></p>
        </div>
      </div>
    `;
  });
}

function checkExercise(exerciseId, box) {
  const ex = EXERCISES[exerciseId];
  if (!ex || !box) return;

  const input = box.querySelector(".exercise-input");
  const message = box.querySelector(".exercise-message");

  if (!input || !message) return;

  if (!exerciseAttempts[exerciseId]) {
    exerciseAttempts[exerciseId] = 0;
  }

  const userAnswer = normalizeText(input.value);
  const correctAnswer = normalizeText(ex.respuestaCorrecta);

  if (userAnswer === correctAnswer) {
    message.innerHTML = ex.felicitacion;
    return;
  }

  exerciseAttempts[exerciseId] += 1;
  const attempt = exerciseAttempts[exerciseId];

  if (attempt <= 2) {
    message.innerHTML = `❌ Respuesta incorrecta. Pista: ${escapeHtml(ex.pistas[attempt - 1])}`;
  } else {
    message.innerHTML = `La respuesta correcta es <strong>${escapeHtml(ex.respuestaCorrecta)}</strong>.`;
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("exercise-btn")) {
    const exerciseId = e.target.dataset.exerciseId;
    const box = e.target.closest(".exercise-card");
    checkExercise(exerciseId, box);
  }
});

async function fetchWithBranchFallback(item) {
  for (const candidate of BRANCH_CANDIDATES) {
    const raw = githubRawUrl(DATA.repoUrl, candidate, item.mdPath) + `?v=${Date.now()}`;
    const res = await fetch(raw);

    if (res.ok) {
      BRANCH = candidate;
      const text = await res.text();
      return { text, branch: candidate };
    }
  }

  throw new Error("No se pudo cargar en ninguna rama (main / master / principal).");
}

async function load(item) {
  title.textContent = item.label;
  viewer.innerHTML = "Cargando…";
  setActiveButton(item.id);

  try {
    const { text, branch } = await fetchWithBranchFallback(item);

    if (item.mdPath.toLowerCase().endsWith(".py")) {
      viewer.innerHTML = `<pre><code>${escapeHtml(text)}</code></pre>`;
    } else {
      let html = marked.parse(text);
      html = renderExercises(html);
      viewer.innerHTML = html;
    }

    sourceLink.href = githubBlobUrl(DATA.repoUrl, branch, item.mdPath);
    sourceLink.textContent = "Ver archivo fuente";
  } catch (e) {
    const tryRaw = githubRawUrl(DATA.repoUrl, BRANCH_CANDIDATES[0], item.mdPath);

    viewer.innerHTML = `
      <p><strong>404 / Error al cargar el tema</strong></p>
      <p><strong>Ruta en contenido.json:</strong> <code>${escapeHtml(item.mdPath)}</code></p>
      <p><strong>Posibles causas:</strong></p>
      <ul>
        <li>La rama no coincide. Tu repo puede usar <code>main</code>, <code>master</code> o <code>principal</code>.</li>
        <li>La ruta no coincide exactamente. Mayúsculas, minúsculas, espacios y acentos cuentan.</li>
      </ul>
      <p><strong>Detalle:</strong> ${escapeHtml(e.message)}</p>
      <p><strong>Prueba este raw:</strong><br><code>${escapeHtml(tryRaw)}</code></p>
    `;

    sourceLink.href = githubBlobUrl(DATA.repoUrl, BRANCH_CANDIDATES[0], item.mdPath);
    sourceLink.textContent = "Ver archivo fuente";
  }
}

fetch(`./contenido.json?v=${Date.now()}`)
  .then((r) => {
    if (!r.ok) throw new Error(`No se pudo cargar contenido.json (${r.status})`);
    return r.json();
  })
  .then((data) => {
    DATA = data;

    btnRepo.href = DATA.repoUrl || "#";

    renderMenu(DATA.sections || []);

    search.addEventListener("input", (e) => {
      renderMenu(DATA.sections || [], e.target.value);
    });

    const first = (DATA.sections || []).flatMap((s) => s.items || [])[0];
    if (first) load(first);
  })
  .catch((err) => {
    viewer.innerHTML = `<p><strong>Error:</strong> ${escapeHtml(err.message)}</p>`;
  });
