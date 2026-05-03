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
const STOPS: Stop[] = [
  { hour: 0,    colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
  { hour: 3,    colors: { bg: '#0c0c18', fg: '#e0e0f8', muted: '#8888c0', border: '#1a1a28' } },
  { hour: 5,    colors: { bg: '#0e0e1e', fg: '#d8d8f8', muted: '#8080b8', border: '#1c1c2e' } },
  { hour: 6,    colors: { bg: '#2a4060', fg: '#d8eaf8', muted: '#7090c0', border: '#304860' } },
  { hour: 7,    colors: { bg: '#b0c8e0', fg: '#0a1020', muted: '#3a6090', border: '#88a8cc' } },
  { hour: 8.5,  colors: { bg: '#d8e8f4', fg: '#080e18', muted: '#4a6888', border: '#b0c8e0' } },
  { hour: 10,   colors: { bg: '#eef3f8', fg: '#0e1520', muted: '#586878', border: '#ccd6e0' } },
  { hour: 11,   colors: { bg: '#f8fbfe', fg: '#0a0f1a', muted: '#5a6070', border: '#dce8f0' } },
  { hour: 12,   colors: { bg: '#ffffff', fg: '#0a0a0a', muted: '#606060', border: '#e0e0e0' } },
  { hour: 13,   colors: { bg: '#fefcf8', fg: '#100a00', muted: '#706050', border: '#ece0d0' } },
  { hour: 15,   colors: { bg: '#fdf9f4', fg: '#180e00', muted: '#806050', border: '#ecddd0' } },
  { hour: 16.5, colors: { bg: '#f9eedc', fg: '#201000', muted: '#907038', border: '#e0c890' } },
  { hour: 17.5, colors: { bg: '#f5dcac', fg: '#2d1800', muted: '#9a7030', border: '#d8c080' } },
  { hour: 18.5, colors: { bg: '#c84818', fg: '#fce8c0', muted: '#e09060', border: '#a03818' } },
  { hour: 19.5, colors: { bg: '#2a0e06', fg: '#f8c870', muted: '#c07838', border: '#4a1e0e' } },
  { hour: 20.5, colors: { bg: '#140808', fg: '#f0c060', muted: '#a06830', border: '#280e0e' } },
  { hour: 21,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
  { hour: 24,   colors: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#888888', border: '#1a1a1a' } },
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
