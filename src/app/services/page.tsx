// GlossLab Auto Detailing — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCar, faShieldHalved, faSprayCanSparkles, faCouch, faLightbulb, faCalendarCheck,
  faTrophy, faChartLine, faClock, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faCar, title: "Full Detail", body: "Complete interior + exterior refresh — wash, decon, polish prep, vacuum, steam, and protection.", link: "/services/full-detail" },
    { icon: faShieldHalved, title: "Ceramic Coating", body: "Multi-year ceramic coatings that lock in gloss and stand up to Central Texas UV and heat.", link: "/services/ceramic-coating" },
    { icon: faSprayCanSparkles, title: "Paint Correction", body: "Single- and multi-stage correction to remove swirls, haze, and light scratches before coating.", link: "/services/paint-correction" },
    { icon: faCouch, title: "Interior Detail", body: "Deep vacuum, extraction, steam, leather care, and odor treatment for a cabin that feels new.", link: "/services/interior-detail" },
    { icon: faLightbulb, title: "Headlight Restoration", body: "Cut, polish, and UV-seal cloudy lenses for safer night driving and cleaner curb appeal.", link: "/services/headlight-restoration" },
    { icon: faCalendarCheck, title: "Maintenance Detail", body: "Scheduled wash, decon, and interior top-ups to keep ceramic and daily drivers looking sharp.", link: "/services/maintenance-detail" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Transparent Packages", description: "Clear menus and scope before we start. No mystery line items mid-detail." },
    { icon: faShieldHalved,   title: "Product-Certified Detailers",  description: "Bonded & insured studio with product-certified installers and proven chemistry." },
    { icon: faUsers,          title: "Locally Owned Since 2015", description: "Founded in Waco by Jade Nguyen. Every decision is made locally." },
  ];

  const processSteps = [
    { number: 1, title: "Book Online or Call", description: "Phone, text, or form — we'll confirm a drop-off window that fits.", icon: faHeadset },
    { number: 2, title: "Inspect & Recommend", description: "Paint and cabin assessment in plain English — right package, not the biggest one.", icon: faSearch },
    { number: 3, title: "Package Confirmed", description: "Scope and price confirmed before work begins. Zero pressure.", icon: faFileContract },
    { number: 4, title: "Detail & Guarantee", description: "Quality process, clean workspace, Satisfaction Re-Detail Guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 9000, label: "Vehicles detailed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 11,   label: "Years of local detailing experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does auto detailing cost in Waco?", answer: "Full details vary by vehicle size and condition. Ceramic coating and multi-stage paint correction are quoted after inspection. We confirm package scope and price before starting." },
    { question: "Do you work on all vehicle types?", answer: "Yes — sedans, trucks, SUVs, performance cars, fleets, and collector vehicles." },
    { question: "What does maintenance detail include?", answer: "Coat-friendly wash, decon when needed, wheels, and interior top-ups. Flexible cadence — no long lock-in." },
    { question: "How long does ceramic coating take?", answer: "Plan multi-day when paint correction is included. We'll set a realistic timeline at booking." },
    { question: "Are you bonded and insured?", answer: "Yes — GlossLab is bonded & insured with product-certified detailers." },
    { question: "Do you offer a guarantee?", answer: "Yes — Satisfaction Re-Detail Guarantee on agreed-scope work." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Auto Detailing Services for Waco & Central Texas"
        subtitle="Full detail, ceramic coating, paint correction, interior care, headlight restoration, and maintenance packages — transparent pricing, product-certified detailers, Satisfaction Re-Detail Guarantee."
      />

      <TrustBar headline="9,000+ Central Texas vehicles detailed by GlossLab" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Drivers Choose GlossLab" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Auto Detailing Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Book a Detail or Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Ready for Gloss That Actually Lasts?"
        subline="Ceramic coatings, paint correction, full details, and interior care. Transparent packages. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
