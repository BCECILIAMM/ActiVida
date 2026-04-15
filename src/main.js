import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/main.css'

import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import AnimateOnScroll from 'primevue/animateonscroll';

import router from './router/index.js'
const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})
app.component('Button', Button)
app.component('Drawer', Drawer)
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
