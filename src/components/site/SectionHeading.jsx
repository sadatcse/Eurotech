import { cn } from '@/lib/utils';

// Eyebrow + title + underline + optional intro, used at the top of every public section
export default function SectionHeading({ eyebrow, title, text, align = 'center', className }) {
  const centered = align === 'center';
  return (
    <div className={cn(centered && 'mx-auto max-w-3xl text-center', className)}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
      <span className={cn('mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 to-sky-500', centered && 'mx-auto')} />
      {text && <p className="mt-4 text-muted md:text-lg">{text}</p>}
    </div>
  );
}
