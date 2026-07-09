// components/PageComponents/GuaranteeSection/GuaranteeSection.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faRotateLeft,
  faTag,
  faCertificate,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteeSectionProps {
  title?:      string;
  headline?:   string;
  guarantees?: Guarantee[];
  ctaText?:    string;
  ctaLink?:    string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  {
    icon: faTag,
    title: "Transparent Package Pricing",
    description:
      "You get a clear package scope before we start — vehicle size, condition level, and included steps. No mystery upsells mid-detail.",
  },
  {
    icon: faShieldHalved,
    title: "Satisfaction Re-Detail Guarantee",
    description:
      "If work we completed within the agreed scope is not right, we re-detail the affected area. We stand behind the finish.",
  },
  {
    icon: faRotateLeft,
    title: "Careful Handling Always",
    description:
      "Soft mitts, proper decon, controlled polish steps, and interior-safe chemistry. Your vehicle is treated like a showpiece.",
  },
  {
    icon: faCertificate,
    title: "Product-Certified Detailers",
    description:
      "Bonded & insured studio with product-certified installers. Proven coatings and processes — not gas-station shortcuts.",
  },
  {
    icon: faCalendarCheck,
    title: "No Membership Lock-In",
    description:
      "Maintenance plans are flexible. We earn repeat visits with results — not long contracts.",
  },
  {
    icon: faStar,
    title: "On-Time Drop-Off Windows",
    description:
      "We respect your schedule. If timing shifts, we communicate early so you are never left guessing.",
  },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title      = "Our Promise to You",
  headline   = "We back every detail\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText    = "Book a Detail",
  ctaLink    = "/contact",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.container}>

        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>{title}</span>
          <h2 className={styles.headline}>
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.body}>
            Every detailing shop in Central Texas makes promises. We back ours with transparent packages,
            product-certified detailers, and a Satisfaction Re-Detail Guarantee on the work we complete.
          </p>
          <Link
            href={ctaLink}
            className={styles.cta}
            onClick={() => trackEvent({
              eventType:    'click',
              elementLabel: ctaText,
              section:      'GuaranteeSection',
            })}
          >
            {ctaText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className={styles.ratingText}>4.9 · 1,600+ verified Google reviews</span>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.grid}>
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={g.icon} className={styles.icon} />
                </div>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{g.title}</h3>
                  <p className={styles.cardBody}>{g.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
