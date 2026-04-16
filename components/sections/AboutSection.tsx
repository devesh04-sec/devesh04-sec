'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { profileViewModel } from '@/viewmodels/profileViewModel'

export default function AboutSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const bio = profileViewModel.getBio()
  const highlights = profileViewModel.getHighlights()
  const socialLinks = profileViewModel.getSocialLinks()

  return (
    <SectionWrapper
      id="about"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0a0a0a 0%, #0d0d1a 100%)'
          : 'linear-gradient(180deg, #f8f9fa 0%, #f0f0ff 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.4), rgba(0,210,255,0.4))',
                border: '3px solid rgba(108,99,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                position: 'relative',
                boxShadow: '0 0 80px rgba(108,99,255,0.3)',
              }}
            >
              <span>👨‍💻</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  borderRadius: '50%',
                  border: '2px dashed rgba(108,99,255,0.3)',
                }}
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                marginBottom: '2rem',
              }}
            >
              {bio}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.github && (
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '100px',
                    background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  GitHub
                </motion.a>
              )}
              {socialLinks.linkedin && (
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '100px',
                    background: 'transparent',
                    color: isDark ? '#fff' : '#111',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                  }}
                >
                  LinkedIn
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginTop: '4rem',
          }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                  }}
                >
                  {h.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                    fontWeight: 500,
                  }}
                >
                  {h.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
