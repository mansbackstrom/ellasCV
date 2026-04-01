import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteEjsPlugin({
      // Här kan du lägga in data som du vill använda i din HTML
      title: "Måns Bäckström - CV",
    }),
  ],
  build: {
    outDir: 'dist',
  }
});