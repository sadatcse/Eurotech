import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import DarkPageHeader from '@/components/ui/DarkPageHeader';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${siteConfig.name}.`,
};

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line/10 bg-surface p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
        <Icon aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="mt-1 text-sm text-muted">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { contact } = siteConfig;
  return (
    <div className="bg-canvas">
      <DarkPageHeader title="Contact" accent="Us" subtitle="Request a quotation, book a site survey or ask about a product — our engineers will reply." breadcrumbs={[{ label: 'Contact' }]} />

      <Container className="grid max-w-6xl gap-8 py-12 md:py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {contact.email && (
            <InfoCard icon={FaEnvelope} title="Email">
              <a href={`mailto:${contact.email}`} className="break-all hover:text-sky-600 dark:hover:text-sky-400">{contact.email}</a>
            </InfoCard>
          )}
          {contact.phones?.length > 0 && (
            <InfoCard icon={FaPhoneAlt} title="Phone">
              <div className="flex flex-col gap-1">
                {contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-sky-600 dark:hover:text-sky-400">{phone}</a>
                ))}
              </div>
            </InfoCard>
          )}
          {contact.address && (
            <InfoCard icon={FaMapMarkerAlt} title="Address">
              {contact.mapUrl ? (
                <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">{contact.address}</a>
              ) : (
                contact.address
              )}
            </InfoCard>
          )}
          {contact.mapEmbed && (
            <div className="overflow-hidden rounded-2xl border border-line/10">
              <iframe title="Map" src={contact.mapEmbed} className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-line/10 bg-surface p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink">Request a quote</h2>
          <p className="mt-1 text-sm text-muted">We usually reply within a few working days.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
