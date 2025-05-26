import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Proyecto-1-Calculadora/dist/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
