// GlossLab — Paint Correction
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

export default function PaintCorrectionPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Defect Mapping",
    "description": "We show you swirls, holograms, and oxidation under good light before quoting stages."
  },
  {
    icon: faFileContract,
    "title": "Stage Plan",
    "description": "Single-stage refresh vs multi-stage correction based on paint thickness and goals."
  },
  {
    icon: faCheckCircle,
    "title": "Controlled Machine Work",
    "description": "Proper pads, compounds, and technique to refine gloss without reckless cut."
  },
  {
    icon: faShieldHalved,
    "title": "Protect After",
    "description": "Sealant or ceramic options so corrected paint does not immediately re-swirl."
  }
];

  const whyFeatures = [
  {
    icon: faStar,
    "title": "Realistic Expectations",
    "description": "We tell you what can improve and what paint damage cannot fully erase."
  },
  {
    icon: faClock,
    "title": "Patience Over Speed",
    "description": "Correction is process work — we schedule enough time for quality results."
  },
  {
    icon: faShieldHalved,
    "title": "Coating-Ready Finish",
    "description": "Ideal prep path for ceramic coating packages."
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
    "value": 1800,
    "label": "Correction packages completed",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 97,
    "label": "Clients who add protection after",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years refining paint in Waco",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full paint correction coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Defect inspection before quoting",
    "us": "✅ Always",
    "others": "❌ Generic package"
  },
  {
    "feature": "Multi-stage capability",
    "us": "✅ Available",
    "others": "❌ One pad only"
  },
  {
    "feature": "Honest limitation talk",
    "us": "✅ Standard",
    "others": "❌ Overpromise"
  },
  {
    "feature": "Protection after correction",
    "us": "✅ Sealant or ceramic",
    "others": "❌ Optional afterthought"
  }
];

  const faq = [
  {
    "question": "What is paint correction?",
    "answer": "Machine polishing that levels microscopic clear-coat peaks causing swirls and haze, restoring clarity and depth."
  },
  {
    "question": "Will correction remove deep scratches?",
    "answer": "Deep scratches that catch a fingernail may not fully disappear. We set expectations honestly after inspection."
  },
  {
    "question": "How many stages do I need?",
    "answer": "Well-kept paint often needs a single refining stage. Neglected dark paint may need compound + polish stages."
  },
  {
    "question": "Should I ceramic coat after?",
    "answer": "Strongly recommended if you want the corrected finish to last under Texas sun and wash cycles."
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
        { label: "Paint Correction" },
      ]} />

      <SectionIntro
        title="Paint Correction in Waco & Central Texas"
        subtitle="Single- and multi-stage correction to remove swirls, haze, and light scratches — measured results before ceramic coating or show-day polish."
      />

      <TrustBar headline="Machine polishing done right — not rushed dual-action guesses" />

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
        <FAQ cityName="Waco" faq={faq} title="Paint Correction FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Paint Correction?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Book Paint Correction" cityName="Waco" slug="/services" spot="service-paint correction" formVariant={2} />
      </div>
    </main>
  );
}
