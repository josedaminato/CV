const copy = {
  en: {
    "nav.work": "Work",
    "nav.stack": "Stack",
    "nav.languages": "Languages",
    "nav.hire": "Hire me?",
    "clock.label": "Copenhagen",
    "hero.kicker": "Software developer",
    "hero.deck": "Web applications and business systems.",
    "hero.where": "Copenhagen, Denmark · Italian / EU citizen",
    "hero.profile": "Developer and founder of DaminatoWeb. I build web applications and client websites from the first requirements through implementation. I created AppMédica, a healthcare practice-management project covering patient records, scheduling, payments and reporting. I work across product thinking, hands-on development and direct client delivery, and I use AI-assisted tools to support development and problem-solving.",
    "hero.pdf": "One-page PDF",
    "work.title": "Selected work",
    "app.role": "Creator and developer",
    "app.meta": "Independent healthcare software project",
    "app.b1": "Built an integrated application around healthcare administration: patient records, appointment scheduling, insurance follow-up, payments and monthly reports.",
    "app.b2": "Connected the interface, API and database using React and TypeScript, Python and FastAPI, and PostgreSQL.",
    "app.b3": "Implemented authentication and role-based permissions, spreadsheet import and data exports to support everyday administrative workflows.",
    "app.b4": "Included Docker Compose for local development and automated checks for core application flows.",
    "app.link": "Repository",
    "dw.role": "Founder and web developer",
    "dw.meta": "Independent web development and digital services",
    "dw.b1": "Turn client needs into websites and digital services, managing discovery, implementation, improvements and ongoing support.",
    "dw.b2": "Develop websites for professional services, including healthcare and legal businesses, with HTML, CSS and JavaScript.",
    "dw.b3": "Improve mobile usability, performance, accessibility and contact paths, and connect website work with Google Ads campaigns and business objectives.",
    "dw.link": "daminatoweb.com",
    "stack.title": "Technology and working methods",
    "stack.web.label": "Web development",
    "stack.app.label": "AppMédica",
    "stack.tools.label": "Tools",
    "stack.focus.label": "Focus",
    "stack.focus.value": "Workflow design, API integration, data management, client requirements and iterative delivery.",
    "stack.ways.label": "Strengths",
    "stack.ways.value": "Teamwork & Collaboration · Problem-Solving · Analytical Thinking · Initiative & Ownership · Adaptability · User-Focused Mindset · Continuous Learning",
    "lang.title": "Languages",
    "lang.es.label": "Spanish",
    "lang.es.value": "Native",
    "lang.en.label": "English",
    "lang.en.value": "Basic spoken, actively improving. Written communication supported by digital tools.",
    "ask.title": "Interested in hiring me?",
    "ask.note": "Yes goes to email. No has other plans.",
    "ask.yes": "Yes",
    "ask.no": "No",
    quips: [
      "Too slow.",
      "That one moved.",
      "Yes is the stable button.",
      "You can keep trying.",
      "I build interfaces. This one has an opinion.",
      "The email below does not move."
    ],
    tenure: (label) => `February 2022 — present · ${label}`
  },
  es: {
    "nav.work": "Trabajo",
    "nav.stack": "Stack",
    "nav.languages": "Idiomas",
    "nav.hire": "¿Me contratás?",
    "clock.label": "Copenhague",
    "hero.kicker": "Desarrollador de software",
    "hero.deck": "Aplicaciones web y sistemas para negocios.",
    "hero.where": "Copenhague, Dinamarca · Ciudadano italiano / UE",
    "hero.profile": "Desarrollador y fundador de DaminatoWeb. Armo aplicaciones web y sitios para clientes, desde los requisitos iniciales hasta la implementación. Creé AppMédica, un proyecto de gestión para consultorios que cubre registros de pacientes, turnos, pagos e informes. Combino criterio de producto, desarrollo práctico y entrega directa con el cliente, y uso herramientas con IA para apoyar el desarrollo y la resolución de problemas.",
    "hero.pdf": "PDF de una página",
    "work.title": "Trabajo seleccionado",
    "app.role": "Creador y desarrollador",
    "app.meta": "Proyecto independiente de software para salud",
    "app.b1": "Armé una aplicación integrada para la administración de un consultorio: registros de pacientes, turnos, seguimiento de seguros, pagos e informes mensuales.",
    "app.b2": "Conecté la interfaz, la API y la base de datos con React y TypeScript, Python y FastAPI, y PostgreSQL.",
    "app.b3": "Implementé autenticación y permisos por rol, importación de planillas y exportación de datos para el trabajo administrativo de todos los días.",
    "app.b4": "Incluí Docker Compose para el desarrollo local y controles automáticos de los flujos principales.",
    "app.link": "Repositorio",
    "dw.role": "Fundador y desarrollador web",
    "dw.meta": "Desarrollo web y servicios digitales independientes",
    "dw.b1": "Convierto necesidades de clientes en sitios y servicios digitales: descubrimiento, implementación, mejoras y soporte.",
    "dw.b2": "Desarrollo sitios para servicios profesionales, incluidos rubros de salud y legales, con HTML, CSS y JavaScript.",
    "dw.b3": "Mejoro el uso en el celular, el rendimiento, la accesibilidad y los caminos de contacto, y conecto el trabajo del sitio con campañas de Google Ads y los objetivos del negocio.",
    "dw.link": "daminatoweb.com",
    "stack.title": "Tecnología y forma de trabajo",
    "stack.web.label": "Desarrollo web",
    "stack.app.label": "AppMédica",
    "stack.tools.label": "Herramientas",
    "stack.focus.label": "Foco",
    "stack.focus.value": "Diseño de flujos de trabajo, integración de APIs, manejo de datos, requisitos del cliente y entrega iterativa.",
    "stack.ways.label": "Fortalezas",
    "stack.ways.value": "Trabajo en equipo y colaboración · Resolución de problemas · Pensamiento analítico · Iniciativa y responsabilidad · Adaptabilidad · Enfoque en el usuario · Aprendizaje continuo",
    "lang.title": "Idiomas",
    "lang.es.label": "Español",
    "lang.es.value": "Nativo",
    "lang.en.label": "Inglés",
    "lang.en.value": "Oral básico, en mejora activa. La comunicación escrita, apoyada con herramientas digitales.",
    "ask.title": "¿Te interesa contratarme?",
    "ask.note": "Sí abre el mail. No tiene otros planes.",
    "ask.yes": "Sí",
    "ask.no": "No",
    quips: [
      "Muy lento.",
      "Ese se movió.",
      "El sí es el botón estable.",
      "Podés seguir intentando.",
      "Armo interfaces. Esta tiene opinión.",
      "El mail de abajo no se mueve."
    ],
    tenure: (label) => `Febrero 2022 — actualidad · ${label}`
  }
};

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = "en";
try {
  const saved = localStorage.getItem("cv-lang");
  if (saved === "es" || saved === "en") lang = saved;
} catch (_) { /* private mode */ }

let attempts = 0;
let cooling = false;

const arena = document.querySelector("#arena");
const choices = document.querySelector(".choices");
const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
const quip = document.querySelector("#quip");
const header = document.querySelector(".top");
const chip = document.querySelector("#hire-chip");
const finale = document.querySelector("#decision");

function tenureLabel() {
  const months = (new Date().getFullYear() - 2022) * 12 + (new Date().getMonth() - 1);
  const safe = Math.max(0, months);
  const years = Math.floor(safe / 12);
  const rem = safe % 12;
  if (lang === "es") {
    const y = years === 1 ? "1 año" : `${years} años`;
    const m = rem === 1 ? "1 mes" : `${rem} meses`;
    return rem ? `${y} y ${m}` : y;
  }
  const y = years === 1 ? "1 year" : `${years} years`;
  const m = rem === 1 ? "1 month" : `${rem} months`;
  return rem ? `${y}, ${m}` : y;
}

function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = lang === "es" ? "es" : "en";
  const dict = copy[lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll(".langs button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  const tenure = document.querySelector("#tenure");
  tenure.textContent = dict.tenure(tenureLabel());
  if (attempts > 0) {
    quip.textContent = dict.quips[Math.min(attempts, dict.quips.length) - 1];
  }
  try { localStorage.setItem("cv-lang", lang); } catch (_) { /* ignore */ }
}

function tickClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(now);
  const node = document.querySelector("#clock");
  node.textContent = time;
  node.dateTime = now.toISOString();
}

function overlapsYes(x, y, w, h) {
  const origin = choices.getBoundingClientRect();
  const yes = yesBtn.getBoundingClientRect();
  const left = origin.left + x;
  const top = origin.top + y;
  const pad = 22;
  return !(
    left + w < yes.left - pad ||
    left > yes.right + pad ||
    top + h < yes.top - pad ||
    top > yes.bottom + pad
  );
}

function relocate(pointerX, pointerY) {
  if (cooling || reduced) return;
  const bounds = choices.getBoundingClientRect();
  const button = noBtn.getBoundingClientRect();
  const w = button.width;
  const h = button.height;
  const pad = 14;
  const maxX = Math.max(pad, bounds.width - w - pad);
  const maxY = Math.max(pad, bounds.height - h - pad);

  let best = null;
  let bestScore = -1;
  for (let i = 0; i < 28; i += 1) {
    const x = pad + Math.random() * (maxX - pad);
    const y = pad + Math.random() * (maxY - pad);
    if (overlapsYes(x, y, w, h)) continue;
    const cx = bounds.left + x + w / 2;
    const cy = bounds.top + y + h / 2;
    const away = Math.hypot(cx - pointerX, cy - pointerY);
    if (away < 120) continue;
    if (away > bestScore) {
      bestScore = away;
      best = { x, y };
    }
  }

  if (!best) {
    const corners = [
      { x: pad, y: pad },
      { x: maxX, y: pad },
      { x: pad, y: maxY },
      { x: maxX, y: maxY }
    ];
    best = corners.find((corner) => !overlapsYes(corner.x, corner.y, w, h)) || corners[3];
  }

  const first = !noBtn.classList.contains("is-free");
  if (first) noBtn.style.transition = "none";
  noBtn.classList.add("is-free");
  noBtn.style.left = `${best.x}px`;
  noBtn.style.top = `${best.y}px`;
  if (first) {
    requestAnimationFrame(() => { noBtn.style.transition = ""; });
  }

  cooling = true;
  window.setTimeout(() => { cooling = false; }, 180);
  attempts += 1;
  const lines = copy[lang].quips;
  quip.textContent = lines[Math.min(attempts, lines.length) - 1];
}

function nearNo(x, y) {
  const rect = noBtn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return Math.hypot(x - cx, y - cy) < 88;
}

arena.addEventListener("pointermove", (event) => {
  if (reduced) return;
  if (nearNo(event.clientX, event.clientY)) {
    relocate(event.clientX, event.clientY);
  }
});

noBtn.addEventListener("pointerdown", (event) => {
  if (reduced) return;
  event.preventDefault();
  relocate(event.clientX, event.clientY);
}, { passive: false });

noBtn.addEventListener("keydown", (event) => {
  if (reduced) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const rect = noBtn.getBoundingClientRect();
    relocate(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
});

noBtn.addEventListener("click", () => {
  if (!reduced) return;
  quip.textContent = copy[lang].quips[copy[lang].quips.length - 1];
});

document.querySelectorAll(".langs button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

function parkInside() {
  if (!noBtn.classList.contains("is-free")) return;
  const w = noBtn.offsetWidth;
  const h = noBtn.offsetHeight;
  const pad = 14;
  const maxX = Math.max(pad, choices.clientWidth - w - pad);
  const maxY = Math.max(pad, choices.clientHeight - h - pad);
  let x = Math.min(Math.max(parseFloat(noBtn.style.left) || pad, pad), maxX);
  let y = Math.min(Math.max(parseFloat(noBtn.style.top) || pad, pad), maxY);
  if (overlapsYes(x, y, w, h)) {
    const corners = [
      { x: pad, y: pad },
      { x: maxX, y: pad },
      { x: pad, y: maxY },
      { x: maxX, y: maxY }
    ];
    const safe = corners.find((corner) => !overlapsYes(corner.x, corner.y, w, h));
    if (safe) {
      x = safe.x;
      y = safe.y;
    }
  }
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

window.addEventListener("resize", parkInside);
new ResizeObserver(parkInside).observe(arena);

const watcher = new IntersectionObserver(([entry]) => {
  const visible = entry.isIntersecting && entry.intersectionRatio > 0.35;
  header.classList.toggle("on-dark", visible);
  if (visible) chip.hidden = true;
}, { threshold: [0, 0.35, 0.7] });
watcher.observe(finale);

window.addEventListener("scroll", () => {
  const finaleTop = finale.getBoundingClientRect().top;
  chip.hidden = window.scrollY < 480 || finaleTop < window.innerHeight * 0.75;
}, { passive: true });

applyLanguage(lang);
tickClock();
window.setInterval(tickClock, 30000);
