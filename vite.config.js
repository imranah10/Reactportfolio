import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // Maintain CRA output directory to minimize deployment drift
  },
  server: {
    port: 3000 // Maintain CRA default port
  }
})
