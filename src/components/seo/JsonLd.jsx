// Renders schema.org structured data. `<` is escaped so no string can close the script tag.
export default function JsonLd({ data }) {
  const list = (Array.isArray(data) ? data : [data]).filter(Boolean);
  return list.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ));
}
