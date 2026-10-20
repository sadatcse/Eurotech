import Image from 'next/image';
import { CLIENTS } from '@/data/company';

export default function ClientLogos() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {CLIENTS.map((client) => (
        <li key={client.name} title={client.name} className="flex h-28 items-center justify-center rounded-2xl border border-line/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="relative h-full w-full">
            <Image src={client.logo} alt={client.name} fill sizes="(min-width: 1024px) 14vw, (min-width: 768px) 25vw, 50vw" className="object-contain" />
          </div>
        </li>
      ))}
    </ul>
  );
}
