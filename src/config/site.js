// Central place for the site identity. Edit here — every page reads from this file.
export const siteConfig = {
  name: 'EuroTech Corporation',
  shortName: 'EuroTech',
  tagline: 'We engineer it right.',
  // Used in the browser-tab / search-result title of the home page and in link previews
  slogan: 'Total Solutions for STP & ETP',
  description:
    'Engineering and technology solutions for water and wastewater — ETP, STP, WTP, RO, softener and ZLD plants, ETP/STP machinery, instrumentation, filtration media and treatment chemicals across Bangladesh.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eurotechbd.com',
  locale: 'en_US',
  // Search keywords used site-wide (pages add their own on top)
  keywords: [
    'ETP Bangladesh',
    'STP Bangladesh',
    'effluent treatment plant',
    'sewage treatment plant',
    'water treatment plant',
    'WTP',
    'RO plant',
    'water softener plant',
    'ZLD',
    'ETP machinery',
    'STP machinery',
    'flow meter Bangladesh',
    'roots blower',
    'diffuser',
    'dosing pump',
    'water treatment chemicals',
    'wastewater treatment Dhaka',
    'EuroTech Corporation',
  ],
  // Search Console / Bing ownership codes — set these env vars after verifying the site
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
  },
  contact: {
    email: 'eurotechetc@gmail.com',
    phones: ['01910505952', '01355133075'],
    address: '205/04 West Kafrul, Begum Rokeya Sarani, Dhaka Taltala, Dhaka (Metro PR 331)',
    // Optional Google Maps link ("Open in Maps") and embed URL (map on /contact). Leave empty to hide.
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=205%2F04+West+Kafrul%2C+Begum+Rokeya+Sarani%2C+Taltala%2C+Dhaka',
    mapEmbed: 'https://maps.google.com/maps?q=West+Kafrul%2C+Begum+Rokeya+Sarani%2C+Taltala%2C+Dhaka&output=embed',
  },
  social: {
    facebook: '',
    linkedin: '',
    github: '',
    youtube: '',
  },
};
