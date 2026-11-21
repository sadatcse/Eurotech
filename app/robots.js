import { siteConfig } from '@/config/site';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/dashboard', '/dashboard/', '/login', '/api/'] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
