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
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building the Future of Audit
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I don&apos;t just talk about innovation&mdash;I build it. Here are the tools
            I&apos;m creating to transform how audits are done.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 card-hover"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
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
                    <p className="text-muted mb-6">{project.description}</p>

                    <div className="bg-white rounded-lg p-4 mb-6">
                      <p className="text-sm font-semibold text-foreground mb-1">
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
                          className="px-3 py-1 bg-white text-muted text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
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
                          Product screenshot placeholder
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
                  className="bg-background rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-muted/20 text-muted text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-muted mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white text-muted text-xs rounded"
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
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
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
            <div className="bg-background rounded-xl p-6 border-2 border-dashed border-border flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-muted"
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
