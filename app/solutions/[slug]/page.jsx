import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { SOLUTIONS, solutionBySlug } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CtaBanner from '@/components/site/CtaBanner';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) return {};
  return { title: solution.title, description: `${solution.summary} ${siteConfig.name}, Bangladesh.` };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) notFound();

  const phone = siteConfig.contact.phones[0];

  return (
    <div className="bg-canvas">
      <DarkPageHeader
        title={solution.title}
        subtitle={solution.summary}
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: solution.short }]}
      />

      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_320px]">
        <article>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl">
            <Image src={solution.image} alt={solution.title} fill preload sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
          </div>
          <div className="mt-10 space-y-4 text-lg leading-relaxed text-body">
            {solution.description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solution.lists.map((list) => (
              <div key={list.title} className="rounded-2xl border border-line/10 bg-surface p-6">
                <h2 className="text-lg font-bold text-ink">{list.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {list.items.map((item) => (
                    <li key={item} className="flex gap-3 text-body">
                      <FaCheckCircle className="mt-1 shrink-0 text-sky-500" aria-hidden /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="All solutions" className="overflow-hidden rounded-2xl border border-line/10 bg-surface">
            <h2 className="bg-blue-800 px-5 py-4 text-base font-bold text-white">All Solutions</h2>
            <ul>
              {SOLUTIONS.map((s) => (
                <li key={s.slug} className="border-t border-line/10 first:border-0">
                  <Link
                    href={`/solutions/${s.slug}`}
                    aria-current={s.slug === solution.slug ? 'page' : undefined}
                    className={
                      s.slug === solution.slug
                        ? 'flex items-center justify-between bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-700 dark:text-sky-300'
                        : 'flex items-center justify-between px-5 py-3 text-sm text-body hover:bg-line/5 hover:text-ink'
                    }
                  >
                    {s.title} <FaArrowRight className="text-xs opacity-60" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-sky-600 p-6 text-white">
            <h2 className="text-lg font-bold text-white">Need a {solution.short}?</h2>
            <p className="mt-2 text-sm text-blue-100">Share your flow and requirements — we&apos;ll propose the right process and a quotation.</p>
            <a href={`tel:${phone}`} className="mt-5 flex items-center gap-2 text-lg font-bold hover:text-sky-200">
              <FaPhoneAlt aria-hidden /> {phone}
            </a>
            <Button href="/contact" variant="light" className="mt-5 w-full">Request a quote</Button>
          </div>
        </aside>
      </Container>

      <CtaBanner />
    </div>
  );
}
