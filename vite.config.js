import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build' // Maintain CRA output directory to minimize deployment drift
  },
  server: {
    port: 3000 // Maintain CRA default port
  }
})
