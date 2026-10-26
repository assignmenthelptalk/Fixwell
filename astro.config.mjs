import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.fixwellservices.co.uk',
  // One URL form everywhere: no trailing slash. The Vercel adapter 308-redirects /page/ to /page.
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel(),
  // Lets Astro trust the real host name, otherwise Keystatic's GitHub login sends https://localhost as the redirect address.
  security: {
    allowedDomains: [{ hostname: 'www.fixwellservices.co.uk', protocol: 'https' }],
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
    react(),
    keystatic(),
  ],
});
