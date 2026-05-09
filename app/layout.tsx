import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import DayTimeline from '@/components/DayTimeline'
import TimeThemeProvider from '@/components/TimeThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A—P | Design & Code',
  description: 'Design & Code for those who refuse to settle.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased h-screen overflow-hidden">
        <TimeThemeProvider />
        <Navbar />
        <main className="absolute inset-x-0 top-[65px] bottom-[52px] overflow-hidden">
          {children}
        </main>
        <DayTimeline />
      </body>
    </html>
  )
}
