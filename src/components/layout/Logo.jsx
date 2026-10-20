import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

// Brand logo (public/images/logo.png). On dark backgrounds (dark mode, `onDark` in the footer)
// it sits on a white chip so the dark-blue lettering stays readable.
export default function Logo({ className = '', onDark = false }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn('inline-flex shrink-0 rounded-lg', onDark ? 'bg-white px-2 py-1' : 'dark:bg-white dark:px-1.5', className)}
    >
      <Image src="/images/logo.png" alt={siteConfig.name} width={600} height={200} className="h-12 w-auto md:h-14" preload />
    </Link>
  );
}
