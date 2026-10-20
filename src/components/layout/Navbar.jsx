'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { mainNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

function isActive(pathname, href) {
  if (href.includes('#')) return false;
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

// Thin contact strip above the header (desktop only)
function TopBar() {
  const { contact } = siteConfig;
  return (
    <div className="hidden bg-blue-900 text-xs text-blue-100 lg:block">
      <Container className="flex h-9 items-center justify-between gap-6">
        <p className="flex items-center gap-2 truncate">
          <FaMapMarkerAlt className="shrink-0 text-sky-400" aria-hidden /> {contact.address}
        </p>
        <div className="flex shrink-0 items-center gap-5">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
            <FaEnvelope className="text-sky-400" aria-hidden /> {contact.email}
          </a>
          <a href={`tel:${contact.phones[0]}`} className="flex items-center gap-2 font-semibold hover:text-white">
            <FaPhoneAlt className="text-sky-400" aria-hidden /> {contact.phones[0]}
          </a>
        </div>
      </Container>
    </div>
  );
}

// Desktop dropdown: opens on hover and on keyboard focus
function NavDropdown({ link, active }) {
  return (
    <div className="group relative">
      <Link
        href={link.href}
        aria-current={active ? 'page' : undefined}
        className={cn(
          'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors',
          active ? 'text-sky-600 dark:text-sky-400' : 'text-ink-2 hover:text-sky-600 dark:hover:text-sky-400'
        )}
      >
        {link.label} <HiChevronDown className="transition-transform group-hover:rotate-180" aria-hidden />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="overflow-hidden rounded-xl border border-line/10 bg-surface py-2 shadow-xl">
          {link.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href} className="block px-4 py-2 text-sm text-body hover:bg-sky-500/10 hover:text-sky-700 dark:hover:text-sky-300">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Sticky site header. Desktop (lg+): inline links with dropdowns. Mobile: full-screen menu.
export default function Navbar() {
  const pathname = usePathname() || '/';
  // The menu remembers the page it was opened on, so navigating closes it
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-line/10 bg-canvas/90 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {mainNav.map((link) =>
              link.children ? (
                <NavDropdown key={link.href} link={link} active={isActive(pathname, link.href)} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                    isActive(pathname, link.href) ? 'text-sky-600 dark:text-sky-400' : 'text-ink-2 hover:text-sky-600 dark:hover:text-sky-400'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/contact"
              className="hidden rounded-lg bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:opacity-90 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-body hover:bg-line/5 lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </Container>

        {open && (
          <div id="mobile-menu" className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-canvas md:top-[72px] md:h-[calc(100dvh-72px)] lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              <nav className="flex flex-col" aria-label="Mobile">
                {mainNav.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(pathname, link.href) ? 'page' : undefined}
                      className={cn(
                        'block rounded-lg px-4 py-3.5 text-base font-semibold transition-colors',
                        isActive(pathname, link.href) ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400' : 'text-body hover:bg-line/5'
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="mb-2 ml-4 border-l border-line/10">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-muted hover:text-ink">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-lg bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-3 text-center font-semibold text-white"
              >
                Get a Quote
              </Link>
              <ThemeToggle variant="row" className="mt-3" />
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
