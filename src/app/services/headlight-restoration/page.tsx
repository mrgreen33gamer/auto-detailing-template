// GlossLab — Headlight Restoration
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

export default function HeadlightRestorationPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Lens Inspection",
    "description": "We check haze depth, pitting, and moisture to confirm restoration vs replacement."
  },
  {
    icon: faFileContract,
    "title": "Multi-Step Refinement",
    "description": "Sanding and polish stages matched to oxidation level."
  },
  {
    icon: faCheckCircle,
    "title": "UV Seal",
    "description": "Protective seal so lenses do not yellow again in a month."
  },
  {
    icon: faShieldHalved,
    "title": "Visibility First",
    "description": "Clear output and appearance — safety and looks together."
  }
];

  const whyFeatures = [
  {
    icon: faClock,
    "title": "Fast Add-On",
    "description": "Often completed as an add-on during full detail or maintenance visits."
  },
  {
    icon: faStar,
    "title": "Real UV Protection",
    "description": "Sealing is the difference between lasting clarity and quick fade-back."
  },
  {
    icon: faShieldHalved,
    "title": "Honest Call",
    "description": "If lenses are too far gone, we say so."
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
    "value": 1400,
    "label": "Headlight sets restored",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 96,
    "label": "Clients notice night-driving improvement",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years restoring lenses",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full headlight restoration coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Multi-stage cut & polish",
    "us": "✅ Yes",
    "others": "❌ Wipe-on kit"
  },
  {
    "feature": "UV seal included",
    "us": "✅ Standard",
    "others": "❌ Often skipped"
  },
  {
    "feature": "Pair with full detail",
    "us": "✅ Easy add-on",
    "others": "❌ Separate shop only"
  }
];

  const faq = [
  {
    "question": "How long does restoration last?",
    "answer": "With proper UV seal and normal care, results last far longer than drugstore kits. Extreme sun exposure still benefits from periodic checks."
  },
  {
    "question": "Is restoration better than new housings?",
    "answer": "When lenses are structurally sound, restoration is a strong value. Cracked or failed sealed beams may need replacement."
  },
  {
    "question": "Can you restore only one side?",
    "answer": "We usually restore as a pair for even appearance and beam quality."
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
        { label: "Headlight Restoration" },
      ]} />

      <SectionIntro
        title="Headlight Restoration in Waco & Central Texas"
        subtitle="Cut, polish, and UV-seal cloudy lenses so night visibility and curb appeal return — without cheap temporary kits."
      />

      <TrustBar headline="UV-sealed headlight restoration for safer night driving" />

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
        <FAQ cityName="Waco" faq={faq} title="Headlight Restoration FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Headlight Restoration?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Book Headlight Restoration" cityName="Waco" slug="/services" spot="service-headlight restoration" formVariant={2} />
      </div>
    </main>
  );
}
