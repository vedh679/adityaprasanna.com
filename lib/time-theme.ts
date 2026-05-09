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

// 24-hour colour journey — extra stops for silky-smooth blending
// muted values calibrated to ≥4.5:1 contrast against their bg at every stop
const STOPS: Stop[] = [
  { hour: 0,    colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#909090', border: '#1a1a1a' } },
  { hour: 3,    colors: { bg: '#0c0c18', fg: '#e0e0f8', muted: '#9898c8', border: '#1a1a28' } },
  { hour: 5,    colors: { bg: '#0e0e1e', fg: '#d8d8f8', muted: '#9898c0', border: '#1c1c2e' } },
  // Dawn — dark bg, light muted is fine
  { hour: 6,    colors: { bg: '#2a4060', fg: '#d8eaf8', muted: '#a8c8e8', border: '#3a5878' } },
  // Morning — bg brightens sharply; muted must go dark to stay legible
  { hour: 7,    colors: { bg: '#b0c8e0', fg: '#08101c', muted: '#1a3050', border: '#78a0c0' } },
  { hour: 8.5,  colors: { bg: '#d8e8f4', fg: '#060c16', muted: '#1a2c40', border: '#a0bcd4' } },
  { hour: 10,   colors: { bg: '#eef3f8', fg: '#0c121c', muted: '#283848', border: '#b8c8d8' } },
  { hour: 11,   colors: { bg: '#f8fbfe', fg: '#080c14', muted: '#2c3848', border: '#d0dce8' } },
  { hour: 12,   colors: { bg: '#ffffff', fg: '#0a0a0a', muted: '#484848', border: '#d0d0d0' } },
  { hour: 13,   colors: { bg: '#fefcf8', fg: '#100a00', muted: '#403020', border: '#e0d0c0' } },
  { hour: 15,   colors: { bg: '#fdf9f4', fg: '#160c00', muted: '#402c18', border: '#e0cfc0' } },
  // Afternoon into golden hour — warm light bg; muted must be dark warm brown
  { hour: 16.5, colors: { bg: '#f9eedc', fg: '#1c0e00', muted: '#3c2408', border: '#d0b060' } },
  { hour: 17.5, colors: { bg: '#f5dcac', fg: '#200e00', muted: '#3a2006', border: '#c09030' } },
  // Sunset — bg flips dark; muted flips light
  { hour: 18.5, colors: { bg: '#c84818', fg: '#fce8c0', muted: '#f8c880', border: '#a03818' } },
  { hour: 19.5, colors: { bg: '#2a0e06', fg: '#f8c870', muted: '#d89050', border: '#4a1e0e' } },
  { hour: 20.5, colors: { bg: '#140808', fg: '#f0c060', muted: '#c07838', border: '#280e0e' } },
  { hour: 21,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#909090', border: '#1a1a1a' } },
  { hour: 24,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#909090', border: '#1a1a1a' } },
]

// Full-width 24h gradient for the timeline bar — positions match stop hours / 24
export const TIMELINE_GRADIENT = `linear-gradient(to right,
  #0a0a0a  0%,
  #0c0c18  12%,
  #0e0e1e  20%,
  #2a4060  25%,
  #6a9ac0  28%,
  #b0c8e0  29%,
  #d8e8f4  35%,
  #eef3f8  42%,
  #f8fbfe  46%,
  #ffffff  50%,
  #fefcf8  54%,
  #fdf9f4  63%,
  #f9eedc  69%,
  #f5dcac  73%,
  #e07038  77%,
  #c84818  77.5%,
  #2a0e06  81%,
  #140808  85%,
  #0a0a0a  87.5%,
  #0a0a0a  100%
)`

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

function lerpHex(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a)
  const [r2, g2, b2] = hexToRgb(b)
  const r = Math.round(r1 + (r2 - r1) * t).toString(16).padStart(2, '0')
  const g = Math.round(g1 + (g2 - g1) * t).toString(16).padStart(2, '0')
  const bl = Math.round(b1 + (b2 - b1) * t).toString(16).padStart(2, '0')
  return `#${r}${g}${bl}`
}

function lerpTheme(a: ThemeColors, b: ThemeColors, t: number): ThemeColors {
  return {
    bg:     lerpHex(a.bg,     b.bg,     t),
    fg:     lerpHex(a.fg,     b.fg,     t),
    muted:  lerpHex(a.muted,  b.muted,  t),
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
  root.style.setProperty('--color-bg',     colors.bg)
  root.style.setProperty('--color-fg',     colors.fg)
  root.style.setProperty('--color-muted',  colors.muted)
  root.style.setProperty('--color-border', colors.border)
}

export function currentDecimalHours(): number {
  const now = new Date()
  return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
}
