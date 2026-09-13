import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    // Latest Vite 8+ Rolldown specification configuration
    codeSplitting: {
      groups: [
        { name: 'vendor-react', test: /\/node_modules\/(react|react-dom)/ },
        { name: 'vendor-gsap', test: /\/node_modules\/gsap/ }
      ]
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})