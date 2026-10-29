import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' giúp app chạy được ở mọi nơi (máy mình, Firebase, hoặc đóng gói thành file ZIP)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
