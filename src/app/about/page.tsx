// GlossLab Auto Detailing — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faBolt,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2015",
      description: "GlossLab Auto Detailing was founded in Waco by Jade Nguyen, owner and lead detailer with deep product-certified training. We're not a franchise — every decision is made locally.",
    },
    {
      icon: faUsers,
      title: "A Studio You Can Trust With Your Vehicle",
      description: "Bonded & insured with product-certified detailers. Soft processes, controlled polish work, and interior-safe chemistry on every package.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't sell multi-stage correction when a single-stage polish will do. We won't coat over defects without telling you. Reputation over upsells.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 9000, label: "Vehicles detailed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 11,   label: "Years serving Central Texas drivers",  suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Book Online or Call", description: "Phone, text, or form — we'll confirm a drop-off window that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Inspect Honestly", description: "Paint and cabin assessment in plain English — right package, not the biggest one.", icon: faShieldHalved },
    { number: 3, title: "Confirm Package", description: "Scope and price confirmed before work begins. You decide — zero pressure.", icon: faBolt },
    { number: 4, title: "Detail & Guarantee", description: "Quality process, clean workspace, Satisfaction Re-Detail Guarantee.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About GlossLab Auto Detailing"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2015. Ceramic Coatings · Interior Detail · Paint Correction — honest work at fair prices for the drivers and fleets we've called neighbors for 11 years."
      />

      <TrustBar headline="9,000+ Central Texas vehicles detailed — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="11 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Meet the Team Behind the Gloss"
        subline="Book a detail with GlossLab — product-certified, bonded & insured, Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />

    </main>
  );
}
