import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/zapan/' : '/',
  plugins: [react()],
  build: {
    manifest: true,
  },
}))
