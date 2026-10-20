import Image from 'next/image';

export default function TeamCard({ member }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-line/10 bg-surface text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t-4 border-sky-500 px-4 py-5">
        <p className="font-bold text-ink">{member.name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">{member.position}</p>
      </div>
    </div>
  );
}
