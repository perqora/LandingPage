import { siteUrl } from './seoContent';

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
          alt: 'Perqora — AI-Native Infrastructure Engineering',
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
    founder: {
      '@type': 'Person',
      name: 'Rohit Sureka',
      jobTitle: 'Founder, Platform Engineering Consultant',
    },
    description: page.description,
    areaServed: 'Global',
    serviceType: page.heading,
  };

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">Perqora</p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">{page.heading}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">{page.description}</p>
        <div className="mt-12 grid gap-6">
          {page.sections.map((section) => (
            <section key={section} className="border-t border-white/10 pt-6">
              <p className="text-lg leading-8 text-gray-200">{section}</p>
            </section>
          ))}
        </div>
        <a
          href="/contact"
          className="mt-12 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black"
        >
          Schedule Architecture Review
        </a>
      </article>
    </main>
  );
}
