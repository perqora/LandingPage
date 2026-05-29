"use client";

const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';

const pageLinks = [
  ['Services', '#services'],
  ['Kubernetes', '/kubernetes-consulting'],
  ['Terraform', '/terraform-automation'],
  ['Cloud Cost', '/cloud-cost-optimization'],
  ['AI DevOps', '/ai-devops'],
  ['SRE', '/sre-consulting'],
  ['Migration', '/cloud-migration'],
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
  ['Contact', '#contact'],
];

const services = [
  {
    label: 'Platform Engineering',
    title: 'Developer platforms for repeatable delivery',
    description:
      'Golden paths, CI/CD standards, Terraform modules, environment automation, and Kubernetes workflows that remove recurring infrastructure friction.',
  },
  {
    label: 'Kubernetes & SRE',
    title: 'Production systems with reliability discipline',
    description:
      'Cluster architecture, rollout safety, autoscaling, ingress, observability, SLOs, runbooks, and incident-ready operations.',
  },
  {
    label: 'AI-Native DevOps',
    title: 'Automation for reviews, runbooks, and operations',
    description:
      'AI-assisted runbooks, infrastructure reviews, deployment checks, alert enrichment, incident analysis, and repeatable operations workflows.',
  },
  {
    label: 'Cloud Cost Optimization',
    title: 'FinOps backed by engineering changes',
    description:
      'Rightsizing, workload scheduling, Spot strategy, storage cleanup, commitment planning, cost dashboards, and Terraform-backed guardrails.',
  },
  {
    label: 'Cloud & Kubernetes Migration',
    title: 'Migrations planned around rollback and continuity',
    description:
      'Landing zones, workload cutovers, Kubernetes adoption, Terraform refactors, validation plans, and post-migration reliability hardening.',
  },
  {
    label: 'Security & Observability',
    title: 'Signals, controls, and operating readiness',
    description:
      'Cloud guardrails, access patterns, metrics, logs, traces, SLO dashboards, alert quality, and operational views tuned for engineering leaders.',
  },
];

const proofPoints = [
  ['Cloud Engineering', 'AWS, Azure, GCP foundations, networking, IAM, landing zones'],
  ['Delivery Systems', 'CI/CD modernization, release gates, rollback paths, golden workflows'],
  ['Operations', 'SRE, observability, runbooks, incident response, reliability reviews'],
  ['Automation', 'Terraform, Kubernetes automation, AI-native DevOps workflows'],
];

const clientSignals = [
  ['Series B SaaS', 'improved deployment reliability with CI/CD guardrails, rollback paths, and observability review'],
  ['Fintech startup', 'migrated workloads toward Kubernetes with Terraform structure and cloud governance controls'],
  ['AI product company', 'reduced cloud cost exposure through rightsizing, workload scheduling, and cost visibility'],
];

const founders = [
  {
    name: 'Rohit Sureka',
    role: 'Co-founder, Perqora',
    linkedin: 'https://www.linkedin.com/in/rohit-sureka-26095798/',
    focus: 'Cloud infrastructure, DevOps automation, platform engineering, Kubernetes, and reliability systems.',
  },
  {
    name: 'Chandan Kumar',
    role: 'Co-founder, Perqora',
    linkedin: 'https://www.linkedin.com/in/chandan-kumar-ba665620/',
    focus: 'AI-native infrastructure, cloud engineering, automation, delivery systems, and operational execution.',
  },
];

const engagementModels = [
  {
    title: 'Infrastructure Audit',
    duration: '1-2 weeks',
    description:
      'A focused review of cloud spend, Kubernetes reliability, Terraform structure, CI/CD safety, observability, security posture, and migration risk.',
  },
  {
    title: 'Architecture Review',
    duration: 'single working session',
    description:
      'A senior review for teams deciding how to scale, migrate, modernize DevOps, adopt AI workflows, or reduce production risk.',
  },
  {
    title: 'Platform Sprint',
    duration: '2-4 weeks',
    description:
      'Hands-on delivery for Terraform modules, CI/CD workflows, Kubernetes foundations, observability dashboards, cloud guardrails, or AI DevOps automation.',
  },
  {
    title: 'Infrastructure Retainer',
    duration: 'monthly',
    description:
      'Ongoing platform engineering, SRE consulting, security/FinOps improvements, cloud cost optimization, and operational support.',
  },
];

const operatingLoop = [
  ['01', 'Assess', 'cost, reliability, security, migration risk, AI readiness, automation debt'],
  ['02', 'Design', 'target architecture, platform roadmap, controls, operating model'],
  ['03', 'Automate', 'Terraform, CI/CD, Kubernetes, policy guardrails, AI-assisted workflows'],
  ['04', 'Secure & Operate', 'SLOs, observability, access patterns, runbooks, incident readiness'],
  ['05', 'Optimize', 'FinOps, scaling, release velocity, cloud engineering, team handover'],
];

const opsActivities = [
  ['Plan', 'Architecture roadmap', 'aligned'],
  ['Secure', 'Cloud guardrails', 'reviewing'],
  ['Build', 'CI/CD release gate', 'passing'],
  ['Automate', 'Terraform workflow', 'clean'],
  ['Deploy', 'Kubernetes rollout', 'progressing'],
  ['Observe', 'SLO burn-rate', 'stable'],
  ['FinOps', 'Cost anomaly scan', 'queued'],
  ['AI Ops', 'Runbook assistant', 'learning'],
];

const faqs = [
  [
    'What does Perqora do?',
    'Perqora provides AI-native infrastructure engineering across DevOps automation, Kubernetes consulting, platform engineering, cloud migration, observability, SRE, security posture, and cloud cost optimization.',
  ],
  [
    'Who is Perqora for?',
    'Perqora is built for startups and cloud-heavy engineering teams that need senior infrastructure execution without immediately building a large internal platform team.',
  ],
  [
    'Can Perqora help with Kubernetes migration?',
    'Yes. Perqora supports migration planning, landing zones, Terraform refactors, workload cutovers, rollback planning, and post-migration reliability hardening.',
  ],
  [
    'How does a project start?',
    'Most engagements begin with an infrastructure audit or architecture review, followed by a focused platform sprint or monthly infrastructure retainer.',
  ],
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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5h14.04c.82 0 1.48.66 1.48 1.48v14.04c0 .82-.66 1.48-1.48 1.48H4.98c-.82 0-1.48-.66-1.48-1.48V4.98c0-.82.66-1.48 1.48-1.48Zm2.04 6.2v7.75h2.36V9.7H7.02Zm1.18-3.42c-.76 0-1.32.53-1.32 1.22 0 .7.54 1.22 1.29 1.22h.02c.78 0 1.32-.52 1.32-1.22-.02-.69-.54-1.22-1.31-1.22Zm2.75 3.42v7.75h2.36v-4.33c0-.23.02-.46.09-.62.17-.46.58-.94 1.25-.94.88 0 1.23.67 1.23 1.65v4.24h2.36v-4.51c0-2.41-1.29-3.53-3.01-3.53-1.39 0-2.01.77-2.36 1.31V9.7h-1.92Z" />
    </svg>
  );
}

const inputClass =
  'w-full rounded-xl border border-[#d8d2c4] bg-white px-4 py-3 text-sm text-[#18201d] outline-none transition placeholder:text-[#8b948f] focus:border-[#1f7568]';

export default function PerqoraLandingPage() {
  function handleInquirySubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ['Name', formData.get('name')],
      ['Work email', formData.get('email')],
      ['Company', formData.get('company')],
      ['Service needed', formData.get('service')],
      ['Timeline', formData.get('timeline')],
      ['Cloud / stack', formData.get('stack')],
      ['Message', formData.get('message')],
    ];

    const body = fields
      .map(([label, value]) => `${label}: ${value || 'Not provided'}`)
      .join('\n');

    window.location.href = `mailto:admin@perqora.in?subject=${encodeURIComponent(
      'Perqora Website Inquiry'
    )}&body=${encodeURIComponent(body)}`;
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="sticky top-0 z-40 border-b border-[#ded7c8] bg-[#f8f5ee]/95 backdrop-blur">
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

          <nav className="hidden items-center gap-4 text-xs font-medium text-[#53605c] xl:flex">
            {pageLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#18201d]">
                {label}
              </a>
            ))}
          </nav>

          <AuditLink className="hidden sm:inline-flex">Book Audit</AuditLink>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-[#d8d2c4] bg-white px-4 py-2 text-sm font-medium text-[#53605c]">
                  Elite DevOps, AI, and infrastructure consultancy
                </p>
                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] text-[#111827] sm:text-5xl lg:text-[64px]">
                  AI-native DevOps engineering for cloud platforms, Kubernetes, and scale.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605c]">
                  Perqora designs, automates, migrates, secures, and operates serious cloud
                  infrastructure across DevOps, AI-native operations, Kubernetes, platform
                  engineering, observability, SRE, FinOps, and cloud cost optimization.
                </p>
              </div>

              <aside className="rounded-3xl border border-[#ded7c8] bg-white p-5 shadow-[0_18px_55px_rgba(20,30,35,0.08)]">
                <p className="text-xs font-semibold uppercase text-[#1f7568]">June 2026 Capacity</p>
                <p className="mt-3 text-3xl font-semibold text-[#111827]">3 slots</p>
                <p className="mt-2 text-sm leading-6 text-[#53605c]">
                  Accepting three AI-native DevOps and infrastructure engagements next month.
                </p>
                <AuditLink className="mt-5 w-full">Reserve Review</AuditLink>
              </aside>
            </div>

            <div className="mt-10 rounded-[28px] border border-[#ded7c8] bg-[#0c1621] p-3 shadow-[0_28px_80px_rgba(20,30,35,0.14)]">
              <img
                src="/brand/perqora-hero.png"
                alt="Perqora AI-native infrastructure engineering"
                className="aspect-[2.5/1] w-full rounded-[20px] object-contain"
              />
            </div>

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

        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Services</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Specialist infrastructure services for cloud teams that need production discipline.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#53605c]">
              The work is intentionally practical: fewer production surprises, cleaner automation,
              stronger security posture, safer migrations, lower cloud waste, and engineering teams
              that spend more time shipping product.
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

        <section id="operating-system" className="bg-[#111827] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#9fd6c9]">10-Second DevOps Cycle</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                One operating loop across cloud, security, FinOps, AI, and reliability.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c7d2cc]">
                The cycle visualizes how Perqora connects architecture, cloud guardrails, CI/CD,
                Terraform, Kubernetes, observability, AI workflows, and cost controls into one
                operating rhythm.
              </p>
            </div>

            <div className="cycle-scene rounded-3xl border border-white/10 bg-[#0b1118] p-4">
              <div className="cycle-board">
                <div className="cycle-center">
                  <img src="/brand/perqora-mark.png" alt="" className="h-16 w-16 rounded-xl object-cover" />
                  <span>Perqora Control Plane</span>
                </div>
                <div className="cycle-steps">
                  {opsActivities.map(([stage, activity, status], index) => (
                    <article
                      key={stage}
                      className="cycle-step"
                      style={{ '--delay': `${index * 0.7}s` }}
                    >
                      <span className="text-xs font-semibold text-[#c9b79c]">{stage}</span>
                      <strong className="mt-1 block text-sm font-semibold text-white">{activity}</strong>
                      <span className="mt-2 inline-flex rounded-full bg-[#10211d] px-2.5 py-1 text-xs text-[#9fd6c9]">
                        {status}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Trust Signals</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Built for teams where infrastructure risk is already business risk.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                Perqora can support named client proof when available. Until then, the site uses
                accurate anonymized engagement patterns instead of pretending to have public logos.
              </p>
            </div>
            <div className="grid gap-4">
              {clientSignals.map(([type, work]) => (
                <article key={type} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                  <p className="text-sm font-semibold text-[#1f7568]">{type}</p>
                  <p className="mt-2 text-base leading-7 text-[#53605c]">{work}</p>
                </article>
              ))}
              <blockquote className="rounded-2xl border border-[#c9c0af] bg-[#fffaf1] p-6 text-lg leading-8 text-[#18201d]">
                "Perqora is designed for engineering leaders who need practical infrastructure
                execution: cleaner automation, safer releases, stronger observability, tighter
                security posture, and less cloud waste."
              </blockquote>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ded7c8] bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:py-24">
            <div className="rounded-3xl bg-[#111827] p-8 text-white">
              <p className="text-sm font-semibold text-[#9fd6c9]">About Perqora</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Founder-led infrastructure engineering with senior execution from day one.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c7d2cc]">
                Perqora is led by Rohit Sureka and Chandan Kumar, bringing hands-on focus across
                Kubernetes, Terraform, SRE, CI/CD, observability, migration, security posture,
                AI-native automation, and cloud cost optimization.
              </p>
              <div className="mt-6 grid gap-4">
                {founders.map((founder) => (
                  <article key={founder.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{founder.name}</h3>
                        <p className="mt-1 text-sm text-[#9fd6c9]">{founder.role}</p>
                      </div>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#9fd6c9]"
                      >
                        <LinkedinIcon />
                      </a>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#dbe5df]">{founder.focus}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Engagement Model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Clear ways to start, from one review to ongoing platform support.
              </h2>
              <div className="mt-8 grid gap-4">
                {engagementModels.map((model) => (
                  <article key={model.title} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-[#111827]">{model.title}</h3>
                      <span className="text-sm font-semibold text-[#1f7568]">{model.duration}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#53605c]">{model.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#ded7c8] bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Operating Model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                What the operating model does for your engineering team.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                It turns scattered infrastructure work into a repeatable system: what to assess,
                what to automate, what to secure, what to observe, and what to optimize next.
              </p>
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

        <section className="border-b border-[#ded7c8] bg-[#f4f0e7]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Lower-Friction CTA</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Not ready for a call? Request an infrastructure readiness scorecard.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                A lighter first step for teams that want to understand risk before booking an
                audit. Share your stack and Perqora can respond with the right review path.
              </p>
            </div>
            <div className="rounded-3xl border border-[#ded7c8] bg-white p-6 shadow-[0_24px_70px_rgba(20,30,35,0.08)]">
              <h3 className="text-xl font-semibold text-[#111827]">Scorecard covers</h3>
              <div className="mt-5 grid gap-3">
                {[
                  'Kubernetes readiness',
                  'Terraform and IaC maturity',
                  'CI/CD release safety',
                  'Security and access posture',
                  'Observability and incident readiness',
                  'Cloud cost, FinOps, and migration risk',
                  'AI-native DevOps automation opportunities',
                ].map((item) => (
                  <p key={item} className="rounded-2xl bg-[#f8f5ee] px-4 py-3 text-sm text-[#53605c]">
                    {item}
                  </p>
                ))}
              </div>
              <a
                href="mailto:admin@perqora.in?subject=Infrastructure%20Readiness%20Scorecard"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145]"
              >
                Request Scorecard
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Answers for CTOs and engineering leaders.
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map(([question, answer]) => (
                <section key={question} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#111827]">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#53605c]">{answer}</p>
                </section>
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
              onSubmit={handleInquirySubmit}
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
