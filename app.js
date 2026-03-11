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
  variables_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa el siguiente código:",
    codigo: `a = 5
b = 3
suma = a + b`,
    pregunta: "¿Cuál será el valor de la variable suma?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "8",
    pistas: [
      "Debes sumar 5 + 3.",
      "El resultado es mayor que 7."
    ],
    felicitacion: "🎉 ¡Felicidades! Tu respuesta es correcta."
  },

  variables_2: {
    titulo: "Ejercicio 2",
    introduccion: "Observa el siguiente código:",
    codigo: `numero = 7
numero = numero + 3`,
    pregunta: "¿Qué valor tendrá ahora la variable numero?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "10",
    pistas: [
      "Se suma 7 + 3.",
      "El resultado es mayor que 9."
    ],
    felicitacion: "🎉 ¡Correcto! Ahora entiendes cómo cambiar valores."
  },

  variables_3: {
    titulo: "Ejercicio 3",
    introduccion: "Observa el siguiente código:",
    codigo: `x = 2
y = 4
resultado = x * y`,
    pregunta: "¿Cuál será el valor de la variable resultado?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "8",
    pistas: [
      "Debes multiplicar 2 por 4.",
      "El resultado es mayor que 7."
    ],
    felicitacion: "🎉 ¡Excelente! Has entendido cómo usar variables."
  },

  condicionales_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa el siguiente código:",
    codigo: `edad = 20

if edad >= 18:
    print("Puede votar")`,
    pregunta: "¿Se cumple la condición edad >= 18?",
    placeholder: "Escribe si o no",
    respuestaCorrecta: "si",
    pistas: [
      "Compara 20 con 18.",
      "20 sí es mayor que 18."
    ],
    felicitacion: "🎉 ¡Felicidades! Entendiste la condición."
  },

  condicionales_2: {
    titulo: "Ejercicio 2",
    introduccion: "Observa el siguiente código:",
    codigo: `numero = -2

if numero > 0:
    print("Es positivo")
else:
    print("No es positivo")`,
    pregunta: "¿Qué mensaje mostrará el programa?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "no es positivo",
    pistas: [
      "La variable numero vale -2.",
      "-2 no es mayor que 0."
    ],
    felicitacion: "🎉 ¡Muy bien! Ya entiendes el uso de else."
  },

  condicionales_3: {
    titulo: "Ejercicio 3",
    introduccion: "Observa la siguiente comparación:",
    codigo: `x = 10
y = 10

x == y`,
    pregunta: "¿La expresión x == y es verdadera o falsa?",
    placeholder: "Escribe verdadera o falsa",
    respuestaCorrecta: "verdadera",
    pistas: [
      "Compara el valor de x con el de y.",
      "Ambas variables valen 10."
    ],
    felicitacion: "🎉 ¡Correcto! Ya sabes comparar valores."
  },

  condicionales_4: {
    titulo: "Ejercicio 4",
    introduccion: "Observa el siguiente código:",
    codigo: `calificacion = 5

if calificacion >= 6:
    print("Aprobado")
else:
    print("Reprobado")`,
    pregunta: "¿Qué mensaje mostrará el programa?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "reprobado",
    pistas: [
      "La calificación es 5.",
      "5 no es mayor o igual que 6."
    ],
    felicitacion: "🎉 ¡Excelente! Ya comprendes cómo decidir según una condición."
  },

  ciclos_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa el siguiente ciclo:",
    codigo: `i = 1

while i <= 5:
    i = i + 1`,
    pregunta: "¿Qué valor tendrá la variable i cuando termine el ciclo?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "6",
    pistas: [
      "El ciclo continúa mientras i sea menor o igual a 5.",
      "Cuando i supera 5 el ciclo termina."
    ],
    felicitacion: "🎉 ¡Correcto! El valor final es 6."
  },

  ciclos_2: {
    titulo: "Ejercicio 2",
    introduccion: "Observa el siguiente código:",
    codigo: `contador = 0

while contador < 4:
    print("Hola")
    contador = contador + 1`,
    pregunta: "¿Cuántas veces se imprimirá la palabra 'Hola'?",
    placeholder: "Escribe un número",
    respuestaCorrecta: "4",
    pistas: [
      "El contador empieza en 0.",
      "El ciclo termina cuando contador llega a 4."
    ],
    felicitacion: "🎉 ¡Muy bien! Se imprime 4 veces."
  },

  ciclos_3: {
    titulo: "Ejercicio 3",
    introduccion: "Observa el siguiente ciclo:",
    codigo: `for i in range(5):
    print(i)`,
    pregunta: "¿Cuántos números se mostrarán?",
    placeholder: "Escribe un número",
    respuestaCorrecta: "5",
    pistas: [
      "range(5) genera cinco valores.",
      "Los valores son del 0 al 4."
    ],
    felicitacion: "🎉 ¡Excelente! Se muestran 5 números."
  },

  ciclos_4: {
    titulo: "Ejercicio 4",
    introduccion: "Observa el siguiente código:",
    codigo: `resultado = 0

for i in range(4):
    resultado = resultado + 3`,
    pregunta: "¿Cuál será el valor final de la variable resultado?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "12",
    pistas: [
      "Se suma 3 cuatro veces.",
      "3 + 3 + 3 + 3 = 12."
    ],
    felicitacion: "🎉 ¡Felicidades! Has entendido cómo usar ciclos."
  },

arreglos_1: {
  titulo: "Ejercicio 1",
  introduccion: "Observa el siguiente arreglo:",
  codigo: `animales = ["perro", "gato", "pez"]

print(animales[2])`,
  pregunta: "¿Qué valor mostrará el programa?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "pez",
  pistas: [
    "Recuerda que la primera posición es la 0.",
    "La posición 2 es el tercer elemento."
  ],
  felicitacion: "🎉 ¡Correcto! El programa muestra 'pez'."
},

arreglos_2: {
  titulo: "Ejercicio 2",
  introduccion: "Observa el siguiente código:",
  codigo: `numeros = [3, 6, 9]

numeros[1] = 12
print(numeros)`,
  pregunta: "¿Cómo quedará el arreglo después del cambio?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "[3, 12, 9]",
  pistas: [
    "Se cambia el valor de la posición 1.",
    "La posición 1 originalmente vale 6."
  ],
  felicitacion: "🎉 ¡Muy bien! El arreglo queda [3, 12, 9]."
},

arreglos_3: {
  titulo: "Ejercicio 3",
  introduccion: "Observa el siguiente ciclo:",
  codigo: `letras = ["a", "b", "c", "d"]

for letra in letras:
    print(letra)`,
  pregunta: "¿Cuántas veces se ejecuta el print?",
  placeholder: "Escribe un número",
  respuestaCorrecta: "4",
  pistas: [
    "El ciclo recorre todos los elementos del arreglo.",
    "El arreglo tiene 4 letras."
  ],
  felicitacion: "🎉 ¡Excelente! El print se ejecuta 4 veces."
},

arreglos_4: {
  titulo: "Ejercicio 4",
  introduccion: "Observa el siguiente arreglo:",
  codigo: `nombres = ["Ana", "Luis", "María", "José", "Elena"]

print(len(nombres))`,
  pregunta: "¿Qué número mostrará el programa?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "5",
  pistas: [
    "len() cuenta cuántos elementos hay en el arreglo.",
    "El arreglo tiene cinco nombres."
  ],
  felicitacion: "🎉 ¡Felicidades! El arreglo tiene 5 elementos."
},

  
 funciones_1: {
  titulo: "Ejercicio 1",
  introduccion: "Observa la siguiente función:",
  codigo: `def saludar():
    print("Buenos días")

saludar()`,
  pregunta: "¿Qué texto mostrará el programa?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "buenos días",
  pistas: [
    "La función imprime un texto.",
    "Ese texto está dentro de print()."
  ],
  felicitacion: "🎉 ¡Correcto! La función muestra 'Buenos días'."
},

funciones_2: {
  titulo: "Ejercicio 2",
  introduccion: "Observa la siguiente función:",
  codigo: `def mostrar_doble(numero):
    print(numero * 2)

mostrar_doble(4)`,
  pregunta: "¿Qué número mostrará el programa?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "8",
  pistas: [
    "La función multiplica el número por 2.",
    "4 × 2 = ?"
  ],
  felicitacion: "🎉 ¡Muy bien! La función imprime 8."
},

funciones_3: {
  titulo: "Ejercicio 3",
  introduccion: "Observa la siguiente función:",
  codigo: `def restar(a, b):
    return a - b

resultado = restar(9, 3)`,
  pregunta: "¿Cuál será el valor de la variable resultado?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "6",
  pistas: [
    "La función resta los números.",
    "9 - 3 = ?"
  ],
  felicitacion: "🎉 ¡Excelente! El resultado es 6."
},

funciones_4: {
  titulo: "Ejercicio 4",
  introduccion: "Observa la siguiente función:",
  codigo: `def triplicar(numero):
    return numero * 3

valor = triplicar(5)`,
  pregunta: "¿Cuál será el valor de la variable valor?",
  placeholder: "Escribe tu respuesta",
  respuestaCorrecta: "15",
  pistas: [
    "La función multiplica el número por 3.",
    "5 × 3 = ?"
  ],
  felicitacion: "🎉 ¡Felicidades! Has entendido cómo usar funciones."
}
},
 
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
