import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import WorksGrid from '@/components/WorksGrid'
import MarqueeStrip from '@/components/MarqueeStrip'
import ServicesBlock from '@/components/ServicesBlock'
import InsightsGrid from '@/components/InsightsGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Philosophy />
      <WorksGrid />
      <ServicesBlock />
      <InsightsGrid />
    </>
  )
}
