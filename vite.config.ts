import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfigExport, defineConfig } from 'vitest/config';
import { name } from './package.json';

const app = async (): Promise<UserConfigExport> => {
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

  // https://vitejs.dev/config/
  return defineConfig({
    server: {
      port: 8888,
      open: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      // copyPublicDir: false,
      lib: {
        formats: [
          'es',
          'umd',
          // 'cjs',
          // 'iife'
        ],
        entry: resolve(__dirname, 'src/index.ts'),
        name: formattedName,
        fileName: (format) => `${formattedName}.${format}.js`,
      },
      rollupOptions: {
        preserveEntrySignatures: 'strict',
        input: ['src/index.ts'],
        external: [
          'react',
          // 'react/jsx-runtime',
          'react-dom',
          'tailwindcss',
        ],
        output: {
          // assetFileNames: 'assets/[name][extname]',
          globals: {
            react: 'React',
            // 'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },
      },
      sourcemap: true,
      minify: false,
      emptyOutDir: true,
    },
    plugins: [
      tsconfigPaths(),
      react(),
      dts({
        include: ['src'],
        insertTypesEntry: true,
      }),
      svgr(),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer({ overrideBrowserslist: ['last 2 versions'] }),
        ],
      },
    },
  });
};
// https://vitejs.dev/config/
export default app;
