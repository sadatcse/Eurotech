// SEO helpers — page metadata (canonical, Open Graph, Twitter) and schema.org JSON-LD builders.
// Every public page builds its metadata with `pageMetadata()` so links shared on Facebook,
// WhatsApp, LinkedIn or X always show the right title, description and preview image.
import { siteConfig } from '@/config/site';

export const absoluteUrl = (path = '/') => new URL(path, siteConfig.url).toString();

// Bangladeshi local number (01XXXXXXXXX) → international format for schema.org / tel links
export const intlPhone = (phone) => {
  const digits = String(phone).replace(/[^\d]/g, '');
  if (digits.startsWith('880')) return `+${digits}`;
  if (digits.startsWith('0')) return `+880${digits.slice(1)}`;
  return `+${digits}`;
};

/**
 * Metadata for one page.
 * @param {object} o
 * @param {string} o.title       Page title (the layout template appends "| EuroTech")
 * @param {string} o.description Meta description (trimmed to 160 chars)
 * @param {string} o.path        Route path, e.g. "/products/roots-air-blower" — becomes the canonical URL
 * @param {string|string[]} [o.images] Preview image(s); defaults to the site-wide generated image
 * @param {string} [o.type]      Open Graph type (default "website")
 * @param {string[]} [o.keywords] Extra keywords for this page
 */
export function pageMetadata({ title, description, path = '/', images, type = 'website', keywords = [] }) {
  const desc = description?.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.name} — ${siteConfig.slogan}`;
  const imageList = images ? (Array.isArray(images) ? images : [images]).map((src) => ({ url: src, alt: title || siteConfig.name })) : undefined;

  return {
    title,
    description: desc,
    keywords: keywords.length ? [...keywords, ...siteConfig.keywords] : undefined,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(imageList && { images: imageList }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      ...(imageList && { images: imageList.map((i) => i.url) }),
    },
  };
}

// ---------- JSON-LD ----------

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

export function organizationJsonLd() {
  const { contact, social } = siteConfig;
  const sameAs = Object.values(social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl('/images/logo.png'),
    image: absoluteUrl('/images/plants/hero.png'),
    email: contact.email,
    telephone: contact.phones.map(intlPhone),
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address,
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      addressCountry: 'BD',
    },
    areaServed: { '@type': 'Country', name: 'Bangladesh' },
    ...(contact.mapUrl && { hasMap: contact.mapUrl }),
    contactPoint: contact.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: intlPhone(phone),
      email: contact.email,
      contactType: 'sales',
      areaServed: 'BD',
      availableLanguage: ['English', 'Bengali'],
    })),
    ...(sameAs.length && { sameAs }),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  };
}

// crumbs: [{ label, href? }] — the last crumb is the current page (`path`)
export function breadcrumbJsonLd(crumbs, path) {
  const items = crumbs
    .map((c, i) => ({ ...c, href: i === crumbs.length - 1 ? c.href || path : c.href }))
    .filter((c) => c.href);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function productJsonLd(product, categoryTitle) {
  const summary = product.description || product.specs.map(([k, v]) => `${k}: ${v}`).join(', ');
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: summary,
    image: product.images.map((src) => absoluteUrl(src)),
    url: absoluteUrl(`/products/${product.slug}`),
    category: categoryTitle,
    brand: { '@type': 'Brand', name: siteConfig.name },
    manufacturer: { '@id': ORG_ID },
    additionalProperty: product.specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

export function serviceJsonLd(solution) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.title,
    serviceType: solution.title,
    description: [solution.summary, ...solution.description].join(' '),
    image: absoluteUrl(solution.image),
    url: absoluteUrl(`/solutions/${solution.slug}`),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Bangladesh' },
  };
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function itemListJsonLd(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.href),
    })),
  };
}
