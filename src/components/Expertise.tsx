const expertiseAreas = [
  {
    category: "Audit & Compliance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    skills: [
      "SOX 404 Compliance",
      "Top-Down Risk Assessment (TDRA)",
      "Internal Audit Programs",
      "Controls Testing & Design",
      "IT General Controls (ITGC)",
      "COSO Framework",
      "IIA Standards",
    ],
  },
  {
    category: "Risk Management",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    skills: [
      "Enterprise Risk Management",
      "Risk Assessment & Mitigation",
      "Governance Frameworks",
      "ESG & Sustainability Audit",
      "Forensic Reviews",
      "Regulatory Compliance",
    ],
  },
  {
    category: "Technology & AI",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      "Python for Audit Automation",
      "AI/ML in Audit",
      "Data Analytics",
      "Process Automation",
      "ERP Systems (SAP, Oracle)",
      "SQL & Data Visualization",
    ],
  },
  {
    category: "Leadership",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    skills: [
      "Team Leadership (10+ members)",
      "C-Suite Communication",
      "Audit Committee Advisory",
      "Cross-functional Collaboration",
      "Business Development",
      "Change Management",
    ],
  },
];

const certifications = [
  { name: "CPA", org: "CPA Canada", year: "2023" },
  { name: "CA", org: "ICAI, India", year: "2012" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
            The Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Deep Expertise, Rare Combination
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Most audit leaders know audit. Some know tech. Almost none can actually
            build the solutions they envision.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="card-dark p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {area.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-surface-elevated text-foreground-muted text-sm rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Dual-Qualified CPA
              </h3>
              <p className="text-white/80">
                Credentials that matter, backed by results that speak louder
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[200px] border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{cert.name}</span>
                  </div>
                  <p className="text-white font-semibold">{cert.org}</p>
                  <p className="text-white/70 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-4">Professional Affiliations</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["CPA Canada", "ICAI", "IIA (Institute of Internal Auditors)"].map(
              (org, index) => (
                <span key={index} className="text-foreground-muted font-medium hover:text-primary transition-colors">
                  {org}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
