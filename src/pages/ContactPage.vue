<template>
  <div class="contact-page">
    <section class="contact-header">
      <div class="header-content">
        <h1>Contacto</h1>
        <p>¿Preguntas? Estamos aquí para ayudarte. Contacta con nosotros de varias formas.</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="content">
        <div class="contact-grid">
          <!-- Formulario -->
          <div class="contact-form-container">
            <h2>Envía tu mensaje</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label>Nombre</label>
                <InputText 
                  v-model="form.name"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div class="form-group">
                <label>Email</label>
                <InputText 
                  v-model="form.email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label>Teléfono</label>
                <InputText 
                  v-model="form.phone"
                  placeholder="+52 xxx xxx xxxx"
                />
              </div>

              <div class="form-group">
                <label>Asunto</label>
                <Dropdown 
                  v-model="form.subject"
                  :options="subjects"
                  placeholder="Selecciona un asunto"
                  required
                />
              </div>

              <div class="form-group">
                <label>Mensaje</label>
                <Textarea 
                  v-model="form.message"
                  placeholder="Tu mensaje aquí..."
                  :rows="5"
                  required
                />
              </div>

              <Button 
                label="Enviar Mensaje" 
                type="submit"
                class="submit-btn"
              />
            </form>
          </div>

          <!-- Info de contacto -->
          <div class="contact-info">
            <div class="info-section">
              <h3>Información de Contacto</h3>
              
              <div class="info-item">
                <div class="info-icon">
                  <i class="pi pi-whatsapp"></i>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p class="info-text">+52 449 100 4396</p>
                  <Button 
                    label="Enviar mensaje"
                    text
                    @click="goToWhatsApp"
                    class="info-link"
                  />
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p class="info-text">contacto@activida.com</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="pi pi-map-marker"></i>
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p class="info-text">Aguascalientes, México</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="pi pi-clock"></i>
                </div>
                <div>
                  <h4>Horario</h4>
                  <p class="info-text">Lun - Vie: 6:00 AM - 8:00 PM</p>
                  <p class="info-text">Sáb: 7:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Redes sociales -->
            <div class="social-section">
              <h3>Síguenos</h3>
              <div class="social-links">
                <a href="https://www.instagram.com/acti.vida.salud?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="social-link">
                  <i class="pi pi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61567800549658&sk=reels_tab&locale=es_LA" class="social-link">
                  <i class="pi pi-facebook"></i>
                </a>
                <!-- <a href="#" class="social-link">
                  <i class="pi pi-twitter"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="pi pi-youtube"></i>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const subjects = [
  'Información sobre planes',
  'Coaching personalizado',
  'Soporte técnico',
  'Eventos',
  'Otro',
];

const submitForm = () => {
  const message = `Hola, soy ${form.value.name}. ${form.value.message}`;
  window.open(`https://wa.me/524491004396?text=${encodeURIComponent(message)}`, '_blank');
  form.value = { name: '', email: '', phone: '', subject: '', message: '' };
};

const goToWhatsApp = () => {
  window.open('https://wa.me/524491004396', '_blank');
};
</script>

<style scoped>
.contact-page {
  background: var(--surface-ground);
  color: var(--text-color);
  padding-top: 0;
  min-height: calc(100vh - 80px);
}

.contact-header {
  background: linear-gradient(135deg, #2ee56f20, transparent);
  padding: 3rem 1rem;
  text-align: center;
  border-bottom: 1px solid var(--surface-border);
}

.header-content h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  margin: 0 0 0.5rem;
}

.header-content p {
  font-size: 18px;
  color: var(--text-color-secondary);
}

.contact-content {
  padding: 3rem 1rem;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
}

.contact-form-container h2,
.info-section h3,
.social-section h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 14px;
}

.form-group :deep(.p-inputtext),
.form-group :deep(.p-textarea),
.form-group :deep(.p-select),
.form-group :deep(.p-dropdown) {
  width: 100%;
  border-radius: 8px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #2ee56f, #26c95f) !important;
  border: none !important;
  color: #000 !important;
  font-weight: 600 !important;
}

.info-section {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--surface-border);
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2ee56f20, #26c95f20);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ee56f;
  font-size: 24px;
  flex-shrink: 0;
}

.info-item h4 {
  margin: 0 0 0.5rem;
  font-size: 16px;
  font-weight: 700;
}

.info-text {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 14px;
}

.info-link {
  padding: 0 !important;
  font-size: 14px !important;
  color: #2ee56f !important;
}

.social-section {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--surface-border);
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #2ee56f20, #26c95f20);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ee56f;
  font-size: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: #2ee56f;
  color: #000;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .contact-content {
    padding: 2rem 1rem;
  }

  .contact-grid {
    gap: 2rem;
  }

  .contact-form-container h2,
  .info-section h3,
  .social-section h3 {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .contact-page {
    min-height: calc(100vh - 60px);
  }

  .contact-header {
    padding: 2rem 1rem;
  }

  .header-content h1 {
    font-size: clamp(24px, 4vw, 36px);
  }

  .header-content p {
    font-size: 15px;
  }

  .contact-content {
    padding: 1.5rem 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-form-container h2,
  .info-section h3,
  .social-section h3 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 13px;
    margin-bottom: 0.4rem;
  }

  .form-group :deep(.p-inputtext),
  .form-group :deep(.p-inputtextarea),
  .form-group :deep(.p-dropdown) {
    font-size: 14px;
  }

  .info-section {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .info-icon {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }

  .info-item h4 {
    font-size: 15px;
    margin-bottom: 0.25rem;
  }

  .info-text {
    font-size: 13px;
  }

  .social-section {
    padding: 1.5rem;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .contact-page {
    min-height: calc(100vh - 50px);
  }

  .contact-header {
    padding: 1.5rem 0.75rem;
  }

  .header-content h1 {
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  .header-content p {
    font-size: 13px;
  }

  .contact-content {
    padding: 1rem 0.75rem;
  }

  .content {
    padding: 0 0.25rem;
  }

  .contact-grid {
    gap: 1rem;
  }

  .contact-form-container h2,
  .info-section h3,
  .social-section h3 {
    font-size: 16px;
    margin-bottom: 0.75rem;
  }

  .form-group {
    margin-bottom: 0.75rem;
  }

  .form-group label {
    font-size: 12px;
    margin-bottom: 0.3rem;
  }

  .form-group :deep(.p-inputtext),
  .form-group :deep(.p-inputtextarea),
  .form-group :deep(.p-dropdown) {
    font-size: 13px;
    padding: 0.5rem 0.75rem;
  }

  .form-group :deep(.p-inputtextarea) {
    resize: vertical;
    min-height: 80px;
  }

  .submit-btn :deep(.p-button) {
    padding: 0.75rem 1rem !important;
    font-size: 13px !important;
  }

  .info-section {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .info-item {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .info-item:last-child {
    margin-bottom: 0;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .info-item h4 {
    font-size: 14px;
    margin-bottom: 0.25rem;
  }

  .info-text {
    font-size: 12px;
  }

  .info-link :deep(.p-button) {
    padding: 0 !important;
    font-size: 12px !important;
  }

  .social-section {
    padding: 1rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
}
</style>