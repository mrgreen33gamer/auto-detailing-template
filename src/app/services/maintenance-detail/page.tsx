// GlossLab — Maintenance Detail
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine, faStar, faCar,
} from "@fortawesome/free-solid-svg-icons";

export default function MaintenanceDetailPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Coat-Friendly Wash",
    "description": "Safe wash methods that preserve ceramic and sealant performance."
  },
  {
    icon: faFileContract,
    "title": "Decon When Needed",
    "description": "Iron and tar removal on a smart schedule — not every single visit."
  },
  {
    icon: faCheckCircle,
    "title": "Interior Top-Up",
    "description": "Quick cabin refresh so daily life does not undo your last full detail."
  },
  {
    icon: faShieldHalved,
    "title": "Flexible Cadence",
    "description": "Monthly, quarterly, or seasonal — no long lock-in required."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    "title": "Faster Than Full Redo",
    "description": "Maintenance keeps results alive without paying for a full correction every time."
  },
  {
    icon: faStar,
    "title": "Ceramic-Friendly",
    "description": "Ideal follow-up path after coating packages."
  },
  {
    icon: faShieldHalved,
    "title": "Fleet Options",
    "description": "Rotating schedules for small fleets and dealerships."
  }
];

  const processSteps = [
  {
    "number": 1,
    "title": "Book Online or Call",
    "description": "Share vehicle type, goals, and preferred drop-off. We confirm your slot.",
    icon: faHeadset
  },
  {
    "number": 2,
    "title": "Inspect & Recommend",
    "description": "Paint and cabin assessment in plain English — right package, not the biggest one.",
    icon: faSearch
  },
  {
    "number": 3,
    "title": "Detail With Care",
    "description": "Controlled wash, decon, polish, coat, or interior steps in a clean workspace.",
    icon: faFileContract
  },
  {
    "number": 4,
    "title": "Reveal & Guarantee",
    "description": "Final walk-through, aftercare tips, Satisfaction Re-Detail Guarantee.",
    icon: faCheckCircle
  }
];

  const metrics = [
  {
    icon: faTrophy,
    "value": 2100,
    "label": "Maintenance visits completed",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 98,
    "label": "Return-visit rate",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years of local care plans",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full maintenance detail coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Ceramic-safe process",
    "us": "✅ Standard",
    "others": "❌ Harsh brushes"
  },
  {
    "feature": "Flexible schedule",
    "us": "✅ No lock-in",
    "others": "❌ Annual contract"
  },
  {
    "feature": "Interior + exterior options",
    "us": "✅ Menu-based",
    "others": "❌ Exterior only"
  }
];

  const faq = [
  {
    "question": "How often should I book maintenance?",
    "answer": "Many daily drivers do well every 4–8 weeks. Ceramic-coated vehicles can often stretch intervals with careful home washing between visits."
  },
  {
    "question": "Is this the same as a full detail?",
    "answer": "No — maintenance is a lighter, faster refresh designed to preserve previous work rather than rebuild from neglected condition."
  },
  {
    "question": "Do you offer fleet schedules?",
    "answer": "Yes — contact us for multi-vehicle rotations."
  }
];

  const related = [
  {
    icon: faCar,
    "title": "Full Detail",
    "body": "Complete interior + exterior refresh.",
    "link": "/services/full-detail"
  },
  {
    icon: faShieldHalved,
    "title": "Ceramic Coating",
    "body": "Multi-year protection and gloss.",
    "link": "/services/ceramic-coating"
  },
  {
    icon: faStar,
    "title": "Paint Correction",
    "body": "Swirl and haze removal before coating.",
    "link": "/services/paint-correction"
  }
];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Maintenance Detail" },
      ]} />

      <SectionIntro
        title="Maintenance Detail in Waco & Central Texas"
        subtitle="Keep ceramic-coated and daily-driven vehicles looking sharp with scheduled wash, decon, and interior top-ups."
      />

      <TrustBar headline="Protect your investment with scheduled maintenance details" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose GlossLab" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="GlossLab vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving Central Texas" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Maintenance Detail FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Maintenance Detail?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Book Maintenance Detail" cityName="Waco" slug="/services" spot="service-maintenance detail" formVariant={2} />
      </div>
    </main>
  );
}
