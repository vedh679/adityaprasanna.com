import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
      <body className="bg-background text-foreground antialiased">
        <TimeThemeProvider />
        <Navbar />
        <DayTimeline />
        {/* pt-[65px] navbar + pt-[40px] timeline = 105px */}
        <main className="pt-[105px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
