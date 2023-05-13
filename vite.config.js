import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'public')
const outDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir: false,
    rollupOptions:{
      input:{
        main: resolve(root,'index.html')
      }
    }
  },
})