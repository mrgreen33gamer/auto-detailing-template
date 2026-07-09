"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faCertificate, faClock, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/full-detail',            label: 'Full Detail' },
  { href: '/services/ceramic-coating',        label: 'Ceramic Coating' },
  { href: '/services/paint-correction',       label: 'Paint Correction' },
  { href: '/services/interior-detail',        label: 'Interior Detail' },
  { href: '/services/headlight-restoration',  label: 'Headlight Restoration' },
  { href: '/services/maintenance-detail',     label: 'Maintenance Detail' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Hewitt, TX', 'Woodway, TX',
  'McGregor, TX', 'China Spring, TX', 'Temple, TX',
  'Killeen, TX', 'Bellmead, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Bonded & Insured' },
  { icon: faCertificate,  label: 'Product-Certified' },
  { icon: faClock,        label: 'Flexible Booking' },
  { icon: faStar,         label: 'Re-Detail Guarantee' },
];

const SOCIALS = [
  { href: 'https://facebook.com/glosslabdetail', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/glosslabdetail',     icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Book a Detail Today →
          </Link>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.inner}>

          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 3c2.5 3 2.5 15 0 18"/>
                  <path d="M3 12h18"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>GlossLab Auto Detailing</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Ceramic Coatings · Interior Detail · Paint Correction. Transparent packages. Satisfaction Re-Detail Guarantee. Serving Central Texas since 2015.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+12549501616" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (254) 950-1616
              </a>
              <a href="mailto:hello@glosslabdetail.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@glosslabdetail.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                2701 Franklin Ave, Waco, TX 76710
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.linkList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <Link href="/service-areas"
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: area, section: 'Footer-Areas' })}>
                    <span className={styles.linkArrow}>›</span>{area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} GlossLab Auto Detailing. All Rights Reserved. | Bonded &amp; Insured · Product-Certified Detailers
          </p>
          <a href="tel:+12549501616" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Book Line', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Call (254) 950-1616
          </a>
        </div>
      </div>
    </footer>
  );
}
