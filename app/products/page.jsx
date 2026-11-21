import { siteConfig } from '@/config/site';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/site/ProductCard';
import CtaBanner from '@/components/site/CtaBanner';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata, itemListJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Products',
  description: `ETP & STP machinery in Bangladesh — roots blowers, diffusers, flow meters, pumps, dosing systems, filtration media and treatment chemicals from ${siteConfig.name}.`,
  path: '/products',
  keywords: ['ETP machinery Bangladesh', 'water treatment equipment Bangladesh', 'water treatment chemicals Bangladesh'],
});

export default function ProductsPage() {
  const groups = PRODUCT_CATEGORIES.map((category) => ({
    ...category,
    items: PRODUCTS.filter((p) => p.category === category.slug),
  }));

  return (
    <div className="bg-canvas">
      <JsonLd data={itemListJsonLd('Products', PRODUCTS.map((p) => ({ name: p.name, href: `/products/${p.slug}` })))} />
      <DarkPageHeader
        title="Our"
        accent="Products"
        subtitle="Equipment, instrumentation, media and chemicals for ETP, STP and WTP systems."
        breadcrumbs={[{ label: 'Products' }]}
      >
        {/* Category jump links */}
        <nav aria-label="Product categories" className="mt-6 flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.slug}
              href={`#${group.slug}`}
              className="rounded-full border border-line/15 bg-surface px-4 py-2 text-sm font-medium text-body transition-colors hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
            >
              {group.title} <span className="text-subtle">({group.items.length})</span>
            </a>
          ))}
        </nav>
      </DarkPageHeader>

      <Container className="space-y-16 py-16 md:py-20">
        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className="scroll-mt-28">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-extrabold text-ink">{group.title}</h2>
              <span className="h-px flex-1 bg-line/10" />
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        ))}
      </Container>

      <CtaBanner title="Looking for a specific pump, meter or chemical?" />
    </div>
  );
}
