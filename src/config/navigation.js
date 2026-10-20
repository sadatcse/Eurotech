import { TbLayoutDashboard } from 'react-icons/tb';
import { FaGlobe, FaCog, FaSignInAlt, FaHistory } from 'react-icons/fa';
import { SOLUTIONS, PRODUCT_CATEGORIES } from '@/data/company';

// Public site navigation (Navbar + Footer). `children` become a dropdown in the Navbar.
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      ...SOLUTIONS.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
      { label: 'IT Infrastructure', href: '/solutions#it-infrastructure' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: PRODUCT_CATEGORIES.map((c) => ({ label: c.title, href: `/products#${c.slug}` })),
  },
  { label: 'Clients', href: '/#clients' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav = [
  { label: 'Terms of Use', href: '/legal/termsofuse' },
  { label: 'Privacy Policy', href: '/legal/appprivacypolicy' },
  { label: 'Cookie Policy', href: '/legal/cookiepolicy' },
  { label: 'Refund Policy', href: '/legal/refundpolicy' },
];

// Admin dashboard sidebar
export const dashboardNav = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: TbLayoutDashboard },
      { label: 'Traffic Analytics', href: '/dashboard/traffic', icon: FaGlobe },
    ],
  },
  {
    title: 'Security',
    items: [
      { label: 'Login History', href: '/dashboard/login-history', icon: FaSignInAlt },
      { label: 'User Activity', href: '/dashboard/activity', icon: FaHistory },
    ],
  },
  {
    title: 'System',
    items: [{ label: 'Settings', href: '/dashboard/settings', icon: FaCog }],
  },
];

// Routes where the public Navbar/Footer are hidden
export const appOnlyRoutes = ['/dashboard', '/login'];
