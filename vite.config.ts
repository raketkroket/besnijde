import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components/home': fileURLToPath(new URL('./', import.meta.url)),
      '@/components': fileURLToPath(new URL('./', import.meta.url)),
      '@/pages': fileURLToPath(new URL('./', import.meta.url)),
      '@/data': fileURLToPath(new URL('./', import.meta.url)),
      '@/hooks': fileURLToPath(new URL('./', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
