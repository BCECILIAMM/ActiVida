<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img :src="isDark ? logoDark : logoLight" alt="ActiVida" class="footer-logo" />
        <p class="footer-tagline">
          Más que un club, somos ActiVida: una comunidad de transformación.
        </p>
        <div class="footer-social">
          <a
            href="https://www.instagram.com/acti.vida.salud?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de ActiVida"
            class="social-link"
          >
            <i class="pi pi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567800549658&sk=reels_tab&locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de ActiVida"
            class="social-link"
          >
            <i class="pi pi-facebook"></i>
          </a>
          <a
            href="https://wa.me/5214442611500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de ActiVida"
            class="social-link"
          >
            <i class="pi pi-whatsapp"></i>
          </a>
        </div>
      </div>

      <nav class="footer-links" aria-label="Navegación del sitio">
        <h4>Navegación</h4>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/planes">Planes</RouterLink>
        <RouterLink to="/eventos">Eventos</RouterLink>
        <RouterLink to="/equipo">Equipo</RouterLink>
        <RouterLink to="/coach">Entrenadora</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <div class="footer-contact">
        <h4>Contacto</h4>
        <a href="https://wa.me/5214442611500" target="_blank" rel="noopener noreferrer">
          <i class="pi pi-whatsapp"></i> +52 1 444 261 1500
        </a>
        <a href="mailto:actividaags@gmail.com">
          <i class="pi pi-envelope"></i> actividaags@gmail.com
        </a>
        <p><i class="pi pi-map-marker"></i> Aguascalientes, México</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ year }} ActiVida. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import logoDark from "../../assets/actividaBlanco.png";
import logoLight from "../../assets/Activida_color.png";

defineProps({
  isDark: { type: Boolean, default: false },
});

const year = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background: var(--surface-card);
  border-top: 1px solid var(--surface-border);
  color: var(--text-color);
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  height: 2.75rem;
  width: 2.75rem;
  object-fit: contain;
}

.footer-tagline {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2ee56f20, #26c95f20);
  color: #2ee56f;
  font-size: 18px;
  text-decoration: none;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.social-link:hover {
  background: #2ee56f;
  color: #000;
  transform: translateY(-3px);
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links h4,
.footer-contact h4 {
  margin: 0 0 0.25rem;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--text-color);
}

.footer-links a,
.footer-contact a,
.footer-contact p {
  color: var(--text-color-secondary);
  text-decoration: none;
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease, transform 0.2s ease;
  width: fit-content;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: #2ee56f;
  transform: translateX(3px);
}

.footer-contact i {
  color: #2ee56f;
}

.footer-bottom {
  border-top: 1px solid var(--surface-border);
  padding: 1.25rem 1.5rem;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  font-size: 13px;
  color: var(--text-color-secondary);
  text-transform: none;
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-tagline {
    max-width: none;
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem 1.5rem;
    gap: 2rem;
    text-align: center;
  }

  .footer-brand {
    align-items: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-links,
  .footer-contact {
    align-items: center;
  }

  .footer-links a,
  .footer-contact a,
  .footer-contact p {
    width: auto;
  }
}
</style>
