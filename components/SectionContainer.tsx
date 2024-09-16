import { ReactNode } from "react"

type SectionContainerProps = {
  sectionId?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionContainer({sectionId, children, className}: SectionContainerProps) {
  return (
    <section id={sectionId} className={className}>
      <div className="container px-6 py-12 mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  )
}