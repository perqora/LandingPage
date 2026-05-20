export default function PerqoraLandingPage() {
  const services = [
    {
      title: 'AI-Powered Infrastructure Automation',
      description:
        'Generate production-grade Terraform, Kubernetes, and CI/CD pipelines in hours instead of weeks using AI-assisted workflows.',
    },
    {
      title: 'Cloud Cost Optimization',
      description:
        'Reduce AWS/GCP bills using Spot optimization, autoscaling intelligence, FinOps dashboards, and infra tuning.',
    },
    {
      title: 'Kubernetes & SRE Excellence',
      description:
        'Production-grade Kubernetes reliability, observability, incident management, and scaling for high-growth startups.',
    },
    {
      title: 'AI Monitoring Agents',
      description:
        'Custom observability agents using OpenTelemetry, AI-driven alerting, and automated root cause analysis.',
    },
  ];

  const achievements = [
    '10+ years in Cloud & Infrastructure Engineering',
    '40% cloud cost reduction success stories',
    'Worked with fintech, media & high-scale startups',
    'Expertise across AWS, GCP, Kubernetes & Terraform',
    'Hands-on experience handling production incidents at scale',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.25),transparent_30%)]" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Rohit Sureka</h1>
            <p className="text-sm text-gray-400">DevOps • AI • Cloud Infrastructure</p>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="border-b border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-5 flex gap-8 whitespace-nowrap animate-[pulse_8s_linear_infinite] text-sm text-gray-400">
            <span>AWS</span>
            <span>•</span>
            <span>GCP</span>
            <span>•</span>
            <span>Kubernetes</span>
            <span>•</span>
            <span>Terraform</span>
            <span>•</span>
            <span>Platform Engineering</span>
            <span>•</span>
            <span>SRE</span>
            <span>•</span>
            <span>Observability</span>
            <span>•</span>
            <span>AI Infrastructure Automation</span>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              AI-Native Platform Engineering Team
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Infrastructure Engineered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                For Velocity, Reliability & Scale
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
              Perqora is an AI-native infrastructure engineering company helping startups deploy production-grade Kubernetes, Terraform, observability, and cloud platforms without building a massive DevOps team internally.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform shadow-2xl">
                Book Infrastructure Audit
              </button>

              <button className="px-7 py-4 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 backdrop-blur hover:bg-cyan-500/20 transition text-cyan-200">
                Schedule Architecture Review
              </button>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Free Infrastructure Audit Available For Early-Stage Startups
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-3xl font-bold">40%</h3>
                <p className="text-gray-400 text-sm mt-1">Cloud Cost Reduction</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-400 text-sm mt-1">Production Reliability</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.25)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-400">Live Infrastructure Operations</p>
                  <h3 className="text-xl font-semibold mt-1">Perqora Runtime Console</h3>
                </div>

                <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/20">
                  All Systems Operational
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {[
                  ['Terraform Automation', '98% Faster Delivery'],
                  ['Kubernetes Reliability', '99.95% Uptime'],
                  ['Cloud Cost Optimization', '40% Savings'],
                  ['AI Monitoring Agents', 'Real-Time Detection'],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="p-5 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-sm text-gray-400 mt-1">Production-grade infrastructure</p>
                    </div>

                    <div className="text-right">
                      <p className="text-cyan-300 font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-5">
                Runtime Terminal
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Built By Engineers Who Understand Production Chaos
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                Perqora combines senior platform engineering experience with AI-native workflows to help startups deploy faster, scale reliably, and operate with confidence.
              </p>
            </div>

            <div className="rounded-[28px] overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 bg-[#071018]">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-black/40">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <p className="ml-4 text-sm text-gray-400">perqora-runtime.sh</p>
              </div>

              <div className="p-6 font-mono text-sm leading-8 text-green-300 overflow-x-auto">
                <p>$ terraform apply</p>
                <p className="text-cyan-300">✔ Production infrastructure deployed</p>
                <br />
                <p>$ perqora audit run</p>
                <p className="text-cyan-300">✔ Detected 38% cloud overspend</p>
                <br />
                <p>$ kubectl get pods</p>
                <p className="text-cyan-300">✔ All systems operational</p>
                <br />
                <p>$ ai-observe incidents --predict</p>
                <p className="text-cyan-300">✔ Potential scaling bottleneck identified</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
              Services
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Elite Infrastructure Systems For Modern Startups
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-[28px] bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6" />

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
              What Breaks Startups
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Infrastructure Problems That Kill Momentum
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cloud costs growing faster than revenue',
              'Deployments becoming slower every sprint',
              'Kubernetes complexity without internal expertise',
              'Poor observability and alert fatigue',
              'Scaling issues during growth spikes',
              'Engineering teams distracted by infrastructure fires',
            ].map((problem) => (
              <div
                key={problem}
                className="p-7 rounded-[28px] border border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 mb-5 flex items-center justify-center text-cyan-300 text-xl">
                  ⚡
                </div>

                <p className="text-lg text-gray-200 leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 p-10 mb-20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.3),transparent_30%)]" />

            <div className="relative z-10 max-w-4xl">
              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-5">
                When Infrastructure Becomes The Bottleneck
              </p>

              <div className="space-y-5 text-2xl lg:text-4xl font-bold leading-tight text-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400">01</span>
                  <p>Startup growth accelerates</p>
                </div>

                <div className="flex items-center gap-4 opacity-80">
                  <span className="text-cyan-400">02</span>
                  <p>Deployments begin slowing down</p>
                </div>

                <div className="flex items-center gap-4 opacity-70">
                  <span className="text-cyan-400">03</span>
                  <p>Cloud costs and incidents rise</p>
                </div>

                <div className="flex items-center gap-4 opacity-60">
                  <span className="text-cyan-400">04</span>
                  <p>Engineering velocity drops</p>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <span className="text-green-400">05</span>
                  <p>Perqora rebuilds the platform foundation</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
              Why Work With Me
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Built By Engineers Who Have Operated Production At Scale
            </h2>

            <div className="flex items-center gap-5 mb-8">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-3xl font-bold text-black">
                RS
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Rohit Sureka</h3>
                <p className="text-gray-400 mt-1">
                  Founder • Platform Engineering • Kubernetes • FinOps • SRE
                </p>
              </div>
            </div>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              From fintech startups to large-scale media platforms, I have designed,
              optimized, and scaled cloud infrastructure handling production workloads,
              Kubernetes clusters, CI/CD systems, observability stacks, and cloud cost optimization.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="space-y-5">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5"
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-400 mt-2" />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              ['40%', 'Cloud Cost Reduction'],
              ['99.95%', 'Infrastructure Reliability'],
              ['10x', 'Faster Infra Delivery'],
            ].map(([metric, label]) => (
              <div
                key={metric}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                  {metric}
                </p>
                <p className="mt-3 text-gray-300 text-lg">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[40px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 p-12 text-center backdrop-blur-xl">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
              Early Startup Offer
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-6 leading-tight">
              Scale Faster
              <span className="block">Without Infrastructure Chaos</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Ideal for SaaS, fintech, AI startups, and scale-ups looking to move faster
              without building a large DevOps team internally.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform">
                Start a Project
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
                Contact
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Scale Your Infrastructure?
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
                Let’s discuss how AI-assisted DevOps can help your startup move faster,
                reduce cloud costs, and improve reliability.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl space-y-5">
              <input
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your infrastructure challenges"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 font-semibold text-lg hover:scale-[1.01] transition-transform">
                Send Inquiry
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-black to-purple-500/10 p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.4),transparent_30%)]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
                  AI-Native Infrastructure Engineering
                </p>

                <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                  Build Infrastructure
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                    That Survives Scale
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Perqora helps startups build scalable Kubernetes platforms, cloud infrastructure, observability systems, Terraform automation, and AI-powered DevOps workflows.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-xl p-8 space-y-5">
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg text-white mt-1">admin@perqora.in</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/perqora"
                    target="_blank"
                    className="text-cyan-300 text-lg mt-1 inline-block hover:text-cyan-200"
                  >
                    linkedin.com/company/perqora
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Architecture Review</p>
                  <a
                    href="https://calendly.com/admin-perqora/30-minute-meeting-clone"
                    target="_blank"
                    className="text-cyan-300 text-lg mt-1 inline-block hover:text-cyan-200"
                  >
                    Schedule 30-minute session
                  </a>
                </div>

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 font-semibold text-lg hover:scale-[1.01] transition-transform">
                  Book Infrastructure Audit
                </button>
              </div>
            </div>
          </div>
        </section>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Perqora — AI-Native Infrastructure Engineering
      </footer>
    </div>
  );
}
