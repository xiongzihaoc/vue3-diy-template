import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import path, { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(),
  AutoImport({
    // resolvers: [ElementPlusResolver()],
    imports: [
      'vue',
      'vuex',
      'vue-router',
    ],
  })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    }
  },
})
