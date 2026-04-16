'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { experienceViewModel } from '@/viewmodels/experienceViewModel'

export default function ExperienceSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const experiences = experienceViewModel.getExperience()

  return (
    <SectionWrapper
      id="experience"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 100%)'
          : 'linear-gradient(180deg, #f8f9fa 0%, #f0f0ff 100%)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #6C63FF, #00D2FF)',
              opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ paddingLeft: '3.5rem', position: 'relative' }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '1.5rem',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                    boxShadow: '0 0 20px rgba(108,99,255,0.5)',
                    transform: 'translateX(-50%)',
                  }}
                />

                <GlassCard hoverEffect={false}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: isDark ? '#fff' : '#111',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.95rem',
                          background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '100px',
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '100px',
                          background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,210,255,0.15))',
                          border: '1px solid rgba(108,99,255,0.25)',
                          color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
