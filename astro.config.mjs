// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [{
        find: '@',
        replacement: '/src'
      }]
    }
  },

  experimental: {
    svg: true,
  },

  adapter: vercel({
    imageService: true,
  })
});