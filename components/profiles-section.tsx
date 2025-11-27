import { ArrowUpRightIcon } from "lucide-react"

const profiles = [
  {
    name: "Google Scholar",
    description: "Research publications and citation metrics",
    url: "https://scholar.google.com/citations?user=4PzP5AQAAAAJ&hl=en",
  },
  {
    name: "ResearchGate",
    description: "Academic profile and research network",
    url: "https://www.researchgate.net/profile/Md-Enamul-Hoque-Marzun",
  },
  {
    name: "Kaggle",
    description: "Data science and machine learning projects",
    url: "https://www.kaggle.com/mdenamulmarzun",
  },
  {
    name: "YouTube",
    description: "Project demos and technical tutorials",
    url: "https://www.youtube.com/watch?v=1MGECiB0OyI",
  },
]

export function ProfilesSection() {
  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-8">Find Me Online</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
          >
            <div>
              <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.description}</p>
            </div>
            <ArrowUpRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </section>
  )
}
