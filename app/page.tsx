import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { SkillsSection } from "@/components/skills-section"
import { ProfilesSection } from "@/components/profiles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 pt-24 pb-16">
          <HeroSection />
          <div className="space-y-24">
            <ResearchSection />
            <ExperienceSection />
            <SkillsSection />
          </div>
        </div>
        <ProfilesSection />
      </main>
      <Footer />
    </div>
  )
}
