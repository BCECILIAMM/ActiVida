import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import PlansPage from '../pages/PlansPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import CoachPage from '../pages/CoachPage.vue'
import TeamPage from '../pages/TeamPage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'ActiVida — Club de Corredores en Aguascalientes' } },
  { path: '/planes', component: PlansPage, meta: { title: 'Planes — ActiVida' } },
  { path: '/eventos', component: EventsPage, meta: { title: 'Eventos y Entrenamientos — ActiVida' } },
  { path: '/equipo', component: TeamPage, meta: { title: 'Equipo Multidisciplinario — ActiVida' } },
  { path: '/coach', component: CoachPage, meta: { title: 'Entrenadora — ActiVida' } },
  { path: '/contacto', component: ContactPage, meta: { title: 'Contacto — ActiVida' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'ActiVida'
})

export default router
