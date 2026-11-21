'use client';
import { useState, useSyncExternalStore } from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaXTwitter, FaTelegram, FaEnvelope, FaLink, FaCheck, FaShareNodes } from 'react-icons/fa6';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const NETWORKS = [
  { key: 'facebook', label: 'Facebook', icon: FaFacebookF, color: 'hover:bg-[#1877F2]', href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { key: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp, color: 'hover:bg-[#25D366]', href: (u, t) => `https://wa.me/?text=${t}%20${u}` },
  { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedinIn, color: 'hover:bg-[#0A66C2]', href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { key: 'x', label: 'X (Twitter)', icon: FaXTwitter, color: 'hover:bg-black', href: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
  { key: 'telegram', label: 'Telegram', icon: FaTelegram, color: 'hover:bg-[#26A5E4]', href: (u, t) => `https://t.me/share/url?url=${u}&text=${t}` },
];

const noSubscribe = () => () => {};
const hasNativeShare = () => typeof navigator.share === 'function';

/**
 * Share a page on social networks, by email, by copying the link,
 * or through the phone's native share sheet when the browser supports it.
 * @param {string} path      Route to share, e.g. "/products/roots-air-blower" (made absolute with the site URL)
 * @param {string} [title]   Text that goes with the link
 * @param {string} [label]   Heading shown before the buttons
 * @param {'light'|'dark'} [tone] 'dark' for use on dark backgrounds (footer)
 */
export default function ShareButtons({ path = '/', title = siteConfig.name, label = 'Share', tone = 'light', className }) {
  const url = new URL(path, siteConfig.url).toString();
  const text = title;
  // false on the server and first paint, then the real value in the browser — no hydration mismatch
  const canNativeShare = useSyncExternalStore(noSubscribe, hasNativeShare, () => false);
  const [copied, setCopied] = useState(false);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);

  async function nativeShare() {
    try {
      await navigator.share({ title: text, text, url });
    } catch {
      /* user closed the share sheet */
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const dark = tone === 'dark';
  const btn = cn(
    'flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500',
    dark ? 'border-white/15 text-white' : 'border-line/15 bg-surface text-body'
  );

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {label && <span className={cn('text-sm font-semibold', dark ? 'text-white' : 'text-ink')}>{label}</span>}
      <ul className="flex flex-wrap gap-2" aria-label="Share this page">
        {canNativeShare && (
          <li>
            <button type="button" onClick={nativeShare} aria-label="Share via…" title="Share via…" className={cn(btn, 'hover:bg-sky-600')}>
              <FaShareNodes aria-hidden />
            </button>
          </li>
        )}
        {NETWORKS.map(({ key, label: name, icon: Icon, color, href }) => (
          <li key={key}>
            <a
              href={href(u, t)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${name}`}
              title={`Share on ${name}`}
              className={cn(btn, color)}
            >
              <Icon aria-hidden />
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:?subject=${t}&body=${t}%0A${u}`} aria-label="Share by email" title="Share by email" className={cn(btn, 'hover:bg-blue-700')}>
            <FaEnvelope aria-hidden />
          </a>
        </li>
        <li>
          <button
            type="button"
            onClick={copyLink}
            aria-label={copied ? 'Link copied' : 'Copy link'}
            title={copied ? 'Link copied' : 'Copy link'}
            className={cn(btn, copied ? 'border-transparent bg-green-600 text-white' : 'hover:bg-slate-700')}
          >
            {copied ? <FaCheck aria-hidden /> : <FaLink aria-hidden />}
          </button>
        </li>
      </ul>
      <span className="sr-only" aria-live="polite">{copied ? 'Link copied to clipboard' : ''}</span>
    </div>
  );
}
