'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function SectionWrapper({ id, children, style, className }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
