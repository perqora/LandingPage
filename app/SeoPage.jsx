import { siteUrl } from './seoContent';

const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';
const inputClass =
  'w-full rounded-md border border-[#2b3935] bg-[#0b1110] px-4 py-3 text-sm text-[#eef4f1] outline-none transition placeholder:text-[#677772] focus:border-[#7ab7a8]';

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
  const isContactPage = page.path === '/contact';
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
    <main className="min-h-screen bg-[#0b1110] px-5 py-16 text-[#eef4f1] sm:px-6 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold text-[#9bc9bd]">
          Perqora
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {page.heading}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#b7c6c1]">{page.description}</p>
        <div className="mt-12 grid gap-4">
          {page.sections.map((section) => (
            <section key={section} className="rounded-lg border border-[#22302c] bg-[#111917] p-5">
              <p className="text-lg leading-8 text-[#cbd6d2]">{section}</p>
            </section>
          ))}
        </div>
        {isContactPage ? (
          <form
            action="mailto:admin@perqora.in"
            method="post"
            encType="text/plain"
            className="mt-12 rounded-lg border border-[#22302c] bg-[#111917] p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">Name</span>
                <input name="name" required className={inputClass} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">Work email</span>
                <input
                  name="email"
                  required
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">Company</span>
                <input name="company" className={inputClass} placeholder="Company name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">Service needed</span>
                <select name="service" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Platform engineering</option>
                  <option>Kubernetes consulting</option>
                  <option>Cloud cost optimization</option>
                  <option>Cloud or Kubernetes migration</option>
                  <option>AI DevOps automation</option>
                  <option>Observability or SRE</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">
                Project context
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Describe your infrastructure, migration, reliability, or cloud cost challenge."
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#7ab7a8] px-4 py-2.5 text-sm font-semibold text-[#0b1110] transition hover:bg-[#8fc6ba]"
            >
              Send Inquiry
            </button>
          </form>
        ) : (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex min-h-11 items-center justify-center rounded-md bg-[#b8a27a] px-4 py-2.5 text-sm font-semibold text-[#111614] transition hover:bg-[#c6b28e]"
          >
            Schedule Architecture Review
          </a>
        )}
      </article>
    </main>
  );
}
