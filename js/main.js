// ---------- Project data (same as before; edit whenever) ----------
const projects = [
  {
    title: "Cinematic Environment — Neon Alley",
    year: "2026",
    tags: ["environment", "unreal"],
    blurb: "Mood-driven scene built in Unreal with real-time lighting and set dressing.",
    bullets: ["Blockout → set dressing", "Lighting + post process", "Modular workflow"],
    links: [{ label: "Video", url: "#" }, { label: "Breakdown", url: "#" }],
    media: { type: "placeholder", label: "Add render / video here" }
  },
  {
    title: "Creature Walk Cycle",
    year: "2025",
    tags: ["animation"],
    blurb: "Walk cycle focusing on weight, overlap, and clean arcs.",
    bullets: ["Timing + spacing polish", "Silhouette readability", "Reference + iteration"],
    links: [{ label: "YouTube", url: "#" }],
    media: { type: "placeholder", label: "Add GIF / MP4 preview" }
  },
  {
    title: "Stylized Prop Set",
    year: "2025",
    tags: ["modeling"],
    blurb: "Prop set with hand-painted textures and strong shape language.",
    bullets: ["High → low poly + bake", "Texture pass + materials", "Consistent style guide"],
    links: [{ label: "ArtStation", url: "#" }],
    media: { type: "placeholder", label: "Add prop renders" }
  },
  {
    title: "Unreal Prototype — Puzzle Mechanic",
    year: "2026",
    tags: ["unreal", "gamedesign"],
    blurb: "Blueprint prototype focused on clarity and iteration.",
    bullets: ["Blueprint systems + UI prompts", "Greybox testing", "Simple VFX hooks"],
    links: [{ label: "Playable (Itch.io)", url: "#" }],
    media: { type: "placeholder", label: "Add gameplay clip" }
  },
  {
    title: "Hard-Surface Asset — Sci-Fi Door",
    year: "2025",
    tags: ["modeling", "environment"],
    blurb: "Hard-surface asset made for modular environments.",
    bullets: ["Clean topology for bakes", "Trim sheet planning", "Decals + material breakup"],
    links: [{ label: "Turntable", url: "#" }],
    media: { type: "placeholder", label: "Add turntable video" }
  },
  {
    title: "Other / Experiment",
    year: "2024",
    tags: ["other"],
    blurb: "Shaders, VFX tests, or art experiments.",
    bullets: ["Quick iterations", "Learning-focused", "Notes + takeaways"],
    links: [{ label: "More", url: "#" }],
    media: { type: "placeholder", label: "Add media" }
  }
];

// ---------- Helpers ----------
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

// ---------- Book page flip ----------
const pagesWrap = $("#pages");
const pages = $$(".page", pagesWrap);
const prevBtn = $("#prevPage");
const nextBtn = $("#nextPage");
const pageNumEl = $("#pageNum");
const pageTotalEl = $("#pageTotal");

let current = 0; // 0-based

pageTotalEl.textContent = String(pages.length - 1); // cover counts as i, but indicator shows "1.."
updateBookUI();

function goToPage(index) {
  index = Math.max(0, Math.min(pages.length - 1, index));
  if (index === current) return;

  const forward = index > current;

  // Flip pages between current and target
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("is-active");
  }

  if (forward) {
    // mark earlier pages flipped
    for (let i = 0; i < index; i++) pages[i].classList.add("is-flipped");
    for (let i = index; i < pages.length; i++) pages[i].classList.remove("is-flipped");
  } else {
    // going backward, unflip later pages
    for (let i = 0; i < index; i++) pages[i].classList.add("is-flipped");
    for (let i = index; i < pages.length; i++) pages[i].classList.remove("is-flipped");
  }

  pages[index].classList.add("is-active");
  current = index;
  updateBookUI();
}

function updateBookUI() {
  // indicator: show 1.. for inner pages, cover shown as 1 for simplicity
  const shown = Math.max(1, current); // cover = 1
  pageNumEl.textContent = String(shown);

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === pages.length - 1;
}

// Next/Prev
prevBtn.addEventListener("click", () => goToPage(current - 1));
nextBtn.addEventListener("click", () => goToPage(current + 1));

// Keyboard navigation
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goToPage(current - 1);
  if (e.key === "ArrowRight") goToPage(current + 1);
});

// any element with data-goto can jump
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-goto]");
  if (!t) return;
  const n = Number(t.getAttribute("data-goto"));
  if (!Number.isFinite(n)) return;
  // pages: 1..N (human) => convert to 0-based
  goToPage(n - 1);
});

// ---------- Projects grid + modal (same behavior as your previous site) ----------
const grid = $("#projectGrid");
const modal = $("#projectModal");
const modalTitle = $("#modalTitle");
const modalMeta = $("#modalMeta");
const modalDesc = $("#modalDesc");
const modalBullets = $("#modalBullets");
const modalLinks = $("#modalLinks");
const modalMedia = $("#modalMedia");

function prettyTag(tag) {
  const map = {
    animation: "Animation",
    modeling: "Modeling",
    environment: "Environment",
    unreal: "Unreal",
    gamedesign: "Game Design",
    other: "Other"
  };
  return map[tag] ?? tag;
}

function buildMedia(media) {
  if (!media || media.type === "placeholder") {
    return `
      <div style="width:100%;border-radius:18px;border:1px dashed rgba(42,42,42,.22);background:rgba(255,255,255,.65);padding:1rem;text-align:center;">
        <p><strong>${media?.label ?? "Add media"}</strong></p>
        <p style="margin:0;color:rgba(63,75,87,.9);font-weight:700;">Use an image, MP4, or YouTube/Vimeo embed</p>
      </div>
    `;
  }
  if (media.type === "image") return `<img src="${media.src}" alt="${media.alt ?? "Project image"}" />`;
  if (media.type === "video") {
    return `<video controls preload="metadata"><source src="${media.src}" type="video/mp4" />Sorry, your browser doesn’t support video.</video>`;
  }
  if (media.type === "embed") {
    return `
      <iframe
        src="${media.src}"
        title="${media.title ?? "Project video"}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="aspect-ratio:16/9;"
      ></iframe>
    `;
  }
  return "";
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalMeta.textContent = `${project.tags.map(prettyTag).join(" • ")} • ${project.year}`;
  modalDesc.textContent = project.blurb;

  modalBullets.innerHTML = "";
  (project.bullets ?? []).forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    modalBullets.appendChild(li);
  });

  modalLinks.innerHTML = "";
  (project.links ?? []).forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label;
    modalLinks.appendChild(a);
  });

  modalMedia.innerHTML = buildMedia(project.media);

  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";
  const filtered = projects.filter(p => (filter === "all" ? true : p.tags.includes(filter)));

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="muted">No projects match that filter yet.</p>`;
    return;
  }

  for (const p of filtered) {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.setAttribute("aria-label", `Open project: ${p.title}`);

    const badges = p.tags.map(t => `<span class="badge">${prettyTag(t)}</span>`).join("");

    card.innerHTML = `
      <div class="thumb"><span>${p.year}</span></div>
      <div class="card-body">
        <p class="card-title">${p.title}</p>
        <p class="muted">${p.blurb}</p>
        <div class="card-meta">${badges}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  }
}

// Filters
$$(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".chip").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});

// Modal close
$(".modal-close")?.addEventListener("click", () => modal.close());

// Contact form -> mailto
$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
});

// init
renderProjects("all");
goToPage(0);
