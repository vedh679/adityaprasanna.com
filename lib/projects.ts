export interface Project {
  slug: string
  id: string
  title: string
  category: string
  location: string
  date: string
  year: string
  services: string[]
  description: string
  philosophy: string
  liveUrl?: string
  imageCount: number
}

export const projects: Project[] = [
  {
    slug: 'r-k',
    id: 'PROJECT-0000',
    title: 'A—P',
    category: 'Identity',
    location: 'Enschede, NL',
    date: 'May 2026',
    year: '2026',
    services: ['Identity', 'Art Direction', 'Web Design + Development'],
    description:
      'A—P builds presence and resonance through design, motion, and code that shapes true brand character. Doubt is expensive — A—P aims to remove doubt early by making the standard obvious.',
    philosophy:
      'The brand emerged as a response to what design had become. Rejecting template-driven approaches in favour of intentional identity creation. Every decision — form, type, space — carries consequence.',
    liveUrl: 'https://www.adityaprasanna.com',
    imageCount: 1,
  },
  {
    slug: 'prop',
    id: 'PROJECT-0001',
    title: 'Prop Films',
    category: 'Sound',
    location: 'Amsterdam, NL',
    date: 'Jul 2025',
    year: '2025',
    services: ['Exploration', 'Strategy'],
    description:
      'Film production house located in Amsterdam, creating experimental media for lifestyle and fashion brands.',
    philosophy:
      'Experimental media doesn\'t work with generic branding. For Prop, an experience-led identity was built — instantly recognisable, impossible to confuse with the competition.',
    imageCount: 1,
  },
  {
    slug: 'buyt',
    id: 'PROJECT-0001',
    title: 'Buyt Bags',
    category: 'Lifestyle',
    location: 'Amsterdam, NL',
    date: 'Dec 2025',
    year: '2025',
    services: ['Web Development', 'Exploration'],
    description:
      'Amsterdam-based travel and accessories company. A campaign-driven digital platform designed to manage content-rich campaigns at scale.',
    philosophy:
      'The strategy is not volume — it is perception. Campaign-led storytelling elevates product into atmosphere. Digital execution carries that intent.',
    liveUrl: 'https://www.buytbags.com',
    imageCount: 1,
  },
  {
    slug: 'ta-design',
    id: 'PROJECT-0002',
    title: 'TA Design',
    category: 'Interiors',
    location: 'Hellendoorn, NL',
    date: 'Apr 2025',
    year: '2025',
    services: ['Web Design + Development'],
    description:
      'Interior design, styling and 3D studio based in Hellendoorn. Accessible first. Tasteful throughout.',
    philosophy:
      'Built to convert, while letting TA Design\'s craftsmanship do the talking. The site earns trust before a word is read.',
    liveUrl: 'https://www.tadesign.nl',
    imageCount: 3,
  },
  {
    slug: 'mfk',
    id: 'PROJECT-0003',
    title: 'Maison Francis Kurkdjian',
    category: 'Sound',
    location: 'Paris, FR',
    date: 'Mar 2024',
    year: '2024',
    services: ['Exploration'],
    description:
      'Luxury French fragrance house where tradition intertwines with modern innovation. Experience luxury through personalised service and meticulous attention to detail.',
    philosophy:
      'A study in restraint. For a house built on nuance, the work had to communicate prestige without announcement — presence felt before it is seen.',
    imageCount: 4,
  },
  {
    slug: 'chris-hansen',
    id: 'PROJECT-0004',
    title: 'Chris+Hansen',
    category: 'Interiors',
    location: 'New York, US',
    date: 'Jan 2025',
    year: '2025',
    services: ['Identity', 'Art Direction'],
    description:
      'A living gallery — eccentric pieces and interior services, curated with restraint.',
    philosophy:
      'Large-scale typography functioning as display signage. Unconventional design elements balanced with measured aesthetics — discerning taste guiding every decision.',
    imageCount: 2,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  return { prev, next }
}
