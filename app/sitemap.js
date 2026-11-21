import { siteConfig } from '@/config/site';
import { mainNav, legalNav } from '@/config/navigation';
import { SOLUTIONS, PRODUCTS } from '@/data/company';

const abs = (path) => `${siteConfig.url}${path === '/' ? '' : path}`;

export default function sitemap() {
  const lastModified = new Date();
  const pages = [...mainNav, ...legalNav].filter((route) => !route.href.includes('#')).map((route) => route.href);

  const staticEntries = pages.map((href) => ({
    url: abs(href),
    lastModified,
    changeFrequency: href.startsWith('/legal') ? 'yearly' : 'weekly',
    priority: href === '/' ? 1 : href.startsWith('/legal') ? 0.3 : 0.8,
    ...(href === '/' && { images: [abs('/images/plants/hero.png')] }),
  }));

  const solutionEntries = SOLUTIONS.map((s) => ({
    url: abs(`/solutions/${s.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
    images: [abs(s.image)],
  }));

  const productEntries = PRODUCTS.map((p) => ({
    url: abs(`/products/${p.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
    images: p.images.map(abs),
  }));

  return [...staticEntries, ...solutionEntries, ...productEntries];
}
