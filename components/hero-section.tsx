import Image from "next/image"
import { GithubIcon, LinkedinIcon, BookOpenIcon, YoutubeIcon, BarChart3Icon } from "lucide-react"

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/mdenamulmarzun", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/enamul-marzun-6b9068210", label: "LinkedIn" },
  { icon: BookOpenIcon, href: "https://scholar.google.com/citations?user=4PzP5AQAAAAJ&hl=en", label: "Google Scholar" },
  { icon: BarChart3Icon, href: "https://www.researchgate.net/profile/Md-Enamul-Hoque-Marzun", label: "ResearchGate" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/watch?v=1MGECiB0OyI", label: "YouTube" },
]

export function HeroSection() {
  return (
    <section id="about" className="lg:sticky lg:top-24 lg:h-fit">
      <div className="space-y-6">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase">About</h2>

        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-muted">
          <Image
            src="/profile.png"
            alt="Md. Enamul Hoque Marzun"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Md. Enamul Hoque Marzun
          </h1>
          <p className="mt-3 text-xl text-primary font-medium">Software Engineer & Researcher</p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            I build intelligent systems and explore the frontiers of computer vision, robotics, and medical imaging at
            the intersection of software engineering and research.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>
              Software Engineer at <span className="text-foreground font-medium">Nesia Inc.</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span>
              B.Sc. in CSE from <span className="text-foreground font-medium">MIST, Dhaka</span>
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex flex-col gap-3 pt-8" aria-label="Section navigation">
          {["ABOUT", "EXPERIENCE", "RESEARCH", "SKILLS"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground transition-all" />
                {item}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 pt-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
