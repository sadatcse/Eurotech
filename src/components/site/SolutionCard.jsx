import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function SolutionCard({ solution }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface shadow-sm transition hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-md bg-blue-700 px-2.5 py-1 text-xs font-bold text-white">{solution.short}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink">{solution.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{solution.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
          Learn more <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
