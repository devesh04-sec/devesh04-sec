'use client'

import { TamaguiProvider as TamaguiProviderBase, Theme } from 'tamagui'
import { useEffect, useState, createContext, useContext } from 'react'
import config from '@/tamagui.config'

const ThemeContext = createContext<{
  theme: 'dark' | 'light'
  toggleTheme: () => void
}>({ theme: 'dark', toggleTheme: () => {} })

export const useTheme = () => useContext(ThemeContext)

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) setTheme(stored)
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <TamaguiProviderBase config={config} defaultTheme={theme}>
      <Theme name={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </Theme>
    </TamaguiProviderBase>
  )
}
