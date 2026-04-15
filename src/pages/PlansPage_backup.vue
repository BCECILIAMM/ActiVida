<template>
  <div class="plans-page">
    <section class="plans-header">
      <div class="plans-header__content">
        <h1>Planes que se adaptan a ti</h1>
        <p>Elige el plan perfecto para alcanzar tus objetivos de entrenamiento de resistencia.</p>
        <div class="toggle-billing">
          <span :class="{ active: !annual }">Mes a mes</span>
          <InputSwitch v-model="annual" />
          <span :class="{ active: annual }">Anual (Ahorra 20%)</span>
        </div>
      </div>
    </section>

    <section class="plans-grid">
      <div class="plan-card starter">
        <div class="plan-badge">Iniciante</div>
        <div class="plan-header">
          <h2>Starter</h2>
          <p class="plan-subtitle">Perfecto para principiantes</p>
        </div>

        <div class="plan-price">
          <span class="currency">$</span>
          <span class="amount">{{ annual ? '360' : '39' }}</span>
          <span class="period">/ {{ annual ? 'año' : 'mes' }}</span>
        </div>

        <ul class="plan-features">
          <li><i class="pi pi-check"></i> 3 entrenamientos semanales</li>
          <li><i class="pi pi-check"></i> Acceso a app móvil</li>
          <li><i class="pi pi-check"></i> Seguimiento básico</li>
          <li><i class="pi pi-times"></i> Coaching personalizado</li>
          <li><i class="pi pi-times"></i> Eventos exclusivos</li>
        </ul>

        <Button 
          label="Comenzar" 
          severity="secondary"
          @click="selectPlan('starter')"
          class="plan-cta"
        />
      </div>

      <div class="plan-card professional featured">
        <div class="plan-badge featured-badge">Más Popular</div>
        <div class="plan-header">
          <h2>Professional</h2>
          <p class="plan-subtitle">Para corredores serios</p>
        </div>

        <div class="plan-price">
          <span class="currency">$</span>
          <span class="amount">{{ annual ? '840' : '99' }}</span>
          <span class="period">/ {{ annual ? 'año' : 'mes' }}</span>
        </div>

        <ul class="plan-features">
          <li><i class="pi pi-check"></i> Entrenamientos ilimitados</li>
          <li><i class="pi pi-check"></i> Coaching 1:1 mensual</li>
          <li><i class="pi pi-check"></i> Análisis de rendimiento</li>
          <li><i class="pi pi-check"></i> Acceso a eventos</li>
          <li><i class="pi pi-times"></i> Nutrición personalizada</li>
        </ul>

        <Button 
          label="Seleccionar Plan" 
          @click="selectPlan('professional')"
          class="plan-cta-primary"
        />
        <p class="plan-savings" v-if="annual">Ahorra $198 vs mes a mes</p>
      </div>

      <div class="plan-card elite">
        <div class="plan-badge">Premium</div>
        <div class="plan-header">
          <h2>Elite</h2>
          <p class="plan-subtitle">Máximo rendimiento</p>
        </div>

        <div class="plan-price">
          <span class="currency">$</span>
          <span class="amount">{{ annual ? '1440' : '169' }}</span>
          <span class="period">/ {{ annual ? 'año' : 'mes' }}</span>
        </div>

        <ul class="plan-features">
          <li><i class="pi pi-check"></i> Todo lo de Professional</li>
          <li><i class="pi pi-check"></i> Coaching semanal</li>
          <li><i class="pi pi-check"></i> Plan nutricional personalizado</li>
          <li><i class="pi pi-check"></i> Acceso prioritario a eventos</li>
          <li><i class="pi pi-check"></i> Apoyo VIP 24/7</li>
        </ul>

        <Button 
          label="Comenzar Trial" 
          severity="warning"
          @click="selectPlan('elite')"
          class="plan-cta"
        />
      </div>
    </section>

    <!-- Sección de comparación -->
    <section class="comparison-section">
      <div class="content">
        <h2>Comparar todos los planes</h2>
        <DataTable :value="comparisonData" class="comparison-table">
          <Column field="feature" header="Características"></Column>
          <Column field="starter" header="Starter"></Column>
          <Column field="professional" header="Professional"></Column>
          <Column field="elite" header="Elite"></Column>
        </DataTable>
      </div>
    </section>

    <!-- CTA Final -->
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
import { ref } from 'vue';
import Button from 'primevue/button';
import InputSwitch from 'primevue/inputswitch';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useRouter } from 'vue-router';

const router = useRouter();
const annual = ref(false);

const comparisonData = ref([
  { feature: 'Entrenamientos', starter: '3/semana', professional: 'Ilimitados', elite: 'Ilimitados' },
  { feature: 'Coaching 1:1', starter: 'No', professional: 'Mensual', elite: 'Semanal' },
  { feature: 'Análisis de rendimiento', starter: 'Básico', professional: 'Completo', elite: 'Avanzado' },
  { feature: 'Eventos', starter: 'No', professional: 'Sí', elite: 'Prioritario' },
  { feature: 'Nutrición', starter: 'No', professional: 'No', elite: 'Personalizado' },
  { feature: 'Soporte', starter: 'Email', professional: 'Chat', elite: '24/7 VIP' },
]);

const selectPlan = (plan) => {
  const message = `Quiero contratar el plan ${plan}`;
  window.open(`https://wa.me/524491004396?text=${encodeURIComponent(message)}`, '_blank');
};

const goToWhatsApp = () => {
  window.open('https://wa.me/524491004396', '_blank');
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

.toggle-billing {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.toggle-billing span {
  font-weight: 500;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.toggle-billing span.active {
  opacity: 1;
  color: #2ee56f;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.plan-card {
  background: var(--surface-card);
  border: 2px solid var(--surface-border);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(46, 229, 111, 0.15);
  border-color: #2ee56f;
}

.plan-card.featured {
  border-color: #2ee56f;
  box-shadow: 0 16px 40px rgba(46, 229, 111, 0.2);
  transform: scale(1.05);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-4px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--surface-ground);
  color: var(--text-color);
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid var(--surface-border);
}

.plan-badge.featured-badge {
  background: #2ee56f;
  color: #000;
  border-color: #2ee56f;
}

.plan-header {
  margin-bottom: 1.5rem;
  text-align: left;
}

.plan-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.plan-subtitle {
  margin: 0.5rem 0 0;
  color: var(--text-color-secondary);
  font-size: 14px;
}

.plan-price {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.plan-price .currency {
  font-size: 20px;
}

.plan-price .amount {
  color: #2ee56f;
}

.plan-price .period {
  font-size: 14px;
  color: var(--text-color-secondary);
  margin-left: 0.5rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
}

.plan-features li {
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--surface-border);
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features i {
  font-size: 14px;
}

.plan-features .pi-check {
  color: #2ee56f;
}

.plan-features .pi-times {
  color: var(--text-color-secondary);
  opacity: 0.5;
}

.plan-cta {
  width: 100%;
}

.plan-cta-primary {
  width: 100%;
  background: linear-gradient(135deg, #2ee56f 0%, #26c95f 100%) !important;
  border: none !important;
  color: #000 !important;
  font-weight: 600 !important;
}

.plan-savings {
  text-align: center;
  color: #2ee56f;
  font-size: 12px;
  margin-top: 0.5rem;
}

/* Sección de comparación */
.comparison-section {
  background: var(--surface-card);
  padding: 3rem 1rem;
  margin-bottom: 3rem;
  border-radius: 12px;
}

.comparison-section .content {
  max-width: 1200px;
  margin: 0 auto;
}

.comparison-section h2 {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.comparison-table {
  width: 100%;
}

/* CTA Final */
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
    gap: 1.5rem;
  }

  .plan-card {
    padding: 1.5rem;
  }

  .plan-card.featured {
    transform: scale(1.02);
  }

  .plan-card.featured:hover {
    transform: scale(1.02) translateY(-4px);
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

  .toggle-billing {
    flex-direction: column;
    gap: 0.75rem;
  }

  .plans-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .plan-card {
    padding: 1.5rem 1rem;
  }

  .plan-card.featured {
    transform: scale(1);
  }

  .plan-card.featured:hover {
    transform: translateY(-4px);
  }

  .plan-header h2 {
    font-size: 20px;
  }

  .plan-price {
    font-size: 28px;
  }

  .plan-features li {
    padding: 0.5rem 0;
    font-size: 14px;
  }

  .plan-features i {
    font-size: 12px;
  }

  .comparison-section {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }

  .comparison-section h2 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  :deep(.p-datatable) {
    font-size: 13px;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th) {
    padding: 0.75rem 0.5rem;
  }

  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 0.75rem 0.5rem;
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

  .toggle-billing {
    font-size: 13px;
    gap: 0.5rem;
  }

  .plans-grid {
    margin-bottom: 1.5rem;
  }

  .plan-card {
    padding: 1.25rem 0.75rem;
  }

  .plan-badge {
    font-size: 11px;
    padding: 3px 12px;
    left: 12px;
  }

  .plan-header {
    margin-bottom: 1rem;
  }

  .plan-header h2 {
    font-size: 18px;
  }

  .plan-subtitle {
    font-size: 12px;
  }

  .plan-price {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  .plan-price .currency {
    font-size: 16px;
  }

  .plan-price .period {
    font-size: 12px;
  }

  .plan-features {
    margin: 0 0 1.5rem;
  }

  .plan-features li {
    padding: 0.5rem 0;
    font-size: 13px;
  }

  .plan-cta {
    padding: 0.75rem !important;
    font-size: 13px !important;
  }

  .plan-savings {
    font-size: 11px;
    margin-top: 0.25rem;
  }

  .comparison-section {
    padding: 1.5rem 0.75rem;
    margin-bottom: 1.5rem;
  }

  .comparison-section h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  :deep(.p-datatable) {
    font-size: 12px;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th) {
    padding: 0.5rem 0.25rem;
  }

  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 0.5rem 0.25rem;
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

  :deep(.cta-final .p-button) {
    width: 100%;
  }
}
</style>