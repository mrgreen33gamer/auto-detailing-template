"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Volume Before We Quote",
      description: "Dealerships, fleets, and collectors have different turnaround, access, and finish standards. We scope packages around your real workflow.",
    },
    {
      icon: faShieldHalved,
      title: "Bonded, Insured & Product-Certified",
      description: "Waco-based studio with documentation and process control that commercial partners and collectors expect.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "One Studio for Prep, Coat & Maintain",
      description: "From lot-ready full details to ceramic programs and maintenance rotations — one vendor, consistent standards.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B segments actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 400,  label: "Commercial and multi-vehicle packages completed",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 11,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our studio base — dealership, fleet, and collector clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Commercial and multi-vehicle accounts across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Fleet and sales vehicle programs near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Local dealer and private collection support.", badge: "" },
    { town: "Woodway", benefit: "Premium daily drivers and collector vehicles.", badge: "" },
    { town: "McGregor", benefit: "Fleet and light commercial vehicle care.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Workflow-specific scheduling", us: "✅ Built per account type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 11+ years in Waco", others: "❌ Out-of-area shops" },
    { feature: "Product-certified installers", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent package pricing", us: "✅ Scope before work starts", others: "❌ Vague menus + surprises" },
    { feature: "Satisfaction Re-Detail Guarantee", us: "✅ On agreed work", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does GlossLab work with?",
      answer: "We work with dealerships, fleet operators, and luxury/collector owners — in addition to everyday drivers booking retail packages.",
    },
    {
      question: "Do you build a custom proposal for each account?",
      answer: "Yes. Proposals reflect turnaround needs, vehicle mix, coating programs, and maintenance cadence — not a generic consumer menu only.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-vehicle portfolios?",
      answer: "Yes — we build phased, multi-vehicle pricing and scheduling with a dedicated point of contact.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Detailing for Dealerships, Fleets & Collectors"
        subtitle="Specialized packages for organizations and enthusiasts who need consistent finish quality, reliable scheduling, and professional documentation."
      />

      <TrustBar headline="Trusted by Central Texas dealerships, fleets, and collectors" />

      <div className={styles.section}>
        <SectionIndustriesServed />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose GlossLab" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving Central Texas Organizations" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="GlossLab vs. Generic Detail Shops" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="B2B Detailing FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request a Commercial or Collector Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need a Multi-Vehicle Detailing Partner?"
        subline="Dealerships · Fleet Vehicles · Luxury & Collectors — transparent packages, product-certified detailers."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </main>
  );
}
