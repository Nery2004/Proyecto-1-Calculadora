import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Proyecto-1-Calculadora/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
