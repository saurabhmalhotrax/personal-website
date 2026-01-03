const experiences = [
  {
    title: "Director, Internal Audit & Risk Management",
    company: "Genpact",
    location: "Vancouver, BC, Canada",
    period: "November 2021 - Present",
    current: true,
    highlights: [
      "Lead enterprise-wide SOX 404 compliance programs for Fortune 500 clients",
      "Direct cross-functional teams of 10+ auditors across North America and India",
      "Spearhead digital transformation integrating AI/automation into audit processes",
      "Partner with C-suite executives and Audit Committees on strategic risk insights",
    ],
    achievements: [
      { metric: "$2M+", label: "Engagements delivered" },
      { metric: "40%", label: "Efficiency gains through automation" },
      { metric: "95%+", label: "Client satisfaction" },
    ],
  },
  {
    title: "Senior Manager, Enterprise Risk Consulting",
    company: "Genpact Enterprise Risk Consulting",
    location: "Gurgaon, India",
    period: "December 2018 - December 2021",
    current: false,
    highlights: [
      "Managed portfolio of 8+ concurrent SOX and internal audit engagements",
      "Led team of 15+ consultants with focus on performance and career development",
      "Designed risk-based audit programs aligned with COSO and IIA Standards",
      "Developed automated procedures reducing manual testing effort by 30%",
    ],
    achievements: [
      { metric: "2 yrs", label: "To Senior Manager promotion" },
      { metric: "25%", label: "Audit cycle time reduction" },
      { metric: "SME", label: "SOX 404 TDRA specialist" },
    ],
  },
  {
    title: "Manager, Assurance Services",
    company: "PwC India",
    location: "Delhi, India",
    period: "September 2017 - December 2018",
    current: false,
    highlights: [
      "Executed SOX 404 and internal audit engagements for Big Four clients",
      "Supervised audit teams of 5-8 members providing coaching and quality assurance",
      "Collaborated with external audit teams for integrated testing approach",
    ],
    achievements: [
      { metric: "Fortune 100", label: "Technology client delivery" },
      { metric: "Exceeds", label: "Performance rating" },
    ],
  },
  {
    title: "Deputy Manager to Consultant",
    company: "Protiviti India",
    location: "Gurgaon, India",
    period: "May 2013 - September 2017",
    current: false,
    highlights: [
      "Progressed through three promotions demonstrating consistent high performance",
      "Managed end-to-end audit engagements including planning, fieldwork, and reporting",
      "Led SOX 404 testing programs for US-listed clients across diverse industries",
    ],
    achievements: [
      { metric: "3x", label: "Promotions in 4 years" },
      { metric: "Multiple", label: "Exceeds Expectations ratings" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            14+ years of progressive leadership across top consulting firms,
            building and leading audit programs for global enterprises.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted">{exp.location}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted mb-4">{exp.period}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-lg font-bold text-primary">{achievement.metric}</p>
                          <p className="text-xs text-muted">{achievement.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
