"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faCar, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faShieldHalved, faSprayCanSparkles, faCouch,
} from "@fortawesome/free-solid-svg-icons";

export default function DealershipsIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Inconsistent lot presentation", consequence: "Front-line inventory looks uneven under showroom lights and online photo packages — hurting perceived value." },
    { icon: faFileInvoiceDollar, problem: "Unpredictable reconditioning costs", consequence: "Without package standards, each unit becomes a custom negotiation that slows sales ops." },
    { icon: faUsers, problem: "Slow turnaround on make-ready units", consequence: "Missed delivery promises and stalled deals when detail capacity is unreliable." },
    { icon: faCar, problem: "New vs used standards collide", consequence: "One process does not fit CPO, aged inventory, and trade-ins equally without clear tiers." },
    { icon: faClipboardList, problem: "No single vendor for volume weeks", consequence: "Managers juggle multiple shops during inventory spikes instead of one accountable partner." },
    { icon: faHandshake, problem: "Detail shops that do not understand retail", consequence: "Missed delivery windows and finish issues create sales floor friction." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Lot-Ready Scheduling", description: "Throughput-minded booking for inventory spikes, auction hauls, and delivery deadlines." },
    { icon: faFileInvoiceDollar, title: "Standardized Package Tiers", description: "Clear full-detail and correction menus so reconditioning stays predictable." },
    { icon: faUsers, title: "Sales-Floor Friendly", description: "We communicate ETAs so F&I and sales know when units are photo-ready." },
  ];

  const processSteps = [
    { number: 1, title: "Account Setup", description: "Define package tiers for new, used, and CPO presentation standards.", icon: faSearch },
    { number: 2, title: "Volume Plan", description: "Weekly capacity and priority rules for front-line units.", icon: faCalendarAlt },
    { number: 3, title: "Execute & QC", description: "Consistent finish standards with photo-ready checks.", icon: faRocket },
    { number: 4, title: "Standing Support", description: "Ongoing capacity for aged inventory and trade-ins.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 40, label: "Dealer and lot programs supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 1200, label: "Dealer units detailed", suffix: "+", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas retail", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Standardized dealer packages", us: "✅ Tiered menus", others: "❌ Custom every time" },
    { feature: "Volume-week capacity", us: "✅ Planned throughput", others: "❌ First-come only" },
    { feature: "Single point of contact", us: "✅ Dedicated lead", others: "❌ Different tech each drop" },
    { feature: "Product-certified finish work", us: "✅ Always", others: "❌ Hit-or-miss" },
  ];

  const faq = [
    { question: "Do you work with new and used inventory?", answer: "Yes — we set package tiers for new delivery prep, used retail, and higher-touch CPO presentation." },
    { question: "Can you handle auction hauls?", answer: "Yes. We plan capacity for bulk arrivals so front-line units do not sit dull for days." },
    { question: "Do you provide invoices suitable for reconditioning tracking?", answer: "Yes — clear package line items that map to your recon process." },
    { question: "What areas do you cover for dealers?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, and surrounding Central Texas retail markets." },
  ];

  const services = [
    { icon: faCar, title: "Full Detail", body: "Lot-ready interior + exterior packages.", link: "/services/full-detail" },
    { icon: faSprayCanSparkles, title: "Paint Correction", body: "Swirl cleanup for premium units.", link: "/services/paint-correction" },
    { icon: faShieldHalved, title: "Ceramic Coating", body: "Optional protection programs for front-line stock.", link: "/services/ceramic-coating" },
    { icon: faCouch, title: "Interior Detail", body: "Trade-in cabin resets that sell.", link: "/services/interior-detail" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home studio for dealer and lot programs.", badge: "Home Base" },
    { town: "Temple", benefit: "Bell County retail inventory support.", badge: "" },
    { town: "Killeen", benefit: "High-volume used and military-market retail.", badge: "" },
    { town: "Hewitt", benefit: "Suburban dealer overflow capacity.", badge: "" },
    { town: "Woodway", benefit: "Premium inventory presentation.", badge: "" },
    { town: "Bellmead", benefit: "Quick-turn used unit support.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Dealerships" }]} />
      <SectionIntro title="Auto Detailing for Dealerships" subtitle="Lot-ready full details, correction, and interior resets with standardized packages and reliable turnaround for Central Texas dealers." />
      <TrustBar headline="Dealerships trust GlossLab for consistent lot presentation" />
      <div className={styles.section}><IndustryPainPoints industry="dealerships" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Dealership Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Dealers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="GlossLab vs. Generic Shops" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Dealer Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Dealership Detailing FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Dealership Program Quote" cityName="Waco" slug="industries/dealerships" spot="dealerships-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Detailing Partner Who Understands Retail?" subline="Standardized packages. Volume capacity. Single point of contact." primaryText="Call (254) 950-1616" primaryLink="tel:+12549501616" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
