import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import PlansPage from '../pages/PlansPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import CoachPage from '../pages/CoachPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/planes', component: PlansPage },
  { path: '/eventos', component: EventsPage },
  { path: '/coach', component: CoachPage },
  { path: '/contacto', component: ContactPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
