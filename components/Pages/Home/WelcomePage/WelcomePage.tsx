// GlossLab Hero — authentic parallax photography
// Photographic parallax stage + a real detailer photo card replaces the
// abstract "Ceramic Coat Lab" cross-section diagram. Pattern matches the
// approved pilot (hvac-template WelcomePage): scroll-linked parallax bg,
// brand-colored scrim, and a framed photo card with a badge + spec card.
// Photos sourced from Pexels (free, commercial-OK) — see report for IDs.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

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

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real wash-bay scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-detail-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Violet-on-obsidian scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

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

        {/* Authentic detailer photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-polish-card.jpg"
              alt="GlossLab detailer using a dual-action polisher to correct paint on a vehicle"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Product-Certified Detailer · Waco, TX
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Product-certified detailers
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Satisfaction re-detail guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
