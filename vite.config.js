import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Tailwind v4 requires the Vite plugin.
  // Without this, Tailwind utilities (e.g., md:flex, gap-4) will NOT work.
  plugins: [vue(), tailwindcss()],
  server: {
    host: '127.0.0.1', // fuerza IPv4 (evita ::1)
    port: 3000,        // puedes dejarlo igual…
    strictPort: true,  // opcional: si está ocupado, falla en vez de cambiar
  },
})
