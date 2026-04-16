import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Home() {
  return (
    <main style={{ overflow: 'hidden' }}>
      <Navbar />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
