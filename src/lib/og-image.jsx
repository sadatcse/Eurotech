/* eslint-disable @next/next/no-img-element -- next/og renders plain <img>, next/image is not supported there */
// Shared renderer for the 1200×630 link-preview images (Facebook, WhatsApp, LinkedIn, X, Messenger).
// Used by every app/**/opengraph-image.jsx route.
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { siteConfig } from '@/config/site';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

// Reads a file from /public as a data URI (null if it is missing)
async function publicImage(src) {
  if (!src) return null;
  try {
    const data = await readFile(join(process.cwd(), 'public', src), 'base64');
    return `data:${MIME[extname(src).toLowerCase()] || 'image/png'};base64,${data}`;
  } catch {
    return null;
  }
}

/**
 * @param {object} o
 * @param {string} o.title     Main heading
 * @param {string} [o.eyebrow] Small label above the heading (e.g. the product category)
 * @param {string} [o.text]    One-line summary
 * @param {string} [o.image]   Public image path shown on the right (product photo / plant photo)
 * @param {boolean} [o.contain] Show the image whole on a white card (product photos) instead of cropping
 */
export async function renderOgImage({ title, eyebrow, text, image, contain = false }) {
  const [logo, picture] = await Promise.all([publicImage('/images/logo.png'), publicImage(image)]);
  const phone = siteConfig.contact.phones.join('  ·  ');
  const host = siteConfig.url.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 55%, #0369a1 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '56px 60px', width: picture ? 700 : 1200 }}>
          <div style={{ display: 'flex' }}>
            {logo && (
              <div style={{ display: 'flex', background: 'white', borderRadius: 16, padding: '10px 18px' }}>
                <img src={logo} width={240} height={80} alt="" />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {eyebrow && (
              <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#38bdf8', marginBottom: 14 }}>
                {eyebrow}
              </div>
            )}
            <div style={{ display: 'flex', fontSize: title.length > 40 ? 50 : 62, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
            <div style={{ display: 'flex', width: 90, height: 6, borderRadius: 3, background: '#38bdf8', marginTop: 22 }} />
            {text && (
              <div style={{ display: 'flex', fontSize: 26, lineHeight: 1.4, color: '#dbeafe', marginTop: 22 }}>
                {text.length > 120 ? `${text.slice(0, 117)}…` : text}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', fontSize: 22, color: '#bfdbfe' }}>
            {host}  ·  {phone}
          </div>
        </div>

        {picture && (
          <div style={{ display: 'flex', width: 500, height: '100%', alignItems: 'center', justifyContent: 'center', padding: contain ? 40 : 0 }}>
            {contain ? (
              <div style={{ display: 'flex', width: 420, height: 420, background: 'white', borderRadius: 32, alignItems: 'center', justifyContent: 'center', padding: 28 }}>
                <img src={picture} width={364} height={364} style={{ objectFit: 'contain' }} alt="" />
              </div>
            ) : (
              <img src={picture} width={500} height={630} style={{ objectFit: 'cover' }} alt="" />
            )}
          </div>
        )}
      </div>
    ),
    ogSize
  );
}
