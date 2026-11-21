import { siteConfig } from '@/config/site';
import { renderOgImage, ogSize, ogContentType } from '@/lib/og-image';

export const alt = `${siteConfig.name} — ${siteConfig.slogan}`;
export const size = ogSize;
export const contentType = ogContentType;

// Default preview image for every page that has no image of its own
export default function Image() {
  return renderOgImage({
    eyebrow: siteConfig.tagline,
    title: siteConfig.slogan,
    text: 'ETP, STP, WTP, RO & ZLD plants — machinery, instruments, media and chemicals across Bangladesh.',
    image: '/images/plants/hero.png',
  });
}
