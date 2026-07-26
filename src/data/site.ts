import { getEntry } from 'astro:content';

const entry = await getEntry('business', 'main');

if (!entry) {
  throw new Error('Missing business settings entry: src/content/business/main.json');
}

export const site = entry.data;
