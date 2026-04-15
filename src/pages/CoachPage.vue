<template>
  <div class="coach-page">
    <!-- Hero Principal - Couchita Verito -->
    <section class="coach-hero">
      <div class="hero-content">
        <div class="hero-image">
          <img
            src="../assets/verito2.webp"
            alt="Cynthia Verónica Torres Velázquez - Couchita Verito"
            class="hero-photo"
          />
          <div class="hero-overlay">
            <div class="hero-badge">Couchita Verito</div>
          </div>
        </div>

        <div class="hero-info">
          <div class="hero-name">
            <h1>Cynthia Verónica Torres Velázquez</h1>
            <p class="hero-nickname">"La Couchita Verito"</p>
          </div>

          <p class="hero-tagline">
            Soy Verito, entrenadora de ActiVida. Acompaño a las personas a
            transformar el movimiento en un hábito y sus metas en procesos
            reales, seguros y constantes. Trabajo con un enfoque progresivo,
            consciente y disfrutable, porque avanzar también se aprende.
          </p>

          <div class="hero-credentials">
            <div class="credential">
              <i class="pi pi-certificate"></i>
              <span>Lic. Cultura Física y Deporte</span>
            </div>
            <div class="credential">
              <i class="pi pi-certificate"></i>
              <span>Maestra en Ciencias de Actividad Física</span>
            </div>
            <div class="credential">
              <i class="pi pi-certificate"></i>
              <span>NSCA-CPT Certificada</span>
            </div>
            <div class="credential">
              <i class="pi pi-certificate"></i>
              <span>Entrenadora Deportes de Resistencia</span>
            </div>
            <div class="credential">
              <i class="pi pi-certificate"></i>
              <span>Diplomado en Psicología del Deporte</span>
            </div>
          </div>

          <div class="hero-cta">
            <Button
              label="Reserva tu sesión con Couchita"
              icon="pi pi-whatsapp"
              severity="success"
              size="large"
              @click="goToWhatsApp"
              class="hero-btn"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Historia y Filosofía -->
    <section class="philosophy-section">
      <div class="content">
        <h2>Mi Historia</h2>

        <div class="philosophy-grid">
          <div class="philosophy-card">
            <div class="philosophy-icon">
              <i class="pi pi-heart"></i>
            </div>
            <h3>Mi Misión</h3>
            <p>
              Mejorar la calidad de vida y salud de las personas convirtiendo
              metas que parecen lejanas en procesos que se disfrutan. Porque el
              running no es solo sobre kilómetros; es sobre transformación.
            </p>
          </div>

          <div class="philosophy-card">
            <div class="philosophy-icon">
              <i class="pi pi-lightbulb"></i>
            </div>
            <h3>El Rendimiento es Mental</h3>
            <p>
              No solo se entrena con kilómetros. Se construye con cabeza,
              hábitos y confianza. Por eso cuento con formación en Psicología
              del Deporte: porque creo en el atleta completo.
            </p>
          </div>

          <div class="philosophy-card">
            <div class="philosophy-icon">
              <i class="pi pi-compass"></i>
            </div>
            <h3>Crecimiento Constante</h3>
            <p>
              Me enamoré del trail y del ciclismo porque me encanta crecer en
              diferentes terrenos, aprender del proceso y descubrir de qué
              estamos hechos cuando salimos de la zona cómoda.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiencia y Logros -->
    <section class="experience-section">
      <div class="content">
        <h2>Desde 2017</h2>
        <p class="experience-intro">
          Acompañando atletas como tú a conquistar sus metas
        </p>

        <div class="experience-grid">
          <div class="experience-card">
            <div class="experience-number">5K</div>
            <p>Entrenamientos de 5 Kilómetros</p>
          </div>
          <div class="experience-card">
            <div class="experience-number">10K</div>
            <p>Entrenamientos de 10 Kilómetros</p>
          </div>
          <div class="experience-card">
            <div class="experience-number">21K</div>
            <p>Media Maratón</p>
          </div>
          <div class="experience-card">
            <div class="experience-number">42K</div>
            <p>Maratón Completa</p>
          </div>
          <div class="experience-card">
            <div class="experience-number">Ultra</div>
            <p>Ultradistancias</p>
          </div>
          <div class="experience-card highlight">
            <div class="experience-number">+7 años</div>
            <p>Transformando vidas</p>
          </div>
        </div>

        <div class="testimony">
          <i class="pi pi-quote"></i>
          <p>
            He visto cómo alguien que empezó con miedo a "no poder" termina
            cruzando una meta con lágrimas de orgullo. Y eso es lo que más me
            mueve: ver cómo el deporte transforma.
          </p>
          <span>— Couchita Verito</span>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section class="services-section">
      <div class="content">
        <h2>Lo que recibirás conmigo</h2>

        <div class="services-grid">
          <div class="service-card">
            <i class="pi pi-chart-line"></i>
            <h3>Plan Estructurado</h3>
            <p>
              Entrenamientos diseñados con ciencia, adaptados a tu nivel y
              objetivos específicos
            </p>
          </div>

          <div class="service-card">
            <i class="pi pi-shield"></i>
            <h3>Prevención de Lesiones</h3>
            <p>Estrategias basadas en biomecánica y recuperación inteligente</p>
          </div>

          <div class="service-card">
            <i class="pi pi-lightbulb"></i>
            <h3>Trabajo Mental</h3>
            <p>
              Psicología del deporte para construir confianza y superar
              limitaciones mentales
            </p>
          </div>

          <div class="service-card">
            <i class="pi pi-users"></i>
            <h3>Acompañamiento Real</h3>
            <p>
              No solo entrenamientos. Soy tu guía, tu motivadora y tu confidente
              en el proceso
            </p>
          </div>

          <div class="service-card">
            <i class="pi pi-heart"></i>
            <h3>Calidad de Vida</h3>
            <p>
              El foco no es solo performance: es convertir el running en un
              hábito que te ame
            </p>
          </div>

          <div class="service-card">
            <i class="pi pi-compass"></i>
            <h3>Versatilidad</h3>
            <p>
              Running, trail, ciclismo. Crecemos juntos en diferentes terrenos y
              desafíos
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Personal -->
    <section class="personal-section">
      <div class="content">
        <h2>¿Qué te prometo?</h2>

        <div class="promises-grid">
          <div class="promise">
            <i class="pi pi-check-circle"></i>
            <h3>Estructura</h3>
            <p>Un plan claro, progresivo y científico</p>
          </div>
          <div class="promise">
            <i class="pi pi-heart"></i>
            <h3>Corazón</h3>
            <p>Acompañamiento genuino en cada paso</p>
          </div>
          <div class="promise">
            <i class="pi pi-sync"></i>
            <h3>Constancia</h3>
            <p>Consistencia, hábitos que duran y se disfrutan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="final-cta">
      <div class="content">
        <h2>Vamos a construir tu mejor versión</h2>
        <p>Con ciencia, corazón y constancia. 🟢💪</p>
        <Button
          label="Agendar Consulta Gratuita"
          icon="pi pi-whatsapp"
          severity="success"
          size="large"
          @click="goToWhatsApp"
          class="final-btn"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from "primevue/button";

const goToWhatsApp = () => {
  window.open("https://wa.me/524491004396", "_blank");
};
</script>

<style scoped>
.coach-page {
  background: var(--surface-ground);
  color: var(--text-color);
  padding-top: 0;
}

/* Hero Section */
.coach-hero {
  background: linear-gradient(135deg, #2ee56f15, transparent);
  padding: 4rem 1rem;
  border-bottom: 2px solid var(--surface-border);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-photo {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(46, 229, 111, 0.3);
  border: 4px solid #2ee56f;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
}

.hero-badge {
  background: #2ee56f;
  color: #000;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 8px 20px rgba(46, 229, 111, 0.3);
}

.hero-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-name h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 800;
  line-height: 1.2;
}

.hero-nickname {
  margin: 0.5rem 0 0;
  font-size: 20px;
  color: #2ee56f;
  font-weight: 600;
  font-style: italic;
}

.hero-tagline {
  margin: 0;
  font-size: 18px;
  color: var(--text-color-secondary);
  line-height: 1.6;
}

.hero-credentials {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.credential {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 15px;
  color: var(--text-color);
}

.credential i {
  color: #2ee56f;
  font-size: 18px;
  flex-shrink: 0;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.hero-btn {
  background: linear-gradient(135deg, #2ee56f, #26c95f) !important;
  border: none !important;
  color: #000 !important;
  font-weight: 600 !important;
}

/* Philosophy Section */
.philosophy-section {
  padding: 4rem 1rem;
  background: var(--surface-card);
}

.content {
  max-width: 1230px;
  margin: 0 auto;
}

.philosophy-section h2,
.experience-section h2,
.services-section h2,
.personal-section h2,
.final-cta h2 {
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.philosophy-card {
  background: var(--surface-ground);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid var(--surface-border);
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-4px);
  border-color: #2ee56f;
  box-shadow: 0 16px 40px rgba(46, 229, 111, 0.15);
}

.philosophy-icon {
  font-size: 40px;
  color: #2ee56f;
  margin-bottom: 1rem;
}

.philosophy-card h3 {
  margin: 0 0 1rem;
  font-size: 20px;
  font-weight: 700;
}

.philosophy-card p {
  margin: 0;
  color: var(--text-color-secondary);
  line-height: 1.7;
}

/* Experience Section */
.experience-section {
  padding: 4rem 1rem;
}

.experience-intro {
  text-align: center;
  font-size: 18px;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.experience-card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 2px solid var(--surface-border);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: #2ee56f;
  box-shadow: 0 12px 30px rgba(46, 229, 111, 0.15);
}

.experience-card.highlight {
  background: linear-gradient(135deg, #2ee56f20, #26c95f20);
  border-color: #2ee56f;
}

.experience-number {
  font-size: 32px;
  font-weight: 800;
  color: #2ee56f;
  margin-bottom: 0.5rem;
}

.experience-card p {
  margin: 0;
  font-size: 14px;
  color: var(--text-color-secondary);
}

.testimony {
  background: var(--surface-card);
  border-left: 4px solid #2ee56f;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}

.testimony i {
  font-size: 32px;
  color: #2ee56f;
  margin-bottom: 1rem;
  opacity: 0.3;
}

.testimony p {
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 1rem;
  font-style: italic;
  color: var(--text-color);
}

.testimony span {
  color: #2ee56f;
  font-weight: 600;
  font-size: 14px;
}

/* Services Section */
.services-section {
  padding: 4rem 1rem;
  background: var(--surface-card);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--surface-ground);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--surface-border);
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #2ee56f;
  box-shadow: 0 12px 24px rgba(46, 229, 111, 0.12);
}

.service-card i {
  font-size: 40px;
  color: #2ee56f;
  margin-bottom: 1rem;
}

.service-card h3 {
  margin: 0 0 0.75rem;
  font-size: 18px;
  font-weight: 700;
}

.service-card p {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 14px;
  line-height: 1.6;
}

/* Personal Section */
.personal-section {
  padding: 4rem 1rem;
}

.promises-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.promise {
  background: var(--surface-card);
  padding: 2.5rem 2rem;
  border-radius: 12px;
  border: 2px solid var(--surface-border);
  text-align: center;
  transition: all 0.3s ease;
}

.promise:hover {
  transform: translateY(-4px);
  border-color: #2ee56f;
  background: linear-gradient(135deg, var(--surface-card), #2ee56f05);
}

.promise i {
  font-size: 48px;
  color: #2ee56f;
  margin-bottom: 1rem;
}

.promise h3 {
  margin: 0 0 0.75rem;
  font-size: 20px;
  font-weight: 700;
}

.promise p {
  margin: 0;
  color: var(--text-color-secondary);
  line-height: 1.6;
}

/* Final CTA */
.final-cta {
  background: linear-gradient(135deg, #2ee56f20, transparent);
  border-top: 2px solid #2ee56f30;
  padding: 4rem 1rem;
  text-align: center;
}

.final-cta h2 {
  margin-bottom: 0.5rem;
}

.final-cta p {
  font-size: 18px;
  color: var(--text-color-secondary);
  margin: 0 0 2rem;
}

.final-btn {
  background: linear-gradient(135deg, #2ee56f, #26c95f) !important;
  border: none !important;
  color: #000 !important;
  font-weight: 600 !important;
}

@media (max-width: 1024px) {
  .coach-hero {
    padding: 3rem 1rem;
  }

  .hero-content {
    gap: 3rem;
  }

  .hero-photo {
    max-width: 350px;
  }

  .hero-name h1 {
    font-size: clamp(26px, 3vw, 36px);
  }

  .philosophy-section,
  .experience-section,
  .services-section,
  .personal-section,
  .final-cta {
    padding: 3rem 1rem;
  }

  .philosophy-section h2,
  .experience-section h2,
  .services-section h2,
  .personal-section h2,
  .final-cta h2 {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  .experience-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .coach-page {
    padding-top: 0;
  }

  .coach-hero {
    padding: 2rem 1rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero-image {
    order: -1;
  }

  .hero-photo {
    max-width: 100%;
    width: 100%;
  }

  .hero-name h1 {
    font-size: clamp(20px, 4vw, 28px);
  }

  .hero-nickname {
    font-size: 16px;
  }

  .hero-tagline {
    font-size: 15px;
  }

  .hero-credentials {
    gap: 0.5rem;
  }

  .credential {
    font-size: 14px;
  }

  .hero-cta {
    gap: 0.75rem;
  }

  .hero-btn :deep(.p-button) {
    width: 100%;
  }

  .philosophy-section,
  .experience-section,
  .services-section,
  .personal-section,
  .final-cta {
    padding: 2rem 1rem;
  }

  .philosophy-section h2,
  .experience-section h2,
  .services-section h2,
  .personal-section h2,
  .final-cta h2 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  .philosophy-grid {
    gap: 1.5rem;
  }

  .philosophy-card {
    padding: 1.5rem;
  }

  .philosophy-card h3 {
    font-size: 18px;
    margin-bottom: 0.75rem;
  }

  .philosophy-card p {
    font-size: 14px;
  }

  .experience-intro {
    font-size: 15px;
    margin-bottom: 1.5rem;
  }

  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .experience-card {
    padding: 1.5rem 1rem;
  }

  .experience-number {
    font-size: 24px;
    margin-bottom: 0.5rem;
  }

  .experience-card p {
    font-size: 13px;
  }

  .testimony {
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  .testimony i {
    font-size: 28px;
    margin-bottom: 0.75rem;
  }

  .testimony p {
    font-size: 14px;
    margin-bottom: 0.75rem;
  }

  .services-grid {
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-card i {
    font-size: 32px;
  }

  .service-card h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .service-card p {
    font-size: 13px;
  }

  .promises-grid {
    gap: 1.5rem;
  }

  .promise {
    padding: 2rem 1.5rem;
  }

  .promise i {
    font-size: 40px;
  }

  .promise h3 {
    font-size: 18px;
  }

  .final-cta p {
    font-size: 15px;
    margin-bottom: 1.5rem;
  }

  .final-btn :deep(.p-button) {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .coach-hero {
    padding: 1.5rem 0.75rem;
  }

  .hero-overlay {
    top: 10px;
    right: 10px;
  }

  .hero-badge {
    padding: 8px 16px;
    font-size: 12px;
  }

  .hero-photo {
    border-width: 3px;
  }

  .hero-info {
    gap: 1rem;
  }

  .hero-name h1 {
    font-size: 18px;
  }

  .hero-nickname {
    font-size: 14px;
  }

  .hero-tagline {
    font-size: 13px;
  }

  .hero-credentials {
    gap: 0.4rem;
  }

  .credential {
    font-size: 12px;
  }

  .credential i {
    font-size: 16px;
  }

  .hero-cta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .hero-btn :deep(.p-button) {
    padding: 0.75rem 1rem !important;
    font-size: 13px !important;
  }

  .philosophy-section,
  .experience-section,
  .services-section,
  .personal-section,
  .final-cta {
    padding: 1.5rem 0.75rem;
  }

  .content {
    padding: 0 0.25rem;
  }

  .philosophy-section h2,
  .experience-section h2,
  .services-section h2,
  .personal-section h2,
  .final-cta h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .philosophy-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .philosophy-card {
    padding: 1.25rem;
  }

  .philosophy-icon {
    font-size: 32px;
  }

  .philosophy-card h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .philosophy-card p {
    font-size: 12px;
  }

  .experience-intro {
    font-size: 13px;
  }

  .experience-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .experience-card {
    padding: 1rem 0.75rem;
  }

  .experience-number {
    font-size: 20px;
  }

  .experience-card p {
    font-size: 12px;
  }

  .testimony {
    padding: 1rem;
  }

  .testimony i {
    font-size: 24px;
  }

  .testimony p {
    font-size: 12px;
  }

  .testimony span {
    font-size: 12px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card {
    padding: 1.25rem 1rem;
  }

  .service-card i {
    font-size: 28px;
  }

  .service-card h3 {
    font-size: 14px;
  }

  .service-card p {
    font-size: 12px;
  }

  .promises-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .promise {
    padding: 1.5rem 1rem;
  }

  .promise i {
    font-size: 36px;
  }

  .promise h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .promise p {
    font-size: 12px;
  }

  .final-cta {
    padding: 2rem 0.75rem;
  }

  .final-cta p {
    font-size: 13px;
    margin-bottom: 1rem;
  }

  .final-btn :deep(.p-button) {
    width: 100%;
    padding: 0.75rem 1rem !important;
    font-size: 13px !important;
  }
}
</style>