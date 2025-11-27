const skillCategories = [
  {
    title: "Core Expertise",
    skills: [
      "Computer Vision",
      "Digital Image Processing",
      "Object Recognition",
      "Image Segmentation",
      "Feature Extraction",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "Neural Networks", "Medical Image Analysis", "Automation Systems"],
  },
  {
    title: "Emerging Interests",
    skills: ["Quantum Computing", "Large Language Models (LLMs)", "Robotics", "UAV Technology"],
  },
  {
    title: "Development",
    skills: ["Software Engineering", "Laravel", "Oracle Database", "Web Applications", "API Development"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="space-y-8">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase lg:hidden">Skills</h2>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-foreground font-medium">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-secondary-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
