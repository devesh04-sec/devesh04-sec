'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { servicesViewModel } from '@/viewmodels/servicesViewModel'

export default function ServicesSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const services = servicesViewModel.getServices()

  return (
    <SectionWrapper
      id="services"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0a 100%)'
          : 'linear-gradient(180deg, #f0f0ff 0%, #f8f9fa 100%)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          title="Services"
          subtitle="What I bring to the table"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard>
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,210,255,0.2))',
                    borderRadius: '12px',
                    padding: '0.5rem 0.7rem',
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: isDark ? '#fff' : '#111',
                    marginBottom: '0.75rem',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
