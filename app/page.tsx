import HorizontalScroller, { Panel } from '@/components/HorizontalScroller'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import WorksGrid from '@/components/WorksGrid'
import MarqueeStrip from '@/components/MarqueeStrip'
import ServicesBlock from '@/components/ServicesBlock'
import InsightsGrid from '@/components/InsightsGrid'

export default function Home() {
  return (
    <HorizontalScroller>
      <Panel><Hero /></Panel>
      <Panel><Philosophy /></Panel>
      <Panel><WorksGrid /></Panel>
      <Panel><MarqueeStrip /></Panel>
      <Panel><ServicesBlock /></Panel>
      <Panel><InsightsGrid /></Panel>
    </HorizontalScroller>
  )
}
