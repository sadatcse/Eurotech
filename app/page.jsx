import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCheckCircle,
  FaDraftingCompass,
  FaCogs,
  FaTachometerAlt,
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { ABOUT, SOLUTIONS, OTHER_SOLUTIONS, PRODUCTS, FEATURED_PRODUCTS, PROCESS, CORE_BUSINESS, IT_SERVICES, TEAM } from '@/data/company';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/site/SectionHeading';
import SolutionCard from '@/components/site/SolutionCard';
import ProductCard from '@/components/site/ProductCard';
import ClientLogos from '@/components/site/ClientLogos';
import TeamCard from '@/components/site/TeamCard';
import Faq from '@/components/site/Faq';
import CtaBanner from '@/components/site/CtaBanner';
import ShareButtons from '@/components/site/ShareButtons';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  description: siteConfig.description,
  path: '/',
  keywords: ['water treatment company in Bangladesh', 'ETP company in Bangladesh', 'STP company in Dhaka'],
});

const HIGHLIGHTS = [
  { icon: FaDraftingCompass, title: 'Design to Commissioning', text: 'Process selection, engineering, construction and start-up.' },
  { icon: FaCogs, title: 'Complete Equipment Range', text: 'Blowers, diffusers, pumps, dosing, screens and screw presses.' },
  { icon: FaTachometerAlt, title: 'Instrumentation & Control', text: 'Flow meters, online analyzers and automation that keep plants measurable.' },
  { icon: FaTools, title: 'Operation & AMC', text: 'Spare parts, servicing and annual maintenance contracts.' },
];

const WHY_US = [
  'Solution-oriented engineering partner — not only an equipment supplier',
  'ETP, STP, WTP, RO, softener and ZLD expertise under one roof',
  'Mechanical, instrumentation and controls integrated in one package',
  'Media, chemicals and spare parts supplied after handover',
];

export default function HomePage() {
  const featured = FEATURED_PRODUCTS.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(Boolean);
  const { contact } = siteConfig;

  return (
    <div className="bg-canvas text-body">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-blue-950">
        <Image src="/images/plants/hero.png" alt="" fill preload sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/20" />
        <Container className="py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-300">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Total Solutions for <span className="text-sky-400">STP &amp; ETP</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-100">
              Design, construction and management of effluent, sewage and water treatment plants — with the blowers, pumps,
              instruments, media and chemicals that keep them running across Bangladesh.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/solutions" variant="brand" size="lg">
                Our Solutions <FaArrowRight aria-hidden />
              </Button>
              <Button href="/contact" variant="light" size="lg">Get a Free Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights, overlapping the hero */}
      <section className="relative z-10">
        <Container className="-mt-12 md:-mt-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={
                  i === 3
                    ? 'rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 p-6 text-white shadow-xl'
                    : 'rounded-2xl border border-line/10 bg-surface p-6 shadow-xl'
                }
              >
                <span className={i === 3 ? 'text-3xl text-white' : 'text-3xl text-sky-600 dark:text-sky-400'}>
                  <Icon aria-hidden />
                </span>
                <h3 className={i === 3 ? 'mt-4 text-lg text-white' : 'mt-4 text-lg'}>{title}</h3>
                <p className={i === 3 ? 'mt-1 text-sm text-blue-50' : 'mt-1 text-sm text-muted'}>{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section>
        <Container className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/plants/logistics.jpg" alt="EuroTech Corporation equipment arriving at port" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 hidden rounded-2xl bg-blue-700 px-6 py-5 text-white shadow-xl sm:block md:-right-6">
              <p className="text-3xl font-extrabold">ETP · STP · WTP</p>
              <p className="text-sm text-blue-100">Engineering, equipment &amp; service</p>
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Who we are" title="Your engineering partner for water & wastewater" />
            <p className="mt-6 leading-relaxed text-body">{ABOUT.intro}</p>
            <p className="mt-4 leading-relaxed text-muted">{ABOUT.body[2]}</p>
            <ul className="mt-6 space-y-3">
              {WHY_US.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-ink-2">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-sky-500" aria-hidden /> {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="brand" size="lg" className="mt-8">
              More about us <FaArrowRight aria-hidden />
            </Button>
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="py-20 md:py-24">
          <SectionHeading
            eyebrow="What we do"
            title="Our Water Treatment Solutions"
            text="Complete water and wastewater treatment solutions for industrial, commercial and residential requirements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {OTHER_SOLUTIONS.map((item) => (
              <span key={item} className="rounded-full border border-line/10 bg-surface px-4 py-2 text-sm font-medium text-body">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities band */}
      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <Image src="/images/plants/etp.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
        <Container className="grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Core business areas</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">One company for the whole treatment plant</h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-sky-400" />
            <p className="mt-6 leading-relaxed text-blue-100">
              We select the treatment process, specify the mechanical package and integrate the instrumentation and controls —
              then stay on to supply media, chemicals, spare parts and maintenance.
            </p>
            <Button href="/contact" variant="light" size="lg" className="mt-8">Discuss your project</Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CORE_BUSINESS.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur-sm">
                <FaCheckCircle className="shrink-0 text-sky-400" aria-hidden /> {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Products */}
      <section>
        <Container className="py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="ETP & STP machinery"
              title="Our Products"
              text="Reliable equipment and components for ETP, WTP and STP systems."
            />
            <Button href="/products" variant="secondary" size="lg" className="shrink-0">
              View all products <FaArrowRight aria-hidden />
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Working process */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="py-20 md:py-24">
          <SectionHeading eyebrow="Our approach" title="How We Work" text="From the first site visit to years of reliable operation." />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl border border-line/10 bg-surface p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-sky-500 text-lg font-extrabold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* IT infrastructure */}
      <section>
        <Container className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading align="left" eyebrow="Digital services" title="IT Infrastructure" text={IT_SERVICES.tagline} />
            <p className="mt-4 text-muted">{IT_SERVICES.intro}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {IT_SERVICES.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-ink-2">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-sky-500" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-1 aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl lg:order-2">
            <Image src={IT_SERVICES.image} alt="Water treatment plant management dashboard" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading align="left" eyebrow="Our people" title="Meet Our Leadership" text="The team behind every plant we design, build and maintain." />
            <Button href="/about#team" variant="secondary" size="lg" className="shrink-0">
              Meet the full team <FaArrowRight aria-hidden />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {TEAM[0].members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section id="clients" className="scroll-mt-24 border-b border-line/10">
        <Container className="py-20 md:py-24">
          <SectionHeading eyebrow="Trusted by" title="Our Valuable Clients" />
          <div className="mt-12">
            <ClientLogos />
          </div>
        </Container>
      </section>

      {/* FAQ + contact */}
      <section>
        <Container className="grid gap-12 py-20 md:py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Frequently Asked Questions" />
            <div className="mt-10">
              <Faq />
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-gradient-to-br from-blue-800 to-sky-600 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold text-white">Get in touch</h3>
            <p className="mt-2 text-blue-100">Planning a new plant or upgrading an old one? Talk to our engineers.</p>
            <div className="mt-8 space-y-5 text-sm">
              <a href={`tel:${contact.phones[0]}`} className="flex items-center gap-4 hover:text-sky-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15"><FaPhoneAlt aria-hidden /></span>
                <span><span className="block text-blue-200">Call us</span><span className="text-base font-bold">{contact.phones[0]}</span></span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 hover:text-sky-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15"><FaEnvelope aria-hidden /></span>
                <span className="min-w-0"><span className="block text-blue-200">Email</span><span className="block break-all font-semibold">{contact.email}</span></span>
              </a>
            </div>
            <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-800 hover:bg-blue-50">
              Send a message <FaArrowRight aria-hidden />
            </Link>
            <ShareButtons title={`${siteConfig.name} — ${siteConfig.slogan}`} path="/" label="Share our website" tone="dark" className="mt-8 border-t border-white/15 pt-6" />
          </aside>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
