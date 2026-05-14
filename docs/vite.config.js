import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5175,
    host: '0.0.0.0', 
    watch: {
      usePolling: true,
    },
  },
});