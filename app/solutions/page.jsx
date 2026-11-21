import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { SOLUTIONS, OTHER_SOLUTIONS, IT_SERVICES } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/site/SectionHeading';
import SolutionCard from '@/components/site/SolutionCard';
import CtaBanner from '@/components/site/CtaBanner';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata, itemListJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Solutions',
  description: `Effluent (ETP), sewage (STP), RO, water softener, ZLD and swimming pool treatment plants — designed, built and maintained across Bangladesh by ${siteConfig.name}.`,
  path: '/solutions',
  keywords: ['water treatment solutions Bangladesh', 'wastewater treatment plant Bangladesh'],
});

export default function SolutionsPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={itemListJsonLd('Solutions', SOLUTIONS.map((s) => ({ name: s.title, href: `/solutions/${s.slug}` })))} />
      <DarkPageHeader
        title="Water & Wastewater"
        accent="Solutions"
        subtitle="Complete treatment plants designed, built and maintained for industrial, commercial and residential requirements."
        breadcrumbs={[{ label: 'Solutions' }]}
      />

      <Container className="py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-line/10 bg-surface p-8">
          <h2 className="text-xl font-bold text-ink">We also design and supply</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_SOLUTIONS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-body">
                <FaCheckCircle className="shrink-0 text-sky-500" aria-hidden /> {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <section id="it-infrastructure" className="scroll-mt-24 border-t border-line/10 bg-canvas-2">
        <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Digital services" title="IT Infrastructure" text={IT_SERVICES.tagline} />
            <p className="mt-4 text-muted">{IT_SERVICES.intro}</p>
            <ul className="mt-6 space-y-3">
              {IT_SERVICES.items.map((item) => (
                <li key={item} className="flex gap-3 font-medium text-ink-2">
                  <FaCheckCircle className="mt-1 shrink-0 text-sky-500" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
            <Image src={IT_SERVICES.image} alt="Water treatment plant management dashboard" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
