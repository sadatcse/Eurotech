import { HiChevronDown } from 'react-icons/hi';
import { FAQS } from '@/data/company';
import { faqJsonLd } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

// Native <details> accordion — no client JS needed. The first answer starts open.
export default function Faq() {
  return (
    <div className="space-y-3">
      <JsonLd data={faqJsonLd(FAQS)} />
      {FAQS.map((item, i) => (
        <details key={item.q} open={i === 0} className="group rounded-xl border border-line/10 bg-surface open:border-sky-500/40 open:shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <HiChevronDown className="shrink-0 text-sky-600 transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
