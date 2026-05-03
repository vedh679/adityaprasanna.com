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
      {/* pb-[52px] keeps page content above the fixed bottom timeline */}
      <body className="bg-background text-foreground antialiased pb-[52px]">
        <TimeThemeProvider />
        <Navbar />
        <main className="pt-[65px]">{children}</main>
        <Footer />
        <DayTimeline />
      </body>
    </html>
  )
}
