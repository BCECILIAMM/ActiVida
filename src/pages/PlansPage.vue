<template>
  <div class="plans-page">
    <section class="plans-header">
      <div class="plans-header__content">
       <h1>ELIGE TU PLAN</h1>
<p>Elige el plan ideal para lograr tus objetivos y mejorar tu resistencia.</p>
      </div>
    </section>

    <section class="plans-grid">
      <PlanCard
        title="Plan + Nutrición"
        subtitle="ActiVida & Nuth_bySanta"
        :price="800"
        period="mes"
        :coach="[
          {
            role: 'Coach Entrenamiento',
            name: 'MCAF. Cynthia Verónica Torres Velázquez',
          },
          {
            role: 'Coach Nutrición',
            name: 'MAFYD. Stephanye Santacruz Vallejo',
          },
        ]"
        :subSections="[
          {
            title: 'Plan ActiVida',
            items: [
              'Entrenamientos a través de app',
              'Clases presenciales (técnica de carrera/velocidad)',
              'Plan de competencias',
              'Entrenamientos compartidos',
            ],
          },
          {
            title: 'Plan Alimenticio',
            items: [
              'Plicometría (composición corporal)',
              'Somatocarta (identificar biotipo)',
              'Opción 1: Rendimiento físico',
              'Opción 2: Aumento de masa muscular',
            ],
          },
        ]"
        plan-name="Plan + Nutrición"
        button-label="Seleccionar Plan"
        button-severity="success"
        is-featured
        @select-plan="selectPlan('Plan + Nutrición - $800')"
      />
            <PlanCard
        title="Plan Run Energy"
        subtitle="Entrenamiento combinado ActiVida + ATP Energy"
        :coach="[
          {
            role: 'Coach Entrenamiento',
            name: 'MCAF. Cynthia Verónica Torres Velázquez',
          },
          {
            role: 'Coach Entrenamiento ATP Energy',
            name: 'CFYD. Guissepe Alejandro Escamilla Marín',
          },
        ]"
        :subSections="[
          {
            title: 'Incluye',
            items: ['Plan mensual ActiVida', 'Plan mensual ATP Energy'],
          },

          {
            title: 'Mensualidades según sucursal',
            items: [
              'The Kingdom (Centro): $800',
              'The Jungle (Norte): $900',
              'Savanna (Blvd. Guadalupano): $900',
              'The Fortress (Sur): $1,030',
            ],
          },
        ]"
        plan-name="Plan Run Energy"
        button-label="Seleccionar Plan"
        button-severity="secondary"
        @select-plan="selectPlan('Plan Run Energy - consultar sucursal')"
      />
      <PlanCard
        title="Plan ActiVida"
        subtitle="Plan semanal mensual"
        :price="450"
        period="mes"
        :coach="[
          {
            role: 'Coach Entrenamiento',
            name: 'MCAF. Cynthia Verónica Torres Velázquez',
          },
        ]"
        :features="[
          'Plan semanal por medio de app',
          'Rutina de fuerza',
          '2 clases presenciales (técnica de carrera y velocidad)',
          'Plan de competencias',
          'Acceso a convenios exclusivos',
        ]"
        plan-name="Plan ActiVida"
        button-label="Seleccionar Plan"
        button-severity="secondary"
        @select-plan="selectPlan('Plan ActiVida - $450')"
      />



      <PlanCard
        title="Preparate HYROX"
        
        :price="350"
        period="mes"
        :coach="[
          {
            role: 'Coach Entrenamiento',
            name: 'MCAF. Cynthia Verónica Torres Velázquez',
          },
          {
            role: 'Coach Entrenamiento ATP Energy',
            name: 'CFYD. Guissepe Alejandro Escamilla Marín',
          },
        ]"
        :features="[
          'Plan entrenamiento HYROX (de 2 a 3 dias por semana)',
          'Entrenamientos a distancia o presenciales',
          'Seguimiento profesional 24/7',
          'Técnica de carrera personalizada',
          'Recomendaciones nutricionales',
          'Acceso a promociones y descuentos',
        ]"
      
        plan-name="Preparate HYROX"
        button-label="Seleccionar Plan"
        button-severity="warning"
        @select-plan="selectPlan('Preparate HYROX - $350')"
      />
    </section>

    <section class="additional-benefits">
      <div class="content">
        <h2>¿Por qué elegir ActiVida?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <i class="pi pi-mobile"></i>
            <h3>App Personalizada</h3>
            <p>Acceso a entrenamientos adaptados a tu nivel y objetivo</p>
          </div>
          <div class="benefit-card">
            <i class="pi pi-users"></i>
            <h3>Coaching Profesional</h3>
            <p>Entrenadores certificados disponibles para asesorarte</p>
          </div>
          <div class="benefit-card">
            <i class="pi pi-map"></i>
            <h3>Clases Presenciales</h3>
            <p>Entrena en grupo con técnica de carrera profesional</p>
          </div>
          <div class="benefit-card">
            <i class="pi pi-star"></i>
            <h3>Comunidad Activa</h3>
            <p>Únete a otros corredores y comparte tu progreso</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final">
      <div class="content">
        <h2>¿Aún dudas? Habla con nuestro equipo</h2>
        <p>Consulta gratis para encontrar el plan perfecto para ti</p>
        <Button
          label="Contactar por WhatsApp"
          icon="pi pi-whatsapp"
          severity="success"
          size="large"
          @click="goToWhatsApp"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import PlanCard from "../components/plans/PlanCard.vue";

const selectPlan = (plan) => {
  const message = `Quiero contratar: ${plan}`;
  window.open(
    `https://wa.me/524491004396?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

const goToWhatsApp = () => {
  window.open("https://wa.me/524491004396", "_blank");
};
</script>

<style scoped>
.plans-page {
  background: var(--surface-ground);
  color: var(--text-color);
  padding: 3rem 1rem;
}

.plans-header {
  text-align: center;
  margin-bottom: 4rem;
}

.plans-header__content h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  margin: 0;
  margin-bottom: 0.5rem;
}

.plans-header__content p {
  font-size: 18px;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

@media (min-width: 1400px) {
  .plans-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1600px;
  }
}

.additional-benefits {
  background: var(--surface-card);
  padding: 3rem 1rem;
  margin-bottom: 3rem;
  border-radius: 12px;
}

.additional-benefits .content {
  max-width: 1200px;
  margin: 0 auto;
}

.additional-benefits h2 {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--surface-ground);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(46, 229, 111, 0.1);
}

.benefit-card i {
  font-size: 40px;
  color: #2ee56f;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
}

.benefit-card p {
  font-size: 14px;
  color: var(--text-color-secondary);
  margin: 0;
}

.cta-final {
  background: linear-gradient(135deg, #2ee56f20, transparent);
  border: 2px solid #2ee56f40;
  border-radius: 12px;
  padding: 4rem 1rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-final .content h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.cta-final .content p {
  font-size: 18px;
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .plans-page {
    padding: 2rem 1rem;
  }

  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .additional-benefits {
    padding: 2rem 1rem;
  }

  .additional-benefits h2 {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .plans-page {
    padding: 1.5rem 1rem;
  }

  .plans-header__content h1 {
    font-size: clamp(24px, 4vw, 36px);
  }

  .plans-header__content p {
    font-size: 16px;
  }

  .plans-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .additional-benefits {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .benefit-card {
    padding: 1.5rem 1rem;
  }

  .benefit-card i {
    font-size: 32px;
  }

  .additional-benefits h2 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  .cta-final {
    padding: 2.5rem 1rem;
    margin: 0 auto 2rem;
  }

  .cta-final .content h2 {
    font-size: 24px;
  }

  .cta-final .content p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .plans-page {
    padding: 1rem 0.75rem;
  }

  .plans-header {
    margin-bottom: 2rem;
  }

  .plans-header__content h1 {
    font-size: 20px;
    margin-bottom: 0.75rem;
  }

  .plans-header__content p {
    font-size: 14px;
    margin-bottom: 1rem;
  }

  .plans-grid {
    margin-bottom: 1.5rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .benefit-card {
    padding: 1.25rem 0.75rem;
  }

  .benefit-card i {
    font-size: 28px;
  }

  .benefit-card h3 {
    font-size: 16px;
  }

  .benefit-card p {
    font-size: 12px;
  }

  .additional-benefits {
    padding: 1.5rem 0.75rem;
    margin-bottom: 1.5rem;
  }

  .additional-benefits h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .cta-final {
    padding: 2rem 0.75rem;
    border-radius: 8px;
  }

  .cta-final .content h2 {
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  .cta-final .content p {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  .plans-header__content h1 {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.plans-header__content p {
  max-width: 600px;
  margin: 0 auto 2rem;
}
}
</style>
