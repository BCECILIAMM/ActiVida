<template>
  <section class="team-page">
    <div class="container">
      <div
        class="card"
        v-animateonscroll="{
          enterClass: 'animate-enter fade-in-10 slide-in-from-b-10 animate-duration-800',
          once: true,
        }"
      >
        <div class="image-wrap">
          <!-- Imagen principal: coloca la imagen real en public/eventos/images/equipo.webp -->
          <img src="/eventos/images/equipo.webp" alt="Equipo ActiVida" class="fade-img" @load="onImgLoad = true" :style="onImgLoad ? 'opacity:1;filter:blur(0);' : ''" />
        </div>

        <div class="content">
          <h1>Equipo Multidisciplinario</h1>
          <p class="lead">Conoce a los profesionales que forman parte de ActiVida.</p>

          <ul class="highlights">
            <li><strong>Cardiología:</strong> Dr. José Alfredo Lizalde Moreno</li>
            <li><strong>Medicina del Deporte:</strong> Dr. Aldo Patiño Castillo</li>
            <li><strong>Psicología:</strong> Lic. Ana Janeth Muñoz Torres</li>
            <li><strong>Fisioterapia:</strong> Ltf. Cinthya López Palos</li>
            <li><strong>Nutrición:</strong> Mafyd. Stephanye Santacruz Vallejo</li>
            <li><strong>Traumatología y Ortopedia:</strong> Dr. Fernando Minchaca Silva</li>
            <li><strong>Médicina General y Cirugía laparascópica:</strong> Dr. José Luis Serafio Gómez</li>
          </ul>

          <p class="note">Precios y contacto disponibles para integrantes de ActiVida.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const onImgLoad = ref(false);
</script>

<style scoped>
.team-page {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}
.container {
  width: 100%;
  max-width: 1100px;
}
.card {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 1.5rem;
  background: rgba(255,255,255,0.9);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(46, 229, 111, 0.3);
  align-items: stretch;
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 70px rgba(46, 229, 111, 0.35);
  border-color: #2ee56f;
}

/* Fade-in effect for team photo */
.fade-img {
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.8s cubic-bezier(.4,0,.2,1), filter 0.8s cubic-bezier(.4,0,.2,1);
}

.image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(243,249,255,0.6);
  overflow: hidden;
}
.image-wrap img {
  width: 100%;
  max-width: 380px;
  height: auto;
  object-fit: contain;
  display: block;
  transition: transform 0.4s ease;
}
.card:hover .image-wrap img {
  transform: scale(1.04);
}

/* Dark mode for card */
.my-app-dark .card {
  background: rgba(2,6,23,0.6);
}
.my-app-dark .image-wrap { background: rgba(255,255,255,0.03); }
.content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* Text colors: light mode */
.content h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #0b2b4a; /* darker blue for good contrast */
}
.lead {
  margin: 0 0 1rem 0;
  color: #334155; /* slate-600 */
}
.highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
.highlights li {
  margin: 0.35rem 0;
  padding-left: 0.85rem;
  border-left: 3px solid transparent;
  color: #0f172a; /* strong text color */
  transition: border-color 0.25s ease, transform 0.25s ease;
}
.highlights li:hover {
  border-left-color: #2ee56f;
  transform: translateX(3px);
}
.note {
  margin-top: 0.5rem;
  color: #475569; /* neutral */
  font-size: 0.95rem;
}

/* Dark mode overrides */
.my-app-dark .content { color: #cbd5e1; }
.my-app-dark .content h1 { color: #e6f0fa; }
.my-app-dark .lead { color: #94a3b8; }
.my-app-dark .highlights li { color: #cbd5e1; }
.my-app-dark .note { color: #94a3b8; }

@media (max-width: 768px) {
  .card {
    grid-template-columns: 1fr;
  }
  .image-wrap {
    padding: 1rem 0;
  }
}
</style>
