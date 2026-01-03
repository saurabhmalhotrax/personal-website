export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            The Short Version
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why I&apos;m Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Provocative Narrative */}
          <div>
            <div className="space-y-6 text-foreground-muted leading-relaxed">
              <p className="text-xl text-foreground font-medium">
                Here&apos;s what most audit leaders won&apos;t tell you:
              </p>
              <p className="text-lg">
                <span className="text-primary font-semibold">80% of audit work is manual, repetitive, and shouldn&apos;t exist.</span>
              </p>
              <p>
                I&apos;ve spent 14 years watching smart people do dumb tasks. Brilliant auditors
                copying data from one spreadsheet to another. Senior managers spending weekends
                on work that a script could do in minutes.
              </p>
              <p>
                Most audit leaders respond to this by... attending conferences about AI.
                Making PowerPoints about &quot;digital transformation.&quot; Waiting for vendors
                to solve their problems.
              </p>
              <p className="text-foreground">
                <strong>I took a different approach.</strong> I taught myself to code. I built
                the tools. I shipped working software that turns 40-hour processes into
                4-hour automated workflows.
              </p>
              <p>
                Not because anyone asked me to. Because I got tired of waiting for
                someone else to fix the problem.
              </p>
            </div>

            {/* Quote callout */}
            <div className="mt-8 pl-6 border-l-2 border-primary">
              <p className="text-lg text-foreground italic">
                &quot;The audit profession is ripe for transformation. I&apos;m not waiting for it—I&apos;m building it.&quot;
              </p>
            </div>
          </div>

          {/* Right Column - Credentials & Highlights */}
          <div className="space-y-6">
            {/* Credentials Card */}
            <div className="card-dark p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Credentials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">CPA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CPA</p>
                    <p className="text-sm text-muted">Canada (2023)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">CA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CA</p>
                    <p className="text-sm text-muted">India (2012)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Actually Do */}
            <div className="card-dark p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                What I Actually Do
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Lead audit teams across North America and India", icon: "team" },
                  { text: "Build AI tools that automate manual audit work", icon: "code" },
                  { text: "Advise C-suite and Audit Committees on risk", icon: "brief" },
                  { text: "Ship working software, not just PowerPoints", icon: "rocket" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground-muted pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Path Mini */}
            <div className="card-dark p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-light"></span>
                The Journey
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-surface-elevated text-muted">Protiviti</span>
                <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="px-3 py-1 rounded-full bg-surface-elevated text-muted">PwC</span>
                <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">Genpact</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-muted pl-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Vancouver, BC, Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
