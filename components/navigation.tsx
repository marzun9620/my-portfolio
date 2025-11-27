"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "RESEARCH", href: "#research" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px", // favor the section nearest mid-viewport
        threshold: 0.1,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Initialize from current hash if present
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "")
      if (sections.includes(hashId)) {
        setActiveSection(hashId)
      }
    }

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(targetId)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-semibold text-foreground">
            Marzun
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className={`text-xs tracking-widest transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`h-px transition-all ${
                      activeSection === item.href.replace("#", "") ? "w-12 bg-primary" : "w-6 bg-muted-foreground"
                    }`}
                  />
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
