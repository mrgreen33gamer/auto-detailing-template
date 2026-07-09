// GlossLab — Interior Detail
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

export default function InteriorDetailPage() {

  const expectations = [
  {
    icon: faSearch,
    "title": "Soil & Odor Assessment",
    "description": "We identify stains, pet soils, and odor sources before choosing chemistry."
  },
  {
    icon: faFileContract,
    "title": "Safe Process",
    "description": "Material-safe cleaners for leather, vinyl, fabric, and plastics."
  },
  {
    icon: faCheckCircle,
    "title": "Deep Clean Finish",
    "description": "Extraction and steam where appropriate — not just a surface wipe."
  },
  {
    icon: faShieldHalved,
    "title": "Fresh Cabin Feel",
    "description": "Clean scent without heavy perfume masking leftover soils."
  }
];

  const whyFeatures = [
  {
    icon: faCar,
    "title": "Family & Pet Ready",
    "description": "Built for real life — crumbs, sports gear, and Texas dust included."
  },
  {
    icon: faClock,
    "title": "Pair With Exterior",
    "description": "Combine with full detail or maintenance packages for complete results."
  },
  {
    icon: faShieldHalved,
    "title": "Careful Chemistry",
    "description": "We protect delicate screens, trim, and perforated leather."
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
    "value": 3200,
    "label": "Interiors refreshed",
    "suffix": "+",
    "duration": 3
  },
  {
    icon: faChartLine,
    "value": 99,
    "label": "Clients who would rebook",
    "suffix": "%",
    "duration": 2
  },
  {
    icon: faClock,
    "value": 11,
    "label": "Years of cabin detailing",
    "suffix": "+",
    "duration": 2
  }
];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full interior detail coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = [
  {
    "feature": "Extraction / steam options",
    "us": "✅ Available",
    "others": "❌ Wipe-only"
  },
  {
    "feature": "Material-safe chemistry",
    "us": "✅ Matched to surfaces",
    "others": "❌ One cleaner for all"
  },
  {
    "feature": "Odor treatment approach",
    "us": "✅ Source-focused",
    "others": "❌ Air freshener only"
  },
  {
    "feature": "Re-Detail Guarantee",
    "us": "✅ Agreed scope",
    "others": "❌ No follow-up"
  }
];

  const faq = [
  {
    "question": "Can you remove pet odors?",
    "answer": "Often yes when soils are accessible. Severe odor may need multiple treatments — we assess honestly."
  },
  {
    "question": "Do you clean leather?",
    "answer": "Yes — clean and condition appropriate leather types. We avoid products that dry or over-darken."
  },
  {
    "question": "How long does interior detail take?",
    "answer": "Most cabins are same-day. Heavy soil, large SUVs, or stain extraction can take longer."
  },
  {
    "question": "Can this pair with ceramic coating?",
    "answer": "Yes — many clients book interior detail while paint is being prepped or coated."
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
        { label: "Interior Detail" },
      ]} />

      <SectionIntro
        title="Interior Detail in Waco & Central Texas"
        subtitle="Deep vacuum, extraction, steam, leather/vinyl care, and odor treatment so the cabin feels as clean as the paint looks."
      />

      <TrustBar headline="Cabin-focused detailing for families, pets, and daily drivers" />

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
        <FAQ cityName="Waco" faq={faq} title="Interior Detail FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book Interior Detail?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Book Interior Detail" cityName="Waco" slug="/services" spot="service-interior detail" formVariant={2} />
      </div>
    </main>
  );
}
