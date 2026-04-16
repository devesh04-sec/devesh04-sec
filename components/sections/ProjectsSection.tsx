'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { projectsViewModel } from '@/viewmodels/projectsViewModel'

export default function ProjectsSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const projects = projectsViewModel.getAllProjects()

  return (
    <SectionWrapper
      id="projects"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 100%)'
          : 'linear-gradient(180deg, #f8f9fa 0%, #f0f0ff 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          title="Projects"
          subtitle="Things I've built"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {project.featured && (
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '100px',
                      marginBottom: '1rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    ⭐ FEATURED
                  </span>
                )}

                {/* Project preview placeholder */}
                <div
                  style={{
                    height: '140px',
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, rgba(108,99,255,${0.1 + i * 0.05}), rgba(0,210,255,${0.1 + i * 0.05}))`,
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}
                >
                  {['💻', '📋', '🤖', '📊'][i % 4]}
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: isDark ? '#fff' : '#111',
                    marginBottom: '0.5rem',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '100px',
                        background: 'rgba(108,99,255,0.12)',
                        border: '1px solid rgba(108,99,255,0.2)',
                        color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      textAlign: 'center',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      textAlign: 'center',
                      borderRadius: '8px',
                      background: 'transparent',
                      color: isDark ? '#fff' : '#111',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                    }}
                  >
                    Source
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
