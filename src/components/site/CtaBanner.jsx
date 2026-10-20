import { FaPhoneAlt } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CtaBanner({ title = 'Need an ETP, STP or WTP for your factory or building?' }) {
  const phone = siteConfig.contact.phones[0];
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
      <Container className="relative flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-2xl text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
          <p className="mt-2 text-blue-100">Tell us your requirement — our engineers will get back to you with a solution and quotation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="light" size="lg">
            Get a Free Quote
          </Button>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FaPhoneAlt aria-hidden /> {phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
