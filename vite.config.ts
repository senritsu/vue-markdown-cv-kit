import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), VueTypeImports()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'CvComponents',
      fileName: (format) => `cv-components.${format}.js`,
    },
    rollupOptions: {
      external: 'vue',
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
