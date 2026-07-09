// components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faTruck,
  faGem,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const INDUSTRIES = [
  { slug: 'dealerships',       label: 'Dealerships',         icon: faCar },
  { slug: 'fleet-vehicles',    label: 'Fleet Vehicles',      icon: faTruck },
  { slug: 'luxury-collectors', label: 'Luxury & Collectors', icon: faGem },
];

interface SectionIndustriesServedProps {
  title?: string;
  subtitle?: string;
  disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Who We Detail For Across Central Texas',
  subtitle = 'Specialized packages for dealerships, fleets, and collector vehicles — built around real turnaround and finish standards.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <span className={styles.industryLabel}>{label}</span>
              {!disableLinks && (
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
              )}
            </div>
          );

          return disableLinks ? (
            card
          ) : (
            <Link key={slug} href={`/industries/${slug}`} className={styles.cardLink}>
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
