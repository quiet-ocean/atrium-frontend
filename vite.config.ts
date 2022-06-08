import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    EnvironmentPlugin([
      'VITE_CONTRACT_ID',
      'VITE_GAME_API_URL',
      'VITE_PARAS_API_URL',
    ]),
  ],
  server: {
    hmr: { overlay: false },
    host: true,
    open: true,
  },
})
