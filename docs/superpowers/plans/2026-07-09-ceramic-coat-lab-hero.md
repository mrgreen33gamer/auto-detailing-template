# Ceramic Coat Lab Hero Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the auto-detailing-template homepage hero's shared "industrial gauge dashboard" visual with a bespoke "Coating Cross-Section" diagram (layered slab: Primer / Base Paint / Ceramic + Clear Gloss, with a shimmer sweep and rolling water-bead animation, plus a plain stat strip and trait chips), then push all pending commits.

**Architecture:** Single-file component change — `WelcomePage.tsx` keeps its existing pattern of small private subcomponents defined above the default export (no new files). `styles.module.scss` keeps everything outside the "Ceramic Coat Lab" section (lines 1–230 hero/layout/content/CTA styles, lines 612+ per-template "uniqueness"/"fleet QA" overrides) untouched, and only the dashboard-specific block in the middle is replaced.

**Tech Stack:** Next.js (App Router), React, TypeScript, framer-motion, SCSS Modules.

## Global Constraints

- This repo has no test runner configured (`package.json` scripts: `dev`, `build`, `start`, `lint`, `postinstall`, `typecheck` — no `test` script). Verification for every task is `npm run typecheck` plus a manual `npm run dev` + Playwright screenshot check, not unit tests. Do not invent a test framework.
- `npm run typecheck` must pass (clean `tsc --noEmit`) before every commit.
- Keep the outer visual wrapper's class name as `styles.visual` — a fleet-wide "mobile hero fold safety" rule at the bottom of `styles.module.scss` (`@media (max-width: 960px) { .visual, .heroVisual, ... { display: none !important; } }`) depends on this exact class name to hide the panel on phone/tablet. Do not rename it.
- Never use a pill/circle border-radius (e.g. `999px`, `50%`) on the outer `.panel` card — a documented cross-template bug ("crescent clip") happens when a very large border-radius combines with `overflow: hidden` on a card. Keep `.panel`'s radius small (≤ 14px) as written below.
- Follow this repo's existing commit convention: one commit per task, `git add` specific files only (never `git add -A`), commit message ends with the `Co-Authored-By`/`Claude-Session` trailer already used in this session's commits.
- Do not push after Task 1 — only Task 2 pushes, and only after Task 1's visual verification passes.

---

### Task 1: Replace the Ceramic Coat Lab hero visual (component + styles)

**Files:**
- Modify: `components/Pages/Home/WelcomePage/WelcomePage.tsx` (full-file rewrite)
- Modify: `components/Pages/Home/WelcomePage/styles.module.scss` (full-file rewrite)

**Interfaces:**
- Consumes: nothing from other tasks (this is the only implementation task).
- Produces: nothing consumed elsewhere — `WelcomePage` is rendered by `src/app/page.tsx` via `import WelcomePage from "#/Pages/Home/WelcomePage/WelcomePage";` with no props, which does not change.

- [ ] **Step 1: Replace `WelcomePage.tsx` with the new component**

Write this exact content to `components/Pages/Home/WelcomePage/WelcomePage.tsx`, replacing the entire file:

```tsx
// _archetype-library/hero-g-dashboard/Component.tsx
//
// Hero G: Live Control Panel — reskinned for GlossLab as a Ceramic Coat Lab
// coating cross-section: a layered slab diagram (Primer / Base Paint /
// Ceramic + Clear Gloss) with a shimmer sweep and rolling water-bead
// animation, plus a plain stat strip (no gauge bars — they don't map to
// non-percentage values like "Mobile: Yes").
'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

interface CoatingLayer {
  key:     string;
  label:   string;
  sub:     string;
  accent?: boolean;
}

interface HeroStat {
  label: string;
  value: string;
}

function parseStatValue(raw: string): { numeric: number | null; prefix: string; suffix: string } {
  const match = raw.match(/^([^0-9.-]*)(-?[\d.]+)(.*)$/);
  if (!match) return { numeric: null, prefix: '', suffix: raw };
  const num = parseFloat(match[2]);
  if (Number.isNaN(num)) return { numeric: null, prefix: '', suffix: raw };
  return { numeric: num, prefix: match[1], suffix: match[3] };
}

function CountingValue({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => {
    if (parsed.numeric === null) return value;
    const decimals = String(parsed.numeric).includes('.')
      ? (String(parsed.numeric).split('.')[1]?.length ?? 0)
      : 0;
    const rounded = decimals > 0 ? v.toFixed(decimals) : String(Math.round(v));
    return `${parsed.prefix}${rounded}${parsed.suffix}`;
  });
  const [text, setText] = useState(parsed.numeric === null ? value : `${parsed.prefix}0${parsed.suffix}`);

  useEffect(() => {
    if (parsed.numeric === null) {
      setText(value);
      return;
    }
    const controls = animate(motionVal, parsed.numeric, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = display.on('change', (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [parsed.numeric, value, delay, motionVal, display]);

  return <span className={styles.statNumber}>{text}</span>;
}

function ShimmerSweep() {
  return (
    <motion.div
      className={styles.shimmerSweep}
      aria-hidden="true"
      initial={{ x: '-120%' }}
      animate={{ x: '220%' }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.6 }}
    />
  );
}

function WaterBead() {
  return (
    <motion.span
      className={styles.waterBead}
      aria-hidden="true"
      initial={{ left: '-6%' }}
      animate={{ left: '104%', y: [0, -3, 0, 2, 0] }}
      transition={{
        left: { duration: 4.2, repeat: Infinity, ease: 'linear', repeatDelay: 0.8 },
        y: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
      }}
    />
  );
}

function CoatingLayerBand({ layer, index }: { layer: CoatingLayer; index: number }) {
  return (
    <motion.div
      className={`${styles.layerBand} ${layer.accent ? styles.layerBandAccent : ''}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
    >
      {layer.accent && (
        <>
          <ShimmerSweep />
          <WaterBead />
        </>
      )}
      <span className={styles.layerLabel}>{layer.label}</span>
      <span className={styles.layerSub}>{layer.sub}</span>
    </motion.div>
  );
}

function CoatingCrossSection({ layers }: { layers: CoatingLayer[] }) {
  return (
    <div className={styles.crossSection}>
      {layers.map((layer, i) => (
        <CoatingLayerBand key={layer.key} layer={layer} index={i} />
      ))}
    </div>
  );
}

function HeroStatStrip({ stats }: { stats: HeroStat[] }) {
  return (
    <div className={styles.statStrip}>
      {stats.map((s, i) => (
        <div key={s.label} className={styles.statItem}>
          <CountingValue value={s.value} delay={0.5 + i * 0.12} />
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function TraitChips({ traits }: { traits: string[] }) {
  return (
    <div className={styles.traitRow}>
      {traits.map((t, i) => (
        <motion.span
          key={t}
          className={styles.traitChip}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

function LabPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span className={styles.panelHeaderDot} aria-hidden="true" />
        <span className={styles.panelHeaderLabel}>GlossLab · Coating Composition</span>
      </div>
      {children}
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Trusted Auto Detailing Studio — Since 2015';
const headlineLines = [
  'Ceramic Gloss.',
  'Interior Care.',
];
const headlineAccent = 'GlossLab.';
const subheadline = 'Ceramic Coatings · Interior Detail · Paint Correction. Transparent packages. Satisfaction Re-Detail Guarantee. Serving Waco and Central Texas with product-certified detailers.';
const primaryCta = { label: 'Call (254) 950-1616', href: 'tel:+12549501616' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Ceramic Coatings',
  'Paint Correction',
  'Product-Certified',
  '11+ Yrs Local',
  'Re-Detail Guarantee',
];
const coatingLayers: CoatingLayer[] = [
  { key: 'ceramic', label: 'Ceramic + Clear Gloss', sub: '9H hardness · hydrophobic', accent: true },
  { key: 'paint',   label: 'Base Paint',            sub: 'Color & flake' },
  { key: 'primer',  label: 'Primer',                sub: 'Corrosion barrier' },
];
const heroStats: HeroStat[] = [
  { value: '9,000+', label: 'Vehicles detailed' },
  { value: '4.9 ★',  label: 'Google rating' },
  { value: '5-yr+',  label: 'Coating warranty' },
];
const heroTraits = ['Hydrophobic', 'UV-Stable', 'Product-Certified'];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <LabPanel>
            <CoatingCrossSection layers={coatingLayers} />
            <HeroStatStrip stats={heroStats} />
            <TraitChips traits={heroTraits} />
          </LabPanel>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace `styles.module.scss` with the new styles**

Write this exact content to `components/Pages/Home/WelcomePage/styles.module.scss`, replacing the entire file. Note that lines 1–230 (hero/layout/content/CTA/chips/visual) and everything from `/* === UNIQUENESS IDENTITY LAYER` onward are copied verbatim from the current file — only the middle "Ceramic Coat Lab" section is new:

```scss
// Hero G — Live Control Panel / Dashboard
// @use path assumes adaptation into components/Pages/Home/WelcomePage/
@use '../../../../src/app/globalVariables.scss' as *;

.hero {
  position: relative;
  height: 100svh;
  background: $obsidian;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -55deg,
      transparent,
      transparent 22px,
      rgba($white, 0.012) 22px,
      rgba($white, 0.012) 23px
    );
    pointer-events: none;
    z-index: 0;
  }
}

.shard {
  position: absolute;
  top: 0;
  right: 0;
  width: 46%;
  height: 100%;
  background: linear-gradient(
    150deg,
    transparent 0%,
    rgba($orange, 0.02) 40%,
    rgba($orange, 0.06) 100%
  );
  clip-path: polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%);
  pointer-events: none;
  z-index: 1;
}

.layout {
  position: relative;
  z-index: 2;
  max-width: 1380px;
  margin: 0 auto;
  padding: clamp(6rem, 11vh, 9rem) clamp(1.5rem, 5vw, 5rem) clamp(5rem, 9vh, 7rem);
  display: grid;
  grid-template-columns: minmax(0, 560px) 1fr;
  gap: clamp(2rem, 4vw, 5rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding: clamp(5rem, 9vh, 7rem) 1.5rem clamp(4rem, 7vh, 6rem);
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 960px) {
    align-items: center;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: $textFont;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba($orange, 0.9);
  border: 1px solid rgba($orange, 0.28);
  background: rgba($orange, 0.07);
  border-radius: 9999px;
  padding: 0.35rem 0.95rem;
  width: fit-content;
}

.badgeDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: $orange;
  box-shadow: 0 0 8px rgba($orange, 0.8);
  animation: pulse 2.4s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.72);
  }
}

.headline {
  font-family: $titleFont;
  font-size: clamp(2.9rem, 5.5vw, 5.4rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: $white;
  margin: 0;
}

.accentLine {
  color: $orange;
}

.sub {
  font-family: $textFont;
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.55;
  color: rgba($white, 0.62);
  max-width: 34rem;
  margin: 0;

  @media (max-width: 960px) {
    max-width: 28rem;
  }
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.ctaPrimary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: $headerFont;
  font-size: 0.92rem;
  font-weight: 700;
  color: $obsidian;
  background: $orange;
  text-decoration: none;
  padding: 0.85rem 1.35rem;
  border-radius: 8px;
  transition: background 0.18s, transform 0.16s;

  &:hover {
    background: $lightorange;
    transform: translateY(-1px);
  }
}

.ctaSecondary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: $headerFont;
  font-size: 0.92rem;
  font-weight: 700;
  color: rgba($white, 0.85);
  text-decoration: none;
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba($white, 0.14);
  transition: border-color 0.18s, background 0.18s;

  &:hover {
    border-color: rgba($white, 0.28);
    background: rgba($white, 0.04);
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: $textFont;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba($white, 0.55);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba($white, 0.08);
  background: rgba($white, 0.03);

  svg {
    color: rgba($orange, 0.8);
  }
}

.visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @media (max-width: 960px) {
    min-height: auto;
  }
}

// ── Ceramic Coat Lab — coating cross-section ─────────────────────────────

.panel {
  width: min(100%, 400px);
  background: linear-gradient(165deg, #1a1d22 0%, #121418 55%, #0e1014 100%);
  border: 1px solid rgba($white, 0.1);
  border-radius: 14px;
  box-shadow:
    inset 0 1px 0 rgba($white, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.4),
    0 28px 56px rgba(0, 0, 0, 0.45);
  padding: 1.25rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.panelHeader {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.panelHeaderDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: $orange;
  box-shadow: 0 0 8px rgba($orange, 0.8);
  animation: pulse 2.4s ease-in-out infinite;
  flex-shrink: 0;
}

.panelHeaderLabel {
  font-family: $textFont;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba($white, 0.45);
}

.crossSection {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.layerBand {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.7rem 0.9rem;
  border-radius: 8px;
  background: rgba($white, 0.03);
  border: 1px solid rgba($white, 0.07);
  overflow: hidden;

  // isometric-ish stagger — each band nudged in from the one above
  &:nth-child(2) { margin-left: 0.5rem; }
  &:nth-child(3) { margin-left: 1rem; }
}

.layerBandAccent {
  background: linear-gradient(120deg, rgba($orange, 0.14), rgba($lightorange, 0.06));
  border-color: rgba($orange, 0.35);
  box-shadow: 0 0 20px rgba($orange, 0.12);
}

.layerLabel {
  font-family: $textFont;
  font-size: 0.78rem;
  font-weight: 700;
  color: $white;
}

.layerSub {
  font-family: $textFont;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: rgba($white, 0.42);
}

.shimmerSweep {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 45%;
  background: linear-gradient(
    100deg,
    transparent 0%,
    rgba($white, 0.16) 45%,
    transparent 90%
  );
  pointer-events: none;
}

.waterBead {
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, rgba($white, 0.95), rgba(#bcd6ff, 0.4) 70%);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

.statStrip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  padding-top: 0.9rem;
  border-top: 1px solid rgba($white, 0.07);
}

.statItem {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.statNumber {
  font-family: $titleFont;
  font-size: 1.05rem;
  font-weight: 800;
  color: $orange;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.statLabel {
  font-family: $textFont;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba($white, 0.42);
}

.traitRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.traitChip {
  font-family: $textFont;
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: rgba($white, 0.55);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba($white, 0.08);
  background: rgba($white, 0.03);
}

/* === UNIQUENESS IDENTITY LAYER — auto-detailing-template === */
/* Auto-generated visual identity so shared archetypes diverge per brand. */

.hero {
  min-height: 96svh !important;
  height: auto !important;
}

.layout {
  grid-template-columns: minmax(0, 1.13fr) 1fr !important;
  gap: clamp(2.41rem, 4vw, 3.91rem) !important;
  padding-top: clamp(8.44rem, 11vh, 10.44rem) !important;
}

.shard {
  clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%) !important;
  opacity: 0.43 !important;
}

.headline {
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  font-weight: 800 !important;
  transform: skewX(0.5deg);
}

.badge {
  border-radius: 8px !important;
}

.chip {
  border-radius: 8px !important;
}

.ctaPrimary,
.ctaSecondary {
  border-radius: 4px !important;
}

.visual {
  transform: scale(1.042);
}

.statCard,
.console,
.dialCard,
.baFrame,
.tile,
.jobCard,
.stripCard,
.metricBar {
  box-shadow: 0 24px 60px rgba(0,0,0,0.4) !important;
}

/* end identity layer */

/* === HERO PATTERN UNIQUENESS — auto-detailing-template === */
.hero {
  &::before {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background-image: radial-gradient(circle, rgba($white, 0.03) 0.6px, transparent 0.8px),
      radial-gradient(circle, rgba(0,0,0,0.15) 0.5px, transparent 0.7px) !important;
    background-size: 6px 6px, 9px 9px !important;
    opacity: 0.70 !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }

  &::after {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background-image: radial-gradient(ellipse 50% 40% at 47% 11%, rgba($orange, 0.051), transparent 70%), radial-gradient(ellipse 40% 50% at 52% 83%, rgba($white, 0.03), transparent 65%) !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }
}
/* end hero pattern */

/* === MOBILE HERO FOLD SAFETY (fleet QA) === */
@media (max-width: 640px) {
  .hero,
  .section,
  .welcome {
    min-height: 100svh;
    height: auto !important;
  }
  .headline,
  .title,
  .heroTitle {
    font-size: clamp(2.05rem, 9vw, 2.85rem) !important;
    line-height: 1.05 !important;
  }
  .layout,
  .heroInner,
  .contentWrap {
    gap: 1.25rem !important;
    padding-bottom: 2rem !important;
  }
  .ctaRow,
  .actions,
  .heroCtas {
    flex-wrap: wrap;
    justify-content: center;
  }
  .visual,
  .heroVisual,
  .meter,
  .statGrid {
    min-height: 0 !important;
  }
}

/* === TABLET + MOBILE HERO VISUAL DEFER (fleet QA) === */
/* Hide side dials/meters on tablet & phone so the hero fold stays clean */
@media (max-width: 960px) {
  .visual,
  .heroVisual,
  .meterWrap,
  .rightCol,
  .heroArt {
    display: none !important;
  }
}

/* === MOBILE HERO COPY TIGHTEN (fleet QA) === */
@media (max-width: 640px) {
  .sub,
  .heroSub,
  .description {
    font-size: 0.9rem !important;
    line-height: 1.45 !important;
    max-width: 34ch !important;
  }
  .chips {
    display: none !important; /* trust chips below fold on phone — CTAs first */
  }
}

/* === MOBILE SINGLE COLUMN FORCE (fleet QA) === */
@media (max-width: 960px) {
  .layout,
  .heroLayout,
  .grid {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 640px) {
  .hero,
  .section {
    height: auto !important;
    min-height: 100svh !important;
    overflow: visible !important;
  }
  .layout {
    padding-top: 5rem !important;
    padding-bottom: 2rem !important;
  }
}

/* === MOBILE WELCOME STACK (fleet QA) === */
/* Kill side-by-side hero chrome on phone: stack CTAs, rails, collages, dials */
@media (max-width: 640px) {
  .ctaRow,
  .actions,
  .heroCtas {
    flex-direction: column !important;
    align-items: stretch !important;
    width: 100% !important;
    max-width: 22rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ctaPrimary,
  .ctaSecondary,
  .ctaRow a,
  .ctaRow button {
    width: 100% !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }

  .jobRail,
  .jobStrip,
  .shotRail {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 0.65rem !important;
    width: 100% !important;
    max-width: 22rem !important;
    margin: 0 auto !important;
  }

  .collageGrid,
  .collage {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto !important;
    min-height: 0 !important;
    max-width: 22rem !important;
    width: 100% !important;
  }

  .tileMain,
  .tileSide,
  .tile {
    grid-column: auto !important;
    grid-row: auto !important;
    min-height: 140px !important;
  }

  .plantDialGrid {
    grid-template-columns: 1fr 1fr !important;
    max-width: 100% !important;
  }

  .scanCard {
    grid-template-columns: 1fr !important;
    gap: 0.35rem !important;
  }

  .scanRight {
    align-items: flex-start !important;
  }

  .materials,
  .matGrid,
  .swatchGrid {
    grid-template-columns: 1fr 1fr !important;
  }

  .statGrid,
  .statsRow {
    grid-template-columns: 1fr 1fr !important;
  }
}
```

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: clean exit, only `tsc --noEmit` output, no errors.

- [ ] **Step 4: Visual verification via dev server + Playwright**

Start the dev server in the background:

Run: `npm run dev` (background)

Wait for it to report ready, then confirm the homepage responds:

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/`
Expected: `200`

Write this script to a scratch file (adjust the path to your scratchpad) and run it with `node`:

```js
import { chromium } from 'file:///D:/Scott-Apps-Scott-Applications/web-templates/_screenshot-tools/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const layerCount = await page.locator('[class*="layerBand"]').count();
const statCount = await page.locator('[class*="statItem"]').count();
const traitCount = await page.locator('[class*="traitChip"]').count();

console.log('layerBand count:', layerCount, '(expect 3)');
console.log('statItem count:', statCount, '(expect 3)');
console.log('traitChip count:', traitCount, '(expect 3)');
console.log('console/page errors:', JSON.stringify(errors));

await page.screenshot({ path: 'hero-verify.png', clip: { x: 700, y: 0, width: 740, height: 700 } });

await browser.close();
```

Expected output: `layerBand count: 3`, `statItem count: 3`, `traitChip count: 3`, `console/page errors: []`. Open `hero-verify.png` and confirm: three labeled layer bands (Ceramic + Clear Gloss / Base Paint / Primer) with the top one showing a moving shimmer and a small water-bead dot, a 3-column stat row below, and a row of trait chips at the bottom — no gauge bars, no toggle switches.

Stop the dev server:

Run: `taskkill //F //IM node.exe //T` (Windows) — confirm no stray `node.exe` remain with `netstat -ano | grep LISTENING` on port 3000.

- [ ] **Step 5: Commit**

```bash
git add components/Pages/Home/WelcomePage/WelcomePage.tsx components/Pages/Home/WelcomePage/styles.module.scss
git commit -m "$(cat <<'EOF'
Replace gauge-dashboard hero visual with Coating Cross-Section

The hero's right-side visual was a shared industrial-dashboard
archetype (percentage gauge bars + toggle switches) relabeled
"CERAMIC COAT LAB" but structurally identical to other templates'
hero widgets, and the gauge bars were meaningless for non-percentage
stats like "Mobile: Yes". Replace with a bespoke layered
cross-section diagram (Primer / Base Paint / Ceramic + Clear Gloss)
with a shimmer sweep and rolling water-bead animation, a plain stat
strip, and trait chips.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_015KAHbMW49xJo5jVVzjLV7p
EOF
)"
```

---

### Task 2: Push all pending auto-detailing-template commits

**Files:** none (git operation only).

**Interfaces:**
- Consumes: the commit created in Task 1, plus the pre-existing unpushed commits already on `main` (`398feb5`, `6dcebc8`, `3a069bc`, and the spec commits).
- Produces: nothing consumed by other tasks — this is the last task.

- [ ] **Step 1: Confirm what's about to be pushed**

Run: `git log origin/main..HEAD --oneline`
Expected: a list including at minimum `398feb5` (tagline/cookie fix), `6dcebc8` (content leak fix), `3a069bc` (icon-forward services grid), the spec commits, and Task 1's new commit. Read through it — if anything unexpected appears, stop and ask before pushing.

- [ ] **Step 2: Push**

Run: `git push`
Expected: `main -> main` update reported, no rejection.

- [ ] **Step 3: Verify the live site**

Wait for the Vercel deploy to finish (check the Vercel dashboard or just wait ~60-90s for a git-connected auto-deploy), then re-run the same Playwright check from Task 1 Step 4 against the live URL instead of localhost:

```js
await page.goto('https://auto-detailing-template-sooty.vercel.app/', { waitUntil: 'networkidle' });
```

Expected: same `layerBand count: 3` / `statItem count: 3` / `traitChip count: 3` result, header tagline reads "Ceramic · Correction · Detail" (not "Heating · Cooling · Comfort"), and the cookie banner (if triggered) shows clean rounded corners with no crescent-clip artifact.
