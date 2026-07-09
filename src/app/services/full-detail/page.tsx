// GlossLab — Full Detail
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

export default function FullDetailPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Condition Check",
    "description": "We review paint film, interior soils, and wheels so the package matches real needs."
  },
  {
    icon: faFileContract,
    "title": "Clear Package Scope",
    "description": "You know which exterior and interior steps are included before we start."
  },
  {
    icon: faCheckCircle,
    "title": "Showroom Finish",
    "description": "Exterior decon and interior extraction so the whole vehicle feels new again."
  },
  {
    icon: faShieldHalved,
    "title": "Re-Detail Guarantee",
    "description": "If agreed work is not right, we make it right."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    "title": "Flexible Drop-Off",
    "description": "Book around work and travel — we confirm realistic completion windows."
  },
  {
    icon: faCar,
    "title": "All Vehicle Types",
    "description": "Sedans, trucks, SUVs, and performance cars — sized packages for each."
  },
  {
    icon: faShieldHalved,
    "title": "Product-Certified Team",
    "description": "Bonded & insured studio with disciplined process control."
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
    "value": 9000,
    "label": "Vehicles detailed across Central Texas",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 98,
    "label": "Customer satisfaction rating",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years serving Waco drivers",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "full detail coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Package scope before work starts",
    "us": "✅ Always written",
    "others": "❌ Vague menu only"
  },
  {
    "feature": "Satisfaction Re-Detail Guarantee",
    "us": "✅ Every package",
    "others": "❌ Rare or none"
  },
  {
    "feature": "Product-certified detailers",
    "us": "✅ Studio standard",
    "others": "❌ Hit-or-miss"
  },
  {
    "feature": "Interior + exterior included options",
    "us": "✅ Full menu",
    "others": "❌ Exterior-only focus"
  },
  {
    "feature": "Aftercare guidance",
    "us": "✅ Always",
    "others": "❌ Optional"
  }
];

  const faq = [
  {
    "question": "How long does a full detail take?",
    "answer": "Most full details are same-day for typical sedans and small SUVs. Larger trucks, heavy soil, or add-on correction can need more time — we confirm at booking."
  },
  {
    "question": "What is included in a full detail?",
    "answer": "Exterior wash and decon, wheels/tires, interior vacuum and surfaces, glass, and finishing protection. Exact package levels vary — ask for the menu that fits your vehicle."
  },
  {
    "question": "Can I add ceramic coating later?",
    "answer": "Yes. Many clients start with a full detail or correction, then schedule ceramic coating as a dedicated multi-day service."
  },
  {
    "question": "Do you detail fleets?",
    "answer": "Yes — talk to us about rotating maintenance details for service vans and sales fleets."
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
        { label: "Full Detail" },
      ]} />

      <SectionIntro
        title="Full Detail in Waco & Central Texas"
        subtitle="Interior + exterior refresh — decontamination, polish prep, cabin deep-clean, and protection. Showroom results for daily drivers and weekend cars."
      />

      <TrustBar headline="9,000+ vehicles detailed by GlossLab across Central Texas" />

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
        <FAQ cityName="Waco" faq={faq} title="Full Detail FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Full Detail?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Book a Full Detail" cityName="Waco" slug="/services" spot="service-full detail" formVariant={2} />
      </div>
    </main>
  );
}
