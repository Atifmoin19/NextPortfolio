import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/NextPortfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
})
