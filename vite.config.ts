import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts'),
        polyfills: resolve(__dirname, 'src/polyfills.ts')
      }
    }
  },
  server: {
    port: 4200
  }
});
