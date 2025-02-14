import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Dynamic2/',
  build: {
    outDir: 'dist', // Specify the output directory
  },
});
