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
    title: 'Internal developer platforms that remove delivery drag',
    description:
      'Golden paths, CI/CD standards, environment automation, Kubernetes workflows, and Terraform modules built for repeatable startup delivery.',
  },
  {
    label: 'Kubernetes Consulting',
    title: 'Production Kubernetes without operational guesswork',
    description:
      'Cluster architecture, workload reliability, autoscaling, ingress, security baselines, backup strategy, and incident-ready operations.',
  },
  {
    label: 'Cloud Cost Optimization',
    title: 'FinOps engineering tied directly to infrastructure changes',
    description:
      'AWS and GCP cost audits, rightsizing, Spot strategy, workload scheduling, storage cleanup, commitment planning, and visibility dashboards.',
  },
  {
    label: 'AI DevOps',
    title: 'AI-native DevOps automation for faster engineering teams',
    description:
      'Terraform automation, AI-assisted runbooks, observability workflows, deployment checks, and infrastructure review systems.',
  },
];

const signals = [
  'AWS and GCP infrastructure',
  'Kubernetes reliability',
  'Terraform automation',
  'Observability engineering',
  'SRE consulting',
  'DevOps automation',
  'Cloud cost optimization',
  'Startup infrastructure',
];

const auditItems = [
  'Cloud spend, waste, and rightsizing review',
  'Kubernetes reliability and scaling assessment',
  'Terraform structure and automation review',
  'CI/CD flow, release safety, and rollback checks',
  'Observability gaps, alert noise, and incident readiness',
  'A practical 30/60/90 day infrastructure roadmap',
];

const outcomes = [
  ['40%', 'potential cloud cost reduction through workload tuning and FinOps controls'],
  ['10x', 'faster infrastructure delivery with reusable Terraform and platform patterns'],
  ['99.95%', 'reliability target for startup workloads that need production discipline'],
];

function CtaLink({ children, variant = 'primary', className = '' }) {
  const styles =
    variant === 'primary'
      ? 'bg-[#f4d35e] text-[#071014] hover:bg-[#ffe477] shadow-[0_18px_45px_rgba(244,211,94,0.18)]'
      : 'border border-[#64d2c8]/45 bg-[#0c2d32] text-[#dffcf7] hover:border-[#64d2c8] hover:bg-[#113d43]';

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export default function PerqoraLandingPage() {
  return (
    <div className="min-h-screen bg-[#071014] text-[#f7faf8]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071014]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#64d2c8] text-base font-black text-[#071014]">
              P
            </span>
            <span>
              <span className="block text-lg font-bold leading-none tracking-tight">Perqora</span>
              <span className="mt-1 block text-xs text-[#9fb0ac]">
                AI-native infrastructure engineering
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[#c4d0cd] md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <CtaLink className="hidden sm:inline-flex">Book Audit</CtaLink>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(100,210,200,0.16),transparent_34%),linear-gradient(315deg,rgba(244,211,94,0.12),transparent_38%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#64d2c8]/70 to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-lg border border-[#64d2c8]/35 bg-[#102328] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8fe7de]">
                DevOps, SRE, Kubernetes, Terraform
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                DevOps-centric infrastructure for startups that need to scale cleanly.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c6d1ce] sm:text-lg">
                Perqora helps teams design, automate, and operate cloud infrastructure with
                Kubernetes consulting, platform engineering, Terraform automation, SRE practices,
                observability engineering, and cloud cost optimization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink>Book Infrastructure Audit</CtaLink>
                <CtaLink variant="secondary">Schedule Architecture Review</CtaLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {outcomes.map(([metric, label]) => (
                  <div key={metric} className="border-l border-[#64d2c8]/45 pl-4">
                    <p className="text-3xl font-black text-[#f4d35e]">{metric}</p>
                    <p className="mt-2 text-sm leading-6 text-[#aab8b5]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0d1b20] p-5 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8fe7de]">
                    Runtime Console
                  </p>
                  <h2 className="mt-1 text-xl font-bold">Infrastructure audit snapshot</h2>
                </div>
                <span className="rounded-md bg-[#193f30] px-3 py-2 text-xs font-semibold text-[#b8f7c8]">
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {[
                  ['Kubernetes readiness', 'Autoscaling, ingress, resource limits, recovery plans'],
                  ['Terraform automation', 'Reusable modules, state safety, review workflow'],
                  ['Observability posture', 'Metrics, traces, SLOs, alert quality, dashboards'],
                  ['Cloud cost profile', 'Waste, commitments, storage, compute, network spend'],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-[#071014] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-[#aab8b5]">{detail}</p>
                      </div>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#64d2c8]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0a1519]">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-5 sm:px-6">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-md border border-white/10 bg-[#101f24] px-3 py-2 text-sm text-[#c8d4d1]"
              >
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8fe7de]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              A practical DevOps partner for infrastructure-heavy teams.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#b9c6c2]">
              The focus is fewer production surprises, faster releases, cleaner automation, and a
              cloud platform your engineering team can trust.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.label}
                className="rounded-xl border border-white/10 bg-[#0d1b20] p-6 transition hover:border-[#64d2c8]/50"
              >
                <p className="text-sm font-semibold text-[#f4d35e]">{service.label}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#b9c6c2]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="platform" className="border-y border-white/10 bg-[#101611]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4d35e]">
                Operating Model
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                From infrastructure noise to a reliable platform.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                ['01', 'Audit the current cloud, cluster, Terraform, CI/CD, and observability setup.'],
                ['02', 'Design a platform roadmap with the highest-risk and highest-cost items first.'],
                ['03', 'Automate repeatable infrastructure workflows and remove manual release steps.'],
                ['04', 'Harden reliability with SLOs, alerts, runbooks, dashboards, and recovery paths.'],
                ['05', 'Hand over clean operating practices your team can keep improving.'],
              ].map(([step, text]) => (
                <div key={step} className="grid grid-cols-[48px_1fr] gap-4 rounded-lg bg-[#0a1519] p-4">
                  <span className="font-mono text-sm font-bold text-[#64d2c8]">{step}</span>
                  <p className="leading-7 text-[#d2dcda]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8fe7de]">
                Infrastructure Audit
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Find the bottlenecks before they become incidents.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#b9c6c2]">
                The audit is built for technical leaders who need a clear view of
                reliability risk, DevOps automation gaps, Kubernetes complexity, and cloud spend.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink>Book Audit on Calendly</CtaLink>
                <a
                  href="mailto:admin@perqora.in?subject=Perqora%20Infrastructure%20Audit"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Email admin@perqora.in
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0d1b20] p-6">
              <h3 className="text-xl font-bold text-white">What the review covers</h3>
              <div className="mt-5 space-y-3">
                {auditItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg bg-[#071014] p-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f4d35e]" />
                    <p className="leading-7 text-[#cdd8d5]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-[#0a1519]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f4d35e]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Ready to make your infrastructure easier to operate?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b9c6c2]">
                Bring Perqora in when cloud cost, Kubernetes reliability, Terraform automation,
                SRE maturity, or DevOps velocity starts slowing the product team down.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#071014] p-6">
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm text-[#8fa19d]">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:admin@perqora.in" className="text-lg font-semibold text-white">
                      admin@perqora.in
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-[#8fa19d]">Architecture review</dt>
                  <dd className="mt-1">
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-semibold text-[#8fe7de] hover:text-white"
                    >
                      Schedule a 30-minute Calendly call
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-[#8fa19d]">LinkedIn</dt>
                  <dd className="mt-1">
                    <a
                      href="https://www.linkedin.com/company/perqora"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-semibold text-[#8fe7de] hover:text-white"
                    >
                      linkedin.com/company/perqora
                    </a>
                  </dd>
                </div>
              </dl>

              <CtaLink className="mt-7 w-full">Book Infrastructure Audit</CtaLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071014] px-5 py-8 text-center text-sm text-[#8fa19d]">
        Copyright 2026 Perqora. AI-Native Infrastructure Engineering.
      </footer>
    </div>
  );
}
