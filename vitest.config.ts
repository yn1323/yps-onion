import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    exclude: ['node_modules', 'dist', 'e2e'],
    setupFiles: ['./src/configs/setup/vitest-setup.ts'],
  },
});
