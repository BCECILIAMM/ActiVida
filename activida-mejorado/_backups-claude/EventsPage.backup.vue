<template>
  <div class="events-page">
    <!-- Header -->
    <section class="events-header">
      <div class="header-content content">
        <!-- IZQUIERDA -->
        <div class="header-left">
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
                <span class="meetups-card__place"
                  >Gómez Morín o Canal Interceptor</span
                >
              </li>

              <li class="meetups-card__item">
                <span class="meetups-card__day">Domingo</span>
                <span class="meetups-card__time">—</span>
                <span class="meetups-card__place"
                  >Salidas a lugares de terracería</span
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- DERECHA -->
        <div class="header-right">
          <img class="header-visual" :src="actividaCerebro" alt="ActiVida" />
        </div>
      </div>
    </section>

    <!-- Search -->
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
    </section>

    <!-- Grid -->
    <section class="events-grid">
      <div class="content">
        <div v-if="filteredEvents.length" class="events-list">
          <article
            v-for="event in filteredEvents"
            :key="event.id"
            class="event-card"
          >
            <div class="event-image">
              <SmartImage
                :src="event.image"
                :alt="event.title"
                ratio="16 / 9"
                radius="0px"
              />
              <div class="event-category">{{ event.category }}</div>
              <div v-if="event.status === 'posible'" class="event-badge">
                FECHA POR CONFIRMAR
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

              <div class="event-footer">
                <span v-if="event.price > 0" class="price"
                  >${{ event.price }}</span
                >
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
        </div>
      </div>
    </section>

    <!-- Destacados -->
    <section class="featured-events">
      <div class="content">
        <h2>Próximos Eventos Destacados</h2>

        <div class="carousel">
          <div
            v-for="event in featuredEvents"
            :key="event.id"
            class="carousel-item"
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
import { events2026Raw } from "../data/events-2026.js";

const dtf = new Intl.DateTimeFormat("es-MX", {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const searchQuery = ref("");
const selectedStatus = ref("Todos");

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
}) => {
  const img = image || placeholder(title);
  const desc = description || `Evento: ${title}.`;
  const dateLabel = dtf.format(date);

  // Decide evento status: if caller provided `status` use it; otherwise
  // mark as 'posible' when the source has `tag: "por confirmar"` or
  // `location` equals "Por confirmar".
  const finalStatus = status
    ? status
    : tag === "por confirmar" || location === "Por confirmar"
    ? "posible"
    : "confirmado";

  const searchText = [
    title,
    desc,
    category,
    location,
    finalStatus,
    tag,
    dateLabel,
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
    searchText,
  };
};

// ✅ aquí “construimos” tus eventos desde el archivo externo
let id = 1;
const events = ref(
  events2026Raw.map((e) =>
    buildEvent({
      id: id++,
      ...e,
    })
  )
);

// ordena una vez
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

  return events.value.filter((e) => {
    const matchesSearch = !q || e.searchText.includes(q);
    const matchesStatus =
      status === "Todos"
        ? true
        : status === "Confirmados"
        ? e.status === "confirmado"
        : e.status === "posible";

    return matchesSearch && matchesStatus;
  });
});



const viewEvent = (event) => {
  const message =
    `Hola 👋 Me interesa este evento:\n` +
    `• ${event.title}\n` +
    `• ${event.dateLabel}\n` +
    `• ${event.location}\n` +
    `¿Me pueden compartir link de inscripción y costos?`;

  window.open(
    `https://wa.me/524491004396?text=${encodeURIComponent(message)}`,
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
.hero__picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
}
.header-left h1 {
  font-size: clamp(28px, 4.5vw, 46px);
  font-weight: 900;
  margin: 0 0 0.5rem;
}

.header-left p {
  margin: 0 0 1.2rem;
  color: var(--text-color-secondary);
  font-size: 16px;
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

.meetups-card__day {
  font-weight: 900;
}

.meetups-card__time {
  font-weight: 900;
  color: #2ee56f;
}

.meetups-card__place {
  color: var(--text-color-secondary);
  font-size: 13px;
}

.meetups-card__item:hover {
  border-color: #2ee56f;
  box-shadow: 0 12px 24px rgba(46, 229, 111, 0.12);
  transform: translateY(-1px);
}

/* ===== Filters ===== */
.filters-section {
  margin: 1.25rem 0 2rem;
}

.search-bar {
  margin-bottom: 1rem;
}

.search-bar :deep(.p-input-group > input) {
  border-radius: 10px;
  padding: 12px 16px;
}

.filter-chips {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-chips :deep(.p-chip) {
  cursor: pointer;
  transition: all 0.25s ease;
  background: var(--surface-card);
}

.filter-chips :deep(.p-chip.active) {
  background: #2ee56f !important;
  color: #000 !important;
}

/* ===== Grid ===== */
.events-grid {
  margin-bottom: 3rem;
}

.events-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
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

.event-card:hover::after {
  transform: scaleX(1);
}

.event-card:hover .event-image :deep(.smart-image__img) {
  transform: scale(1.05);
}
.event-image {
  position: relative;
  overflow: hidden;
  background: #0f172a;
}

.event-image :deep(.smart-image) {
  border-radius: 0;
}
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
}

.event-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2px;
}

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
}

.event-desc {
  margin: 0 0 0.9rem;
  color: var(--text-color-secondary);
  font-size: 14px;
  line-height: 1.55;
}

.event-meta {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1rem;
  font-size: 13px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--text-color-secondary);
}

.meta-item i {
  color: #2ee56f;
  width: 18px;
}

.event-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--surface-border);
}

.price {
  font-size: 16px;
  font-weight: 900;
  color: #2ee56f;
}

.price.muted {
  color: var(--text-color-secondary);
  font-weight: 800;
}

.no-events {
  text-align: center;
  padding: 2.5rem 1rem;
  color: var(--text-color-secondary);
}

.no-events i {
  font-size: 42px;
  margin-bottom: 0.75rem;
  opacity: 0.6;
}

/* ===== Featured ===== */
.featured-events {
  background: var(--surface-card);
  padding: 2.5rem 1rem;
  border-radius: 14px;
}

.featured-events h2 {
  font-size: 28px;
  font-weight: 900;
  margin: 0 0 1.5rem;
  text-align: center;
}

.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.carousel-item {
  aspect-ratio: 1;
}

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

.featured-card:hover .featured-overlay {
  opacity: 1;
}

.featured-overlay h4 {
  margin: 0 0 0.35rem;
  font-size: 16px;
  font-weight: 900;
}

.featured-overlay p {
  margin: 0 0 0.85rem;
  font-size: 12px;
  opacity: 0.92;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .events-page {
    padding: 1.5rem 1rem 1.5rem;
  }

  .header-content {
    grid-template-columns: 1fr;
  }

  .header-visual {
    width: 110px;
    justify-self: start;
  }

  .filter-chips {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.25rem;
    flex-wrap: nowrap;
  }

  .events-list {
    grid-template-columns: 1fr;
  }

  .event-image {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .meetups-card__item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .event-desc {
    display: none;
  }

  .featured-overlay {
    opacity: 1;
  }
}
</style>