import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib:{
      entry: resolve(__dirname, "./src/index.ts"),
      name: "petra-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src', 
      '@assets': '/src/assets', 
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@assets/styles/reset.scss" as *;
        @use "@assets/styles/import.scss" as *;
        `,
        api: "modern-compiler",
      }
    }
  }
})
