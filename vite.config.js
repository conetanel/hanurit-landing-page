import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
server: { host: true }
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/hanurit-landing-page/',
})
