import {
  siAnthropic,
  siCloudflare,
  siGooglecloud,
  siPostgresql,
} from "simple-icons";

type Brand = {
  name: string;
  path?: string;
  mark?: string;
};

const BRANDS: Brand[] = [
  { name: "OpenAI", mark: "◎" },
  { name: "Anthropic", path: siAnthropic.path },
  { name: "Google Cloud", path: siGooglecloud.path },
  { name: "Microsoft Azure", mark: "△" },
  { name: "AWS", mark: "⌁" },
  { name: "PostgreSQL", path: siPostgresql.path },
  { name: "Cloudflare", path: siCloudflare.path },
];

function BrandMark({ brand }: { brand: Brand }) {
  if (brand.path) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 fill-current sm:h-7 sm:w-7">
        <path d={brand.path} />
      </svg>
    );
  }

  return <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center font-display text-2xl font-semibold">{brand.mark}</span>;
}

export function TechnologyRibbon() {
  const repeated = [...BRANDS, ...BRANDS];

  return (
    <section className="overflow-hidden border-b border-border bg-accent py-5" aria-label="Technology ecosystem">
      <div className="mb-4 px-6 lg:px-10">
        <span className="eyebrow">Technology ecosystem</span>
      </div>
      <div className="technology-marquee flex w-max items-center" aria-hidden="true">
        {repeated.map((brand, index) => (
          <div key={`${brand.name}-${index}`} className="flex shrink-0 items-center gap-3 px-7 text-foreground sm:px-10">
            <BrandMark brand={brand} />
            <span className="whitespace-nowrap font-display text-base font-semibold sm:text-lg">{brand.name}</span>
            <span className="ml-4 h-1.5 w-1.5 bg-foreground/35" />
          </div>
        ))}
      </div>
    </section>
  );
}