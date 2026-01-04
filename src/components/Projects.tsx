const projects = [
  {
    name: "Lean Audit",
    tagline: "AI-Powered Control Testing Platform",
    description:
      "A SaaS platform that automates SOX control testing using AI/ML. Built to solve a problem I faced every day: auditors spending 40+ hours testing a single control when the process could be automated.",
    impact: "100x improvement in testing time (40 hours to 4 hours per control)",
    tech: ["Python", "AI/ML", "Cloud Infrastructure", "React"],
    status: "Live - Marketing Phase",
    link: "#",
    featured: true,
  },
  {
    name: "AI-PPA",
    tagline: "AI Project Portfolio Assistant",
    description:
      "An automation tool for project management and portfolio analysis. Built to help audit teams manage multiple concurrent engagements more efficiently.",
    impact: "Streamlined project tracking and resource allocation",
    tech: ["Python", "Automation", "Analytics"],
    status: "Development",
    link: "https://github.com/saurabhmalhotrax/AI-PPA",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - Bold messaging */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            Proof Over Promises
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Talk is cheap. Here&apos;s what I&apos;ve shipped.
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            While others make PowerPoints about digital transformation,
            I build the tools that actually transform how work gets done.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="card-dark p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full">
                        Featured Project
                      </span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-foreground-muted mb-6">{project.description}</p>

                    {/* Impact callout */}
                    <div className="bg-surface-elevated rounded-lg p-4 mb-6 border border-border">
                      <p className="text-sm font-semibold text-muted mb-1">
                        Impact
                      </p>
                      <p className="text-lg font-bold gradient-text">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-surface-elevated text-foreground-muted text-sm rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="bg-surface-elevated rounded-xl p-8 border border-border">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-muted">
                          Demo video coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="card-dark p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-surface-elevated text-muted text-xs font-semibold rounded-full border border-border">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-foreground-muted mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-surface-elevated text-muted text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary-light transition-colors"
                    >
                      View on GitHub
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}

            {/* More Coming Soon Card */}
            <div className="rounded-xl p-6 border-2 border-dashed border-border bg-surface/50 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center mb-4 border border-border">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                More Projects Coming
              </h3>
              <p className="text-sm text-muted">
                Building 15-25 projects in 2026. Stay tuned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
