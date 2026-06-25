/* ============================================================
   Renders the page from data.js and wires up interactions.
   You normally won't need to edit this file — add content in data.js.
   ============================================================ */

(function () {
  "use strict";

  // Small inline icons (no external dependencies)
  const ICONS = {
    badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.5 13 7 22l5-3 5 3-1.5-9"/></svg>',
    certificate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const hasValue = (v) => typeof v === "string" && v.trim() !== "";

  // Decide what to show in a project's media area: video, image, or a placeholder.
  function projectMedia(p) {
    if (hasValue(p.video)) {
      const poster = hasValue(p.image) ? ` poster="${esc(p.image)}"` : "";
      return `<video class="project-video" src="${esc(p.video)}"${poster}
                muted loop playsinline preload="metadata"
                data-src="${esc(p.video)}" aria-label="${esc(p.title)} demo"></video>`;
    }
    if (hasValue(p.image)) {
      return `<img src="${esc(p.image)}" alt="${esc(p.title)} preview"
                onerror="this.parentNode.innerHTML='<div class=\\'media-placeholder\\'>Add media<code>${esc(p.image)}</code></div>'">`;
    }
    return `<div class="media-placeholder">No media yet</div>`;
  }

  // ---- Render projects ----
  function renderProjects() {
    const grid = document.getElementById("work-grid");
    if (!grid || typeof PROJECTS === "undefined") return;

    grid.innerHTML = PROJECTS.map((p) => {
      const media = projectMedia(p);

      const chip = hasValue(p.highlight) ? `<span class="chip">${esc(p.highlight)}</span>` : "";
      const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");
      const link = p.link && hasValue(p.link.url)
        ? `<a class="project-link" href="${esc(p.link.url)}" target="_blank" rel="noopener">
             ${esc(p.link.label || "View")} <span class="arrow">→</span></a>`
        : "";

      return `<article class="project-card reveal">
        <div class="project-media">${media}</div>
        <div class="project-body">
          <div class="project-head">
            <div>
              <h3>${esc(p.title)}</h3>
              <p class="project-sub">${esc(p.subtitle || "")}</p>
            </div>
            ${chip}
          </div>
          <p class="project-desc">${esc(p.description || "")}</p>
          <ul class="tags">${tags}</ul>
          ${link}
        </div>
      </article>`;
    }).join("");
  }

  // ---- Render certifications & badges ----
  function renderCerts() {
    const grid = document.getElementById("cert-grid");
    if (!grid || typeof CERTIFICATIONS === "undefined") return;

    grid.innerHTML = CERTIFICATIONS.map((c) => {
      const type = c.type === "certificate" ? "certificate"
                 : c.type === "both" ? "both"
                 : "badge";
      const typeLabel = type === "certificate" ? "Certificate"
                      : type === "both" ? "Badge & certificate"
                      : "Badge";
      const iconKey = type === "badge" ? "badge" : "certificate";

      const top = hasValue(c.image)
        ? `<img class="cert-thumb" src="${esc(c.image)}" alt="${esc(c.title)}"
               data-zoom="${esc(c.image)}" data-alt="${esc(c.title)}" data-icon="${iconKey}">`
        : `<span class="cert-icon ${iconKey}">${ICONS[iconKey]}</span>`;

      const verify = hasValue(c.verify)
        ? `<a class="cert-verify" href="${esc(c.verify)}" target="_blank" rel="noopener">Verify →</a>`
        : "";

      return `<article class="cert-card reveal">
        <div class="cert-top">
          ${top}
          <div class="cert-info">
            <h3>${esc(c.title)}</h3>
            <p class="cert-meta">${esc(c.issuer || "")}${c.date ? " · " + esc(c.date) : ""}</p>
          </div>
        </div>
        <div class="cert-foot">
          <span class="cert-type">${typeLabel}</span>
          ${verify}
        </div>
      </article>`;
    }).join("");
  }

  // ---- Cert image fallback: show an icon if the image file is missing ----
  function setupCertImages() {
    document.querySelectorAll(".cert-thumb").forEach((img) => {
      img.addEventListener("error", () => {
        const k = img.getAttribute("data-icon") || "certificate";
        img.outerHTML = '<span class="cert-icon ' + k + '">' + (ICONS[k] || ICONS.certificate) + "</span>";
      });
    });
  }

  // ---- Render contact links ----
  function renderContact() {
    const list = document.getElementById("contact-links");
    if (!list || typeof PROFILE === "undefined") return;

    const items = [];
    if (hasValue(PROFILE.github))
      items.push(`<li><a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${ICONS.github}<span>GitHub</span></a></li>`);
    if (hasValue(PROFILE.linkedin))
      items.push(`<li><a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}<span>LinkedIn</span></a></li>`);
    if (hasValue(PROFILE.email))
      items.push(`<li><button type="button" id="copy-email">${ICONS.mail}<span>${esc(PROFILE.email)}</span><span class="contact-copied" hidden>Copied</span></button></li>`);

    list.innerHTML = items.join("");

    const copyBtn = document.getElementById("copy-email");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const note = copyBtn.querySelector(".contact-copied");
        navigator.clipboard.writeText(PROFILE.email).then(() => {
          if (note) { note.hidden = false; setTimeout(() => (note.hidden = true), 1800); }
        }).catch(() => {
          window.location.href = "mailto:" + PROFILE.email;
        });
      });
    }
  }

  // ---- Image modal (for certificate thumbnails) ----
  function setupModal() {
    const modal = document.getElementById("img-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = modal ? modal.querySelector(".modal-close") : null;
    if (!modal) return;

    const close = () => { modal.hidden = true; modalImg.src = ""; };

    document.addEventListener("click", (e) => {
      const thumb = e.target.closest("[data-zoom]");
      if (thumb) {
        modalImg.src = thumb.getAttribute("data-zoom");
        modalImg.alt = thumb.getAttribute("data-alt") || "";
        modal.hidden = false;
      }
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // ---- Scroll-reveal animation ----
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  // ---- Play project videos only while on screen ----
  function setupVideos() {
    const vids = document.querySelectorAll(".project-video");
    if (!vids.length) return;

    // If a video file is missing, fall back to a tidy placeholder.
    vids.forEach((v) => {
      v.addEventListener("error", () => {
        const path = v.getAttribute("data-src") || "video";
        v.parentNode.innerHTML =
          '<div class="media-placeholder">Add media<code>' + path + "</code></div>";
      });
    });

    if (!("IntersectionObserver" in window)) {
      vids.forEach((v) => v.play().catch(() => {}));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.4 });
    vids.forEach((v) => io.observe(v));
  }

  // ---- Active nav link on scroll ----
  function setupNavHighlight() {
    const links = document.querySelectorAll("[data-nav]");
    const map = {};
    links.forEach((l) => { map[l.getAttribute("href").slice(1)] = l; });
    const sections = Object.keys(map)
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const active = map[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderCerts();
    setupCertImages();
    renderContact();
    setupModal();
    setupReveal();
    setupVideos();
    setupNavHighlight();
    const yr = document.getElementById("year");
    if (yr) yr.textContent = new Date().getFullYear();
  });
})();
