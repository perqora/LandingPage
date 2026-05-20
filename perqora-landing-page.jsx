const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';

const navItems = [
  ['Services', '#services'],
  ['Platform', '#platform'],
  ['Audit', '#audit'],
  ['Contact', '#contact'],
];

const services = [
  {
    label: 'Platform Engineering',
    title: 'Build an internal platform your engineers can actually use',
    description:
      'Golden paths, CI/CD standards, environment automation, Kubernetes workflows, and Terraform modules for repeatable product delivery.',
  },
  {
    label: 'Kubernetes Consulting',
    title: 'Stabilize and scale production Kubernetes',
    description:
      'Cluster architecture, workload reliability, autoscaling, ingress, security baselines, backup strategy, and incident-ready operations.',
  },
  {
    label: 'Cloud Cost Optimization',
    title: 'Reduce cloud waste without slowing teams down',
    description:
      'AWS and GCP cost audits, rightsizing, Spot strategy, workload scheduling, storage cleanup, commitment planning, and visibility dashboards.',
  },
  {
    label: 'Cloud & Kubernetes Migration',
    title: 'Move workloads with less risk and cleaner operations',
    description:
      'Migration planning, landing zones, workload cutovers, Terraform refactors, Kubernetes adoption, rollback plans, and post-migration reliability checks.',
  },
  {
    label: 'AI DevOps',
    title: 'Use AI-native automation where it removes real toil',
    description:
      'Terraform automation, AI-assisted runbooks, observability workflows, deployment checks, and infrastructure review systems.',
  },
];

const signals = [
  'End-to-end DevOps services',
  'AI infrastructure automation',
  'AWS, Azure, and GCP infrastructure',
  'Kubernetes platform operations',
  'Terraform and IaC automation',
  'Cloud migration',
  'Observability engineering',
  'SRE consulting',
  'CI/CD modernization',
  'Cloud cost optimization',
  'Startup infrastructure',
];

const auditItems = [
  'Cloud spend, waste, and rightsizing review',
  'Kubernetes reliability and scaling assessment',
  'Terraform structure and automation review',
  'Migration readiness and cutover risk review',
  'CI/CD flow, release safety, and rollback checks',
  'Observability gaps, alert noise, and incident readiness',
];

const outcomes = [
  ['Cost', 'identify waste, rightsizing opportunities, and avoidable managed-service spend'],
  ['Speed', 'standardize delivery with reusable Terraform, CI/CD, and platform workflows'],
  ['Reliability', 'reduce operational risk with SLOs, observability, runbooks, and safer releases'],
];

function AuditLink({ children, className = '' }) {
  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-[#b8a27a] px-4 py-2.5 text-sm font-semibold text-[#111614] transition hover:bg-[#c6b28e] ${className}`}
    >
      {children}
    </a>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#b7c6c1]">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  'w-full rounded-md border border-[#2b3935] bg-[#0b1110] px-4 py-3 text-sm text-[#eef4f1] outline-none transition placeholder:text-[#677772] focus:border-[#7ab7a8]';

export default function PerqoraLandingPage() {
  return (
    <div className="min-h-screen bg-[#0b1110] text-[#eef4f1]">
      <header className="sticky top-0 z-40 border-b border-[#22302c] bg-[#0b1110]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/brand/perqora-mark.png"
              alt="Perqora"
              className="h-10 w-10 rounded-md object-cover"
            />
            <span>
              <span className="block text-lg font-semibold leading-none">Perqora</span>
              <span className="mt-1 block text-xs text-[#879892]">
                DevOps, AI, and infrastructure services
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[#b7c6c1] md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <AuditLink className="hidden sm:inline-flex">Book Audit</AuditLink>
        </div>
      </header>

      <main>
        <section className="border-b border-[#22302c] bg-[#0d1412]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                DevOps, AI, and infrastructure services for teams that need reliable scale.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c4d0cc] sm:text-lg">
                Perqora provides end-to-end services across cloud infrastructure, DevOps
                automation, AI-native operations, platform engineering, Kubernetes, observability,
                SRE, migration, and cloud cost optimization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#7ab7a8] px-4 py-2.5 text-sm font-semibold text-[#0b1110] transition hover:bg-[#8fc6ba]"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#38504a] px-4 py-2.5 text-sm font-semibold text-[#d9e4e0] transition hover:border-[#7ab7a8]"
                >
                  Send Project Details
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {outcomes.map(([metric, label]) => (
                  <div key={metric} className="border-l border-[#35534c] pl-4">
                    <p className="text-xl font-semibold text-[#c9b79c]">{metric}</p>
                    <p className="mt-2 text-sm leading-6 text-[#9eaca7]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#22302c] bg-[#111917]">
              <img
                src="/brand/perqora-hero.png"
                alt="Perqora AI-native infrastructure engineering"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

          </div>
        </section>

        <section className="border-b border-[#22302c] bg-[#0b1110]">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-5 sm:px-6">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-md border border-[#24322e] bg-[#101815] px-3 py-2 text-sm text-[#adbcb7]"
              >
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#9bc9bd]">Services</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Practical DevOps support for infrastructure-heavy teams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#b7c6c1]">
              The work is focused on fewer production surprises, cleaner automation, safer
              migrations, lower cloud waste, and a platform your engineering team can operate.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.label}
                className="rounded-lg border border-[#22302c] bg-[#111917] p-5 transition hover:border-[#58746d]"
              >
                <p className="text-sm font-semibold text-[#c9b79c]">{service.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#aebcb7]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="platform" className="border-y border-[#22302c] bg-[#101612]">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold text-[#c9b79c]">Operating Model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                From infrastructure noise to a platform roadmap.
              </h2>
            </div>

            <div className="grid gap-3">
              {[
                ['01', 'Audit the current cloud, cluster, Terraform, CI/CD, and observability setup.'],
                ['02', 'Map migration, cost, reliability, and automation priorities by business risk.'],
                ['03', 'Automate repeatable infrastructure workflows and remove manual release steps.'],
                ['04', 'Harden reliability with SLOs, alerts, runbooks, dashboards, and recovery paths.'],
                ['05', 'Hand over clear operating practices your team can keep improving.'],
              ].map(([step, text]) => (
                <div key={step} className="grid grid-cols-[44px_1fr] gap-4 rounded-md bg-[#0b1110] p-4">
                  <span className="font-mono text-sm font-semibold text-[#7ab7a8]">{step}</span>
                  <p className="leading-7 text-[#cbd6d2]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#9bc9bd]">Infrastructure Audit</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Find the bottlenecks before they become incidents.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#b7c6c1]">
                The audit gives technical leaders a clear view of reliability risk, DevOps
                automation gaps, Kubernetes complexity, migration readiness, and cloud spend.
              </p>
            </div>

            <div className="rounded-lg border border-[#22302c] bg-[#111917] p-5">
              <h3 className="text-xl font-semibold text-white">What the review covers</h3>
              <div className="mt-5 space-y-3">
                {auditItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-[#0b1110] p-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7ab7a8]" />
                    <p className="leading-7 text-[#cbd6d2]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#22302c] bg-[#0d1412]">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold text-[#c9b79c]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Tell us what you are trying to fix or migrate.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b7c6c1]">
                Share enough context for Perqora to respond with the right next step. For a direct
                meeting, use the Book Audit button in the header.
              </p>
              <div className="mt-7 space-y-3 text-sm text-[#aebcb7]">
                <p>
                  Email:{' '}
                  <a href="mailto:admin@perqora.in" className="font-semibold text-[#dce6e2]">
                    admin@perqora.in
                  </a>
                </p>
                <p>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/company/perqora"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#dce6e2]"
                  >
                    linkedin.com/company/perqora
                  </a>
                </p>
              </div>
            </div>

            <form
              action="mailto:admin@perqora.in"
              method="post"
              encType="text/plain"
              className="rounded-lg border border-[#22302c] bg-[#111917] p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input name="name" required className={inputClass} placeholder="Your name" />
                </Field>
                <Field label="Work email">
                  <input
                    name="email"
                    required
                    type="email"
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Company">
                  <input name="company" className={inputClass} placeholder="Company name" />
                </Field>
                <Field label="Service needed">
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
                </Field>
                <Field label="Timeline">
                  <select name="timeline" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Immediately</option>
                    <option>In the next 30 days</option>
                    <option>This quarter</option>
                    <option>Planning for later</option>
                  </select>
                </Field>
                <Field label="Cloud / stack">
                  <input
                    name="stack"
                    className={inputClass}
                    placeholder="AWS, GCP, Kubernetes, Terraform"
                  />
                </Field>
              </div>

              <Field label="What should we know?">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} mt-2 resize-y`}
                  placeholder="Describe your current infrastructure, migration, reliability, or cloud cost challenge."
                />
              </Field>

              <button
                type="submit"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#7ab7a8] px-4 py-2.5 text-sm font-semibold text-[#0b1110] transition hover:bg-[#8fc6ba]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#22302c] bg-[#0b1110] px-5 py-8 text-center text-sm text-[#879892]">
        Copyright 2026 Perqora. AI-Native Infrastructure Engineering.
      </footer>
    </div>
  );
}
