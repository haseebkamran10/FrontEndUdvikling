import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,  // Ensures source maps are generated
  },
  plugins: [react()]  // Correctly added comma before starting plugins array
});
