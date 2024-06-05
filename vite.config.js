import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server : {
    proxy : {
      '/api' : {
        // base URL here
        target : 'https://auth-backend-93eo.onrender.com', 
        changeOrigin : true,
        secure : false,
      }
    }
  }
})
