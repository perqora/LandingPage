export const faqCategories = [
  {
    title: 'Engagement Basics',
    description: 'Understand what Perqora does and how engagements usually begin.',
    questions: [
      {
        question: 'What does Perqora do?',
        answer:
          'Perqora provides AI-native infrastructure engineering across DevOps automation, Kubernetes consulting, platform engineering, cloud migration, observability, SRE, security posture, and cloud cost optimization.',
      },
      {
        question: 'Is Perqora a consultancy, agency, or managed service provider?',
        answer:
          'Perqora is a specialist infrastructure consultancy. The work is hands-on and engineering-led, but the goal is not to create long-term dependency. Engagements focus on audits, architecture reviews, platform sprints, migration support, and ongoing infrastructure advisory when needed.',
      },
      {
        question: 'What types of companies does Perqora work with?',
        answer:
          'Perqora is built for startups, SaaS teams, AI product companies, fintech-style workloads, and cloud-heavy engineering teams that need senior DevOps, platform, Kubernetes, SRE, or cloud engineering execution.',
      },
      {
        question: 'How does a project usually start?',
        answer:
          'Most projects start with an infrastructure audit or architecture review. That creates a clear picture of reliability risk, cloud cost waste, migration readiness, Terraform structure, CI/CD maturity, security posture, and observability gaps.',
      },
    ],
  },
  {
    title: 'Fit & Readiness',
    description: 'Decide whether Perqora is the right partner before booking a call.',
    questions: [
      {
        question: 'When should we talk to Perqora?',
        answer:
          'Talk to Perqora when infrastructure is slowing product delivery, cloud bills are rising, Kubernetes is becoming difficult to operate, releases feel risky, observability is noisy, or your team needs platform engineering without hiring a full internal platform group immediately.',
      },
      {
        question: 'Do we need to already use Kubernetes?',
        answer:
          'No. Perqora can help before, during, or after Kubernetes adoption. Some teams need a readiness review before migrating; others need existing clusters stabilized, secured, cost-optimized, or made easier for developers to use.',
      },
      {
        question: 'Can Perqora work with early-stage startups?',
        answer:
          'Yes, if the infrastructure risk is real enough to justify senior engineering attention. Early-stage teams often benefit from a focused audit, Terraform cleanup, CI/CD review, cloud cost review, or migration plan rather than a large retainer.',
      },
      {
        question: 'Who is not a good fit?',
        answer:
          'Perqora is not a good fit for teams looking only for low-cost staff augmentation, generic website support, or one-off ticket execution without architecture context. The strongest fit is a team that wants practical infrastructure outcomes and clear ownership.',
      },
    ],
  },
  {
    title: 'Process & Working Style',
    description: 'How access, collaboration, handover, and delivery are handled.',
    questions: [
      {
        question: 'How much access does Perqora need?',
        answer:
          'Access depends on the engagement. An architecture review can start with diagrams, read-only dashboards, Terraform snippets, CI/CD screenshots, and architecture notes. Implementation work may require repository, cloud, Kubernetes, or observability access with least-privilege controls.',
      },
      {
        question: 'How do you avoid disrupting production systems?',
        answer:
          'Perqora works through review, staging, change plans, rollback paths, and approval checkpoints. The operating model prioritizes production safety, release discipline, observability, and clear ownership before risky changes are made.',
      },
      {
        question: 'Will you work with our existing engineering team?',
        answer:
          'Yes. Perqora is designed to work alongside founders, CTOs, DevOps engineers, SREs, backend teams, and platform owners. The goal is to improve the system and leave your team with clearer workflows, not hide knowledge in an external black box.',
      },
      {
        question: 'What does handover include?',
        answer:
          'Handover can include architecture notes, Terraform module documentation, runbooks, dashboards, release workflow guidance, migration notes, cost recommendations, and a prioritized roadmap for the next 30 to 90 days.',
      },
    ],
  },
  {
    title: 'Pricing & Engagements',
    description: 'Common ways teams work with Perqora.',
    questions: [
      {
        question: 'How is pricing structured?',
        answer:
          'Pricing depends on scope. Common models include a fixed infrastructure audit, a fixed architecture review, a focused platform sprint, or a monthly infrastructure retainer. Exact pricing should be confirmed after the initial context review.',
      },
      {
        question: 'How long does an infrastructure audit take?',
        answer:
          'A focused audit usually takes one to two weeks depending on the number of cloud accounts, clusters, repositories, environments, and observability systems involved. Larger environments may need a phased review.',
      },
      {
        question: 'Do you offer monthly retainers?',
        answer:
          'Yes. A retainer can cover ongoing platform engineering, SRE consulting, Terraform review, cloud cost optimization, security posture improvements, migration support, and advisory for engineering leaders.',
      },
      {
        question: 'Can we start with a small engagement first?',
        answer:
          'Yes. Many teams should start with an architecture review, readiness scorecard, or focused audit before committing to larger implementation work. This keeps the first step low-risk and useful.',
      },
    ],
  },
  {
    title: 'Technical Scope',
    description: 'The infrastructure, DevOps, AI, cloud, and reliability areas Perqora covers.',
    questions: [
      {
        question: 'Which cloud platforms do you support?',
        answer:
          'Perqora can support AWS, Azure, and GCP environments, with work commonly covering landing zones, networking, IAM, Kubernetes, Terraform, CI/CD, observability, cost controls, and migration planning.',
      },
      {
        question: 'Can Perqora help with Terraform automation?',
        answer:
          'Yes. Terraform work can include module design, state boundaries, environment structure, review workflows, policy guardrails, cloud resource standards, and automation that reduces manual DevOps toil.',
      },
      {
        question: 'Can Perqora help reduce cloud costs?',
        answer:
          'Yes. Cloud cost optimization can include rightsizing, workload scheduling, storage cleanup, Kubernetes resource tuning, Spot strategy, commitment planning, dashboards, and FinOps governance. Percentage savings should be treated as environment-specific until reviewed.',
      },
      {
        question: 'What does AI-native DevOps mean here?',
        answer:
          'AI-native DevOps means using AI responsibly inside infrastructure workflows: runbook assistance, deployment checks, alert enrichment, incident analysis, Terraform review support, operational knowledge capture, and repetitive workflow automation with human control.',
      },
    ],
  },
  {
    title: 'After Engagement',
    description: 'What happens after the audit, sprint, migration, or review ends.',
    questions: [
      {
        question: 'What do we receive at the end of an audit?',
        answer:
          'You can expect a prioritized findings summary, risk areas, cost opportunities, reliability gaps, migration concerns, and a practical roadmap. Depending on scope, this can include architecture notes, implementation recommendations, and next-step options.',
      },
      {
        question: 'Will we become dependent on Perqora?',
        answer:
          'The goal is the opposite. Perqora aims to leave teams with clearer architecture, better automation, documented workflows, stronger observability, and practical operating habits that internal engineers can continue using.',
      },
      {
        question: 'Can Perqora implement the recommendations?',
        answer:
          'Yes. After an audit or review, Perqora can help implement the highest-impact work through a platform sprint, migration engagement, Terraform automation project, SRE improvement track, or ongoing retainer.',
      },
      {
        question: 'How do we keep improving after the first project?',
        answer:
          'Most teams continue with a 30/60/90 day roadmap covering automation, reliability, security posture, FinOps, observability, migration, and team handover. The roadmap can be executed internally, with Perqora support, or as a hybrid model.',
      },
    ],
  },
];

export const faqItems = faqCategories.flatMap((category) =>
  category.questions.map((item) => ({
    ...item,
    category: category.title,
  }))
);
