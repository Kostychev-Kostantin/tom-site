# AGENTS.md

## Commands
- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build (use to verify changes compile)
- `npm run lint` — ESLint check
- No test suite configured.

## Architecture
Next.js 14 App Router, single-page marketing site. All routes in `app/` (layout.tsx, page.tsx, globals.css). UI components in `components/` (Header, Hero, Services, WhyUs, Process, Focus, Contact, Footer). Styling: Tailwind CSS with CSS custom properties in globals.css (--background, --foreground, --surface, --border, --muted). Animations: framer-motion. Icons: lucide-react. Font: Geist (local, `app/fonts/`). Deploys to Vercel.

## Code Style
- All components are `"use client"` with default exports. TypeScript strict mode.
- Imports: react/next first, then framer-motion, then lucide-react. No barrel files.
- Colors via HSL CSS vars: `hsl(var(--border))`, `hsl(var(--muted))`, `text-foreground`, `bg-surface`. No raw hex/rgb.
- Design: monochrome dark theme (black/white/gray only). No colored accents. Buttons: `bg-foreground text-[hsl(var(--background))]` for primary, bordered for secondary.
- Font: single `font-sans` (Geist). No serif or display fonts.
- Framer Motion for scroll-triggered animations (`useInView`) and entrance transitions. Keep motion subtle.
- Component data (services, benefits, steps) as `const` arrays at module top, not fetched.
- Form submission via Formspree (`https://formspree.io/f/xeoydnel`).
