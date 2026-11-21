import { siteConfig } from '@/config/site';
import { PRODUCTS, PRODUCT_CATEGORIES, productBySlug } from '@/data/company';
import { renderOgImage, ogSize, ogContentType } from '@/lib/og-image';

export const alt = `${siteConfig.name} product`;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return renderOgImage({ title: siteConfig.slogan, image: '/images/plants/hero.png' });

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === product.category);
  const summary = product.description || product.specs.slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(' · ');
  return renderOgImage({ eyebrow: category?.title, title: product.name, text: summary, image: product.images[0], contain: true });
}
