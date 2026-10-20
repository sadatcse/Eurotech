'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { mainNav, legalNav } from '@/config/navigation';
import { api } from '@/lib/api-client';
import Container from '@/components/ui/Container';
import Logo from './Logo';

const SOCIAL_ICONS = { facebook: FaFacebookF, linkedin: FaLinkedinIn, github: FaGithub, youtube: FaYoutube };
const linkHover = 'transition-colors hover:text-sky-300';

function FooterLinks({ title, links }) {
  return (
    <nav aria-label={title}>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{title}</h4>
      <ul className="space-y-0.5 text-sm md:space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`block py-1.5 text-blue-100/80 md:inline md:py-0 ${linkHover}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactRow({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sky-500/15 text-xs text-sky-300">
        <Icon aria-hidden />
      </span>
      <div className="min-w-0 flex-1 pt-1.5">{children}</div>
    </div>
  );
}

export default function Footer() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    api.get('/visitor/summary').then((res) => setVisitors(res.data?.stats)).catch(() => {});
  }, []);

  const { contact } = siteConfig;
  const socials = Object.entries(siteConfig.social).filter(([key, url]) => url && SOCIAL_ICONS[key]);
  const solutionLinks = mainNav.find((l) => l.href === '/solutions')?.children ?? [];
  const productLinks = mainNav.find((l) => l.href === '/products')?.children ?? [];
  const companyLinks = mainNav.filter((l) => !l.children && l.href !== '/');

  return (
    <footer className="bg-blue-950 text-blue-100/80">
      <Container className="grid gap-x-8 gap-y-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr] lg:py-16">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{siteConfig.description}</p>

          <div className="mt-6 space-y-3 text-sm">
            {contact.address && <ContactRow icon={FaMapMarkerAlt}>{contact.address}</ContactRow>}
            {contact.phones?.length > 0 && (
              <ContactRow icon={FaPhoneAlt}>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className={`whitespace-nowrap font-semibold text-white ${linkHover}`}>{phone}</a>
                  ))}
                </div>
              </ContactRow>
            )}
            {contact.email && (
              <ContactRow icon={FaEnvelope}>
                <a href={`mailto:${contact.email}`} className={`break-all ${linkHover}`}>{contact.email}</a>
              </ContactRow>
            )}
            <ContactRow icon={FaGlobe}>
              <a href={siteConfig.url} className={linkHover}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>
            </ContactRow>
          </div>

          {socials.length > 0 && (
            <div className="mt-6 flex gap-2">
              {socials.map(([key, url]) => {
                const Icon = SOCIAL_ICONS[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-sky-500 hover:bg-sky-500"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <FooterLinks title="Solutions" links={solutionLinks} />
        <FooterLinks title="Products" links={productLinks} />
        <div className="space-y-10">
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Legal" links={legalNav} />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-3 py-5 text-center text-xs text-blue-200/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. · {siteConfig.tagline}</p>
          {visitors && (
            <ul className="flex flex-wrap justify-center gap-2" aria-label="Visitors">
              {[
                ['Today', visitors.today],
                ['Total', visitors.total],
                ['Online', visitors.online],
              ].map(([label, value]) => (
                <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1">
                  {label === 'Online' && <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />}
                  {label}: <span className="font-semibold text-blue-100">{value}</span>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </div>
    </footer>
  );
}
