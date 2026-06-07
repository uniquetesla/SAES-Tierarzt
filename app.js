const STORAGE_KEY = "saes-tierarzt-akten";

const demoAnimals = [
  {
    id: makeId(),
    treatmentNumber: "SAES-2026-0001",
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
        title: "Pfotenverletzung versorgt",
        doctor: "Dr. Klein",
        description: "Schnittwunde gereinigt, desinfiziert und mit Verband stabilisiert.",
        createdAt: "2026-06-07T10:30:00.000Z",
      },
    ],
    vaccinations: [
      {
        id: makeId(),
        vaccine: "Tollwut-Impfung",
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
    return JSON.parse(stored);
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
  const year = new Date().getFullYear();
  const highestNumber = animals
    .map((animal) => animal.treatmentNumber.match(new RegExp(`^SAES-${year}-(\\d+)$`))?.[1])
    .filter(Boolean)
    .map(Number)
    .reduce((highest, current) => Math.max(highest, current), 0);
  const paddedNumber = String(highestNumber + 1).padStart(4, "0");
  return `SAES-${year}-${paddedNumber}`;
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
      ...animal.treatments.map((treatment) => `${treatment.title} ${treatment.doctor} ${treatment.description}`),
      ...animal.vaccinations.map((vaccination) => `${vaccination.vaccine} ${vaccination.note}`),
    ].join(" ");

    return normalize(searchableText).includes(query);
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
  renderTreatments(animal);
  renderVaccinations(animal);
  bindRecordForms(animal);
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
        <p>${escapeHtml(treatment.description)}</p>
        <small>Tierarzt: ${escapeHtml(treatment.doctor || "Nicht angegeben")}</small>
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
        <small>Gültig bis: ${vaccination.validUntil ? formatDate(vaccination.validUntil) : "Nicht angegeben"}</small>
      `;
      vaccinationList.append(item);
    });
}

function bindRecordForms(animal) {
  document.querySelector("#treatmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    animal.treatments.push({
      id: makeId(),
      title: formData.get("title"),
      doctor: formData.get("doctor"),
      description: formData.get("description"),
      createdAt: new Date().toISOString(),
    });
    saveAnimals();
    renderApp();
  });

  document.querySelector("#vaccinationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    animal.vaccinations.push({
      id: makeId(),
      vaccine: formData.get("vaccine"),
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

renderApp();
