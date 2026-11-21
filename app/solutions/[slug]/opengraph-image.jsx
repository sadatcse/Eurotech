import { siteConfig } from '@/config/site';
import { SOLUTIONS, solutionBySlug } from '@/data/company';
import { renderOgImage, ogSize, ogContentType } from '@/lib/og-image';

export const alt = `${siteConfig.name} solution`;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) return renderOgImage({ title: siteConfig.slogan, image: '/images/plants/hero.png' });
  return renderOgImage({ eyebrow: 'Our solutions', title: solution.title, text: solution.summary, image: solution.image });
}
