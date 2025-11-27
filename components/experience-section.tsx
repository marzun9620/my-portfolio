import { ArrowUpRightIcon } from "lucide-react"

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Software Engineer",
    company: "Nesia Inc.",
    companyUrl: "https://nesia-inc.com/",
    description:
      "Working on AI integration and system development projects, leveraging expertise in automation and software development to build AI-driven solutions for businesses.",
    skills: ["AI Integration", "System Development", "Automation", "Software Engineering"],
  },
  {
    period: "2023 — 2024",
    title: "Software Engineer",
    company: "MarginEdge",
    companyUrl: "https://www.marginedge.com/",
    description:
      "Part of the Dhaka engineering team developing restaurant management software for real-time food cost tracking and automating back-office operations.",
    skills: ["Restaurant Tech", "Backend Development", "API Development", "Database Management"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="space-y-8">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase lg:hidden">Experience</h2>

        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 -mx-6 rounded-lg hover:bg-card transition-colors"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
              <span className="text-xs tracking-wide text-muted-foreground uppercase">{exp.period}</span>
              <div className="space-y-3">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                  {exp.title} · {exp.company}
                  <ArrowUpRightIcon className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
