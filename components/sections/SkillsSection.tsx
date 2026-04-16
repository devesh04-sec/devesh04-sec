'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { skillsViewModel } from '@/viewmodels/skillsViewModel'

export default function SkillsSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const groupedSkills = skillsViewModel.getGroupedSkills()

  return (
    <SectionWrapper
      id="skills"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0a 100%)'
          : 'linear-gradient(180deg, #f0f0ff 0%, #f8f9fa 100%)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {groupedSkills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <GlassCard hoverEffect={false}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '24px',
                      borderRadius: '2px',
                      background: group.color,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: isDark ? '#fff' : '#111',
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                      style={{
                        display: 'inline-block',
                        padding: '0.4rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'default',
                        background: `linear-gradient(135deg, ${group.color}20, ${group.color}10)`,
                        border: `1px solid ${group.color}40`,
                        color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
                        boxShadow: `0 2px 8px ${group.color}15`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
