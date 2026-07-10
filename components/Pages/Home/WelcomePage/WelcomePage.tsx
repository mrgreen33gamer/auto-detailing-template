// _archetype-library/hero-g-dashboard/Component.tsx
//
// Hero G: Live Control Panel — reskinned for GlossLab as a Ceramic Coat Lab
// coating cross-section: a layered slab diagram (Primer / Base Paint /
// Ceramic + Clear Gloss) with a shimmer sweep and rolling water-bead
// animation, plus a plain stat strip (no gauge bars — they don't map to
// non-percentage stats like "Mobile: Yes").
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
