<template>
  <div class="events-page">
    <!-- Header -->
    <section class="events-header">
      <div class="header-content content">
        <!-- IZQUIERDA -->
        <div
          class="header-left"
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-800',
            once: true,
          }"
        >
          <h1>Eventos y Entrenamientos</h1>
          <p>
            Únete a la comunidad ActiVida en entrenamientos, carreras y eventos.
          </p>

          <div class="meetups-card">
            <div class="meetups-card__header">
              <div class="meetups-card__icon">
                <i class="pi pi-calendar"></i>
              </div>

              <div class="meetups-card__title">
                <h2>Nos reunimos</h2>
                <p>Entrenamientos semanales (lugares pueden variar)</p>
              </div>
            </div>

            <ul class="meetups-card__list">
              <li class="meetups-card__item">
                <span class="meetups-card__day">Martes</span>
                <span class="meetups-card__time">19:15</span>
                <span class="meetups-card__place">Pista IDEA o UAA</span>
              </li>

              <li class="meetups-card__item">
                <span class="meetups-card__day">Jueves</span>
                <span class="meetups-card__time">18:30</span>
                <span class="meetups-card__place">Gómez Morín o Canal Interceptor</span>
              </li>

              <li class="meetups-card__item">
                <span class="meetups-card__day">Domingo</span>
                <span class="meetups-card__time">—</span>
                <span class="meetups-card__place">Salidas a lugares de terracería</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- DERECHA -->
        <div
          class="header-right"
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-800',
            once: true,
          }"
        >
          <img class="header-visual" :src="actividaCerebro" alt="ActiVida" />
        </div>
      </div>
    </section>

    <!-- Search + filtros -->
    <section class="filters-section">
      <div class="content">
        <InputGroup class="search-bar">
          <InputGroupAddon>
            <i class="pi pi-search"></i>
          </InputGroupAddon>
          <InputText
            v-model="searchQuery"
            placeholder="Busca por evento, mes, ciudad o tipo (maratón, trail, etc.)..."
          />
        </InputGroup>

        <!-- Filtro por estatus -->
        <div class="filter-row">
          <span class="filter-label">Estatus</span>
          <div class="filter-chips">
            <Chip
              v-for="s in ['Todos', 'Confirmados', 'Posibles']"
              :key="s"
              :label="s"
              :class="{ active: selectedStatus === s }"
              @click="selectedStatus = s"
            />
          </div>
        </div>

        <!-- Filtro por alcance (local / nacional / internacional) -->
        <div class="filter-row">
          <span class="filter-label">Alcance</span>
          <div class="filter-chips">
            <Chip
              v-for="opt in scopeOptions"
              :key="opt.value"
              :label="opt.label"
              :class="{ active: selectedScope === opt.value }"
              @click="selectedScope = opt.value"
            />
          </div>
        </div>

        <p class="results-count">
          {{ filteredEvents.length }} evento(s) en tu calendario
        </p>
      </div>
    </section>

    <!-- Grid -->
    <section class="events-grid">
      <div class="content">
        <div v-if="filteredEvents.length" class="events-list">
          <article
            v-for="(event, index) in filteredEvents"
            :key="event.id"
            class="event-card"
            v-animateonscroll="staggerAnim(index)"
          >
            <div class="event-image">
              <SmartImage
                :src="event.image"
                :alt="event.title"
                ratio="16 / 9"
                radius="0px"
              />
              <div class="event-category">{{ event.category }}</div>
              <div class="event-badges">
                <span
                  v-if="event.verified"
                  class="event-badge verified"
                  title="Datos confirmados con la fuente oficial"
                >
                  <i class="pi pi-check-circle"></i> Verificado
                </span>
                <span v-if="event.status === 'posible'" class="event-badge">
                  FECHA POR CONFIRMAR
                </span>
              </div>
              <div class="event-scope" :data-scope="event.scope">
                {{ scopeLabel(event.scope) }}
              </div>
            </div>

            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <p class="event-desc">{{ event.description }}</p>

              <div class="event-meta">
                <div class="meta-item">
                  <i class="pi pi-calendar"></i>
                  <span>{{ event.dateLabel }}</span>
                </div>
                <div class="meta-item">
                  <i class="pi pi-map-marker"></i>
                  <span>{{ event.location }}</span>
                </div>
              </div>

              <!-- Fuente oficial: clave para "que sean verdaderas" -->
              <a
                v-if="event.sourceUrl"
                class="event-source"
                :href="event.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="pi pi-external-link"></i>
                Fuente oficial<span v-if="event.sourceName">: {{ event.sourceName }}</span>
              </a>

              <div class="event-footer">
                <span v-if="event.price > 0" class="price">${{ event.price }}</span>
                <span v-else class="price muted">Costo por confirmar</span>

                <Button
                  label="Ver Detalles"
                  severity="success"
                  class="event-btn"
                  @click="viewEvent(event)"
                />
              </div>
            </div>
          </article>
        </div>

        <div v-else class="no-events">
          <i class="pi pi-inbox"></i>
          <p>No hay eventos que coincidan con tu búsqueda</p>
          <Button
            label="Limpiar filtros"
            severity="success"
            text
            @click="resetFilters"
          />
        </div>
      </div>
    </section>

    <!-- ===== Buscador con IA =====
         Desactivado por ahora: no va en esta versión.
         Para reactivarlo, quita el v-if="false" de abajo. -->
    <section class="ai-finder" v-if="false">
      <div class="content">
        <div
          class="ai-finder__head"
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-700',
            once: true,
          }"
        >
          <div class="ai-finder__icon"><i class="pi pi-sparkles"></i></div>
          <div>
            <h2>Buscar más carreras con IA</h2>
            <p>
              Encuentra carreras locales, nacionales e internacionales. Cada
              resultado llega con su <strong>fuente oficial</strong> para que
              puedas verificarlo antes de publicarlo.
            </p>
          </div>
        </div>

        <div class="ai-finder__controls">
          <InputGroup class="ai-search">
            <InputGroupAddon><i class="pi pi-search"></i></InputGroupAddon>
            <InputText
              v-model="aiQuery"
              placeholder="Ej. maratones en octubre, trail cerca de Aguascalientes..."
              @keyup.enter="runDiscovery"
            />
          </InputGroup>

          <div class="filter-chips ai-scope">
            <Chip
              v-for="opt in scopeOptions"
              :key="opt.value"
              :label="opt.label"
              :class="{ active: aiScope === opt.value }"
              @click="aiScope = opt.value"
            />
          </div>

          <Button
            :label="aiLoading ? 'Buscando...' : 'Buscar'"
            icon="pi pi-sparkles"
            severity="success"
            :loading="aiLoading"
            class="ai-finder__btn"
            @click="runDiscovery"
          />
        </div>

        <!-- Estados -->
        <p v-if="aiDisclaimer" class="ai-disclaimer" :class="{ demo: aiDemo }">
          <i class="pi pi-info-circle"></i> {{ aiDisclaimer }}
        </p>

        <p v-if="aiError" class="ai-error">
          <i class="pi pi-exclamation-triangle"></i> {{ aiError }}
        </p>

        <div v-if="aiResults.length" class="ai-results">
          <article
            v-for="(r, index) in aiResults"
            :key="r.id"
            class="ai-result"
            :class="{ unverified: !r.verified }"
            v-animateonscroll="staggerAnim(index)"
          >
            <div class="ai-result__top">
              <span class="ai-result__category">{{ r.category }}</span>
              <span class="event-scope" :data-scope="r.scope">{{ scopeLabel(r.scope) }}</span>
              <span
                class="ai-result__status"
                :class="r.verified ? 'ok' : 'pending'"
              >
                <i :class="r.verified ? 'pi pi-check-circle' : 'pi pi-clock'"></i>
                {{ r.verified ? 'Verificado' : 'Verificación pendiente' }}
              </span>
            </div>

            <h4>{{ r.title }}</h4>

            <div class="ai-result__meta">
              <span><i class="pi pi-calendar"></i> {{ formatISO(r.date) }}</span>
              <span><i class="pi pi-map-marker"></i> {{ r.location }}</span>
            </div>

            <a
              v-if="r.sourceUrl"
              class="event-source"
              :href="r.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="pi pi-external-link"></i>
              {{ r.sourceName || 'Fuente oficial' }}
            </a>
            <span v-else class="ai-result__nosrc">
              <i class="pi pi-ban"></i> Sin fuente — no publicar
            </span>
          </article>
        </div>
      </div>
    </section>

    <!-- Destacados -->
    <section class="featured-events">
      <div class="content">
        <h2
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-700',
            once: true,
          }"
        >Próximos Eventos Destacados</h2>

        <div class="carousel">
          <div
            v-for="(event, index) in featuredEvents"
            :key="event.id"
            class="carousel-item"
            v-animateonscroll="staggerAnim(index)"
          >
            <div class="featured-card" @click="viewEvent(event)">
              <SmartImage
                :src="event.image"
                :alt="event.title"
                ratio="1 / 1"
                radius="14px"
              />
              <div class="featured-overlay">
                <h4>{{ event.title }}</h4>
                <p>{{ event.dateLabel }}</p>
                <Button
                  label="Inscribirme"
                  severity="success"
                  size="small"
                  @click.stop="viewEvent(event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Chip from "primevue/chip";
import actividaCerebro from "../assets/actividacerebro.jpeg";
import SmartImage from "../components/common/SmartImage.vue";
import {
  events2026Raw,
  classifyScope,
  getCountry,
} from "../data/events-2026.js";
import { discoverRaces } from "../services/raceDiscovery.js";

const dtf = new Intl.DateTimeFormat("es-MX", {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const searchQuery = ref("");
const selectedStatus = ref("Todos");
const selectedScope = ref("todos");

const scopeOptions = [
  { value: "todos", label: "Todos" },
  { value: "local", label: "Local" },
  { value: "nacional", label: "Nacional" },
  { value: "internacional", label: "Internacional" },
];

const scopeLabel = (scope) =>
  ({ local: "Local", nacional: "Nacional", internacional: "Internacional" }[scope] || "Nacional");

const delaySteps = [100, 150, 200, 250, 300, 350];
const staggerAnim = (index) => ({
  enterClass: `animate-enter fade-in-10 slide-in-from-b-8 animate-duration-600 animate-delay-${delaySteps[index % delaySteps.length]}`,
  once: true,
});

const placeholder = () => "/images/placeholder-event.webp";
const buildEvent = ({
  id,
  title,
  date,
  location = "Por confirmar",
  category = "Carrera",
  description = "",
  price = 0,
  status,
  tag,
  image,
  sourceUrl = "",
  sourceName = "",
  verified = false,
}) => {
  const img = image || placeholder(title);
  const desc = description || `Evento: ${title}.`;
  const dateLabel = dtf.format(date);

  const finalStatus = status
    ? status
    : tag === "por confirmar" || location === "Por confirmar"
    ? "posible"
    : "confirmado";

  const scope = classifyScope(location);
  const country = getCountry(location);

  const searchText = [
    title, desc, category, location, finalStatus, tag, dateLabel, scope, country,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return {
    id,
    title,
    description: desc,
    date,
    dateLabel,
    location,
    category,
    price,
    status: finalStatus,
    tag,
    image: img,
    scope,
    country,
    sourceUrl,
    sourceName,
    verified,
    searchText,
  };
};

let id = 1;
const events = ref(
  events2026Raw.map((e) => buildEvent({ id: id++, ...e }))
);

events.value.sort((a, b) => a.date - b.date);

const featuredEvents = computed(() => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const upcoming = events.value.filter((e) => e.date >= today).slice(0, 6);
  return upcoming.length ? upcoming : events.value.slice(0, 6);
});

const filteredEvents = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  const status = selectedStatus.value;
  const scope = selectedScope.value;

  return events.value.filter((e) => {
    const matchesSearch = !q || e.searchText.includes(q);
    const matchesStatus =
      status === "Todos"
        ? true
        : status === "Confirmados"
        ? e.status === "confirmado"
        : e.status === "posible";
    const matchesScope = scope === "todos" ? true : e.scope === scope;

    return matchesSearch && matchesStatus && matchesScope;
  });
});

const resetFilters = () => {
  searchQuery.value = "";
  selectedStatus.value = "Todos";
  selectedScope.value = "todos";
};

/* ===== Buscador con IA ===== */
const aiQuery = ref("");
const aiScope = ref("todos");
const aiLoading = ref(false);
const aiError = ref("");
const aiResults = ref([]);
const aiDisclaimer = ref("");
const aiDemo = ref(false);

const isoFmt = new Intl.DateTimeFormat("es-MX", {
  year: "numeric", month: "short", day: "numeric",
});
const formatISO = (iso) => {
  const d = new Date(iso);
  return isNaN(d) ? iso : isoFmt.format(d);
};

const runDiscovery = async () => {
  aiError.value = "";
  aiLoading.value = true;
  try {
    const { results, demo, disclaimer } = await discoverRaces({
      query: aiQuery.value,
      scope: aiScope.value,
    });
    aiResults.value = results;
    aiDemo.value = demo;
    aiDisclaimer.value = disclaimer;
  } catch (err) {
    aiError.value = err.message || "No se pudo completar la búsqueda.";
    aiResults.value = [];
  } finally {
    aiLoading.value = false;
  }
};

const viewEvent = (event) => {
  const message =
    `Hola 👋 Me interesa este evento:\n` +
    `• ${event.title}\n` +
    `• ${event.dateLabel}\n` +
    `• ${event.location}\n` +
    `¿Me pueden compartir link de inscripción y costos?`;

  window.open(
    `https://wa.me/5214442611500?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
</script>

<style scoped>
.events-page {
  background: var(--surface-ground);
  color: var(--text-color);
  padding: 2.25rem 1rem 2rem;
  min-height: calc(100vh - 80px);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== Header ===== */
.events-header {
  margin-bottom: 1.25rem;
}
.header-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: center;
}
.header-left h1 {
  font-size: clamp(28px, 4.5vw, 46px);
  font-weight: 900;
  margin: 0 0 0.5rem;
  line-height: 1.05;
}

.header-left p {
  margin: 0 0 1.2rem;
  color: var(--text-color-secondary);
  font-size: clamp(14px, 1.6vw, 16px);
}

.header-right {
  display: flex;
  justify-content: center;
}

.header-visual {
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

/* ===== Meetups Card ===== */
.meetups-card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  padding: 1rem 1.1rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
}
.meetups-card__header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--surface-border);
  margin-bottom: 0.9rem;
}
.meetups-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #2ee56f20, #2ee56f35);
  color: #2ee56f;
  flex-shrink: 0;
  font-size: 18px;
}
.meetups-card__title h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 900;
}
.meetups-card__title p {
  margin: 0.15rem 0 0;
  font-size: 12px;
  color: var(--text-color-secondary);
}
.meetups-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}
.meetups-card__item {
  display: grid;
  grid-template-columns: 84px 64px 1fr;
  gap: 0.5rem;
  align-items: center;
  padding: 0.65rem 0.7rem;
  border-radius: 12px;
  background: var(--surface-ground);
  border: 1px solid var(--surface-border);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.meetups-card__day { font-weight: 900; }
.meetups-card__time { font-weight: 900; color: #2ee56f; }
.meetups-card__place { color: var(--text-color-secondary); font-size: 13px; }
.meetups-card__item:hover {
  border-color: #2ee56f;
  box-shadow: 0 12px 24px rgba(46, 229, 111, 0.12);
  transform: translateY(-1px);
}

/* ===== Filters ===== */
.filters-section { margin: 1.25rem 0 2rem; }
.search-bar { margin-bottom: 1rem; }
.search-bar :deep(.p-input-group > input) {
  border-radius: 10px;
  padding: 12px 16px;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.filter-label {
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--text-color-secondary);
  min-width: 64px;
  flex-shrink: 0;
}
.filter-chips {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.filter-chips :deep(.p-chip) {
  cursor: pointer;
  transition: all 0.25s ease;
  background: var(--surface-card);
  user-select: none;
}
.filter-chips :deep(.p-chip:hover) {
  border-color: #2ee56f;
}
.filter-chips :deep(.p-chip.active) {
  background: #2ee56f !important;
  color: #000 !important;
}
.results-count {
  margin: 0.5rem 0 0;
  font-size: 13px;
  color: var(--text-color-secondary);
}

/* ===== Grid ===== */
.events-grid { margin-bottom: 3rem; }
.events-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.event-card {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}
.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.12);
}
.event-card::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 3px;
  background: linear-gradient(90deg, #08989c, #2ee56f, #6342ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}
.event-card:hover::after { transform: scaleX(1); }
.event-card:hover .event-image :deep(.smart-image__img) { transform: scale(1.05); }

.event-image {
  position: relative;
  overflow: hidden;
  background: #0f172a;
}
.event-image :deep(.smart-image) { border-radius: 0; }

.event-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #2ee56f;
  color: #000;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
  z-index: 3;
}

.event-badges {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  z-index: 3;
}
.event-badge {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.event-badge.verified {
  background: #2ee56f;
  color: #000;
}

.event-scope {
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 3;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: #fff;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(4px);
}
.event-scope[data-scope="local"] { background: rgba(8, 152, 156, 0.92); }
.event-scope[data-scope="internacional"] { background: rgba(99, 66, 255, 0.92); }

.event-content {
  padding: 1.1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.event-content h3 {
  margin: 0 0 0.4rem;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.2;
}
.event-desc {
  margin: 0 0 0.9rem;
  color: var(--text-color-secondary);
  font-size: 14px;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.event-meta {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
  font-size: 13px;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-color-secondary);
}
.meta-item i { color: #2ee56f; width: 18px; }

.event-source {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 12px;
  font-weight: 700;
  color: #08989c;
  text-decoration: none;
  margin-bottom: 0.75rem;
  word-break: break-word;
}
.event-source:hover { text-decoration: underline; }

.event-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--surface-border);
}
.price { font-size: 16px; font-weight: 900; color: #2ee56f; }
.price.muted { color: var(--text-color-secondary); font-weight: 800; }

.no-events {
  text-align: center;
  padding: 2.5rem 1rem;
  color: var(--text-color-secondary);
}
.no-events i { font-size: 42px; margin-bottom: 0.75rem; opacity: 0.6; display: block; }

/* ===== Buscador con IA ===== */
.ai-finder {
  background: linear-gradient(135deg, rgba(8,152,156,0.06), rgba(99,66,255,0.06));
  border: 1px solid var(--surface-border);
  border-radius: 18px;
  padding: 1.75rem 1.25rem;
  margin-bottom: 3rem;
}
.ai-finder__head {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.ai-finder__icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 22px;
  color: #fff;
  background: linear-gradient(135deg, #08989c, #6342ff);
}
.ai-finder__head h2 { margin: 0 0 0.25rem; font-size: 20px; font-weight: 900; }
.ai-finder__head p {
  margin: 0;
  font-size: 14px;
  color: var(--text-color-secondary);
  line-height: 1.5;
}
.ai-finder__controls {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "search btn" "scope scope";
  gap: 0.75rem;
  align-items: center;
}
.ai-search { grid-area: search; }
.ai-search :deep(.p-input-group > input) { border-radius: 10px; padding: 12px 16px; }
.ai-scope { grid-area: scope; }
.ai-finder__btn { grid-area: btn; white-space: nowrap; }

.ai-disclaimer {
  margin: 1rem 0 0;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  font-size: 13px;
  background: rgba(8, 152, 156, 0.1);
  color: var(--text-color);
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}
.ai-disclaimer.demo {
  background: rgba(234, 179, 8, 0.14);
  border: 1px solid rgba(234, 179, 8, 0.4);
}
.ai-error {
  margin: 1rem 0 0;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  font-size: 13px;
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.ai-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}
.ai-result {
  background: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ai-result.unverified { border-style: dashed; opacity: 0.92; }
.ai-result__top {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.ai-result__category {
  font-size: 11px;
  font-weight: 900;
  background: #2ee56f;
  color: #000;
  padding: 2px 9px;
  border-radius: 999px;
}
.ai-result__top .event-scope { position: static; }
.ai-result__status {
  margin-left: auto;
  font-size: 11px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.ai-result__status.ok { color: #16a34a; }
.ai-result__status.pending { color: #d97706; }
.ai-result h4 { margin: 0; font-size: 15px; font-weight: 900; line-height: 1.25; }
.ai-result__meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 12px;
  color: var(--text-color-secondary);
}
.ai-result__meta i { color: #2ee56f; margin-right: 4px; }
.ai-result__nosrc {
  font-size: 12px;
  font-weight: 700;
  color: #ef4444;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

/* ===== Featured ===== */
.featured-events {
  background: var(--surface-card);
  padding: 2.5rem 1rem;
  border-radius: 14px;
}
.featured-events h2 {
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 900;
  margin: 0 0 1.5rem;
  text-align: center;
}
.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}
.carousel-item { aspect-ratio: 1; }
.featured-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}
.featured-card :deep(.smart-image) {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
}
.featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.85));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.featured-card:hover .featured-overlay,
.featured-card:focus-within .featured-overlay { opacity: 1; }
.featured-overlay h4 { margin: 0 0 0.35rem; font-size: 16px; font-weight: 900; }
.featured-overlay p { margin: 0 0 0.85rem; font-size: 12px; opacity: 0.92; }

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .header-content { grid-template-columns: 1fr 240px; gap: 1.5rem; }
}

@media (max-width: 768px) {
  .events-page { padding: 1.5rem 1rem 1.5rem; }
  .header-content { grid-template-columns: 1fr; }
  .header-right { order: -1; justify-content: flex-start; }
  .header-visual { width: 140px; justify-self: start; }

  .filter-row { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
  .filter-label { min-width: 0; }
  .filter-chips {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.25rem;
    flex-wrap: nowrap;
    width: 100%;
  }
  .filter-chips :deep(.p-chip) { flex-shrink: 0; }

  .events-list { grid-template-columns: 1fr; }

  .ai-finder__controls {
    grid-template-columns: 1fr;
    grid-template-areas: "search" "scope" "btn";
  }
  .ai-finder__btn { width: 100%; justify-content: center; }
  .ai-scope { overflow-x: auto; flex-wrap: nowrap; }
  .ai-scope :deep(.p-chip) { flex-shrink: 0; }
}

@media (max-width: 480px) {
  .meetups-card__item { grid-template-columns: 90px 1fr; }
  .meetups-card__place { grid-column: 1 / -1; }
  .featured-overlay { opacity: 1; }
  .ai-finder { padding: 1.25rem 1rem; }
  .ai-finder__head { flex-direction: column; gap: 0.75rem; }
}
</style>
