import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/RagexAI-website/",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },

  build: {
    /* Use esbuild (built-in, fast) — no extra dependency needed */
    minify: 'esbuild',

    /* Raise the warning threshold; individual chunks will be small now */
    chunkSizeWarningLimit: 500,

    /* Inline small assets to save round-trips */
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        /*
         * Manual chunk splitting keeps each vendor isolated.
         * react + react-dom  → one chunk loaded once and cached forever
         * framer-motion      → only pages that use it pay the cost
         * react-router-dom   → shared navigation chunk
         */
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run')) {
            return 'vendor-router';
          }
        },
      },
    },
  },
});
