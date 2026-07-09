'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Coatings, Chemistry & Tools',
    items: [
      { name: 'Gtechniq',      type: 'brand', icon: '✨' },
      { name: 'CarPro',        type: 'brand', icon: '✨' },
      { name: 'Koch-Chemie',   type: 'brand', icon: '✨' },
      { name: 'Rupes',         type: 'brand', icon: '✨' },
      { name: "Meguiar's",     type: 'brand', icon: '✨' },
      { name: 'IGL Coatings',  type: 'brand', icon: '✨' },
      { name: 'Gyeon',         type: 'brand', icon: '✨' },
      { name: 'P&S Detail',    type: 'brand', icon: '✨' },
    ],
  },
  {
    label: 'Credentials & Standards',
    items: [
      { name: 'Product-Certified', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',  type: 'cert', icon: '✓' },
      { name: 'Re-Detail Guarantee', type: 'cert', icon: '✓' },
      { name: 'Studio Process Control', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Full Detail',           type: 'tool', icon: '🚗' },
      { name: 'Ceramic Coating',       type: 'tool', icon: '🚗' },
      { name: 'Paint Correction',      type: 'tool', icon: '🚗' },
      { name: 'Interior Detail',       type: 'tool', icon: '🚗' },
      { name: 'Headlight Restoration', type: 'tool', icon: '🚗' },
      { name: 'Maintenance Detail',    type: 'tool', icon: '🚗' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Pro Products, Controlled Process',
  subtitle = 'We use proven coatings, polishes, and interior chemistry — product-certified installers, no gas-station shortcuts.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Brands and certifications">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
