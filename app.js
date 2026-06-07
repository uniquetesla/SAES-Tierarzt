const STORAGE_KEY = "saes-tierarzt-akten";

const dogBreeds = [
  "Schäferhund",
  "Labrador Retriever",
  "Golden Retriever",
  "Rottweiler",
  "Dobermann",
  "Husky",
  "Border Collie",
  "Boxer",
  "Beagle",
  "Dalmatiner",
  "Pitbull",
  "Mops",
  "Chihuahua",
  "Dackel",
  "Mischling",
  "Andere Rasse",
];

const vaccinationCatalog = [
  {
    name: "Tollwut",
    interval: "Alle 12 Monate auffrischen",
    purpose: "Schutz vor Tollwut nach Bissen, Wildtierkontakt oder Reisen.",
    dose: "1 Dosis / 1 ml s.c. oder i.m.",
  },
  {
    name: "Staupe",
    interval: "Grundimmunisierung, danach alle 12 Monate",
    purpose: "Schutz vor Staupe mit Atemwegs-, Magen-Darm- und Nervensymptomen.",
    dose: "1 Dosis / 1 ml s.c.",
  },
  {
    name: "Katzenseuche",
    interval: "Grundimmunisierung, danach jährlich",
    purpose: "Schutz für Katzen vor Panleukopenie/Katzenseuche.",
    dose: "1 Dosis / 1 ml s.c.",
  },
  {
    name: "Allgemeiner Kombischutz",
    interval: "Jährlicher Kombi-Booster",
    purpose: "Breiter RP-Routineschutz gegen häufige Infektionskrankheiten.",
    dose: "1 Kombi-Dosis / 1 ml s.c.",
  },
  {
    name: "Zwingerhusten",
    interval: "Alle 6–12 Monate bei engem Tierkontakt",
    purpose: "Schutz vor ansteckenden Atemwegsinfekten bei Hunden.",
    dose: "1 Dosis nasal oder 1 ml s.c.",
  },
  {
    name: "Leptospirose",
    interval: "Alle 12 Monate, bei Risikotieren halbjährlich prüfen",
    purpose: "Schutz vor bakterieller Infektion durch kontaminiertes Wasser.",
    dose: "1 Dosis / 1 ml s.c.",
  },
];

const treatmentCatalog = [
  {
    category: "🩹 Allgemeine Erstversorgung",
    treatments: [
      {
        title: "Verband anlegen",
        description: "Reinigung der betroffenen Stelle\nAnlegen eines sterilen Verbandes\nStabilisierung kleinerer Verletzungen\nNachkontrolle empfohlen",
        defaultPrice: 250,
        priceHint: "150 – 300 $",
      },
      {
        title: "Wundversorgung",
        description: "Reinigung und Desinfektion der Wunde\nEntfernung von Schmutz oder Fremdkörpern\nVersorgung offener Verletzungen\nVerband oder Naht je nach Schweregrad",
        defaultPrice: 550,
        priceHint: "300 – 800 $",
      },
      {
        title: "Blutstillung",
        description: "Versorgung stark blutender Wunden\nDruckverband\nWundverschluss bei Bedarf",
        defaultPrice: 700,
        priceHint: "400 – 1.000 $",
      },
      {
        title: "Schienenverband",
        description: "Stabilisierung von Verstauchungen oder Brüchen\nAnlegen einer Schiene\nRuhigstellung der Gliedmaßen",
        defaultPrice: 1000,
        priceHint: "600 – 1.500 $",
      },
    ],
  },
  {
    category: "💉 Vorsorge & Routineuntersuchungen",
    treatments: [
      {
        title: "Allgemeine Untersuchung",
        description: "Gesundheitscheck\nKontrolle von Herz, Atmung und Bewegungsapparat\nEinschätzung des Allgemeinzustands",
        defaultPrice: 350,
        priceHint: "250 – 500 $",
      },
      {
        title: "Impfung",
        description: "Mögliche Impfungen: Tollwut, Staupe, Katzenseuche, Allgemeiner Kombischutz",
        defaultPrice: 500,
        priceHint: "300 – 700 $",
      },
      {
        title: "Entwurmung",
        description: "Verabreichung von Entwurmungsmitteln\nBeratung zur Nachbehandlung",
        defaultPrice: 350,
        priceHint: "250 – 450 $",
      },
      {
        title: "Parasitenbehandlung",
        description: "Behandlung gegen Flöhe\nBehandlung gegen Zecken\nBehandlung gegen Milben",
        defaultPrice: 450,
        priceHint: "300 – 600 $",
      },
      {
        title: "Gesundheitszeugnis",
        description: "Untersuchung für Reisen oder Verkäufe\nAusstellung von Bescheinigungen",
        defaultPrice: 750,
        priceHint: "500 – 1.000 $",
      },
    ],
  },
  {
    category: "🚑 Notfallbehandlungen",
    treatments: [
      {
        title: "Reanimation (CPR)",
        description: "Herz-Lungen-Wiederbelebung\nStabilisierung lebensbedrohlicher Zustände\nIntensivüberwachung",
        defaultPrice: 3500,
        priceHint: "2.500 – 5.000 $",
      },
      {
        title: "Sauerstoffversorgung",
        description: "Unterstützung bei Atemproblemen\nSauerstoffmaske oder Beatmung",
        defaultPrice: 1200,
        priceHint: "800 – 2.000 $",
      },
      {
        title: "Schockbehandlung",
        description: "Kreislaufstabilisierung\nFlüssigkeitszufuhr\nÜberwachung der Vitalwerte",
        defaultPrice: 2000,
        priceHint: "1.000 – 3.000 $",
      },
      {
        title: "Notfallversorgung nach Verkehrsunfall",
        description: "Ganzkörperuntersuchung\nWundversorgung\nStabilisierung\nSchmerztherapie",
        defaultPrice: 4500,
        priceHint: "2.000 – 8.000 $",
      },
    ],
  },
  {
    category: "🦴 Chirurgische Eingriffe",
    treatments: [
      {
        title: "Knochenbruchversorgung",
        description: "Diagnose\nEinrichten des Bruchs\nSchienung oder OP",
        defaultPrice: 6000,
        priceHint: "2.500 – 10.000 $",
      },
      {
        title: "Operative Wundversorgung",
        description: "Chirurgische Reinigung\nNähen tiefer Verletzungen\nNachsorge",
        defaultPrice: 3000,
        priceHint: "1.500 – 5.000 $",
      },
      {
        title: "Fremdkörperentfernung",
        description: "Entfernung verschluckter Gegenstände\nKleinere oder größere Operation",
        defaultPrice: 3500,
        priceHint: "1.000 – 7.500 $",
      },
      {
        title: "Notoperation",
        description: "Lebensrettende Sofortmaßnahmen\nInnere Verletzungen\nOrganverletzungen",
        defaultPrice: 10000,
        priceHint: "5.000 – 20.000 $",
      },
    ],
  },
  {
    category: "💊 Medikamente & Therapien",
    treatments: [
      {
        title: "Schmerzmittelgabe",
        description: "Leichte bis starke Schmerztherapie",
        defaultPrice: 300,
        priceHint: "150 – 600 $",
      },
      {
        title: "Antibiotikabehandlung",
        description: "Behandlung von Infektionen\nMedikamentengabe inklusive Beratung",
        defaultPrice: 800,
        priceHint: "400 – 1.200 $",
      },
      {
        title: "Infusion",
        description: "Flüssigkeitszufuhr\nBehandlung von Dehydrierung oder Kreislaufproblemen",
        defaultPrice: 1200,
        priceHint: "600 – 2.000 $",
      },
      {
        title: "Beruhigungsmittel",
        description: "Für aggressive oder panische Tiere\nVorbereitung auf Untersuchungen",
        defaultPrice: 500,
        priceHint: "300 – 800 $",
      },
    ],
  },
  {
    category: "🐕 Spezielle RP-Behandlungen",
    treatments: [
      {
        title: "Bissverletzung",
        description: "Reinigung der Wunde\nNahtversorgung\nAntibiotische Behandlung",
        defaultPrice: 1500,
        priceHint: "800 – 3.000 $",
      },
      {
        title: "Vergiftungsbehandlung",
        description: "Untersuchung der Vergiftung\nGegenmittel und Infusionen\nÜberwachung",
        defaultPrice: 4500,
        priceHint: "2.000 – 8.000 $",
      },
      {
        title: "Hitzschlag-Behandlung",
        description: "Kühlung\nInfusion\nÜberwachung der Vitalwerte",
        defaultPrice: 2500,
        priceHint: "1.000 – 4.000 $",
      },
      {
        title: "Unterernährung / Vernachlässigung",
        description: "Gesundheitsbewertung\nAufbaupräparate\nLangzeitbetreuung",
        defaultPrice: 1800,
        priceHint: "800 – 3.500 $",
      },
      {
        title: "Traumatherapie nach Tiermisshandlung",
        description: "Medizinische Untersuchung\nPsychologische Beobachtung (RP)\nDokumentation für Behörden",
        defaultPrice: 3500,
        priceHint: "2.000 – 6.000 $",
      },
    ],
  },
  {
    category: "📋 Zusätzliche Dienstleistungen",
    treatments: [
      {
        title: "Tierpass erstellen",
        description: "Ausstellen eines Tierpasses mit Stammdaten und Impfstatus.",
        defaultPrice: 500,
        priceHint: "500 $",
      },
      {
        title: "Chippen & Registrierung",
        description: "Chip setzen und Registrierung der Tierdaten.",
        defaultPrice: 1000,
        priceHint: "1.000 $",
      },
      {
        title: "Tiervermittlung / Adoption",
        description: "Beratung, Aktenprüfung und Übergabedokumentation für Adoptionen.",
        defaultPrice: 1000,
        priceHint: "500 – 2.000 $",
      },
      {
        title: "Einschläferung (mit Genehmigung)",
        description: "Ruhige Einschläferung nur mit dokumentierter Genehmigung.",
        defaultPrice: 2500,
        priceHint: "2.500 $",
      },
      {
        title: "Einäscherung",
        description: "Einäscherung und abschließende Dokumentation.",
        defaultPrice: 3000,
        priceHint: "3.000 $",
      },
    ],
  },
  {
    category: "🚨 Premium-Notfalldienst (24/7)",
    treatments: [
      {
        title: "Notrufpauschale",
        description: "24/7-Annahme, Disposition und priorisierte Einsatzvorbereitung.",
        defaultPrice: 1500,
        priceHint: "1.500 $",
      },
      {
        title: "Einsatz vor Ort",
        description: "Mobiler tierärztlicher Einsatz direkt am RP-Ort.",
        defaultPrice: 2500,
        priceHint: "2.500 $",
      },
      {
        title: "Tiertransport",
        description: "Sicherer Transport in die Praxis oder Notfallstation.",
        defaultPrice: 1000,
        priceHint: "1.000 $",
      },
      {
        title: "Intensivstation pro Stunde",
        description: "Intensivüberwachung mit regelmäßiger Vitalwertkontrolle pro Stunde.",
        defaultPrice: 750,
        priceHint: "750 $",
      },
      {
        title: "Nachtzuschlag",
        description: "Zuschlag für Einsätze in der Nacht oder außerhalb regulärer Dienstzeiten.",
        defaultPrice: 50,
        priceHint: "+50 %",
      },
    ],
  },
];

const demoAnimals = [
  {
    id: makeId(),
    treatmentNumber: "SAES-001",
    name: "Rex",
    species: "Hund",
    breed: "Schäferhund",
    age: "5 Jahre",
    owner: "Max Hunter",
    phone: "555-0184",
    notes: "Reagiert nervös auf laute Sirenen.",
    createdAt: "2026-06-07T10:00:00.000Z",
    treatments: [
      {
        id: makeId(),
        title: "Wundversorgung",
        doctor: "Dr. Klein",
        description: "Reinigung und Desinfektion der Wunde\nVerband oder Naht je nach Schweregrad",
        price: 550,
        priceHint: "300 – 800 $",
        createdAt: "2026-06-07T10:30:00.000Z",
      },
    ],
    vaccinations: [
      {
        id: makeId(),
        vaccine: "Tollwut",
        interval: "Alle 12 Monate auffrischen",
        purpose: "Schutz vor Tollwut nach Bissen, Wildtierkontakt oder Reisen.",
        dose: "1 Dosis / 1 ml s.c. oder i.m.",
        validUntil: "2027-06-07",
        note: "Impfung ohne Komplikationen durchgeführt.",
        createdAt: "2026-06-07T10:45:00.000Z",
      },
    ],
  },
];

let animals = loadAnimals();
let selectedAnimalId = animals[0]?.id ?? null;

const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");
const animalSearch = document.querySelector("#animalSearch");
const animalResults = document.querySelector("#animalResults");
const recordPanel = document.querySelector("#recordPanel");
const animalForm = document.querySelector("#animalForm");
const animalCount = document.querySelector("#animalCount");
const recordTemplate = document.querySelector("#recordTemplate");
const breedSelect = document.querySelector("#breedSelect");

function makeId() {
  return globalThis.crypto?.randomUUID?.() ?? `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function loadAnimals() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoAnimals));
    return demoAnimals;
  }

  try {
    return JSON.parse(stored).map((animal) => ({
      ...animal,
      treatments: animal.treatments ?? [],
      vaccinations: animal.vaccinations ?? [],
    }));
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoAnimals));
    return demoAnimals;
  }
}

function saveAnimals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(animals));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: value.includes("T") ? "short" : undefined,
  }).format(new Date(value));
}

function formatPrice(value) {
  if (value === "" || value === null || value === undefined) {
    return "Nicht verbucht";
  }

  return `${Number(value).toLocaleString("de-DE")} $`;
}

function normalize(value) {
  return String(value ?? "").trim().toLocaleLowerCase("de-DE");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createTreatmentNumber() {
  const highestNumber = animals
    .map((animal) => animal.treatmentNumber.match(/^(?:SAES-)?(?:\d{4}-)?(\d+)$/)?.[1])
    .filter(Boolean)
    .map(Number)
    .reduce((highest, current) => Math.max(highest, current), 0);
  const paddedNumber = String(highestNumber + 1).padStart(3, "0");
  return `SAES-${paddedNumber}`;
}

function getTreatmentByTitle(title) {
  return treatmentCatalog.flatMap((category) => category.treatments).find((treatment) => treatment.title === title);
}

function getVaccineByName(name) {
  return vaccinationCatalog.find((vaccine) => vaccine.name === name);
}

function switchView(viewId) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewId));
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function findAnimal(id) {
  return animals.find((animal) => animal.id === id);
}

function getFilteredAnimals() {
  const query = normalize(animalSearch.value);

  if (!query) {
    return animals;
  }

  return animals.filter((animal) => {
    const searchableText = [
      animal.name,
      animal.species,
      animal.breed,
      animal.owner,
      animal.phone,
      animal.treatmentNumber,
      ...animal.treatments.map((treatment) => `${treatment.title} ${treatment.doctor} ${treatment.description} ${treatment.price}`),
      ...animal.vaccinations.map((vaccination) => `${vaccination.vaccine} ${vaccination.note} ${vaccination.interval} ${vaccination.purpose} ${vaccination.dose}`),
    ].join(" ");

    return normalize(searchableText).includes(query);
  });
}

function renderBreedOptions() {
  breedSelect.innerHTML = '<option value="">Bitte Hunderasse wählen</option>';
  dogBreeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    breedSelect.append(option);
  });
}

function renderAnimalResults() {
  const filteredAnimals = getFilteredAnimals();
  animalResults.innerHTML = "";

  if (!filteredAnimals.length) {
    animalResults.innerHTML = '<p class="muted">Keine Tierakte gefunden.</p>';
    return;
  }

  filteredAnimals.forEach((animal) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `result-item${animal.id === selectedAnimalId ? " active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHtml(animal.name)}</strong>
      <span>${escapeHtml(animal.species)}${animal.breed ? ` · ${escapeHtml(animal.breed)}` : ""}</span>
      <span>${escapeHtml(animal.treatmentNumber)}</span>
    `;
    button.addEventListener("click", () => {
      selectedAnimalId = animal.id;
      renderApp();
    });
    animalResults.append(button);
  });
}

function renderRecord() {
  const animal = findAnimal(selectedAnimalId);

  if (!animal) {
    recordPanel.className = "record-panel empty-state";
    recordPanel.innerHTML = "<p>Wähle ein Tier aus, um die vollständige Akte zu öffnen.</p>";
    return;
  }

  recordPanel.className = "record-panel";
  recordPanel.innerHTML = "";
  const content = recordTemplate.content.cloneNode(true);

  content.querySelector('[data-field="name"]').textContent = animal.name;
  content.querySelector('[data-field="meta"]').textContent = `${animal.species}${animal.breed ? ` · ${animal.breed}` : ""}${animal.age ? ` · ${animal.age}` : ""}`;
  content.querySelector('[data-field="treatmentNumber"]').textContent = animal.treatmentNumber;
  content.querySelector('[data-field="owner"]').textContent = animal.owner;
  content.querySelector('[data-field="phone"]').textContent = animal.phone || "Nicht hinterlegt";
  content.querySelector('[data-field="createdAt"]').textContent = formatDate(animal.createdAt);
  content.querySelector('[data-field="notes"]').textContent = animal.notes || "Keine Hinweise";
  content.querySelector('[data-field="treatmentCount"]').textContent = `${animal.treatments.length} Einträge`;
  content.querySelector('[data-field="vaccinationCount"]').textContent = `${animal.vaccinations.length} Einträge`;

  recordPanel.append(content);
  renderTreatmentOptions();
  renderTreatmentCatalogList();
  renderVaccinationOptions();
  renderTreatments(animal);
  renderVaccinations(animal);
  bindRecordForms(animal);
}

function renderTreatmentOptions() {
  const treatmentSelect = document.querySelector("#treatmentSelect");
  treatmentSelect.innerHTML = '<option value="">Behandlung auswählen</option>';

  treatmentCatalog.forEach((category) => {
    const group = document.createElement("optgroup");
    group.label = category.category;
    category.treatments.forEach((treatment) => {
      const option = document.createElement("option");
      option.value = treatment.title;
      option.textContent = `${treatment.title} (${treatment.priceHint})`;
      group.append(option);
    });
    treatmentSelect.append(group);
  });
}

function renderTreatmentCatalogList() {
  const catalogList = document.querySelector("#treatmentCatalogList");
  catalogList.innerHTML = treatmentCatalog
    .map((category) => `
      <details>
        <summary>${escapeHtml(category.category)}</summary>
        <div class="catalog-items">
          ${category.treatments
            .map(
              (treatment) => `
                <article class="catalog-item">
                  <div>
                    <strong>${escapeHtml(treatment.title)}</strong>
                    <p>${escapeHtml(treatment.description).replaceAll("\n", "<br />")}</p>
                  </div>
                  <span>${escapeHtml(treatment.priceHint)}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </details>
    `)
    .join("");
}

function renderVaccinationOptions() {
  const vaccinationSelect = document.querySelector("#vaccinationSelect");
  vaccinationSelect.innerHTML = '<option value="">Impfstoff auswählen</option>';

  vaccinationCatalog.forEach((vaccine) => {
    const option = document.createElement("option");
    option.value = vaccine.name;
    option.textContent = vaccine.name;
    vaccinationSelect.append(option);
  });
}

function renderSelectedTreatmentInfo(treatment) {
  const infoBox = document.querySelector("#treatmentInfo");

  if (!treatment) {
    infoBox.innerHTML = '<strong>Behandlungskatalog</strong><span>Wähle eine Behandlung aus, um Leistungen und Preisrahmen zu sehen.</span>';
    return;
  }

  infoBox.innerHTML = `
    <strong>${escapeHtml(treatment.title)}</strong>
    <span>${escapeHtml(treatment.description).replaceAll("\n", "<br />")}</span>
    <small>Preisrahmen: ${escapeHtml(treatment.priceHint)} · Vorschlag: ${formatPrice(treatment.defaultPrice)}</small>
  `;
}

function renderSelectedVaccineInfo(vaccine) {
  const infoBox = document.querySelector("#vaccinationInfo");

  if (!vaccine) {
    infoBox.innerHTML = '<strong>Impfstoff-Info</strong><span>Wähle einen Impfstoff aus, um Intervall, Zweck und Dosis zu sehen.</span>';
    return;
  }

  infoBox.innerHTML = `
    <strong>${escapeHtml(vaccine.name)}</strong>
    <span><b>Intervall:</b> ${escapeHtml(vaccine.interval)}</span>
    <span><b>Für was:</b> ${escapeHtml(vaccine.purpose)}</span>
    <span><b>Dosis:</b> ${escapeHtml(vaccine.dose)}</span>
  `;
}

function renderTreatments(animal) {
  const treatmentList = document.querySelector("#treatmentList");
  treatmentList.innerHTML = animal.treatments.length ? "" : '<p class="muted">Noch keine Behandlung eingetragen.</p>';

  [...animal.treatments]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((treatment) => {
      const item = document.createElement("article");
      item.className = "timeline-item";
      item.innerHTML = `
        <header>
          <strong>${escapeHtml(treatment.title)}</strong>
          <time>${formatDate(treatment.createdAt)}</time>
        </header>
        <p>${escapeHtml(treatment.description).replaceAll("\n", "<br />")}</p>
        <div class="entry-meta">
          <small>Tierarzt: ${escapeHtml(treatment.doctor || "Nicht angegeben")}</small>
          <small>Verbucht: ${formatPrice(treatment.price)}</small>
          ${treatment.priceHint ? `<small>Preisrahmen: ${escapeHtml(treatment.priceHint)}</small>` : ""}
        </div>
      `;
      treatmentList.append(item);
    });
}

function renderVaccinations(animal) {
  const vaccinationList = document.querySelector("#vaccinationList");
  vaccinationList.innerHTML = animal.vaccinations.length ? "" : '<p class="muted">Noch keine Impfung eingetragen.</p>';

  [...animal.vaccinations]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((vaccination) => {
      const item = document.createElement("article");
      item.className = "timeline-item";
      item.innerHTML = `
        <header>
          <strong>${escapeHtml(vaccination.vaccine)}</strong>
          <time>${formatDate(vaccination.createdAt)}</time>
        </header>
        <p>${escapeHtml(vaccination.note || "Keine Notiz")}</p>
        <div class="entry-meta">
          <small>Gültig bis: ${vaccination.validUntil ? formatDate(vaccination.validUntil) : "Nicht angegeben"}</small>
          <small>Intervall: ${escapeHtml(vaccination.interval || "Nicht angegeben")}</small>
          <small>Für was: ${escapeHtml(vaccination.purpose || "Nicht angegeben")}</small>
          <small>Dosis: ${escapeHtml(vaccination.dose || "Nicht angegeben")}</small>
        </div>
      `;
      vaccinationList.append(item);
    });
}

function bindRecordForms(animal) {
  const treatmentForm = document.querySelector("#treatmentForm");
  const treatmentSelect = document.querySelector("#treatmentSelect");
  const treatmentPrice = document.querySelector("#treatmentPrice");
  const treatmentDescription = document.querySelector("#treatmentDescription");
  const vaccinationForm = document.querySelector("#vaccinationForm");
  const vaccinationSelect = document.querySelector("#vaccinationSelect");
  const vaccinationNote = document.querySelector("#vaccinationNote");

  renderSelectedTreatmentInfo(null);
  renderSelectedVaccineInfo(null);

  treatmentSelect.addEventListener("change", () => {
    const treatment = getTreatmentByTitle(treatmentSelect.value);
    treatmentPrice.value = treatment?.defaultPrice ?? "";
    treatmentDescription.value = treatment?.description ?? "";
    renderSelectedTreatmentInfo(treatment);
  });

  vaccinationSelect.addEventListener("change", () => {
    const vaccine = getVaccineByName(vaccinationSelect.value);
    vaccinationNote.value = vaccine ? `${vaccine.interval} · ${vaccine.purpose} · ${vaccine.dose}` : "";
    renderSelectedVaccineInfo(vaccine);
  });

  treatmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const treatment = getTreatmentByTitle(formData.get("title"));
    animal.treatments.push({
      id: makeId(),
      title: formData.get("title"),
      doctor: formData.get("doctor"),
      description: formData.get("description"),
      price: formData.get("price"),
      priceHint: treatment?.priceHint ?? "",
      createdAt: new Date().toISOString(),
    });
    saveAnimals();
    renderApp();
  });

  vaccinationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const vaccine = getVaccineByName(formData.get("vaccine"));
    animal.vaccinations.push({
      id: makeId(),
      vaccine: formData.get("vaccine"),
      interval: vaccine?.interval ?? "",
      purpose: vaccine?.purpose ?? "",
      dose: vaccine?.dose ?? "",
      validUntil: formData.get("validUntil"),
      note: formData.get("note"),
      createdAt: new Date().toISOString(),
    });
    saveAnimals();
    renderApp();
  });

  document.querySelector("#printVaccinationCard").addEventListener("click", () => {
    window.print();
  });

  document.querySelector("#deleteRecord").addEventListener("click", () => {
    const confirmed = window.confirm(`Soll die Akte von ${animal.name} wirklich gelöscht werden?`);

    if (!confirmed) {
      return;
    }

    animals = animals.filter((storedAnimal) => storedAnimal.id !== animal.id);
    selectedAnimalId = animals[0]?.id ?? null;
    saveAnimals();
    renderApp();
  });
}

function renderApp() {
  animalCount.textContent = animals.length;
  renderAnimalResults();
  renderRecord();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

animalSearch.addEventListener("input", () => {
  const firstMatch = getFilteredAnimals()[0];
  selectedAnimalId = firstMatch?.id ?? selectedAnimalId;
  renderApp();
});

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(animalForm);
  const animal = {
    id: makeId(),
    treatmentNumber: createTreatmentNumber(),
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    owner: formData.get("owner"),
    phone: formData.get("phone"),
    notes: formData.get("notes"),
    createdAt: new Date().toISOString(),
    treatments: [],
    vaccinations: [],
  };

  animals.push(animal);
  selectedAnimalId = animal.id;
  saveAnimals();
  animalForm.reset();
  animalSearch.value = animal.treatmentNumber;
  switchView("searchView");
  renderApp();
});

renderBreedOptions();
renderApp();
