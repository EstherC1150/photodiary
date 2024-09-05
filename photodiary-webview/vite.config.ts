import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import mkcert from 'vite-plugin-mkcert';

// Vite 프록시 설정
export default defineConfig({
  // https용 설정
  // plugins: [react(), mkcert()],
  plugins: [react()],
  server: {
    proxy: {
      '/__/auth': {
        target: 'https://photodiary-44b18.firebaseapp.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/__\/auth/, '/__/auth'),
      }, // ProxyOptions 타입을 명시적으로 지정
    },
    port: 3000,
    host: true,
  },
});
