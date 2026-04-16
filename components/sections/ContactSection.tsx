'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/app/providers'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { profileViewModel } from '@/viewmodels/profileViewModel'

type FormData = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function ContactSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const contactInfo = profileViewModel.getContactInfo()

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    else if (formData.message.trim().length < 10) errs.message = 'Message too short (min 10 chars)'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('loading')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const inputStyle = (error?: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.85rem 1.2rem',
    borderRadius: '10px',
    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
    border: `1px solid ${error ? '#ff4757' : isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
    color: isDark ? '#fff' : '#111',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  })

  return (
    <SectionWrapper
      id="contact"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0a 100%)'
          : 'linear-gradient(180deg, #f0f0ff 0%, #f8f9fa 100%)',
        paddingBottom: '4rem',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together on something amazing"
        />

        <GlassCard hoverEffect={false}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', marginBottom: '0.5rem' }}>
              Or reach me directly at
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
              }}
            >
              {contactInfo.email}
            </a>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: isDark ? '#fff' : '#111', marginBottom: '0.5rem' }}>
                Message Sent!
              </h3>
              <p style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                I&apos;ll get back to you as soon as possible.
              </p>
              <motion.button
                onClick={() => setStatus('idle')}
                whileHover={{ scale: 1.05 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.7rem 2rem',
                  borderRadius: '100px',
                  background: 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
              >
                Send Another
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', marginBottom: '0.5rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  placeholder="Your name"
                  style={inputStyle(errors.name)}
                />
                {errors.name && <p style={{ color: '#ff4757', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.name}</p>}
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  placeholder="your@email.com"
                  style={inputStyle(errors.email)}
                />
                {errors.email && <p style={{ color: '#ff4757', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.email}</p>}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '120px' }}
                />
                {errors.message && <p style={{ color: '#ff4757', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '100px',
                  background: status === 'loading'
                    ? 'rgba(108,99,255,0.5)'
                    : 'linear-gradient(135deg, #6C63FF, #00D2FF)',
                  color: '#fff',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  boxShadow: '0 0 30px rgba(108,99,255,0.3)',
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message 🚀'}
              </motion.button>
            </form>
          )}
        </GlassCard>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
            fontSize: '0.85rem',
          }}
        >
          <p>Built with Next.js + Tamagui + Framer Motion ⚡</p>
          <p style={{ marginTop: '0.5rem' }}>© {new Date().getFullYear()} Devesh. All rights reserved.</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
