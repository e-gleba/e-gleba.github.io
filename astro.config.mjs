import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://e-gleba.github.io',
  // Self-hosted fonts via the npm provider: files resolve from node_modules
  // (@fontsource-variable/*) at build time — no Google Fonts / CDN fetch, so
  // builds work offline and behind restrictive firewalls. remote:false turns a
  // missing package into a loud resolution error instead of a silent CDN fetch.
  // NOTE: family names are the Fontsource variable families ('Inter Variable',
  // 'JetBrains Mono Variable'); the google-only experimental opsz axis option
  // was dropped (npm provider has no variableAxis family option).
  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: 'Inter Variable',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
      options: {
        package: '@fontsource-variable/inter',
      },
    },
    {
      provider: fontProviders.npm({ remote: false }),
      name: 'JetBrains Mono Variable',
      cssVariable: '--font-jetbrains-mono',
      weights: ['100 800'],
      subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
      fallbacks: ['monospace'],
      options: {
        package: '@fontsource-variable/jetbrains-mono',
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
