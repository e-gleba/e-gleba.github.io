import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://e-gleba.github.io',
  // Stable Fonts API: fonts are downloaded at build time and self-hosted from
  // /_astro with content-hashed names. Removes the render-blocking Google Fonts
  // CSS + third-party connections; Astro emits size-adjusted fallbacks (no CLS).
  // Cyrillic subsets kept for the ru locale — parity with the old css2 request.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
      options: {
        experimental: {
          variableAxis: { opsz: [['14', '32']] },
        },
      },
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: ['100 800'],
      subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
      fallbacks: ['monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
