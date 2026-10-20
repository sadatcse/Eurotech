import Image from 'next/image';
import { FaBullseye, FaEye, FaAward, FaLeaf, FaLightbulb, FaHandshake, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { ABOUT, CORE_VALUES, PROCESS, TEAM } from '@/data/company';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/site/SectionHeading';
import ClientLogos from '@/components/site/ClientLogos';
import TeamCard from '@/components/site/TeamCard';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'About Us',
  description: `Who we are — the vision, mission, core values and leadership of ${siteConfig.name}.`,
};

const VALUE_ICONS = [FaAward, FaLeaf, FaLightbulb, FaHandshake, FaShieldAlt, FaUserCog];

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      <DarkPageHeader title="About" accent={siteConfig.name} subtitle={ABOUT.intro} breadcrumbs={[{ label: 'About' }]} />

      {/* Who we are */}
      <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="Who we are" title="Engineering partner, not just a supplier" />
          {ABOUT.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 leading-relaxed text-body">{paragraph}</p>
          ))}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/plants/pollution.jpg"
            alt="Untreated industrial wastewater flowing into a river"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16 text-sm font-medium text-white">
            Untreated effluent is what we exist to stop — every plant we build returns cleaner water to the environment.
          </p>
        </div>
      </Container>

      {/* Vision & mission */}
      <section className="border-y border-line/10 bg-canvas-2">
        <Container className="grid gap-6 py-16 md:grid-cols-2 md:py-20">
          {[
            { icon: FaEye, title: 'Our Vision', text: ABOUT.vision },
            { icon: FaBullseye, title: 'Our Mission', text: ABOUT.mission },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-line/10 bg-surface p-8 md:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 text-2xl text-white">
                <Icon aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-extrabold text-ink">{title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Core values */}
      <Container className="py-16 md:py-20">
        <SectionHeading eyebrow="What guides us" title="Core Values" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map(({ title, text }, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <div key={title} className="rounded-2xl border border-line/10 bg-surface p-7 transition-colors hover:border-sky-500/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-xl text-sky-600 dark:text-sky-400">
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Our approach */}
      <section className="bg-blue-950 text-white">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Our approach</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">From survey to service</h2>
            <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-sky-400" />
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-4xl font-extrabold text-sky-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24">
      <Container className="py-16 md:py-20">
        <SectionHeading
          eyebrow="Our people"
          title="Our Dedicated Team"
          text="Engineers, project staff and support teams who design, build and look after every plant we deliver."
        />
        <div className="mt-12 space-y-14">
          {TEAM.map(({ group, members }) => (
            <section key={group}>
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-extrabold text-ink">{group}</h3>
                <span className="h-px flex-1 bg-line/10" />
              </div>
              <div className={members.length <= 2 ? 'mt-6 grid max-w-3xl grid-cols-2 gap-6' : 'mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'}>
                {members.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      </section>

      {/* Clients */}
      <section className="border-t border-line/10 bg-canvas-2">
        <Container className="py-16 md:py-20">
          <SectionHeading eyebrow="Trusted by" title="Our Valuable Clients" />
          <div className="mt-12">
            <ClientLogos />
          </div>
        </Container>
      </section>

      <CtaBanner title="Want to work with us?" />
    </div>
  );
}
