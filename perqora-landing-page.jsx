const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';

const services = [
  {
    label: 'Platform Engineering',
    title: 'Developer platforms that make delivery boring again',
    description:
      'Golden paths, CI/CD standards, Terraform modules, environment automation, and Kubernetes workflows that remove recurring infrastructure friction.',
  },
  {
    label: 'Kubernetes & SRE',
    title: 'Production systems with fewer surprises',
    description:
      'Cluster architecture, rollout safety, autoscaling, ingress, observability, SLOs, runbooks, and reliability practices for teams operating at speed.',
  },
  {
    label: 'AI-Native DevOps',
    title: 'Automation where it reduces real operational load',
    description:
      'AI-assisted runbooks, infrastructure reviews, deployment checks, alert enrichment, incident analysis, and repeatable operations workflows.',
  },
  {
    label: 'Cloud Cost Optimization',
    title: 'FinOps improvements backed by engineering changes',
    description:
      'Rightsizing, workload scheduling, Spot strategy, storage cleanup, commitment planning, cost dashboards, and Terraform-backed guardrails.',
  },
  {
    label: 'Cloud & Kubernetes Migration',
    title: 'Migrations planned around risk, rollback, and continuity',
    description:
      'Landing zones, workload cutovers, Kubernetes adoption, Terraform refactors, validation plans, and post-migration reliability hardening.',
  },
  {
    label: 'Observability Engineering',
    title: 'Signals that help teams decide faster',
    description:
      'Metrics, logs, traces, SLO dashboards, alert quality, incident readiness, and operational views tuned for engineering leaders.',
  },
];

const proofPoints = [
  ['Cloud', 'AWS, Azure, GCP foundations, networking, IAM, landing zones'],
  ['Delivery', 'CI/CD modernization, release gates, rollback paths, golden workflows'],
  ['Operations', 'SRE, observability, runbooks, incident response, reliability reviews'],
  ['Automation', 'Terraform, Kubernetes automation, AI-native DevOps workflows'],
];

const operatingLoop = [
  ['01', 'Assess', 'cost, reliability, migration risk, automation debt'],
  ['02', 'Design', 'target architecture, platform roadmap, controls'],
  ['03', 'Automate', 'Terraform, CI/CD, Kubernetes, policy guardrails'],
  ['04', 'Operate', 'SLOs, observability, runbooks, incident readiness'],
  ['05', 'Optimize', 'cloud cost, scaling, release velocity, team handover'],
];

const opsActivities = [
  ['Plan', 'Terraform drift review', 'clean'],
  ['Build', 'release gate', 'passing'],
  ['Deploy', 'Kubernetes rollout', 'progressing'],
  ['Observe', 'SLO burn-rate', 'stable'],
  ['Optimize', 'cloud cost scan', 'queued'],
];

function AuditLink({ children, className = '' }) {
  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145] ${className}`}
    >
      {children}
    </a>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#53605c]">{label}</span>
      {children}
    </label>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m5 7.5 7 5.2 7-5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5.2 9.4v9.2M5.2 5.4v.1M10 18.6V9.4M10 13.5c0-2.6 1.5-4.3 3.9-4.3 2.1 0 3.6 1.5 3.6 4.1v5.3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.5 3.5h17v17h-17v-17Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const inputClass =
  'w-full rounded-xl border border-[#d8d2c4] bg-white px-4 py-3 text-sm text-[#18201d] outline-none transition placeholder:text-[#8b948f] focus:border-[#1f7568]';

export default function PerqoraLandingPage() {
  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <header className="sticky top-0 z-40 border-b border-[#ded7c8] bg-[#f8f5ee]/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/brand/perqora-mark.png"
              alt="Perqora"
              className="h-11 w-11 shrink-0 rounded-xl object-cover"
            />
            <span className="min-w-0">
              <span className="block text-lg font-semibold leading-none">Perqora</span>
              <span className="mt-1 block text-xs text-[#64716c]">
                AI-Native Infrastructure Engineering
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#53605c] md:flex">
            <a href="#services" className="transition hover:text-[#18201d]">Services</a>
            <a href="#operating-system" className="transition hover:text-[#18201d]">Operating System</a>
            <a href="#contact" className="transition hover:text-[#18201d]">Contact</a>
          </nav>

          <AuditLink className="hidden sm:inline-flex">Book Audit</AuditLink>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#d8d2c4] bg-white px-4 py-2 text-sm font-medium text-[#53605c]">
                Elite DevOps, AI, and infrastructure consultancy
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-[#111827] sm:text-5xl lg:text-6xl">
                Infrastructure that scales without becoming the company bottleneck.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#53605c]">
                Perqora designs, automates, migrates, and operates serious cloud infrastructure
                across DevOps, AI-native operations, Kubernetes, platform engineering,
                observability, SRE, and cloud cost optimization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AuditLink>Book Infrastructure Audit</AuditLink>
                <a
                  href="#services"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c9c0af] bg-transparent px-5 py-3 text-sm font-semibold text-[#18201d] transition hover:border-[#7f8f88]"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#ded7c8] bg-[#0c1621] p-3 shadow-[0_28px_80px_rgba(20,30,35,0.16)]">
              <img
                src="/brand/perqora-hero.png"
                alt="Perqora AI-native infrastructure engineering"
                className="aspect-[2.5/1] w-full rounded-[20px] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-[#ded7c8] bg-[#f4f0e7]">
          <div className="mx-auto grid max-w-7xl gap-px px-5 py-8 sm:px-6 lg:grid-cols-4">
            {proofPoints.map(([title, copy]) => (
              <section key={title} className="bg-[#fffaf1] p-5 first:rounded-l-2xl last:rounded-r-2xl">
                <p className="text-sm font-semibold text-[#1f7568]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-[#53605c]">{copy}</p>
              </section>
            ))}
          </div>
        </section>

        <section id="operating-system" className="bg-[#111827] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#9fd6c9]">Live Operating System</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                A moving view of DevOps work before it turns into noise.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c7d2cc]">
                Perqora treats infrastructure as a living operating layer: releases, clusters,
                Terraform state, reliability signals, AI workflows, and cost controls moving
                together.
              </p>
            </div>

            <div className="ops-scene rounded-3xl border border-white/10 bg-[#0b1118] p-4">
              <div className="ops-grid">
                <div className="ops-core">
                  <img src="/brand/perqora-mark.png" alt="" className="h-16 w-16 rounded-xl object-cover" />
                  <span>Perqora Control Plane</span>
                </div>

                {opsActivities.map(([stage, activity, status], index) => (
                  <div
                    key={stage}
                    className={`ops-node ops-node-${index + 1}`}
                    style={{ '--delay': `${index * 0.35}s` }}
                  >
                    <span className="text-xs font-semibold text-[#c9b79c]">{stage}</span>
                    <strong className="mt-1 block text-sm font-semibold text-white">{activity}</strong>
                    <span className="mt-2 inline-flex rounded-full bg-[#10211d] px-2.5 py-1 text-xs text-[#9fd6c9]">
                      {status}
                    </span>
                  </div>
                ))}

                <span className="ops-line ops-line-1" />
                <span className="ops-line ops-line-2" />
                <span className="ops-line ops-line-3" />
                <span className="ops-line ops-line-4" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Services</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Consultancy for the infrastructure problems that stall product teams.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#53605c]">
              The work is intentionally practical: fewer production surprises, cleaner automation,
              safer migrations, lower cloud waste, and engineering teams that spend more time
              shipping product.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.label}
                className="rounded-2xl border border-[#ded7c8] bg-[#fffaf1] p-6 transition hover:-translate-y-1 hover:border-[#9aa89f]"
              >
                <p className="text-sm font-semibold text-[#1f7568]">{service.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-[#111827]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#53605c]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#ded7c8] bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Operating Model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Senior infrastructure work, packaged into a clear engagement path.
              </h2>
            </div>
            <div className="grid gap-3">
              {operatingLoop.map(([step, title, copy]) => (
                <div key={step} className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl bg-white p-5">
                  <span className="font-mono text-sm font-semibold text-[#1f7568]">{step}</span>
                  <div>
                    <p className="font-semibold text-[#111827]">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#53605c]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Tell us what needs to get stronger.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#53605c]">
                Share your current infrastructure, migration, reliability, automation, or cost
                challenge. Perqora will respond with the right next step.
              </p>
              <div className="mt-7 flex gap-3">
                <a
                  href="mailto:admin@perqora.in"
                  aria-label="Email Perqora"
                  title="Email Perqora"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]"
                >
                  <MailIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/perqora"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Perqora on LinkedIn"
                  title="Perqora on LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            <form
              action="mailto:admin@perqora.in"
              method="post"
              encType="text/plain"
              className="rounded-3xl border border-[#ded7c8] bg-white p-6 shadow-[0_24px_70px_rgba(20,30,35,0.08)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input name="name" required className={inputClass} placeholder="Your name" />
                </Field>
                <Field label="Work email">
                  <input name="email" required type="email" className={inputClass} placeholder="you@company.com" />
                </Field>
                <Field label="Company">
                  <input name="company" className={inputClass} placeholder="Company name" />
                </Field>
                <Field label="Service needed">
                  <select name="service" className={inputClass} defaultValue="">
                    <option value="" disabled>Select one</option>
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
                    <option value="" disabled>Select one</option>
                    <option>Immediately</option>
                    <option>In the next 30 days</option>
                    <option>This quarter</option>
                    <option>Planning for later</option>
                  </select>
                </Field>
                <Field label="Cloud / stack">
                  <input name="stack" className={inputClass} placeholder="AWS, GCP, Kubernetes, Terraform" />
                </Field>
              </div>

              <Field label="What should we know?">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} mt-2 resize-y`}
                  placeholder="Describe your infrastructure, migration, reliability, or cloud cost challenge."
                />
              </Field>

              <button
                type="submit"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ded7c8] bg-[#f4f0e7] px-5 py-8 text-sm text-[#53605c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Copyright 2026 Perqora. AI-Native Infrastructure Engineering.</p>
          <div className="flex gap-3">
            <a
              href="mailto:admin@perqora.in"
              aria-label="Email Perqora"
              title="Email Perqora"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/perqora"
              target="_blank"
              rel="noreferrer"
              aria-label="Perqora on LinkedIn"
              title="Perqora on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
