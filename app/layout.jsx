import '@/styles/globals.css';
import AppShell from '@/components/layout/AppShell';
import { siteConfig } from '@/config/site';
import { getCachedSetting } from '@/server/services/settings.service';
import { DEFAULT_TIME_ZONE, setTimeZone } from '@/lib/timezone';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

const defaultTitle = `${siteConfig.name} — ${siteConfig.slogan}`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  // Home page: "EuroTech Corporation — Total Solutions for Water Management"; other pages: "Page | EuroTech"
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Water & wastewater engineering',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: siteConfig.description,
  },
  verification: {
    ...(siteConfig.verification.google && { google: siteConfig.verification.google }),
    ...(siteConfig.verification.bing && { other: { 'msvalidate.01': siteConfig.verification.bing } }),
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Every page reads the site timezone per request, so a change in Settings applies immediately
export const dynamic = 'force-dynamic';

// Applies the saved theme (or the system preference) before first paint — no light/dark flash
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

async function readTimeZone() {
  try {
    return (await getCachedSetting('site')).timezone; // cached 60 s — keeps first paint fast
  } catch {
    return DEFAULT_TIME_ZONE; // database unreachable — pages still render
  }
}

export default async function RootLayout({ children }) {
  const timeZone = await readTimeZone();
  setTimeZone(timeZone);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body suppressHydrationWarning>
        <AppShell timeZone={timeZone}>{children}</AppShell>
      </body>
    </html>
  );
}
