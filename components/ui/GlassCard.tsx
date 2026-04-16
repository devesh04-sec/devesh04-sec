'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers'

interface GlassCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  hoverEffect?: boolean
}

export default function GlassCard({ children, style, hoverEffect = true }: GlassCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      style={{
        background: isDark
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        border: isDark
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.07)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: isDark
          ? '0 8px 32px rgba(0, 0, 0, 0.3)'
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
