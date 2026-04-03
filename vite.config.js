import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to './' for GitHub Pages compatibility (relative asset paths)
export default defineConfig({
  plugins: [react()],
  base: './',
})
