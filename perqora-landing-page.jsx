"use client";
import React from "react";

const calendlyUrl = 'https://calendly.com/admin-perqora/30-minute-meeting-clone';

const pageLinks = [
  ['Services', '#services'],
  ['How It Works', '#operating-model'],
  ['About', '#about'],
  ['FAQ', '#faq'],
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
    label: 'Cloud Compliance & Security',
    title: 'Security posture built into infrastructure, not bolted on',
    description:
      'Zero Trust architecture, IAM hardening, secrets management, network segmentation, policy-as-code, CIS benchmark remediation, audit logging, and compliance-ready controls for SOC 2, ISO 27001, and cloud-native security frameworks.',
  },
  {
    label: 'Observability & SRE',
    title: 'Signals, dashboards, and incident readiness',
    description:
      'Metrics, logs, traces, SLO dashboards, alert quality tuning, runbooks, on-call readiness, and operational views built for engineering leaders — not just on-call engineers.',
  },
];

const proofPoints = [
  ['Cloud Engineering', 'AWS, Azure, GCP foundations, networking, IAM, landing zones'],
  ['Delivery Systems', 'CI/CD modernization, release gates, rollback paths, golden workflows'],
  ['Operations', 'SRE, observability, runbooks, incident response, reliability reviews'],
  ['Automation', 'Terraform, Kubernetes automation, AI-native DevOps workflows'],
  ['Compliance & Security', 'Zero Trust, IAM hardening, SOC 2 / ISO 27001 controls, policy-as-code'],
];

const clientSignals = [
  ['Series B SaaS', 'Improved deployment reliability with CI/CD guardrails, rollback paths, and observability review'],
  ['Fintech startup', 'Migrated workloads to Kubernetes with Terraform structure and cloud governance controls'],
  ['Healthtech startup', 'Implemented SOC 2-ready infrastructure controls — IAM hardening, audit logging, secrets management, and network segmentation'],
  ['AI product company', 'Reduced cloud cost exposure through rightsizing, workload scheduling, and cost visibility'],
];

const founders = [
  {
    initials: 'RS',
    name: 'Rohit Sureka',
    role: 'Co-founder · DevOps & AI Infrastructure',
    linkedin: 'https://www.linkedin.com/in/rohit-sureka-26095798/',
    bio: 'Principal DevOps engineer specialising in MLOps, multi-cloud architecture, FinOps, and Zero Trust security. Has spent his career building and scaling infrastructure at high-growth Indian startups.',
    tags: ['Kubernetes', 'MLOps', 'Multi-Cloud', 'FinOps', 'Zero Trust'],
  },
  {
    initials: 'CK',
    name: 'Chandan Kumar',
    role: 'Co-founder · Platform & Cloud Engineering',
    linkedin: 'https://www.linkedin.com/in/chandan-kumar-ba665620/',
    bio: 'Cloud and platform engineering leader with deep expertise in Kubernetes, DevOps, AI infrastructure, and solution architecture. VIT graduate and active writer on DevOps and platform engineering.',
    tags: ['Kubernetes', 'Platform Engineering', 'GitOps', 'AI Infrastructure', 'GCP · AWS · Azure'],
  },
];

const engagementModels = [
  {
    title: 'Infrastructure Audit',
    duration: '1–2 weeks',
    description:
      'A focused review of cloud spend, Kubernetes reliability, Terraform structure, CI/CD safety, observability, security posture, and migration risk.',
  },
  {
    title: 'Architecture Review',
    duration: 'Single working session',
    description:
      'A senior review for teams deciding how to scale, migrate, modernize DevOps, adopt AI workflows, or reduce production risk.',
  },
  {
    title: 'Platform Sprint',
    duration: '2–4 weeks',
    description:
      'Hands-on delivery for Terraform modules, CI/CD workflows, Kubernetes foundations, observability dashboards, cloud guardrails, or AI DevOps automation.',
  },
  {
    title: 'Infrastructure Retainer',
    duration: 'Monthly',
    description:
      'Ongoing platform engineering, SRE consulting, security/FinOps improvements, cloud cost optimization, and operational support.',
  },
];

const operatingLoop = [
  ['01', 'Assess', 'Cost, reliability, security, migration risk, AI readiness, automation debt'],
  ['02', 'Design', 'Target architecture, platform roadmap, controls, operating model'],
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
  ['What does Perqora do?', 'We help engineering teams build, optimise, and operate their infrastructure — Kubernetes, CI/CD pipelines, cloud cost, platform engineering, and security posture. We work alongside your team, not instead of it.'],
  ['Who is a good fit?', 'Seed-to-Series B startups that have outgrown their initial setup and need production-grade infrastructure. We work best with teams that are shipping fast but hitting recurring infrastructure friction.'],
  ['Do you work with teams that already have DevOps engineers?', 'Often yes. Your team knows your product deeply but may not have seen 50 different Kubernetes setups. We accelerate specific initiatives — a migration, a cost audit, a security hardening — then hand off fully so your team owns it.'],
  ['How does a project start?', 'Most engagements begin with a free 30-min discovery call, followed by an infrastructure audit or architecture review. From there we scope the right engagement model — project, sprint, or retainer.'],
  ['What happens when the project ends?', 'Full documentation, runbooks for every system we touched, a recorded walkthrough with your team, and a 30-day post-handover support window. You own everything — code, configs, access. Nothing is locked in.'],
  ['Which clouds do you support?', 'AWS, GCP, and Azure — and multi-cloud setups. Most of our work is cloud-agnostic at the tooling layer (Terraform, Kubernetes, ArgoCD) with cloud-specific optimisation at the cost and networking layer.'],
  ['Can you help with SOC 2 or ISO 27001 compliance?', 'Yes — on the infrastructure side. We implement the technical controls that auditors look for: IAM hardening, secrets management, audit logging, network segmentation, and policy-as-code guardrails. For the formal certification process itself we partner with specialised compliance firms, but we make sure the infrastructure layer is fully audit-ready on our end.'],
];

const scorecardItems = [
  'Kubernetes readiness',
  'Terraform and IaC maturity',
  'CI/CD release safety',
  'Security and access posture',
  'Observability and incident readiness',
  'Cloud cost, FinOps, and migration risk',
  'AI-native DevOps automation opportunities',
  'Cloud compliance posture — SOC 2, ISO 27001, CIS benchmarks',
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
      <path d="m5 7.5 7 5.2 7-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputClass =
  'w-full rounded-xl border border-[#d8d2c4] bg-white px-4 py-3 text-sm text-[#18201d] outline-none transition placeholder:text-[#8b948f] focus:border-[#1f7568]';

export default function PerqoraLandingPage() {
  const [formState, setFormState] = React.useState('idle'); // idle | sending | success | error

  async function handleInquirySubmit(event) {
    event.preventDefault();
    setFormState('sending');
    try {
      const res = await fetch('https://formspree.io/f/mvzyyeal', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('success');
        event.currentTarget.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Perqora',
    url: 'https://perqora.in',
    logo: 'https://perqora.in/brand/perqora-mark.png',
    description: 'AI-native infrastructure engineering consultancy for startups — Kubernetes, DevOps, platform engineering, cloud cost optimization, and SRE.',
    foundingLocation: 'Bengaluru, India',
    sameAs: ['https://www.linkedin.com/company/perqora'],
    contactPoint: { '@type': 'ContactPoint', email: 'admin@perqora.in', contactType: 'customer service' },
  };

  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 border-b border-[#ded7c8] bg-[#f8f5ee]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img src="/brand/perqora-mark.png" alt="Perqora" className="h-11 w-11 shrink-0 rounded-xl object-cover" />
            <span className="min-w-0">
              <span className="block text-lg font-semibold leading-none">Perqora</span>
              <span className="mt-1 block text-xs text-[#64716c]">AI-Native Infrastructure Engineering</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-xs font-medium text-[#53605c] lg:flex">
            {pageLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#18201d]">{label}</a>
            ))}
          </nav>
          <AuditLink className="hidden sm:inline-flex">Book Free Audit</AuditLink>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
              <div>
                <p className="mb-5 inline-flex rounded-full border border-[#d8d2c4] bg-white px-4 py-2 text-sm font-medium text-[#53605c]">
                  Elite DevOps, AI, and infrastructure consultancy · Bengaluru
                </p>
                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] text-[#111827] sm:text-5xl lg:text-[62px]">
                  Infrastructure that scales without becoming the company bottleneck.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605c]">
                  Perqora designs, automates, migrates, secures, and operates serious cloud infrastructure — Kubernetes, platform engineering, DevOps automation, observability, SRE, FinOps, and AI-native workflows.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AuditLink>Book Infrastructure Audit</AuditLink>
                  <a
                    href="#about"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c9c0af] bg-transparent px-5 py-3 text-sm font-semibold text-[#18201d] transition hover:border-[#7f8f88]"
                  >
                    Meet the founders <ArrowRightIcon />
                  </a>
                </div>
              </div>

              <aside className="rounded-3xl border border-[#ded7c8] bg-white p-5 shadow-[0_18px_55px_rgba(20,30,35,0.08)]">
                <p className="text-xs font-semibold uppercase text-[#1f7568]">June 2026 Capacity</p>
                <p className="mt-3 text-3xl font-semibold text-[#111827]">3 slots</p>
                <p className="mt-2 text-sm leading-6 text-[#53605c]">Accepting three infrastructure engagements next month. Founder-led from day one.</p>
                <AuditLink className="mt-5 w-full">Reserve a Slot</AuditLink>
                <p className="mt-3 text-center text-xs text-[#8b948f]">Free 30-min discovery call · No commitment</p>
              </aside>
            </div>

            <div className="mt-10 rounded-[28px] border border-[#ded7c8] bg-[#0c1621] p-3 shadow-[0_28px_80px_rgba(20,30,35,0.14)]">
              <img
                src="/brand/perqora-hero.png"
                alt="Perqora AI-native infrastructure engineering dashboard"
                className="aspect-[2.5/1] w-full rounded-[20px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* ── PROOF POINTS ── */}
        <section className="border-b border-[#ded7c8] bg-[#f4f0e7]">
          <div className="mx-auto grid max-w-7xl gap-px px-5 py-8 sm:px-6 lg:grid-cols-4">
            {proofPoints.map(([title, copy]) => (
              <div key={title} className="bg-[#fffaf1] p-5 first:rounded-l-2xl last:rounded-r-2xl">
                <p className="text-sm font-semibold text-[#1f7568]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-[#53605c]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Services</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Specialist infrastructure for cloud teams that need production discipline.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#53605c]">
              Fewer production surprises, cleaner automation, stronger security posture, safer migrations, lower cloud waste — and engineering teams that spend more time shipping product.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.label}
                className="rounded-2xl border border-[#ded7c8] bg-[#fffaf1] p-6 transition hover:-translate-y-1 hover:border-[#9aa89f]"
              >
                <p className="text-sm font-semibold text-[#1f7568]">{service.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-[#111827]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#53605c]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── OPERATING SYSTEM (ANIMATION) ── */}
        <section className="bg-[#111827] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#9fd6c9]">Live Operating View</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                One operating loop across cloud, security, FinOps, AI, and reliability.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c7d2cc]">
                Architecture, cloud guardrails, CI/CD, Terraform, Kubernetes, observability, AI workflows, and cost controls — moving together in one rhythm.
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
                    <article key={stage} className="cycle-step" style={{ '--delay': `${index * 0.7}s` }}>
                      <span className="text-xs font-semibold text-[#c9b79c]">{stage}</span>
                      <strong className="mt-1 block text-sm font-semibold text-white">{activity}</strong>
                      <span className="mt-2 inline-flex rounded-full bg-[#10211d] px-2.5 py-1 text-xs text-[#9fd6c9]">{status}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT SIGNALS ── */}
        <section className="border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Work</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Built for teams where infrastructure risk is already business risk.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                Engagements are kept confidential. What follows are accurate, anonymised descriptions of the work.
              </p>
            </div>
            <div className="grid gap-4">
              {clientSignals.map(([type, work]) => (
                <article key={type} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                  <p className="text-sm font-semibold text-[#1f7568]">{type}</p>
                  <p className="mt-2 text-base leading-7 text-[#53605c]">{work}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / FOUNDERS ── */}
        <section id="about" className="border-b border-[#ded7c8] bg-[#fffaf1]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold text-[#1f7568]">About Perqora</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                  Built by engineers who've lived the infrastructure problems you're solving.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#53605c]">
                  Founded in Bengaluru by two senior infrastructure engineers — each with deep experience scaling cloud systems at fast-growing startups. Every engagement is founder-led from day one.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {founders.map((founder) => (
                  <article key={founder.name} className="rounded-2xl border border-[#ded7c8] bg-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1f7568] bg-[#e8f5f1] font-mono text-sm font-semibold text-[#1f7568]">
                        {founder.initials}
                      </div>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c9c0af] text-[#53605c] transition hover:border-[#1f7568] hover:text-[#1f7568]"
                      >
                        <LinkedinIcon />
                      </a>
                    </div>
                    <h3 className="text-lg font-semibold text-[#111827]">{founder.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#1f7568]">{founder.role}</p>
                    <p className="mt-3 text-sm leading-6 text-[#53605c]">{founder.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {founder.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-[#f4f0e7] px-2.5 py-1 text-xs text-[#53605c]">{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODEL ── */}
        <section className="border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Engagement Model</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Clear ways to start, from one review to ongoing support.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                Every engagement ends with your team owning the system. We hand over full documentation, runbooks, and a 30-day support window. Nothing is locked in.
              </p>
              <AuditLink className="mt-8">Book Free Discovery Call</AuditLink>
            </div>
            <div className="grid gap-4">
              {engagementModels.map((model) => (
                <article key={model.title} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-[#111827]">{model.title}</h3>
                    <span className="shrink-0 rounded-full border border-[#c9e8e0] bg-[#e8f5f1] px-3 py-1 text-xs font-semibold text-[#1f7568]">{model.duration}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#53605c]">{model.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPERATING MODEL ── */}
        <section id="operating-model" className="border-b border-[#ded7c8] bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">How It Works</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                A clear five-step path from first assessment to handover.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                Assess what's broken, design the fix, automate it, secure and operate it, then optimize. Nothing gets deployed without your sign-off.
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

        {/* ── SCORECARD (LEAD MAGNET) ── */}
        <section className="border-b border-[#ded7c8] bg-[#f4f0e7]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Not ready for a call?</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Request a free infrastructure readiness scorecard.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                A lighter first step. Share your stack and Perqora will respond with a personalised readiness review — no commitment required.
              </p>
            </div>
            <div className="rounded-3xl border border-[#ded7c8] bg-white p-6 shadow-[0_24px_70px_rgba(20,30,35,0.08)]">
              <h3 className="text-xl font-semibold text-[#111827]">Scorecard covers</h3>
              <div className="mt-5 grid gap-3">
                {scorecardItems.map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-2xl bg-[#f8f5ee] px-4 py-3 text-sm text-[#53605c]">
                    <span className="text-[#1f7568]">✓</span> {item}
                  </p>
                ))}
              </div>
              <a
                href="mailto:admin@perqora.in?subject=Infrastructure%20Readiness%20Scorecard"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145]"
              >
                Request Free Scorecard
              </a>
              <p className="mt-3 text-center text-xs text-[#8b948f]">Perqora responds within 1 business day</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="bg-[#fffaf1]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Answers for CTOs and engineering leaders.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#53605c]">
                Common questions before the first call.
              </p>
            </div>
            <div className="grid gap-4">
              {faqs.map(([question, answer]) => (
                <section key={question} className="rounded-2xl border border-[#ded7c8] bg-white p-5">
                  <h3 className="text-base font-semibold text-[#111827]">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#53605c]">{answer}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-[#f8f5ee]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#1f7568]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                Tell us what needs to get stronger.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#53605c]">
                Share your infrastructure, migration, reliability, automation, or cost challenge. Perqora will respond with the right next step within one business day.
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
              <div className="mt-4">
                <Field label="What should we know?">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Describe your infrastructure, migration, reliability, or cloud cost challenge."
                  />
                </Field>
              </div>
              {formState === 'success' ? (
                <div className="mt-5 rounded-2xl bg-[#e8f5f1] border border-[#c9e8e0] px-5 py-4 text-center">
                  <p className="text-sm font-semibold text-[#1f7568]">✓ Inquiry sent successfully</p>
                  <p className="mt-1 text-xs text-[#53605c]">Perqora will respond within 1 business day.</p>
                </div>
              ) : formState === 'error' ? (
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-[#fef2f2] border border-[#fecaca] px-5 py-4 text-center">
                    <p className="text-sm font-semibold text-red-700">Something went wrong — please try again.</p>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145]"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243145] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? 'Sending…' : 'Send Inquiry'}
                </button>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#ded7c8] bg-[#f4f0e7] px-5 py-8 text-sm text-[#53605c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="font-semibold text-[#18201d]">Perqora</p>
            <p className="mt-1 text-xs">AI-Native Infrastructure Engineering · Bengaluru, India</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-xs">
            {pageLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#18201d]">{label}</a>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href="mailto:admin@perqora.in" aria-label="Email Perqora" title="Email Perqora"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]">
              <MailIcon />
            </a>
            <a href="https://www.linkedin.com/company/perqora" target="_blank" rel="noreferrer" aria-label="Perqora on LinkedIn" title="Perqora on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c0af] text-[#18201d] transition hover:border-[#1f7568]">
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#8b948f]">© 2026 Perqora. All rights reserved.</p>
      </footer>
    </div>
  );
}
