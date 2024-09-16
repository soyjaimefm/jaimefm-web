import HeroSection from '@/components/modules/HeroSection';
import ProjectsSection from '@/components/modules/ProjectsSection';
import ServicesSection from '@/components/modules/ServicesSection';
import ContactSection from '@/components/modules/ContactSection';
import Products from '@/components/modules/Products';
import Features from '@/components/modules/Features';

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="my-6 border-blue-bayoux-700 md:my-10 dark:border-blue-bayoux-300" />
      <Features />
      <ProjectsSection />
      <ServicesSection />
      <hr className="my-6 border-blue-bayoux-700 md:my-10 dark:border-blue-bayoux-300" />
      <ContactSection />
    </>
  )
}