// GlossLab — Ceramic Coating
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

export default function CeramicCoatingPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Paint Assessment",
    "description": "We evaluate swirls and oxidation so correction recommendations are honest."
  },
  {
    icon: faFileContract,
    "title": "Prep Before Coat",
    "description": "Wash, decon, and polish steps that actually let ceramic bond correctly."
  },
  {
    icon: faCheckCircle,
    "title": "Controlled Application",
    "description": "Even application, proper flash, and cure windows — not rushed driveway installs."
  },
  {
    icon: faShieldHalved,
    "title": "Aftercare Plan",
    "description": "Wash guidance and maintenance detail options so the coating stays healthy."
  }
];

  const whyFeatures = [
  {
    icon: faShieldHalved,
    "title": "Real Ceramic Systems",
    "description": "Professional coatings with documented prep — not spray-bottle 'ceramic' gimmicks."
  },
  {
    icon: faClock,
    "title": "Texas-Ready Protection",
    "description": "Built for UV, heat, pollen, and summer storms common in Central Texas."
  },
  {
    icon: faStar,
    "title": "Gloss You Can Measure",
    "description": "Correction + coat packages aimed at depth and clarity, not just hydrophobics."
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
    "value": 2500,
    "label": "Ceramic packages installed",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 98,
    "label": "Client satisfaction",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years coating vehicles in Waco",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full ceramic coating coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Paint correction options before coat",
    "us": "✅ Single- or multi-stage",
    "others": "❌ Coat over defects"
  },
  {
    "feature": "Professional coating systems",
    "us": "✅ Product-certified",
    "others": "❌ Consumer spray wax"
  },
  {
    "feature": "Cure and aftercare guidance",
    "us": "✅ Written plan",
    "others": "❌ Minimal"
  },
  {
    "feature": "Maintenance detail support",
    "us": "✅ Available",
    "others": "❌ One-and-done only"
  }
];

  const faq = [
  {
    "question": "How long does ceramic coating last?",
    "answer": "Longevity depends on product level, prep quality, and maintenance. With proper wash habits and maintenance details, multi-year performance is realistic."
  },
  {
    "question": "Do I need paint correction first?",
    "answer": "If swirls or haze are visible, correction first locks a better result under the coating. Light polish may be enough for well-kept paint."
  },
  {
    "question": "Can I wash at home after coating?",
    "answer": "Yes — use pH-balanced soap, soft mitts, and avoid automatic brushes. We provide aftercare guidance at delivery."
  },
  {
    "question": "Is ceramic coating worth it in Texas?",
    "answer": "For drivers who want lasting gloss and easier decontamination under UV and heat, professional ceramic is one of the highest-ROI protections available."
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
        { label: "Ceramic Coating" },
      ]} />

      <SectionIntro
        title="Ceramic Coating in Waco & Central Texas"
        subtitle="Professional multi-year ceramic coatings that lock in gloss, repel water, and handle Central Texas UV, heat, and road film."
      />

      <TrustBar headline="Product-certified ceramic installers · Satisfaction Re-Detail Guarantee" />

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
        <FAQ cityName="Waco" faq={faq} title="Ceramic Coating FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Ceramic Coating?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Request Ceramic Coating Quote" cityName="Waco" slug="/services" spot="service-ceramic coating" formVariant={2} />
      </div>
    </main>
  );
}
