import { siteConfig } from '@/config/site';
import { mainNav, legalNav } from '@/config/navigation';
import { SOLUTIONS, PRODUCTS } from '@/data/company';

export default function sitemap() {
  const pages = [...mainNav, ...legalNav].filter((route) => !route.href.includes('#')).map((route) => route.href);
  const details = [...SOLUTIONS.map((s) => `/solutions/${s.slug}`), ...PRODUCTS.map((p) => `/products/${p.slug}`)];

  return [...pages, ...details].map((href) => ({
    url: `${siteConfig.url}${href === '/' ? '' : href}`,
    lastModified: new Date(),
    changeFrequency: href.startsWith('/legal') ? 'yearly' : 'weekly',
    priority: href === '/' ? 1 : href.startsWith('/legal') ? 0.3 : details.includes(href) ? 0.6 : 0.8,
  }));
}
