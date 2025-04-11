import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,         // Porta que o Vite vai usar (pode mudar se quiser)
    open: true,         // Abre o navegador automaticamente
  },
  resolve: {
    alias: {
      '@': '/src',      // Atalho para importar do src com @ (ex: import x from '@/components/X')
    },
  },
})
