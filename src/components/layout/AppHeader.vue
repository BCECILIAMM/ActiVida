<template>
  <header class="app-header" :class="{ 'dark-mode': isDark }">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-section">
        <router-link to="/" class="logo-link">
        <img 
          :src="isDark ? logoDark : logoLight"
          alt="ActiVida Logo"
          class="logo"
        />
        </router-link>
      </div>

      <!-- Desktop nav -->
      <nav class="desktop-nav">
        <RouterLink class="nav-link" to="/">Inicio</RouterLink>
        <RouterLink class="nav-link" to="/planes">Planes</RouterLink>
        <RouterLink class="nav-link" to="/eventos">Eventos</RouterLink>
        <RouterLink class="nav-link" to="/coach">Coach</RouterLink>
        <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <button
          class="theme-toggle"
          :title="isDark ? 'Modo claro' : 'Modo oscuro'"
          @click="emit('toggle-theme')"
        >
          <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </button>

        <Button
          icon="pi pi-whatsapp"
          severity="success"
          class="whatsapp-btn hidden-mobile"
          rounded
          @click="goToWhatsApp"
        />

        <button class="menu-toggle hidden-desktop" @click="visible = true">
          <i class="pi pi-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Drawer v-model:visible="visible" position="right" class="mobile-drawer">
      <div class="drawer-content">
        <RouterLink class="drawer-link" @click="close" to="/">Inicio</RouterLink>
        <RouterLink class="drawer-link" @click="close" to="/planes">Planes</RouterLink>
        <RouterLink class="drawer-link" @click="close" to="/eventos">Eventos</RouterLink>
        <RouterLink class="drawer-link" @click="close" to="/coach">Coach</RouterLink>
        <RouterLink class="drawer-link" @click="close" to="/contacto">Contacto</RouterLink>

        <Button
          label="Inscribirme"
          icon="pi pi-whatsapp"
          severity="success"
          class="drawer-btn"
          rounded
          @click="goToWhatsApp"
        />
      </div>
    </Drawer>
  </header>
</template>

<script setup>
import Badge from "primevue/badge";
import Button from "primevue/button";
import { ref } from "vue";
import logoDark from "../../assets/actividaBlanco.png";
import logoLight from "../../assets/Activida_color.png";

const props = defineProps({
  isDark: { type: Boolean, default: false },
});
const emit = defineEmits(["toggle-theme"]);

const visible = ref(false);

const close = () => (visible.value = false);

const goToWhatsApp = () => {
  window.open("https://wa.me/524491004396", "_blank");
};
</script>
<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1100;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.app-header.dark-mode {
  background: #0f172a;
  border-bottom-color: #1e293b;
}

.header-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.logo {
  height: 3.25rem;
  width: 3.25rem;
  object-fit: contain;
  flex-shrink: 0;
}


.app-header.dark-mode{
  color: #f1f5f9;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  font-weight: 500;
  color: #4b5563;
  font-size: 0.9375rem;
  transition: color 0.3s ease;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
}

.app-header.dark-mode .nav-link {
  color: #cbd5e1;
}

.nav-link:hover {
  color: #2ee56f;
  border-bottom-color: #2ee56f;
}

.nav-link.router-link-active {
  color: #2ee56f;
  border-bottom-color: #2ee56f;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.theme-toggle {
  background: transparent;
  border: none;
  color: #4b5563;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-header.dark-mode .theme-toggle {
  color: #cbd5e1;
}

.theme-toggle:hover {
  background: #f3f4f6;
}

.app-header.dark-mode .theme-toggle:hover {
  background: #1e293b;
}

.menu-toggle {
  background: transparent;
  border: none;
  color: #4b5563;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: none;
  align-items: center;
  justify-content: center;
}

.app-header.dark-mode .menu-toggle {
  color: #cbd5e1;
}

.menu-toggle:hover {
  background: #f3f4f6;
}

.app-header.dark-mode .menu-toggle:hover {
  background: #1e293b;
}

.whatsapp-btn {
  display: none;
}

/* Mobile Drawer */
.mobile-drawer :deep(.p-drawer) {
  width: 18rem !important;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.drawer-link {
  text-decoration: none;
  font-weight: 600;
  color: #4b5563;
  padding: 0.75rem 0;
  display: block;
  font-size: 0.9375rem;
  transition: color 0.3s ease;
}

.app-header.dark-mode .drawer-link {
  color: #cbd5e1;
}

.drawer-link:hover {
  color: #2ee56f;
}

.drawer-btn {
  width: 100%;
  margin-top: 1rem;
}

/* Responsive utilities */
.hidden-mobile {
  display: inline-flex !important;
}

.hidden-desktop {
  display: none;
}

/* Tablet and up (768px) */
@media (min-width: 768px) {
 

  .desktop-nav {
    display: flex;
    flex: 1;
  }

  .hidden-mobile {
    display: inline-flex !important;
  }

  .hidden-desktop {
    display: none !important;
  }

  .menu-toggle {
    display: none;
  }
}

/* Medium screens (1024px) */
@media (min-width: 1024px) {
  .header-container {
    padding: 1rem 2rem;
    gap: 3rem;
  }

  .logo {
    height: 3.5rem;
    width: 3.5rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}

/* Mobile (max-width 767px) */
@media (max-width: 767px) {
  .header-container {
    padding: 0.75rem;
    gap: 1rem;
  }

  .logo {
    height: 3rem;
    width: 3rem;
  }

  .desktop-nav {
    display: none !important;
  }

  .hidden-desktop {
    display: block;
  }

  .menu-toggle {
    display: flex;
  }

  .whatsapp-btn {
    display: none !important;
  }

  .mobile-drawer :deep(.p-drawer) {
    width: 16rem !important;
  }
}

/* Small mobile (max-width 480px) */
@media (max-width: 480px) {
  .header-container {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .logo {
    height: 2.75rem;
    width: 2.75rem;
  }


  .theme-toggle {
    padding: 0.35rem;
    font-size: 1rem;
  }

  .menu-toggle {
    padding: 0.35rem;
    font-size: 1.25rem;
  }

  .mobile-drawer :deep(.p-drawer) {
    width: 14rem !important;
  }

  .drawer-link {
    font-size: 0.8125rem;
    padding: 0.5rem 0;
  }

  .drawer-btn {
    margin-top: 0.75rem;
    font-size: 0.8125rem;
  }
}
</style>
