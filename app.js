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
    introduccion: "Observa la siguiente condición:",
    codigo: `a = 8
b = 5

if a > b:
    print("a es mayor")`,
    pregunta: "¿Se cumple la condición a > b?",
    placeholder: "Escribe si o no",
    respuestaCorrecta: "si",
    pistas: [
      "Compara 8 con 5.",
      "8 sí es mayor que 5."
    ],
    felicitacion: "🎉 ¡Felicidades! Entendiste la condición."
  },

  ciclos_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa el siguiente ciclo:",
    codigo: `i = 1

while i <= 3:
    print(i)
    i = i + 1`,
    pregunta: "¿Cuántas veces se repite el ciclo?",
    placeholder: "Escribe un número",
    respuestaCorrecta: "3",
    pistas: [
      "Cuenta los valores 1, 2 y 3.",
      "El ciclo se repite una vez por cada valor válido."
    ],
    felicitacion: "🎉 ¡Felicidades! Ya entendiste cómo funciona un ciclo."
  },

  arreglos_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa el siguiente arreglo:",
    codigo: `numeros = [8, 9, 10]`,
    pregunta: "¿Qué valor está en la posición 1?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "9",
    pistas: [
      "Recuerda que la primera posición es la 0.",
      "Posición 0 = 8, posición 1 = 9."
    ],
    felicitacion: "🎉 ¡Felicidades! Ya entendiste cómo acceder a un arreglo."
  },

  funciones_1: {
    titulo: "Ejercicio 1",
    introduccion: "Observa la siguiente función:",
    codigo: `def sumar(a, b):
    return a + b

resultado = sumar(2, 3)`,
    pregunta: "¿Qué valor tendrá la variable resultado?",
    placeholder: "Escribe tu respuesta",
    respuestaCorrecta: "5",
    pistas: [
      "La función suma 2 + 3.",
      "El resultado es un número impar."
    ],
    felicitacion: "🎉 ¡Felicidades! Ya entendiste la idea de una función."
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
