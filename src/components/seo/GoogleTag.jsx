'use client';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

// Google Tag (Google Tag Manager container). `lazyOnload` injects it only after the page has
// fully loaded and the browser is idle, so it never slows down the first paint.
// Rendered on public pages only (see AppShell) — the admin dashboard is not tracked.
export default function GoogleTag() {
  const id = siteConfig.googleTagId;
  if (!id) return null;

  return (
    <>
      <Script id="google-tag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      <Script id="google-tag" src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`} strategy="lazyOnload" />
    </>
  );
}
