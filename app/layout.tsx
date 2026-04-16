import type { Metadata } from 'next'
import { TamaguiProvider } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devesh | Full Stack Developer',
  description: 'Portfolio of Devesh - Full Stack Developer building modern web applications.',
  keywords: ['developer', 'portfolio', 'fullstack', 'react', 'nextjs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TamaguiProvider>{children}</TamaguiProvider>
      </body>
    </html>
  )
}
