const nav = document.getElementById("nav");
const viewer = document.getElementById("viewer");
const title = document.getElementById("title");
const sourceLink = document.getElementById("sourceLink");
const btnRepo = document.getElementById("btnRepo");
const search = document.getElementById("search");

// ✅ Ramas típicas en GitHub (probamos hasta que una funcione)
const BRANCH_CANDIDATES = ["main", "master", "principal"];
let BRANCH = BRANCH_CANDIDATES[0];

let DATA = null;

// Mejor render de Markdown
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
  // encodeURI conserva "/" pero codifica acentos y espacios
  return encodeURI(`https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`);
}

function githubBlobUrl(repoUrl, branch, path) {
  return `${repoUrl.replace(/\/+$/, "")}/blob/${branch}/${path}`;
}

function setActiveButton(id) {
  [...nav.querySelectorAll("button")].forEach(b => b.classList.remove("active"));
  const btn = nav.querySelector(`button[data-id="${id}"]`);
  if (btn) btn.classList.add("active");
}

function renderMenu(sections, term = "") {
  nav.innerHTML = "";
  const t = term.trim().toLowerCase();

  sections.forEach(sec => {
    const items = !t
      ? sec.items
      : sec.items.filter(i =>
          (sec.title + " " + i.label + " " + i.id).toLowerCase().includes(t)
        );

    if (!items || items.length === 0) return;

    const h = document.createElement("h3");
    h.textContent = sec.title;
    h.style.margin = "10px 0 8px";
    nav.appendChild(h);

    items.forEach(item => {
      const b = document.createElement("button");
      b.textContent = item.label;
      b.dataset.id = item.id;
      b.onclick = () => load(item);
      nav.appendChild(b);
    });
  });
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function fetchWithBranchFallback(item) {
  // Probamos ramas hasta que una funcione
  for (const candidate of BRANCH_CANDIDATES) {
    const raw = githubRawUrl(DATA.repoUrl, candidate, item.mdPath) + `?v=${Date.now()}`;
    const res = await fetch(raw);
    if (res.ok) {
      BRANCH = candidate; // guardamos la rama que sí existe
      const text = await res.text();
      return { text, branch: candidate, rawUrl: raw };
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

    // .py (o cualquier archivo que no quieras renderizar como markdown)
    if (item.mdPath.toLowerCase().endsWith(".py")) {
      viewer.innerHTML = `<pre><code>${escapeHtml(text)}</code></pre>`;
    } else {
      viewer.innerHTML = marked.parse(text);
    }

    sourceLink.href = githubBlobUrl(DATA.repoUrl, branch, item.mdPath);
    sourceLink.textContent = "Ver archivo fuente";
  } catch (e) {
    const tryRaw = githubRawUrl(DATA.repoUrl, BRANCH_CANDIDATES[0], item.mdPath);
    viewer.innerHTML = `
      <p><strong>404 / Error al cargar el tema</strong></p>
      <p><strong>Ruta en contenido.json:</strong> <code>${item.mdPath}</code></p>
      <p><strong>Posibles causas:</strong></p>
      <ul>
        <li>La rama no coincide (tu repo puede ser <code>main</code>, <code>master</code> o <code>principal</code>).</li>
        <li>La ruta no coincide EXACTAMENTE (mayúsculas/minúsculas y acentos cuentan).</li>
      </ul>
      <p><strong>Detalle:</strong> ${escapeHtml(e.message)}</p>
      <p><strong>Prueba este raw (ajusta si hace falta):</strong><br><code>${tryRaw}</code></p>
    `;
    // Dejamos el link al repo (aunque falle, sirve para depurar)
    sourceLink.href = githubBlobUrl(DATA.repoUrl, BRANCH_CANDIDATES[0], item.mdPath);
    sourceLink.textContent = "Ver archivo fuente";
  }
}

// ✅ Cargar JSON sin caché
fetch(`./contenido.json?v=${Date.now()}`)
  .then(r => {
    if (!r.ok) throw new Error(`No se pudo cargar contenido.json (${r.status})`);
    return r.json();
  })
  .then(data => {
    DATA = data;

    // botón "Ver en GitHub"
    btnRepo.href = (DATA.repoUrl || "#");

    renderMenu(DATA.sections || []);

    search.addEventListener("input", e => {
      renderMenu(DATA.sections || [], e.target.value);
    });

    // cargar primer item
    const first = (DATA.sections || []).flatMap(s => s.items || [])[0];
    if (first) load(first);
  })
  .catch(err => {
    viewer.innerHTML = `<p><strong>Error:</strong> ${escapeHtml(err.message)}</p>`;
  });
