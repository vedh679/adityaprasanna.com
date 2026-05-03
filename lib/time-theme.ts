export interface ThemeColors {
  bg: string
  fg: string
  muted: string
  border: string
}

interface Stop {
  hour: number
  colors: ThemeColors
}

// 24-hour colour journey: dark night → blue dawn → bright noon → golden sunset → dark night
const STOPS: Stop[] = [
  { hour: 0,    colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
  { hour: 5,    colors: { bg: '#0e0e1e', fg: '#d8d8f8', muted: '#8080b8', border: '#1c1c2e' } },
  { hour: 7,    colors: { bg: '#b8cce0', fg: '#0a1020', muted: '#4068a0', border: '#90aed0' } },
  { hour: 10,   colors: { bg: '#eef3f8', fg: '#0f1624', muted: '#5a6878', border: '#ccd6e0' } },
  { hour: 12,   colors: { bg: '#ffffff', fg: '#0a0a0a', muted: '#606060', border: '#e0e0e0' } },
  { hour: 15,   colors: { bg: '#fdf9f4', fg: '#180e00', muted: '#806050', border: '#ecddd0' } },
  { hour: 17.5, colors: { bg: '#f5dcac', fg: '#2d1800', muted: '#9a7030', border: '#d8c080' } },
  { hour: 19.5, colors: { bg: '#2a0e06', fg: '#f8c870', muted: '#c07838', border: '#4a1e0e' } },
  { hour: 21,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
  { hour: 24,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
]

// 24h gradient string for the timeline bar (keyed by stop positions)
export const TIMELINE_GRADIENT = `linear-gradient(to right,
  #0a0a0a 0%,
  #0e0e1e 21%,
  #b8cce0 29%,
  #eef3f8 42%,
  #ffffff 50%,
  #fdf9f4 63%,
  #f5dcac 73%,
  #2a0e06 81%,
  #0a0a0a 87%,
  #0a0a0a 100%
)`

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

function lerpHex(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a)
  const [r2, g2, b2] = hexToRgb(b)
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const bl = Math.round(b1 + (b2 - b1) * t)
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${bl.toString(16).padStart(2, '0')}`
}

function lerpTheme(a: ThemeColors, b: ThemeColors, t: number): ThemeColors {
  return {
    bg: lerpHex(a.bg, b.bg, t),
    fg: lerpHex(a.fg, b.fg, t),
    muted: lerpHex(a.muted, b.muted, t),
    border: lerpHex(a.border, b.border, t),
  }
}

export function getThemeAtHour(decimalHours: number): ThemeColors {
  const h = ((decimalHours % 24) + 24) % 24
  for (let i = 0; i < STOPS.length - 1; i++) {
    if (h >= STOPS[i].hour && h <= STOPS[i + 1].hour) {
      const t = (h - STOPS[i].hour) / (STOPS[i + 1].hour - STOPS[i].hour)
      return lerpTheme(STOPS[i].colors, STOPS[i + 1].colors, t)
    }
  }
  return STOPS[0].colors
}

export function applyTheme(colors: ThemeColors) {
  const root = document.documentElement
  root.style.setProperty('--color-bg', colors.bg)
  root.style.setProperty('--color-fg', colors.fg)
  root.style.setProperty('--color-muted', colors.muted)
  root.style.setProperty('--color-border', colors.border)
}

export function currentDecimalHours(): number {
  const now = new Date()
  return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
}
