import Image from 'next/image';
import Link from 'next/link';

// Product tile with photo and the first few specs
export default function ProductCard({ product, specCount = 3 }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface transition hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-xl"
    >
      {/* Product photos have white backgrounds, so the frame stays white in dark mode too */}
      <div className="relative aspect-[4/3] bg-white">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-line/10 p-5">
        <h3 className="font-bold leading-snug text-ink group-hover:text-sky-600 dark:group-hover:text-sky-400">{product.name}</h3>
        {product.specs.length > 0 ? (
          <dl className="mt-3 space-y-1 text-xs">
            {product.specs.slice(0, specCount).map(([label, value]) => (
              <div key={label} className="flex gap-1.5">
                <dt className="shrink-0 text-subtle">{label}:</dt>
                <dd className="line-clamp-1 font-medium text-body">{value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-3 line-clamp-3 text-xs text-muted">{product.description}</p>
        )}
      </div>
    </Link>
  );
}
