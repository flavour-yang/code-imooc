import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006,
    proxy: {
      '^/api': {
        // target: 'http://dev.jiatu.info:9216/api',
        target: 'http://47.97.32.162/api',
        // target: 'http://192.168.1.46//api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()]
})
