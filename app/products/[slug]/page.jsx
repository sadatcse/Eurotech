import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { PRODUCTS, PRODUCT_CATEGORIES, productBySlug } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/site/SectionHeading';
import ProductCard from '@/components/site/ProductCard';
import ShareButtons from '@/components/site/ShareButtons';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata, productJsonLd, breadcrumbJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === product.category);
  const summary = product.description || product.specs.map(([k, v]) => `${k}: ${v}`).join(', ');
  return pageMetadata({
    title: product.name,
    description: `${product.name} in Bangladesh — ${summary}`,
    path: `/products/${product.slug}`,
    keywords: [product.name, `${product.name} Bangladesh`, `${product.name} price in Bangladesh`, category?.title].filter(Boolean),
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === product.category);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const { contact } = siteConfig;
  const path = `/products/${product.slug}`;
  const breadcrumbs = [{ label: 'Products', href: '/products' }, { label: category.title, href: `/products#${category.slug}` }, { label: product.name }];

  return (
    <div className="bg-canvas">
      <JsonLd data={[productJsonLd(product, category.title), breadcrumbJsonLd([{ label: 'Home', href: '/' }, ...breadcrumbs], path)]} />
      <DarkPageHeader title={product.name} breadcrumbs={breadcrumbs} />

      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-2">
        <div className={product.images.length > 1 ? 'grid grid-cols-2 gap-4' : ''}>
          {product.images.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-3xl border border-line/10 bg-white">
              <Image
                src={src}
                alt={`${product.name}${product.images.length > 1 ? ` — view ${i + 1}` : ''}`}
                fill
                preload={i === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-8"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">{category.title}</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink">{product.name}</h2>
          {product.description && <p className="mt-4 text-lg leading-relaxed text-body">{product.description}</p>}

          {product.specs.length > 0 && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-line/10">
              <h3 className="bg-blue-800 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white">Specifications</h3>
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map(([label, value]) => (
                    <tr key={label} className="border-t border-line/10 odd:bg-surface even:bg-surface-2">
                      <th scope="row" className="w-2/5 px-5 py-3 text-left font-semibold text-ink-2">{label}</th>
                      <td className="px-5 py-3 text-body">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
            <p className="font-semibold text-ink">Need a price or a different size?</p>
            <p className="mt-1 text-sm text-muted">Send us your duty point or application and we&apos;ll recommend the right model.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact" variant="brand">Request a quote</Button>
              <a href={`tel:${contact.phones[0]}`} className="inline-flex items-center gap-2 rounded-lg border border-line/20 px-4 py-2 text-sm font-medium text-body hover:bg-line/5">
                <FaPhoneAlt aria-hidden /> {contact.phones[0]}
              </a>
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`} className="inline-flex items-center gap-2 rounded-lg border border-line/20 px-4 py-2 text-sm font-medium text-body hover:bg-line/5">
                <FaEnvelope aria-hidden /> Email us
              </a>
            </div>
          </div>

          <ShareButtons title={`${product.name} — ${siteConfig.name}`} path={path} label="Share this product" className="mt-8" />
        </div>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-line/10 bg-canvas-2">
          <Container className="py-16 md:py-20">
            <SectionHeading align="left" eyebrow={category.title} title="Related Products" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
