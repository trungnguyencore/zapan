import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const basePath = env.VITE_BASE_PATH ?? (process.env.VERCEL ? '/' : (mode === 'production' ? '/zapan/' : '/'))
  return {
    base: basePath,
    plugins: [react()],
    build: {
      manifest: true,
    },
  }
})
