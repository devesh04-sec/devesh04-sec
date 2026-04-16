'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        transition={{ duration: 0.5 }}
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, #6C63FF, #00D2FF)',
          borderRadius: '2px',
          margin: centered ? '0 auto 1rem' : '0 0 1rem',
        }}
      />
      <h2
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: isDark ? '#fff' : '#111',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '1.1rem',
            color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            maxWidth: '500px',
            margin: centered ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
