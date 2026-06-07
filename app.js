const STORAGE_KEY = "saes-tierarzt-akten";
const SETTINGS_KEY = "saes-tierarzt-einstellungen";
const AUTH_KEY = "saes-tierarzt-angemeldet";

const dogBreeds = [
  "Australien Shepherd",
  "Husky",
  "Mops",
  "Pudel",
  "Retriever",
  "Rottweiler",
  "Westie",
];

const vaccinationCatalog = [
  {
    name: "Tollwut",
    interval: "Alle 12 Monate auffrischen",
    purpose: "Schutz vor Tollwut nach Bissen, Wildtierkontakt oder Reisen.",
    dose: "1 Dosis / 1 ml s.c. oder i.m.",
    defaultPrice: 500,
  },
  {
    name: "Staupe",
    interval: "Grundimmunisierung, danach alle 12 Monate",
    purpose: "Schutz vor Staupe mit Atemwegs-, Magen-Darm- und Nervensymptomen.",
    dose: "1 Dosis / 1 ml s.c.",
    defaultPrice: 450,
  },
  {
    name: "Katzenseuche",
    interval: "Grundimmunisierung, danach jährlich",
    purpose: "Schutz für Katzen vor Panleukopenie/Katzenseuche.",
    dose: "1 Dosis / 1 ml s.c.",
    defaultPrice: 450,
  },
  {
    name: "Allgemeiner Kombischutz",
    interval: "Jährlicher Kombi-Booster",
    purpose: "Breiter Routineschutz gegen häufige Infektionskrankheiten.",
    dose: "1 Kombi-Dosis / 1 ml s.c.",
    defaultPrice: 550,
  },
  {
    name: "Zwingerhusten",
    interval: "Alle 6–12 Monate bei engem Tierkontakt",
    purpose: "Schutz vor ansteckenden Atemwegsinfekten bei Hunden.",
    dose: "1 Dosis nasal oder 1 ml s.c.",
    defaultPrice: 400,
  },
  {
    name: "Leptospirose",
    interval: "Alle 12 Monate, bei Risikotieren halbjährlich prüfen",
    purpose: "Schutz vor bakterieller Infektion durch kontaminiertes Wasser.",
    dose: "1 Dosis / 1 ml s.c.",
    defaultPrice: 500,
  },
];

const defaultTreatments = [
  {
    id: "verband-anlegen",
    category: "Erstversorgung",
    title: "Verband anlegen",
    description: "Reinigung der betroffenen Stelle\nAnlegen eines sterilen Verbandes\nStabilisierung kleinerer Verletzungen\nNachkontrolle empfohlen",
    price: 250,
  },
  {
    id: "wundversorgung",
    category: "Erstversorgung",
    title: "Wundversorgung",
    description: "Reinigung und Desinfektion der Wunde\nEntfernung von Schmutz oder Fremdkörpern\nVerband oder Naht je nach Schweregrad",
    price: 550,
  },
  {
    id: "blutstillung",
    category: "Erstversorgung",
    title: "Blutstillung",
    description: "Versorgung stark blutender Wunden\nDruckverband\nWundverschluss bei Bedarf",
    price: 700,
  },
  {
    id: "allgemeine-untersuchung",
    category: "Vorsorge & Routine",
    title: "Allgemeine Untersuchung",
    description: "Gesundheitscheck\nKontrolle von Herz, Atmung und Bewegungsapparat\nEinschätzung des Allgemeinzustands",
    price: 350,
  },
  {
    id: "impfung",
    category: "Vorsorge & Routine",
    title: "Impfung",
    description: "Durchführung und Dokumentation der ausgewählten Impfung",
    price: 500,
  },
  {
    id: "entwurmung",
    category: "Vorsorge & Routine",
    title: "Entwurmung",
    description: "Verabreichung von Entwurmungsmitteln\nBeratung zur Nachbehandlung",
    price: 350,
  },
  {
    id: "parasitenbehandlung",
    category: "Vorsorge & Routine",
    title: "Parasitenbehandlung",
    description: "Behandlung gegen Flöhe, Zecken oder Milben\nEmpfehlung zur weiteren Prophylaxe",
    price: 450,
  },
  {
    id: "sauerstoffversorgung",
    category: "Notfallbehandlungen",
    title: "Sauerstoffversorgung",
    description: "Unterstützung bei Atemproblemen\nSauerstoffmaske oder Beatmung\nÜberwachung der Vitalwerte",
    price: 1200,
  },
  {
    id: "schockbehandlung",
    category: "Notfallbehandlungen",
    title: "Schockbehandlung",
    description: "Kreislaufstabilisierung\nFlüssigkeitszufuhr\nÜberwachung der Vitalwerte",
    price: 2000,
  },
  {
    id: "knochenbruchversorgung",
    category: "Chirurgische Eingriffe",
    title: "Knochenbruchversorgung",
    description: "Diagnose\nEinrichten des Bruchs\nSchienung oder operative Versorgung",
    price: 6000,
  },
  {
    id: "operative-wundversorgung",
    category: "Chirurgische Eingriffe",
    title: "Operative Wundversorgung",
    description: "Chirurgische Reinigung\nNähen tiefer Verletzungen\nNachsorge",
    price: 3000,
  },
  {
    id: "chippen-registrierung",
    category: "Zusätzliche Dienstleistungen",
    title: "Chippen & Registrierung",
    description: "Chip setzen und Registrierung der Tierdaten.",
    price: 1000,
  },
];

const defaultStaff = [
  { id: "staff-verwaltung", role: "Verwaltung", dn: "DN-000", name: "Verwaltung" },
  { id: "staff-dr-klein", role: "Tierarzt", dn: "DN-101", name: "Dr. Klein" },
  { id: "staff-mara-hoffmann", role: "Tierpfleger", dn: "DN-204", name: "Mara Hoffmann" },
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
    notes: "Reagiert nervös auf laute Geräusche.",
    createdAt: "2026-06-07T10:00:00.000Z",
    treatments: [
      {
        id: makeId(),
        title: "Wundversorgung",
        staff: "Dr. Klein (DN-101)",
        description: "Reinigung und Desinfektion der Wunde\nVerband angelegt",
        price: 550,
        createdAt: "2026-06-07T10:30:00.000Z",
        invoiceNumber: "RE-20260607-001",
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
        price: 500,
        createdAt: "2026-06-07T10:45:00.000Z",
      },
    ],
  },
];

let animals = loadAnimals();
let settings = loadSettings();
let currentUser = loadCurrentUser();
let selectedAnimalId = animals[0]?.id ?? null;
let queuedTreatments = [];

const loginScreen = document.querySelector("#loginScreen");
const appContent = document.querySelector("#appContent");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const authMessage = document.querySelector("#authMessage");
const logoutButton = document.querySelector("#logoutButton");
const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");
const animalSearch = document.querySelector("#animalSearch");
const animalResults = document.querySelector("#animalResults");
const recordPanel = document.querySelector("#recordPanel");
const animalForm = document.querySelector("#animalForm");
const animalCount = document.querySelector("#animalCount");
const recordTemplate = document.querySelector("#recordTemplate");
const breedSelect = document.querySelector("#breedSelect");
const treatmentSettingsForm = document.querySelector("#treatmentSettingsForm");
const settingsTreatmentList = document.querySelector("#settingsTreatmentList");
const staffForm = document.querySelector("#staffForm");
const staffList = document.querySelector("#staffList");
const approvalList = document.querySelector("#approvalList");

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

function loadSettings() {
  const stored = localStorage.getItem(SETTINGS_KEY);

  if (!stored) {
    const initialSettings = { treatments: defaultTreatments, staff: defaultStaff, pendingUsers: [], approvedUsers: createApprovedUsers(defaultStaff) };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(initialSettings));
    return initialSettings;
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      treatments: parsed.treatments?.length ? parsed.treatments : defaultTreatments,
      ...ensureManagementAccess({
        staff: parsed.staff?.length ? parsed.staff : defaultStaff,
        pendingUsers: parsed.pendingUsers ?? [],
        approvedUsers: parsed.approvedUsers?.length ? parsed.approvedUsers : createApprovedUsers(parsed.staff?.length ? parsed.staff : defaultStaff),
      }),
    };
  } catch {
    const initialSettings = { treatments: defaultTreatments, staff: defaultStaff, pendingUsers: [], approvedUsers: createApprovedUsers(defaultStaff) };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(initialSettings));
    return initialSettings;
  }
}


function createApprovedUsers(staffMembers) {
  return staffMembers.map((staffMember) => ({
    id: staffMember.id,
    name: staffMember.name,
    dn: staffMember.dn,
    role: staffMember.role,
    approvedAt: new Date().toISOString(),
  }));
}

function ensureManagementAccess(partialSettings) {
  const managementUser = defaultStaff[0];
  const staff = partialSettings.staff.some((staffMember) => isSameUser(staffMember, managementUser.name, managementUser.dn))
    ? partialSettings.staff
    : [managementUser, ...partialSettings.staff];
  const approvedUsers = partialSettings.approvedUsers.some((user) => isSameUser(user, managementUser.name, managementUser.dn))
    ? partialSettings.approvedUsers
    : [{ ...managementUser, approvedAt: new Date().toISOString() }, ...partialSettings.approvedUsers];

  return { ...partialSettings, staff, approvedUsers };
}

function loadCurrentUser() {
  const stored = sessionStorage.getItem(AUTH_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch {
    sessionStorage.removeItem(AUTH_KEY);
    return null;
  }
}

function setAuthMessage(message, type = "info") {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`;
}

function isSameUser(user, name, dn) {
  return normalize(user.name) === normalize(name) && normalize(user.dn) === normalize(dn);
}

function renderAuthState() {
  const isAuthenticated = Boolean(currentUser);
  loginScreen.hidden = isAuthenticated;
  appContent.hidden = !isAuthenticated;

  if (isAuthenticated) {
    logoutButton.textContent = `${currentUser.name} abmelden`;
  }
}

function saveAnimals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(animals));
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function formatDate(value) {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: String(value).includes("T") ? "short" : undefined,
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

function createInvoiceNumber() {
  const datePart = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const dailyCount = animals.flatMap((animal) => animal.treatments).filter((treatment) => treatment.invoiceNumber?.includes(datePart)).length + 1;
  return `RE-${datePart}-${String(dailyCount).padStart(3, "0")}`;
}

function getTreatmentById(id) {
  return settings.treatments.find((treatment) => treatment.id === id);
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
      ...animal.treatments.map((treatment) => `${treatment.title} ${treatment.staff} ${treatment.description} ${treatment.price}`),
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
      queuedTreatments = [];
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
  content.querySelector('[data-field="owner"]').textContent = animal.owner || "Kein Besitzer hinterlegt";
  content.querySelector('[data-field="phone"]').textContent = animal.phone || "Nicht hinterlegt";
  content.querySelector('[data-field="createdAt"]').textContent = formatDate(animal.createdAt);
  content.querySelector('[data-field="notes"]').textContent = animal.notes || "Keine Hinweise";
  content.querySelector('[data-field="treatmentCount"]').textContent = `${animal.treatments.length} Einträge`;
  content.querySelector('[data-field="vaccinationCount"]').textContent = `${animal.vaccinations.length} Einträge`;

  recordPanel.append(content);
  renderTreatmentOptions();
  renderStaffOptions();
  renderVaccinationOptions();
  renderQueuedTreatments();
  renderTreatments(animal);
  renderVaccinations(animal);
  bindRecordForms(animal);
}

function renderTreatmentOptions() {
  const treatmentGrid = document.querySelector("#treatmentCardGrid");
  treatmentGrid.innerHTML = settings.treatments
    .map(
      (treatment) => `
        <button class="selection-card" type="button" data-treatment-card="${treatment.id}">
          <strong>${escapeHtml(treatment.title)}</strong>
          <span>${escapeHtml(treatment.category)} · ${formatPrice(treatment.price)}</span>
        </button>
      `,
    )
    .join("");
}

function renderStaffOptions() {
  const staffSelect = document.querySelector("#staffSelect");
  staffSelect.innerHTML = '<option value="">Mitarbeitenden auswählen</option>';

  settings.staff.forEach((staffMember) => {
    const option = document.createElement("option");
    option.value = `${staffMember.name} (${staffMember.dn})`;
    option.textContent = `${staffMember.role}: ${staffMember.name} · ${staffMember.dn}`;
    staffSelect.append(option);
  });
}

function renderVaccinationOptions() {
  const vaccinationGrid = document.querySelector("#vaccinationCardGrid");
  vaccinationGrid.innerHTML = vaccinationCatalog
    .map(
      (vaccine) => `
        <button class="selection-card" type="button" data-vaccination-card="${escapeHtml(vaccine.name)}">
          <strong>${escapeHtml(vaccine.name)}</strong>
          <span>${formatPrice(vaccine.defaultPrice)} · ${escapeHtml(vaccine.interval)}</span>
        </button>
      `,
    )
    .join("");
}

function renderQueuedTreatments() {
  const queuedList = document.querySelector("#queuedTreatments");

  if (!queuedList) {
    return;
  }

  if (!queuedTreatments.length) {
    queuedList.innerHTML = '<p class="muted">Noch keine Behandlung in der Sammelbehandlung.</p>';
    return;
  }

  const total = queuedTreatments.reduce((sum, treatment) => sum + Number(treatment.price || 0), 0);
  queuedList.innerHTML = `
    <div class="queue-total"><strong>Sammelbehandlung</strong><span>${queuedTreatments.length} Positionen · ${formatPrice(total)}</span></div>
    ${queuedTreatments
      .map(
        (treatment) => `
          <article class="queue-item">
            <div>
              <strong>${escapeHtml(treatment.title)}</strong>
              <p>${escapeHtml(treatment.description).replaceAll("\n", "<br />")}</p>
              <small>${escapeHtml(treatment.staff || "Kein Mitarbeitender ausgewählt")}</small>
            </div>
            <div class="queue-actions">
              <span>${formatPrice(treatment.price)}</span>
              <button class="secondary danger" type="button" data-remove-queued="${treatment.queueId}">Entfernen</button>
            </div>
          </article>
        `,
      )
      .join("")}
  `;

  queuedList.querySelectorAll("[data-remove-queued]").forEach((button) => {
    button.addEventListener("click", () => {
      queuedTreatments = queuedTreatments.filter((treatment) => treatment.queueId !== button.dataset.removeQueued);
      renderQueuedTreatments();
    });
  });
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
          <small>Mitarbeitender: ${escapeHtml(treatment.staff || treatment.doctor || "Nicht angegeben")}</small>
          <small>Preis: ${formatPrice(treatment.price)}</small>
          ${treatment.invoiceNumber ? `<small>Rechnung: ${escapeHtml(treatment.invoiceNumber)}</small>` : ""}
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
          <small>Preis: ${formatPrice(vaccination.price)}</small>
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
  const staffSelect = document.querySelector("#staffSelect");
  const addTreatmentToQueue = document.querySelector("#addTreatmentToQueue");
  const vaccinationForm = document.querySelector("#vaccinationForm");
  const vaccinationSelect = document.querySelector("#vaccinationSelect");
  const vaccinationNote = document.querySelector("#vaccinationNote");
  const editAnimalForm = document.querySelector("#editAnimalForm");
  const toggleEditAnimal = document.querySelector("#toggleEditAnimal");

  document.querySelectorAll("[data-treatment-card]").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll("[data-treatment-card]").forEach((item) => item.classList.remove("selected"));
      card.classList.add("selected");
      treatmentSelect.value = card.dataset.treatmentCard;
      const treatment = getTreatmentById(treatmentSelect.value);
      treatmentPrice.value = treatment?.price ?? "";
      treatmentDescription.value = treatment?.description ?? "";
    });
  });

  document.querySelectorAll("[data-vaccination-card]").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll("[data-vaccination-card]").forEach((item) => item.classList.remove("selected"));
      card.classList.add("selected");
      vaccinationSelect.value = card.dataset.vaccinationCard;
      const vaccine = getVaccineByName(vaccinationSelect.value);
      vaccinationNote.value = vaccine ? `${vaccine.interval} · ${vaccine.purpose} · ${vaccine.dose}` : "";
    });
  });

  editAnimalForm.name.value = animal.name ?? "";
  editAnimalForm.owner.value = animal.owner ?? "";
  editAnimalForm.phone.value = animal.phone ?? "";
  editAnimalForm.notes.value = animal.notes ?? "";

  toggleEditAnimal.addEventListener("click", () => {
    editAnimalForm.hidden = !editAnimalForm.hidden;
  });

  editAnimalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(editAnimalForm);
    Object.assign(animal, {
      name: formData.get("name"),
      owner: formData.get("owner"),
      phone: formData.get("phone"),
      notes: formData.get("notes"),
    });
    saveAnimals();
    renderApp();
  });

  addTreatmentToQueue.addEventListener("click", () => {
    const selectedTreatment = getTreatmentById(treatmentSelect.value);

    if (!selectedTreatment) {
      window.alert("Bitte zuerst eine Behandlungskachel auswählen.");
      return;
    }

    queuedTreatments.push({
      queueId: makeId(),
      title: selectedTreatment.title,
      staff: staffSelect.value,
      description: treatmentDescription.value || selectedTreatment.description,
      price: treatmentPrice.value || selectedTreatment.price,
    });
    treatmentForm.reset();
    document.querySelectorAll("[data-treatment-card]").forEach((card) => card.classList.remove("selected"));
    renderQueuedTreatments();
  });

  treatmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!queuedTreatments.length) {
      addTreatmentToQueue.click();
    }

    if (!queuedTreatments.length) {
      return;
    }

    const invoiceNumber = createInvoiceNumber();
    const completedTreatments = queuedTreatments.map((treatment) => ({
      id: makeId(),
      title: treatment.title,
      staff: treatment.staff,
      description: treatment.description,
      price: treatment.price,
      createdAt: new Date().toISOString(),
      invoiceNumber,
    }));

    animal.treatments.push(...completedTreatments);
    queuedTreatments = [];
    saveAnimals();
    openTreatmentPdf(animal, completedTreatments, invoiceNumber);
    renderApp();
  });

  vaccinationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("vaccine")) {
      window.alert("Bitte zuerst eine Impfkachel auswählen.");
      return;
    }
    const vaccine = getVaccineByName(formData.get("vaccine"));
    const vaccination = {
      id: makeId(),
      vaccine: formData.get("vaccine"),
      interval: vaccine?.interval ?? "",
      purpose: vaccine?.purpose ?? "",
      dose: vaccine?.dose ?? "",
      validUntil: formData.get("validUntil"),
      note: formData.get("note"),
      price: vaccine?.defaultPrice ?? 0,
      createdAt: new Date().toISOString(),
    };
    animal.vaccinations.push(vaccination);
    saveAnimals();
    openVaccinationPdf(animal, vaccination);
    renderApp();
  });

  document.querySelector("#printVaccinationCard").addEventListener("click", () => {
    openVaccinationPdf(animal);
  });

  document.querySelector("#deleteRecord").addEventListener("click", () => {
    const confirmed = window.confirm(`Soll die Akte von ${animal.name} wirklich gelöscht werden?`);

    if (!confirmed) {
      return;
    }

    animals = animals.filter((storedAnimal) => storedAnimal.id !== animal.id);
    selectedAnimalId = animals[0]?.id ?? null;
    queuedTreatments = [];
    saveAnimals();
    renderApp();
  });
}

function renderSettings() {
  settingsTreatmentList.innerHTML = settings.treatments
    .map(
      (treatment) => `
        <article class="settings-item treatment-setting">
          <div>
            <strong>${escapeHtml(treatment.title)}</strong>
            <small>${escapeHtml(treatment.category)} · ${formatPrice(treatment.price)}</small>
            <p>${escapeHtml(treatment.description).replaceAll("\n", "<br />")}</p>
          </div>
          <div class="price-editor">
            <input type="number" min="0" step="10" value="${escapeHtml(treatment.price)}" aria-label="Preis für ${escapeHtml(treatment.title)} ändern" data-price-input="${treatment.id}" />
            <button class="secondary" type="button" data-save-price="${treatment.id}">Preis speichern</button>
            <button class="secondary danger" type="button" data-remove-treatment="${treatment.id}">Entfernen</button>
          </div>
        </article>
      `,
    )
    .join("");

  settingsTreatmentList.querySelectorAll("[data-save-price]").forEach((button) => {
    button.addEventListener("click", () => {
      const priceInput = settingsTreatmentList.querySelector(`[data-price-input="${button.dataset.savePrice}"]`);
      settings.treatments = settings.treatments.map((treatment) =>
        treatment.id === button.dataset.savePrice ? { ...treatment, price: priceInput.value } : treatment,
      );
      saveSettings();
      renderApp();
    });
  });

  settingsTreatmentList.querySelectorAll("[data-remove-treatment]").forEach((button) => {
    button.addEventListener("click", () => {
      settings.treatments = settings.treatments.filter((treatment) => treatment.id !== button.dataset.removeTreatment);
      saveSettings();
      renderApp();
    });
  });

  approvalList.innerHTML = settings.pendingUsers.length
    ? settings.pendingUsers
        .map(
          (user) => `
            <article class="settings-item compact-item">
              <div>
                <strong>${escapeHtml(user.name)}</strong>
                <small>Dienstnummer: ${escapeHtml(user.dn)} · angefragt am ${formatDate(user.requestedAt)}</small>
              </div>
              <div class="queue-actions">
                <button class="secondary" type="button" data-approve-user="${user.id}">Freigeben</button>
                <button class="secondary danger" type="button" data-reject-user="${user.id}">Ablehnen</button>
              </div>
            </article>
          `,
        )
        .join("")
    : '<p class="muted">Keine offenen Registrierungen.</p>';

  approvalList.querySelectorAll("[data-approve-user]").forEach((button) => {
    button.addEventListener("click", () => {
      const user = settings.pendingUsers.find((pendingUser) => pendingUser.id === button.dataset.approveUser);

      if (!user) {
        return;
      }

      settings.approvedUsers.push({ ...user, approvedAt: new Date().toISOString() });
      settings.pendingUsers = settings.pendingUsers.filter((pendingUser) => pendingUser.id !== user.id);
      saveSettings();
      renderApp();
    });
  });

  approvalList.querySelectorAll("[data-reject-user]").forEach((button) => {
    button.addEventListener("click", () => {
      settings.pendingUsers = settings.pendingUsers.filter((pendingUser) => pendingUser.id !== button.dataset.rejectUser);
      saveSettings();
      renderApp();
    });
  });

  staffList.innerHTML = settings.staff.length
    ? settings.staff
        .map(
          (staffMember) => `
            <article class="settings-item compact-item">
              <div>
                <strong>${escapeHtml(staffMember.name)}</strong>
                <small>${escapeHtml(staffMember.role)} · ${escapeHtml(staffMember.dn)}</small>
              </div>
              ${staffMember.role === "Verwaltung" ? "" : `<button class="secondary danger" type="button" data-remove-staff="${staffMember.id}">Entfernen</button>`}
            </article>
          `,
        )
        .join("")
    : '<p class="muted">Noch keine Mitarbeitenden hinterlegt.</p>';

  staffList.querySelectorAll("[data-remove-staff]").forEach((button) => {
    button.addEventListener("click", () => {
      const removedStaff = settings.staff.find((staffMember) => staffMember.id === button.dataset.removeStaff);
      settings.staff = settings.staff.filter((staffMember) => staffMember.id !== button.dataset.removeStaff);

      if (removedStaff) {
        settings.approvedUsers = settings.approvedUsers.filter((user) => !isSameUser(user, removedStaff.name, removedStaff.dn));
      }

      saveSettings();
      renderApp();
    });
  });
}

function getPdfStyles() {
  return `
    <style>
      body { color: #18332f; font-family: Inter, Arial, sans-serif; margin: 32px; }
      h1 { color: #0f766e; margin-bottom: 4px; }
      h2 { border-bottom: 2px solid #d9f99d; padding-bottom: 8px; }
      .meta, .total { background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 14px; padding: 16px; margin: 18px 0; }
      table { border-collapse: collapse; width: 100%; margin-top: 16px; }
      th, td { border-bottom: 1px solid #d7eee9; padding: 10px; text-align: left; vertical-align: top; }
      th { background: #f0fdfa; color: #115e59; }
      .price { text-align: right; white-space: nowrap; }
      .total { display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 800; }
      @media print { body { margin: 18mm; } }
    </style>
  `;
}

function openPdfDocument(title, bodyHtml) {
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    window.print();
    return;
  }

  printWindow.document.write(`<!doctype html><html lang="de"><head><meta charset="UTF-8"><title>${escapeHtml(title)}</title>${getPdfStyles()}</head><body>${bodyHtml}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function openTreatmentPdf(animal, treatments, invoiceNumber) {
  const total = treatments.reduce((sum, treatment) => sum + Number(treatment.price || 0), 0);
  const rows = treatments
    .map(
      (treatment) => `
        <tr>
          <td><strong>${escapeHtml(treatment.title)}</strong><br>${escapeHtml(treatment.description).replaceAll("\n", "<br>")}</td>
          <td>${escapeHtml(treatment.staff || "Nicht angegeben")}</td>
          <td class="price">${formatPrice(treatment.price)}</td>
        </tr>
      `,
    )
    .join("");

  openPdfDocument(
    `Behandlungsnachweis ${invoiceNumber}`,
    `
      <h1>SAES Tierarzt</h1>
      <h2>Behandlungsnachweis / Rechnung</h2>
      <div class="meta">
        <strong>Rechnungsnummer:</strong> ${escapeHtml(invoiceNumber)}<br>
        <strong>Datum:</strong> ${formatDate(new Date().toISOString())}<br>
        <strong>Tier:</strong> ${escapeHtml(animal.name)} (${escapeHtml(animal.species)})<br>
        <strong>Aktennummer:</strong> ${escapeHtml(animal.treatmentNumber)}<br>
        <strong>Besitzer:</strong> ${escapeHtml(animal.owner || "Kein Besitzer hinterlegt")}
      </div>
      <table>
        <thead><tr><th>Durchgeführte Behandlung</th><th>Mitarbeitender</th><th class="price">Preis</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="total"><span>Gesamtpreis</span><span>${formatPrice(total)}</span></div>
    `,
  );
}

function openVaccinationPdf(animal, latestVaccination = null) {
  const vaccinations = latestVaccination ? [latestVaccination] : animal.vaccinations;
  const total = vaccinations.reduce((sum, vaccination) => sum + Number(vaccination.price || 0), 0);
  const rows = vaccinations.length
    ? vaccinations
        .map(
          (vaccination) => `
            <tr>
              <td><strong>${escapeHtml(vaccination.vaccine)}</strong><br>${escapeHtml(vaccination.note || "Keine Notiz")}</td>
              <td>${vaccination.validUntil ? formatDate(vaccination.validUntil) : "Nicht angegeben"}</td>
              <td>${escapeHtml(vaccination.interval || "Nicht angegeben")}</td>
              <td>${escapeHtml(vaccination.dose || "Nicht angegeben")}</td>
              <td class="price">${formatPrice(vaccination.price)}</td>
            </tr>
          `,
        )
        .join("")
    : '<tr><td colspan="5">Noch keine Impfung eingetragen.</td></tr>';

  openPdfDocument(
    `Impfausweis ${animal.name}`,
    `
      <h1>SAES Tierarzt</h1>
      <h2>Impfausweis</h2>
      <div class="meta">
        <strong>Tier:</strong> ${escapeHtml(animal.name)} (${escapeHtml(animal.species)})<br>
        <strong>Aktennummer:</strong> ${escapeHtml(animal.treatmentNumber)}<br>
        <strong>Besitzer:</strong> ${escapeHtml(animal.owner || "Kein Besitzer hinterlegt")}<br>
        <strong>Ausgestellt:</strong> ${formatDate(new Date().toISOString())}
      </div>
      <table>
        <thead><tr><th>Impfung</th><th>Gültig bis</th><th>Intervall</th><th>Dosis</th><th class="price">Preis</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="total"><span>Gesamtpreis</span><span>${formatPrice(total)}</span></div>
    `,
  );
}

function renderApp() {
  renderAuthState();

  if (!currentUser) {
    return;
  }

  animalCount.textContent = animals.length;
  renderAnimalResults();
  renderRecord();
  renderSettings();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

animalSearch.addEventListener("input", () => {
  const firstMatch = getFilteredAnimals()[0];
  selectedAnimalId = firstMatch?.id ?? selectedAnimalId;
  queuedTreatments = [];
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

treatmentSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  settings.treatments.push({
    id: makeId(),
    title: formData.get("title"),
    category: formData.get("category"),
    price: formData.get("price"),
    description: formData.get("description"),
  });
  saveSettings();
  treatmentSettingsForm.reset();
  renderApp();
});

staffForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const staffMember = {
    id: makeId(),
    role: formData.get("role"),
    dn: formData.get("dn"),
    name: formData.get("name"),
  };
  settings.staff.push(staffMember);
  settings.approvedUsers.push({ ...staffMember, approvedAt: new Date().toISOString() });
  saveSettings();
  staffForm.reset();
  renderApp();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const dn = formData.get("dn");
  const approvedUser = settings.approvedUsers.find((user) => isSameUser(user, name, dn));

  if (!approvedUser) {
    setAuthMessage("Dieser Zugang ist noch nicht freigegeben oder die Daten stimmen nicht.", "error");
    return;
  }

  currentUser = approvedUser;
  sessionStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
  loginForm.reset();
  setAuthMessage("");
  renderApp();
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const dn = formData.get("dn");

  if (settings.approvedUsers.some((user) => isSameUser(user, name, dn))) {
    setAuthMessage("Dieser Zugang ist bereits freigegeben. Bitte direkt anmelden.", "info");
    return;
  }

  if (!settings.pendingUsers.some((user) => isSameUser(user, name, dn))) {
    settings.pendingUsers.push({ id: makeId(), name, dn, requestedAt: new Date().toISOString() });
    saveSettings();
  }

  registerForm.reset();
  setAuthMessage("Registrierung gesendet. Die Verwaltung muss den Zugang noch freigeben.", "success");
});

logoutButton.addEventListener("click", () => {
  currentUser = null;
  sessionStorage.removeItem(AUTH_KEY);
  renderAuthState();
});

renderBreedOptions();
renderApp();
