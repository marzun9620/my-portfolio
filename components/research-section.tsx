import { ArrowUpRightIcon, FileTextIcon } from "lucide-react"

const publications = [
  {
    year: "2025",
    title: "Design and Development of an RC Ornithopter for Remote Surveillance",
    description:
      "Co-developed a flapping-wing surveillance drone inspired by bird/insect-like motion, achieving agile low-speed flight for surveillance purposes.",
    tags: ["Robotics", "UAV", "Surveillance"],
    type: "Conference Paper",
    link: "https://ieeexplore.ieee.org/document/11171712",
  },
  {
    year: "2025",
    title: "A Hybrid Residual U-Net Architecture for Enhanced Low-Light Image Restoration",
    description:
      "Designed a deep learning model using hybrid residual U-Net to improve image clarity in poor lighting conditions.",
    tags: ["Computer Vision", "Deep Learning", "Image Processing"],
    type: "Conference Paper",
    link: "https://ieeexplore.ieee.org/document/11172051",
  },
  {
    year: "2024",
    title: "Automated Framework for Segmenting and Identifying Thyroid Nodules in Ultrasound Images",
    description:
      "Applied image processing and machine learning techniques to assist in diagnosing thyroid nodules from ultrasound scans.",
    tags: ["Medical Imaging", "Image Segmentation", "Healthcare AI"],
    type: "Conference Paper",
    link: "https://ieeexplore.ieee.org/document/11024738",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-24">
      <div className="space-y-8">
        <h2 className="text-sm tracking-widest text-muted-foreground uppercase lg:hidden">Research & Publications</h2>

        {publications.map((pub, index) => (
          <a
            key={index}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 -mx-6 rounded-lg hover:bg-card transition-colors"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
              <div className="flex items-start gap-2">
                <FileTextIcon className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-xs tracking-wide text-muted-foreground uppercase">{pub.year}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors flex items-start gap-2 leading-snug">
                  {pub.title}
                  <ArrowUpRightIcon className="w-4 h-4 flex-shrink-0 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all mt-1" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {tag}
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
