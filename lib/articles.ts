export interface Article {
  slug: string
  title: string
  number: string
  date: string
  category: string
  excerpt: string
  body: Section[]
}

interface Section {
  n: string
  heading: string
  text: string
}

export const articles: Article[] = [
  {
    slug: 'the-r-k-brand',
    title: 'Creation of the R—K brand',
    number: 'N°1',
    date: 'March 19, 2026',
    category: 'Insight',
    excerpt: 'The brand emerged as a response to what design had become — template-driven, interchangeable, and optimised for speed over intention.',
    body: [
      { n: '01', heading: 'The problem with templates', text: 'Design had become a commodity. Pick a template, swap the logo, ship it. The result is a market full of brands that look like each other and stand for nothing. R—K was built as a direct rejection of that approach.' },
      { n: '02', heading: 'Perception is foundational', text: 'Not decorative. Perception is the first thing a brand does — before a word is read, before a product is tried. The visual language either builds trust or erodes it. There is no neutral.' },
      { n: '03', heading: 'Integrated authorship', text: 'Concept, structure, and visual language cannot be fragmented across different hands without losing coherence. The work here is authored end to end — from strategic brief to deployed code.' },
      { n: '04', heading: 'The logotype', text: 'R—K. Two letters and an em dash. The dash is not decoration — it is tension, pause, and relation. A mark that communicates without explaining itself.' },
      { n: '05', heading: 'Build for presence', text: 'Not volume. The practice is kept deliberately small. One client at a time gets the full weight of attention. That is the offer.' },
      { n: '06', heading: 'What this means in practice', text: 'Fewer projects, deeper engagement, and work that outlasts the trend cycle. Every decision traces back to a reason. That is the standard.' },
    ],
  },
  {
    slug: 'when-is-it-time-for-a-rebrand',
    title: 'When is it time for a rebrand?',
    number: 'N°4',
    date: 'March 19, 2026',
    category: 'Insight',
    excerpt: 'Brands evolve. Companies grow, markets change, and what once represented a business well can slowly fall out of alignment.',
    body: [
      { n: '01', heading: 'Growth & Expansion', text: 'Companies outgrow original identities as they add services, enter new markets, or shift upmarket. What worked for a local audience may actively undermine credibility at a larger scale.' },
      { n: '02', heading: 'Fragmentation', text: 'Inconsistent visuals and messaging across platforms erode brand clarity. This typically happens during unstructured growth — when the brand was never built as a system.' },
      { n: '03', heading: 'Industry Evolution', text: 'Competitors advance and visual standards shift. A brand that was distinctive five years ago may now read as dated. Distinction is not a one-time achievement — it requires maintenance.' },
      { n: '04', heading: 'Internal Transformation', text: 'Companies refine missions or vision statements. When the internal reality changes, the brand must reflect the current direction — not the stage the business has grown past.' },
      { n: '05', heading: 'The honest question', text: 'A rebrand is not about chasing trends or looking new for the sake of it. Most of the time, it happens because the brand no longer reflects the company behind it. That gap is expensive.' },
    ],
  },
  {
    slug: 'process-of-a-r-k-project',
    title: 'Process of a R—K project',
    number: 'N°2',
    date: 'March 2026',
    category: 'Insight',
    excerpt: 'Every project follows the same five-phase structure — not because it is rigid, but because the sequence is earned.',
    body: [
      { n: '01', heading: 'Discovery', text: 'Understanding the business, the audience, and the competitive context before any creative work begins. Assumptions are expensive. Discovery removes them.' },
      { n: '02', heading: 'Strategy', text: 'Translating research into creative direction. Positioning, messaging hierarchy, and a brief that can be defended. This is where most projects are won or lost.' },
      { n: '03', heading: 'Design', text: 'Visual exploration grounded in the strategy. Multiple directions, honest critique, and a willingness to discard anything that does not serve the brief.' },
      { n: '04', heading: 'Development', text: 'The design built in code — faithfully, performantly, and with the same attention to detail as the visual work. No compromise at the last mile.' },
      { n: '05', heading: 'Launch & Handoff', text: 'Delivery is not the end. The project is complete when the client can operate it independently and the work performs as intended. That is the handoff standard.' },
    ],
  },
  {
    slug: 'presence-as-a-brand-cornerstone',
    title: 'Presence as a brand cornerstone',
    number: 'N°3',
    date: 'March 2026',
    category: 'Insight',
    excerpt: 'Presence is not visibility. It is the quality of attention a brand commands when it enters a room — digital or physical.',
    body: [
      { n: '01', heading: 'Presence vs. visibility', text: 'Visibility is easy. Post enough and you will be seen. Presence is something different — it is the sense that a brand occupies a distinct space in the mind. You cannot buy it.' },
      { n: '02', heading: 'The role of restraint', text: 'Strong presence almost always involves restraint. What is left out matters as much as what is included. Brands that try to say everything end up saying nothing.' },
      { n: '03', heading: 'Consistency as foundation', text: 'Presence is built through repetition of the right signals — not variation for the sake of freshness. Consistency compounds. Inconsistency erodes.' },
      { n: '04', heading: 'Emotional loyalty', text: 'The goal is not followers or impressions. It is the kind of connection that survives a product comparison — where the brand itself becomes the reason to choose.' },
      { n: '05', heading: 'Building for the long term', text: 'Presence takes time to build and is quickly damaged. The decisions made in the first year of a brand set the trajectory for the decade that follows. Treat them accordingly.' },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAdjacentArticles(slug: string): { prev: Article; next: Article } {
  const idx = articles.findIndex((a) => a.slug === slug)
  const prev = articles[(idx - 1 + articles.length) % articles.length]
  const next = articles[(idx + 1) % articles.length]
  return { prev, next }
}
