<template>
  <div class="home">
    <HeroBanner src="/images/actiportada.webp" />

    <!-- Sección principal -->
    <section class="section">
      <div class="content">
        <h2 class="title">¿Qué es <span class="brand">ActiVida</span>?</h2>

        <p class="subtitle">
          Somos más que un club de running. Somos una comunidad de
          transformación.
        </p>

        <div class="mvf-grid">
          <!-- Misión -->
          <div
            class="mvf-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
              once: true,
            }"
          >
            <div class="mvf-header">
              <div class="mvf-icon mission">
                <i class="pi pi-bullseye"></i>
              </div>
              <h2>NUESTRA MISIÓN</h2>
            </div>
            <div class="mvf-body">
              <p>
                En <strong>ActiVida</strong> es fomentar y promover la práctica del atletismo
                entre sus miembros y la comunidad, ofreciendo un entorno de
                entrenamiento, competición y desarrollo de habilidades
                deportivas, además de promover un estilo de vida saludable y el
                compañerismo.
              </p>
              <div class="mvf-highlight">
                <strong>Apoyo 24/7</strong> de tu entrenadora certificada y una
                comunidad que te motiva en cada kilómetro.
              </div>
            </div>
          </div>

          <!-- Visión -->
          <div
            class="mvf-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-1000',
              once: true,
            }"
          >
            <div class="mvf-header">
              <div class="mvf-icon vision">
                <i class="pi pi-eye"></i>
              </div>
              <h2>NUESTRA VISIÓN</h2>
            </div>
            <div class="mvf-body">
              <p>
               Ser un referente en la comunidad corredora por su innovación y compromiso, ofreciendo experiencias de entrenamiento que transformen el desarrollo físico, deportivo y personal de cada persona.
              </p>
              <div class="mvf-highlight">
                <strong>Eventos que nos unen</strong> y hacen que la comunidad
                crezca y se supere en cada experiencia.
              </div>
            </div>
          </div>

          <!-- Filosofía -->
          <div
            class="mvf-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000',
              once: true,
            }"
          >
            <div class="mvf-header">
              <div class="mvf-icon philosophy">
                <i class="pi pi-heart"></i>
              </div>
              <h2>NUESTRA FILOSOFÍA</h2>
            </div>
            <div class="mvf-body">
              <p>
                Ser una comunidad inclusiva y apasionada que inspira a personas de todos los niveles a descubrir su máximo potencial, rompiendo sus propios límites a través del entrenamiento, promoviendo la salud, la perseverancia y el compañerismo en cada paso.
              </p>
              <div class="mvf-highlight">
                <strong>Personas como tú</strong> que decidieron ir por su mejor
                versión.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de beneficios destacados -->
    <section class="benefits-section">
      <div class="content">
        <h2
          class="section-title"
          v-animateonscroll="{
            enterClass:
              'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-700',
            once: true,
          }"
        >
          ¿Por qué unirse a ActiVida?
        </h2>

        <div class="benefits-grid">
          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-100',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-chart-line"></i>
            </div>
            <h3>Progreso Medible</h3>
            <p>Seguimiento detallado de tu rendimiento y mejora continua</p>
          </div>

          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-150',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-users"></i>
            </div>
            <h3>Comunidad Fuerte</h3>
            <p>Más de 100 corredores como tú compartiendo el mismo objetivo</p>
          </div>

          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-200',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-star"></i>
            </div>
            <h3>Experta Certificada</h3>
            <p>
              Entrenadora certificada <strong>NSCA-CPT</strong>, especialista en
              deportes de resistencia, psicología del deporte y rendimiento
              físico.
            </p>
            <!-- <p class="muted">Lic. en Cultura Física y Deporte · Mtra. en Ciencias de la Actividad Física y el Deporte</p> -->
          </div>

          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-250',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-bolt"></i>
            </div>
            <h3>Entrenamientos Variados</h3>
            <p>50+ entrenamientos diferentes cada mes adaptados a tu nivel</p>
          </div>

          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-300',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-check-circle"></i>
            </div>
            <h3>Planes Flexibles</h3>
            <p>Elige el plan que se adapte a tu ritmo y presupuesto</p>
          </div>

          <div
            class="benefit-card"
            v-animateonscroll="{
              enterClass:
                'animate-enter fade-in-10 zoom-in-75 animate-duration-900 animate-delay-350',
              once: true,
            }"
          >
            <div class="benefit-icon">
              <i class="pi pi-heart"></i>
            </div>
            <h3>Apoyo Permanente</h3>
            <p>Soporte 24/7 para resolver tus dudas y motivarte</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Principal -->
    <section class="section cta-section">
      <div
        class="content center"
        v-animateonscroll="{
          enterClass:
            'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-800',
          once: true,
        }"
      >
        <h2 class="title">¿Listo para empezar?</h2>
        <p class="subtitle">
          Transforma tu pasión por el running en una realidad. Únete a ActiVida
          hoy.
        </p>

        <div class="cta-buttons">
          <Button
            label="Ver Planes"
            icon="pi pi-list"
            @click="goToPlans"
            class="cta-btn-primary"
          />
          <Button
            label="Contactar por WhatsApp"
            icon="pi pi-whatsapp"
            severity="success"
            @click="goToWhatsApp"
            class="cta-btn-secondary"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="content">
        <h2
          class="section-title"
          v-animateonscroll="{
            enterClass:
              'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-700',
            once: true,
          }"
        >
          Preguntas Frecuentes
        </h2>

        <Accordion
          :value="0"
          v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 animate-duration-700',
            once: true,
          }"
        >
          <AccordionTab header="¿Cuál es el nivel mínimo para unirme?">
            <p>
              ActiVida es para corredores de TODOS los niveles. Tenemos
              entrenamientos desde principiante hasta avanzado. No importa si
              apenas empiezas o si ya corres maratones.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Puedo cambiar de plan en cualquier momento?">
            <p>
              Sí, puedes cambiar, mejorar o cancelar tu plan cuando lo desees.
              Queremos que estés cómodo con tu elección.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Qué incluye el coaching personalizado?">
            <p>
              Planes de entrenamiento adaptados a tu nivel, análisis de tu
              técnica de carrera, nutrición deportiva y soporte emocional para
              alcanzar tus metas.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Cuándo puedo empezar?">
            <p>
              ¡Ahora mismo! Contáctanos por WhatsApp y comenzarás tu
              transformación en 48 horas. Nuestro equipo te apoyará en cada
              paso.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import HeroBanner from "../components/home/HeroBanner.vue";
import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const router = useRouter();

const goToPlans = () => router.push("/planes");

const goToWhatsApp = () => {
  window.open("https://wa.me/524491004396", "_blank");
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--surface-ground);
  color: var(--text-color);
}

/* Sections */
.section {
  padding: 3rem 1rem;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.title {
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 800;
  margin: 0 0 0.5rem;
}

.subtitle {
  margin-top: 1rem;
  color: var(--text-color-secondary);
  font-size: 18px;
  line-height: 1.6;
}

.brand {
  color: var(--primary-color);
}

/* MVF grid */
.mvf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.mvf-card {
  background: var(--surface-card);
  border: 2px solid var(--surface-border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.mvf-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(46, 229, 111, 0.15);
  border-color: #2ee56f;
}

.mvf-header {
  padding: 2.5rem 2rem 1.5rem;
  border-bottom: 2px solid var(--surface-border);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.mvf-icon {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
}

.mvf-icon.mission {
  background: linear-gradient(135deg, #ff6b6b20, #ff5252);
  color: #ff5252;
}

.mvf-icon.vision {
  background: linear-gradient(135deg, #4ecdc420, #4ecdc4);
  color: #4ecdc4;
}

.mvf-icon.philosophy {
  background: linear-gradient(135deg, #2ee56f20, #2ee56f);
  color: #2ee56f;
}

.mvf-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
}

.mvf-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.mvf-body p {
  margin: 0 0 1.5rem;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-color);
}

.mvf-highlight {
  background: linear-gradient(
    135deg,
    var(--surface-ground),
    var(--surface-border)
  );
  border-left: 4px solid #2ee56f;
  padding: 1rem 1rem 1rem 1.25rem;
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-color);
  margin-top: auto;
}

.mvf-highlight strong {
  color: #2ee56f;
}

/* Benefits Section */
.benefits-section {
  background: var(--surface-card);
  padding: 4rem 1rem;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.benefit-card {
  background: var(--surface-ground);
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--surface-border);
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  border-color: #2ee56f;
  box-shadow: 0 12px 24px rgba(46, 229, 111, 0.12);
}

.benefit-icon {
  font-size: 32px;
  color: #2ee56f;
  margin-bottom: 1rem;
}

/* CTA */
.cta-section {
  background: linear-gradient(135deg, #2ee56f15, transparent);
  border-top: 2px solid #2ee56f30;
  border-bottom: 2px solid #2ee56f30;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

:deep(.cta-btn-primary) {
  background: linear-gradient(135deg, #2ee56f, #26c95f) !important;
  border: none !important;
  color: #000 !important;
  padding: 12px 40px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
}

:deep(.cta-btn-primary:hover) {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(46, 229, 111, 0.3) !important;
}

/* FAQ */
.faq-section {
  padding: 4rem 1rem;
  background: var(--surface-card);
}

:deep(.p-accordion) {
  max-width: 800px;
  margin: 0 auto;
}

:deep(.p-accordion .p-accordion-header-link) {
  padding: 1.5rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .mvf-grid {
    gap: 2rem;
  }

  .title {
    font-size: clamp(24px, 4vw, 36px);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
  }

  .mvf-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mvf-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1.5rem 1rem;
  }

  .mvf-icon {
    width: 60px;
    height: 60px;
    font-size: 28px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  :deep(.cta-btn-primary),
  :deep(.cta-btn-secondary) {
    width: 100%;
  }

  .subtitle {
    font-size: 16px;
  }

  .section-title {
    font-size: 24px;
  }

  :deep(.p-accordion .p-accordion-header-link) {
    padding: 1rem;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 0.75rem;
  }

  .content {
    padding: 0 0.5rem;
  }

  .title {
    font-size: 20px;
    margin-bottom: 0.75rem;
  }

  .subtitle {
    font-size: 14px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .mvf-body {
    padding: 1.5rem 1rem;
  }

  .mvf-body p {
    font-size: 14px;
    line-height: 1.6;
  }

  .benefit-card {
    padding: 1rem 0.75rem;
  }

  .benefit-icon {
    font-size: 28px;
  }
}
</style>