import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Sửa lại base để hình ảnh hiển thị đúng khi chạy local
  plugins: [react()],
})
