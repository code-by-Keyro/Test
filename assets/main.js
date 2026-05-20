const state = {
  lang: localStorage.getItem("siteLang") || "de",
  theme: localStorage.getItem("siteTheme") || null,
  translations: {},
  page: document.documentElement.dataset.page || "index"
};

const fallbackPackages = [
  {
    id: "starter",
    name_de: "Starter",
    name_en: "Starter",
    price_de: "ab 799 €",
    price_en: "from €799",
    description_de: "Für Einzelpersonen, Gründer oder kleine Unternehmen, die eine einfache, professionelle Online-Präsenz benötigen.",
    description_en: "For individuals, founders or small businesses that need a simple, professional online presence.",
    features_de: ["1-seitige Website oder Landingpage", "Responsive Design für Handy, Tablet und Desktop", "Kontaktformular", "Grundlegende Suchmaschinenoptimierung", "Light- und Dark-Mode möglich", "Technische Basis für spätere Erweiterungen"],
    features_en: ["One-page website or landing page", "Responsive design for mobile, tablet and desktop", "Contact form", "Basic search engine optimization", "Light and dark mode possible", "Technical foundation for future extensions"],
    ideal_for_de: "Kleine Unternehmen, Einzelpersonen, einfache Dienstleistungsangebote",
    ideal_for_en: "Small businesses, individuals, simple service offers",
    highlight: false
  },
  {
    id: "business",
    name_de: "Business",
    name_en: "Business",
    price_de: "ab 1.499 €",
    price_en: "from €1,499",
    description_de: "Für Unternehmen, die eine umfangreichere Website mit mehreren Unterseiten und klarer Leistungsdarstellung benötigen.",
    description_en: "For companies that need a more comprehensive website with multiple pages and clear service presentation.",
    features_de: ["Bis zu 5 Unterseiten", "Individuelles modernes Design", "Kontaktformular", "Mehrsprachigkeit Deutsch/Englisch möglich", "SEO-Grundstruktur", "FAQ-Bereich", "Strukturierte Daten für Suchmaschinen und KI-Systeme", "Performance-Optimierung"],
    features_en: ["Up to 5 pages", "Custom modern design", "Contact form", "German/English multilingual setup possible", "SEO base structure", "FAQ section", "Structured data for search engines and AI systems", "Performance optimization"],
    ideal_for_de: "Handwerker, Dienstleister, lokale Unternehmen, kleine Firmen",
    ideal_for_en: "Craft businesses, service providers, local businesses, small companies",
    highlight: true
  },
  {
    id: "professional",
    name_de: "Professional",
    name_en: "Professional",
    price_de: "ab 2.499 €",
    price_en: "from €2,499",
    description_de: "Für Unternehmen, die eine hochwertige Website mit stärkerer Struktur, besserer Außenwirkung und erweiterten Funktionen benötigen.",
    description_en: "For companies that need a high-quality website with stronger structure, better presentation and extended features.",
    features_de: ["Bis zu 10 Unterseiten", "Hochwertiges individuelles Design", "Mehrsprachigkeit Deutsch/Englisch", "Erweiterte SEO-Struktur", "Kontaktformular mit Paket-Auswahl", "Strukturierte Daten", "Performance- und Ladezeitoptimierung", "Basis-Konzept für Inhalte und Seitenstruktur", "Vorbereitung für spätere Erweiterungen"],
    features_en: ["Up to 10 pages", "High-quality custom design", "German/English multilingual setup", "Advanced SEO structure", "Contact form with package selection", "Structured data", "Performance and loading time optimization", "Basic concept for content and page structure", "Prepared for future extensions"],
    ideal_for_de: "Wachsende Unternehmen, professionelle Dienstleister, Firmen mit stärkerem Außenauftritt",
    ideal_for_en: "Growing companies, professional service providers, companies with a stronger public presence",
    highlight: false
  },
  {
    id: "custom",
    name_de: "Individuell",
    name_en: "Custom",
    price_de: "Preis auf Anfrage",
    price_en: "Price on request",
    description_de: "Für Projekte, die nicht in ein Standardpaket passen oder besondere Funktionen benötigen.",
    description_en: "For projects that do not fit into a standard package or require special functionality.",
    features_de: ["Individueller Projektumfang", "Sonderfunktionen nach Absprache", "Komplexere Formulare oder Schnittstellen möglich", "Erweiterbare technische Struktur", "Persönliche Einschätzung nach Anfrage"],
    features_en: ["Custom project scope", "Special features by agreement", "More complex forms or integrations possible", "Expandable technical structure", "Personal assessment after inquiry"],
    ideal_for_de: "Sonderprojekte, größere Websites, spezielle technische Anforderungen",
    ideal_for_en: "Custom projects, larger websites, special technical requirements",
    highlight: false
  }
];
const fallbackMaintenance = [
  {
    id: "basic-care",
    name_de: "Basic Care",
    name_en: "Basic Care",
    price_de: "ab 49 € / Monat",
    price_en: "from €49 / month",
    description_de: "Für kleine Websites, bei denen gelegentliche Änderungen und eine grundlegende technische Betreuung ausreichen.",
    description_en: "For small websites where occasional changes and basic technical support are sufficient.",
    features_de: ["Bis zu 30 Minuten kleine Änderungen pro Monat", "Text- und Bildänderungen", "Grundlegende technische Kontrolle", "Kurzer monatlicher Check", "E-Mail-Support"],
    features_en: ["Up to 30 minutes of small changes per month", "Text and image changes", "Basic technical check", "Short monthly check", "Email support"],
    limits_de: "Nicht enthalten sind größere Designänderungen, neue Unterseiten, komplexe Funktionen oder rechtliche Beratung.",
    limits_en: "Major design changes, new pages, complex features or legal advice are not included.",
    highlight: false
  },
  {
    id: "business-care",
    name_de: "Business Care",
    name_en: "Business Care",
    price_de: "ab 99 € / Monat",
    price_en: "from €99 / month",
    description_de: "Für Unternehmen, die regelmäßig kleinere Änderungen, technische Pflege und schnelle Reaktionszeiten benötigen.",
    description_en: "For companies that need regular small changes, technical maintenance and fast response times.",
    features_de: ["Bis zu 90 Minuten Änderungen pro Monat", "Text-, Bild- und Inhaltsänderungen", "Technische Kontrolle", "Kleine SEO-Anpassungen", "Priorisierte Bearbeitung", "E-Mail-Support"],
    features_en: ["Up to 90 minutes of changes per month", "Text, image and content changes", "Technical check", "Small SEO adjustments", "Prioritized handling", "Email support"],
    limits_de: "Nicht enthalten sind komplette Redesigns, größere neue Funktionen oder externe Kosten für Hosting, Plugins oder Drittanbieter.",
    limits_en: "Complete redesigns, larger new features or external costs for hosting, plugins or third-party services are not included.",
    highlight: true
  },
  {
    id: "premium-care",
    name_de: "Premium Care",
    name_en: "Premium Care",
    price_de: "ab 199 € / Monat",
    price_en: "from €199 / month",
    description_de: "Für Unternehmen, die eine aktiv betreute Website mit regelmäßigen Optimierungen und mehr Änderungsumfang wünschen.",
    description_en: "For companies that want an actively maintained website with regular optimizations and a larger change budget.",
    features_de: ["Bis zu 3 Stunden Änderungen pro Monat", "Regelmäßige Inhalts- und Strukturverbesserungen", "Technische Kontrolle", "SEO- und Performance-Basisoptimierung", "Priorisierter Support", "Monatliche kurze Zusammenfassung der erledigten Arbeiten"],
    features_en: ["Up to 3 hours of changes per month", "Regular content and structure improvements", "Technical check", "Basic SEO and performance optimization", "Prioritized support", "Monthly short summary of completed work"],
    limits_de: "Nicht enthalten sind sehr große neue Funktionen, komplette Relaunches, rechtliche Beratung oder externe Dienstleisterkosten.",
    limits_en: "Very large new features, complete relaunches, legal advice or external service provider costs are not included.",
    highlight: false
  }
];
const fallbackFaqs = [
  { question_de: "Wie schnell erhalte ich eine Rückmeldung?", question_en: "How quickly will I receive a response?", answer_de: "Wir prüfen jede Anfrage und melden uns spätestens innerhalb von 24 Stunden mit einer ersten Einschätzung.", answer_en: "We review every inquiry and respond within 24 hours at the latest with an initial assessment." },
  { question_de: "Sind die Paketpreise Festpreise?", question_en: "Are package prices fixed prices?", answer_de: "Die Preise sind Richtwerte ab dem genannten Betrag. Der finale Preis hängt von Umfang, Funktionen, Designwunsch und technischer Komplexität ab.", answer_en: "The prices are guide prices starting from the stated amount. The final price depends on scope, features, design requirements and technical complexity." },
  { question_de: "Nehmt ihr jedes Projekt an?", question_en: "Do you accept every project?", answer_de: "Nein. Wir prüfen, ob Anforderungen, Zeitrahmen und technische Komplexität sinnvoll zu uns passen. Falls nicht, sagen wir transparent ab.", answer_en: "No. We check whether requirements, timing and technical complexity are a sensible fit. If not, we decline transparently." }
];
const fallbackReferences = [
  {
    id: "craft-demo",
    title_de: "Handwerk Demo",
    title_en: "Craft Demo",
    industry_de: "Handwerk und lokale Dienstleistung",
    industry_en: "Craft and local services",
    description_de: "Referenz-Website als Platzhalter für einen klaren, lokalen Unternehmensauftritt.",
    description_en: "Reference website placeholder for a clear local business presence.",
    url: "#",
    status_de: "In Vorbereitung",
    status_en: "In preparation"
  }
];

async function loadJson(path, fallback) {
  const paths = Array.isArray(path) ? path : [path];
  let lastError = null;
  for (const currentPath of paths) {
    try {
      const response = await fetch(currentPath, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }
  console.warn(`Could not load ${paths.join(", ")}`, lastError);
  return fallback;
}

function publicData(type, localFile) {
  return [`/backend/public-data.php?type=${type}`, `/data/${localFile.split("/").pop()}`, localFile];
}

function scrollToHashTarget() {
  if (!window.location.hash) return;
  const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (!target) return;
  requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
  });
}

function t(key) {
  return state.translations?.[state.lang]?.[key] || state.translations?.de?.[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  applyProcessDetails();
  document.documentElement.lang = state.lang;
  document.title = t(`meta.${state.page}.title`);
  setMeta("description", t(`meta.${state.page}.description`));
  setMeta("og:title", t(`meta.${state.page}.title`), true);
  setMeta("og:description", t(`meta.${state.page}.description`), true);
  document.querySelectorAll(".lang-button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    const nextLang = state.lang === "de" ? "en" : "de";
    btn.textContent = nextLang.toUpperCase();
    btn.setAttribute("aria-label", state.lang === "de" ? t("nav.switchEnglish") : t("nav.switchGerman"));
    btn.setAttribute("title", state.lang === "de" ? t("nav.switchEnglish") : t("nav.switchGerman"));
  });
  document.querySelectorAll('input[name="lang"]').forEach((input) => {
    input.value = state.lang;
  });
}

function applyProcessDetails() {
  document.querySelectorAll(".process li[data-i18n]").forEach((item) => {
    const titleKey = item.dataset.i18n;
    const detailKey = item.dataset.processDetail;
    if (!detailKey) return;
    item.innerHTML = `<span class="process-title">${t(titleKey)}</span><span class="process-detail">${t(detailKey)}</span>`;
  });
}

function setMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

function applyTheme(theme) {
  const selected = theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = selected;
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) toggle.setAttribute("aria-label", selected === "dark" ? t("nav.light") : t("nav.dark"));
}

function packageCard(item, type = "website") {
  const suffix = state.lang === "de" ? "_de" : "_en";
  const features = item[`features${suffix}`] || [];
  const ideal = item[`ideal_for${suffix}`] ? `<p><strong>${t("cards.ideal")}</strong> ${item[`ideal_for${suffix}`]}</p>` : "";
  const limits = item[`limits${suffix}`] ? `<p class="muted"><strong>${t("cards.limits")}</strong> ${item[`limits${suffix}`]}</p>` : "";
  const cardClasses = [
    "card",
    "package-card",
    `package-card--${type}`,
    `package-card--${item.id}`,
    item.price_type === "request" || item.id.includes("custom") ? "package-card--custom" : "",
    item.highlight ? "highlight" : ""
  ].filter(Boolean).join(" ");
  return `
    <article class="${cardClasses}" data-animate itemprop="${type === "website" ? "itemListElement" : ""}" itemscope itemtype="https://schema.org/Offer">
      <h3 itemprop="name">${item[`name${suffix}`]}</h3>
      <p class="price" itemprop="priceSpecification">${item[`price${suffix}`]}</p>
      <p itemprop="description">${item[`description${suffix}`]}</p>
      <ul>${features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      ${ideal}
      ${limits}
      <a class="button secondary card-action" href="/contact/?package=${encodeURIComponent(item.id)}" data-i18n="cards.request">${t("cards.request")}</a>
    </article>
  `;
}

function referenceCard(item) {
  const suffix = state.lang === "de" ? "_de" : "_en";
  return `
    <article class="reference-card" data-animate>
      <span class="reference-meta"><span class="inline-icon">↗</span>${item[`industry${suffix}`]}</span>
      <h3>${item[`title${suffix}`]}</h3>
      <p>${item[`description${suffix}`]}</p>
      <p class="reference-status">${item[`status${suffix}`]}</p>
      <a class="button secondary card-action" href="${item.url}" ${item.url === "#" ? "aria-disabled=\"true\"" : "target=\"_blank\" rel=\"noopener\""} data-i18n="references.open">${t("references.open")}</a>
    </article>
  `;
}

async function renderPackages() {
  const websiteMounts = document.querySelectorAll("[data-packages='website']");
  const maintenanceMounts = document.querySelectorAll("[data-packages='maintenance']");
  const packageSelect = document.querySelector("[data-package-options]");
  const packages = (websiteMounts.length || packageSelect) ? await loadJson(publicData("website-packages", "data/website-packages.json"), fallbackPackages) : [];
  const maintenance = (maintenanceMounts.length || packageSelect) ? await loadJson(publicData("maintenance-packages", "data/maintenance-packages.json"), fallbackMaintenance) : [];
  websiteMounts.forEach((mount) => { mount.innerHTML = packages.map((item) => packageCard(item, "website")).join(""); });
  maintenanceMounts.forEach((mount) => { mount.innerHTML = maintenance.map((item) => packageCard(item, "maintenance")).join(""); });
  populatePackageSelect(packages, maintenance);
  injectOfferCatalog(packages, maintenance);
  revealOnScroll();
  scrollToHashTarget();
}

function populatePackageSelect(packages, maintenance) {
  const mount = document.querySelector("[data-package-options]");
  if (!mount) return;
  const current = new URLSearchParams(location.search).get("package") || "";
  const suffix = state.lang === "de" ? "_de" : "_en";
  const options = (items, group) => items.map((item) => (
    `<label class="checkbox">
      <input type="checkbox" name="packages[]" value="${item.id}" data-package-group="${group}" ${item.id === current ? "checked" : ""}>
      <span>${item[`name${suffix}`]} <small class="muted">${item[`price${suffix}`]}</small></span>
    </label>`
  )).join("");
  mount.innerHTML = `
    <div>
      <p class="form-hint"><strong>${t("form.websitePackages")}</strong></p>
      <div class="option-list">${options(packages, "website")}</div>
    </div>
    <div>
      <p class="form-hint"><strong>${t("form.maintenancePackages")}</strong></p>
      <div class="option-list">${options(maintenance, "maintenance")}</div>
    </div>
  `;
}

async function renderFaqs() {
  const mounts = document.querySelectorAll("[data-faqs]");
  if (!mounts.length) return;
  const faqs = await loadJson(publicData("faqs", "data/faqs.json"), fallbackFaqs);
  const suffix = state.lang === "de" ? "_de" : "_en";
  const html = faqs.map((faq, index) => `
    <article class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        <span itemprop="name">${faq[`question${suffix}`]}</span><span aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" ${index === 0 ? "" : "hidden"} itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">${faq[`answer${suffix}`]}</p>
      </div>
    </article>
  `).join("");
  mounts.forEach((mount) => { mount.innerHTML = html; });
  injectFaqSchema(faqs);
}

async function renderReferences() {
  const mounts = document.querySelectorAll("[data-references]");
  if (!mounts.length) return;
  const references = await loadJson(publicData("references", "data/reference-sites.json"), fallbackReferences);
  mounts.forEach((mount) => {
    mount.innerHTML = references.map(referenceCard).join("");
  });
  revealOnScroll();
}

function bindFaqs() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-item button");
    if (!button) return;
    const answer = button.parentElement.querySelector(".faq-answer");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    answer.hidden = expanded;
  });
}

function bindNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll(".lang-button").forEach((btn) => {
    btn.addEventListener("click", async () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("siteLang", state.lang);
      applyTranslations();
      await renderPackages();
      await renderFaqs();
      await renderReferences();
    });
  });
  document.querySelector("[data-lang-toggle]")?.addEventListener("click", async () => {
    state.lang = state.lang === "de" ? "en" : "de";
    localStorage.setItem("siteLang", state.lang);
    applyTranslations();
    await renderPackages();
    await renderFaqs();
    await renderReferences();
  });
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("siteTheme", next);
    state.theme = next;
    applyTheme(next);
  });
}

function bindForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const message = document.querySelector("#form-message");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.className = "form-message";
    message.textContent = "";
    const data = new FormData(form);
    const required = ["first_name", "last_name", "email", "project_description", "privacy"];
    const missing = required.filter((name) => !String(data.get(name) || "").trim());
    const selectedPackages = data.getAll("packages[]");
    const email = String(data.get("email") || "");
    if (missing.length || !selectedPackages.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormMessage("error", t("form.validationError"));
      return;
    }
    try {
      const response = await fetch("/backend/contact.php", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "error");
      form.reset();
      showFormMessage("success", result.message || t("form.success"));
    } catch (error) {
      showFormMessage("error", t("form.submitError"));
    }
  });
}

function bindDatePicker() {
  const input = document.querySelector("#deadline");
  if (!input) return;

  input.type = "text";
  input.readOnly = true;
  input.autocomplete = "off";
  input.placeholder = "YYYY-MM-DD";

  const picker = document.createElement("div");
  picker.className = "date-picker";
  const wrap = document.createElement("div");
  wrap.className = "date-input-wrap";
  const parent = input.parentElement;
  parent.insertBefore(picker, input);
  picker.appendChild(wrap);
  wrap.appendChild(input);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "date-toggle";
  toggle.setAttribute("aria-label", state.lang === "de" ? "Kalender öffnen" : "Open calendar");
  toggle.innerHTML = '<span aria-hidden="true">▦</span>';
  wrap.appendChild(toggle);

  const calendar = document.createElement("div");
  calendar.className = "date-calendar";
  calendar.hidden = true;
  picker.appendChild(calendar);

  let selected = parseDate(input.value);
  let viewDate = selected || new Date();
  viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);

  const open = () => {
    calendar.hidden = false;
    render();
  };
  const close = () => {
    calendar.hidden = true;
  };
  const toggleOpen = () => {
    calendar.hidden ? open() : close();
  };

  input.addEventListener("click", open);
  input.addEventListener("focus", open);
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleOpen();
  });
  calendar.addEventListener("click", (event) => {
    event.stopPropagation();
    const prev = event.target.closest("[data-date-prev]");
    const next = event.target.closest("[data-date-next]");
    const day = event.target.closest(".date-day");
    if (prev) {
      viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
      render();
      return;
    }
    if (next) {
      viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
      render();
      return;
    }
    if (day) {
      selected = parseDate(day.dataset.date);
      input.value = day.dataset.date;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      close();
    }
  });
  calendar.addEventListener("change", (event) => {
    const monthSelect = event.target.closest("[data-date-month]");
    const yearSelect = event.target.closest("[data-date-year]");
    if (monthSelect) {
      viewDate = new Date(viewDate.getFullYear(), Number(monthSelect.value), 1);
      render();
    }
    if (yearSelect) {
      viewDate = new Date(Number(yearSelect.value), viewDate.getMonth(), 1);
      render();
    }
  });
  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  function render() {
    const locale = state.lang === "de" ? "de-DE" : "en-US";
    const months = Array.from({ length: 12 }, (_, month) => (
      new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(viewDate.getFullYear(), month, 1))
    ));
    const currentYear = new Date().getFullYear();
    const yearStart = Math.min(currentYear, viewDate.getFullYear()) - 1;
    const years = Array.from({ length: 14 }, (_, index) => yearStart + index);
    const weekdays = state.lang === "de"
      ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const startOffset = (firstDay.getDay() + 6) % 7;
    const gridStart = new Date(firstDay);
    gridStart.setDate(firstDay.getDate() - startOffset);

    calendar.innerHTML = `
      <div class="date-calendar-header">
        <button class="date-nav" type="button" data-date-prev aria-label="${state.lang === "de" ? "Vorheriger Monat" : "Previous month"}">‹</button>
        <div class="date-calendar-selects">
          <label class="visually-hidden" for="date-month">${state.lang === "de" ? "Monat" : "Month"}</label>
          <select id="date-month" class="date-select" data-date-month>
            ${months.map((month, index) => `<option value="${index}" ${index === viewDate.getMonth() ? "selected" : ""}>${month}</option>`).join("")}
          </select>
          <label class="visually-hidden" for="date-year">${state.lang === "de" ? "Jahr" : "Year"}</label>
          <select id="date-year" class="date-select" data-date-year>
            ${years.map((year) => `<option value="${year}" ${year === viewDate.getFullYear() ? "selected" : ""}>${year}</option>`).join("")}
          </select>
        </div>
        <button class="date-nav" type="button" data-date-next aria-label="${state.lang === "de" ? "Nächster Monat" : "Next month"}">›</button>
      </div>
      <div class="date-grid">
        ${weekdays.map((day) => `<span class="date-weekday">${day}</span>`).join("")}
      </div>
    `;

    const grid = calendar.querySelector(".date-grid");
    const todayKey = formatDate(new Date());
    const selectedKey = selected ? formatDate(selected) : "";

    for (let index = 0; index < 42; index += 1) {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      const key = formatDate(date);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "date-day";
      button.textContent = String(date.getDate());
      button.dataset.date = key;
      button.setAttribute("aria-label", new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(date));
      if (date.getMonth() !== viewDate.getMonth()) button.classList.add("is-muted");
      if (key === todayKey) button.classList.add("is-today");
      if (key === selectedKey) button.classList.add("is-selected");
      grid.appendChild(button);
    }
  }
}

function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function showFormMessage(type, text) {
  const message = document.querySelector("#form-message");
  if (!message) return;
  message.className = `form-message ${type}`;
  message.textContent = text;
  message.focus();
}

function revealOnScroll() {
  const items = document.querySelectorAll("[data-animate]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function injectOfferCatalog(webPackages, maintenancePackages) {
  if (!webPackages.length && !maintenancePackages.length) return;
  const suffix = state.lang === "de" ? "_de" : "_en";
  const offers = [...webPackages, ...maintenancePackages].map((item) => ({
    "@type": "Offer",
    "name": item[`name${suffix}`],
    "description": item[`description${suffix}`],
    "priceSpecification": item[`price${suffix}`]
  }));
  injectJsonLd("catalog-schema", {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": t("schema.catalogName"),
    "itemListElement": offers
  });
}

function injectFaqSchema(faqs) {
  const suffix = state.lang === "de" ? "_de" : "_en";
  injectJsonLd("faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq[`question${suffix}`],
      "acceptedAnswer": { "@type": "Answer", "text": faq[`answer${suffix}`] }
    }))
  });
}

function injectJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

async function init() {
  state.translations = await loadJson(publicData("translations", "data/translations.json"), {});
  applyTheme(state.theme);
  applyTranslations();
  bindNav();
  bindFaqs();
  bindForm();
  bindDatePicker();
  await renderPackages();
  await renderFaqs();
  await renderReferences();
  revealOnScroll();
  window.addEventListener("hashchange", scrollToHashTarget);
  scrollToHashTarget();
}

init();
