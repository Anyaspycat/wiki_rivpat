import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'img_rivpat': path.resolve(__dirname, './docs_rivpat/img_rivpat'),
    },
  },
})
