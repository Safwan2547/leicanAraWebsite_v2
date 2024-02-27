import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import compression from 'vite-plugin-compression';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      svgrPlugin(),
      compression({
        algorithm: 'gzip', // Use gzip algorithm for compression
        ext: '.gz', // File extension for compressed files
      }),
    ],
  };
});
