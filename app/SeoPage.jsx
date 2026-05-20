import { siteUrl } from './seoContent';

const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';

export function buildMetadata(page) {
  return {
    title: `${page.title} | Perqora`,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${page.title} | Perqora`,
      description: page.description,
      url: `${siteUrl}${page.path}`,
      images: [
        {
          url: '/og/perqora-og.png',
          width: 1200,
          height: 630,
          alt: 'Perqora - AI-Native Infrastructure Engineering',
        },
      ],
    },
  };
}

export default function SeoPage({ page }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Perqora',
    url: `${siteUrl}${page.path}`,
    description: page.description,
    areaServed: 'Global',
    serviceType: page.heading,
  };

  return (
    <main className="min-h-screen bg-[#071014] px-5 py-16 text-[#f7faf8] sm:px-6 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8fe7de]">
          Perqora
        </p>
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {page.heading}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#b9c6c2]">{page.description}</p>
        <div className="mt-12 grid gap-4">
          {page.sections.map((section) => (
            <section key={section} className="rounded-xl border border-white/10 bg-[#0d1b20] p-5">
              <p className="text-lg leading-8 text-[#d2dcda]">{section}</p>
            </section>
          ))}
        </div>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4d35e] px-5 py-3 text-sm font-semibold text-[#071014] transition hover:bg-[#ffe477]"
        >
          Schedule Architecture Review
        </a>
      </article>
    </main>
  );
}
