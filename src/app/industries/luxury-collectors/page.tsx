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
  faGem, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faShieldHalved, faSprayCanSparkles, faCar, faCouch,
} from "@fortawesome/free-solid-svg-icons";

export default function LuxuryCollectorsIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Rushed shops that treat every car the same", consequence: "Soft paint, delicate films, and rare interiors get consumer-grade processes." },
    { icon: faFileInvoiceDollar, problem: "Overpromise on swirl removal", consequence: "Collectors need honest limits — not marketing that ignores clear-coat thickness." },
    { icon: faUsers, problem: "Inexperienced polishers on dark paint", consequence: "Holograms and burn risk destroy the reason you bought the car." },
    { icon: faGem, problem: "No proper ceramic prep path", consequence: "Coating over defects locks in swirls under expensive product." },
    { icon: faClipboardList, problem: "Poor aftercare guidance", consequence: "Owners leave without wash methods that protect the investment." },
    { icon: faHandshake, problem: "No long-term relationship", consequence: "One-off visits instead of a trusted studio for show season and storage pulls." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Appointment-Only Care", description: "Dedicated time blocks for correction and coating — never rushed between wash bays." },
    { icon: faFileInvoiceDollar, title: "Honest Correction Plans", description: "Single- vs multi-stage recommendations based on inspection, not upsell scripts." },
    { icon: faUsers, title: "Collector-Minded Handling", description: "Soft processes, careful chemistry, and documented protection options." },
  ];

  const processSteps = [
    { number: 1, title: "Paint & Cabin Inspection", description: "Lighting check, film assessment, and goal setting for show vs daily use.", icon: faSearch },
    { number: 2, title: "Correction & Coat Plan", description: "Written stages, products, and timeline before any machine work.", icon: faCalendarAlt },
    { number: 3, title: "Execute with Control", description: "Measured polishing and coating application in a controlled environment.", icon: faRocket },
    { number: 4, title: "Reveal & Aftercare", description: "Results walk-through plus wash and maintenance guidance.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 350, label: "Collector and premium packages completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 99, label: "Clients who would refer a friend", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years refining premium paint in Waco", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Inspection before correction quote", us: "✅ Always", others: "❌ Generic stage package" },
    { feature: "Multi-stage capability", us: "✅ Available", others: "❌ One pad only" },
    { feature: "Ceramic-ready finish path", us: "✅ Standard", others: "❌ Coat over defects" },
    { feature: "Satisfaction Re-Detail Guarantee", us: "✅ Agreed scope", others: "❌ Rare" },
  ];

  const faq = [
    { question: "Do you work on exotic and classic vehicles?", answer: "Yes — we schedule premium packages with extra care for soft paint, unique interiors, and specialty films." },
    { question: "Can you prepare a car for a show?", answer: "Yes. Correction, finishing polish, interior detail, and protection can be timed to your show calendar." },
    { question: "Do you ceramic coat collector cars?", answer: "Yes — after honest prep recommendations. We will not coat over unresolved defects without your agreement." },
    { question: "Is storage-pull detailing available?", answer: "Yes. We can plan decontamination and protection when cars come out of storage for the season." },
  ];

  const services = [
    { icon: faSprayCanSparkles, title: "Paint Correction", body: "Precision swirl and haze refinement.", link: "/services/paint-correction" },
    { icon: faShieldHalved, title: "Ceramic Coating", body: "Long-term gloss protection systems.", link: "/services/ceramic-coating" },
    { icon: faCar, title: "Full Detail", body: "Concours-minded exterior and cabin care.", link: "/services/full-detail" },
    { icon: faCouch, title: "Interior Detail", body: "Leather, Alcantara, and delicate trim care.", link: "/services/interior-detail" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Studio home for premium correction and coating.", badge: "Home Base" },
    { town: "Woodway", benefit: "Premium daily drivers and weekend cars.", badge: "" },
    { town: "Hewitt", benefit: "Collector and enthusiast vehicles.", badge: "" },
    { town: "Temple", benefit: "Show and storage-pull appointments.", badge: "" },
    { town: "China Spring", benefit: "Rural garage queens welcome by appointment.", badge: "" },
    { town: "Killeen", benefit: "Performance and specialty vehicles.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Luxury & Collectors" }]} />
      <SectionIntro title="Detailing for Luxury & Collector Vehicles" subtitle="Appointment-only paint correction, ceramic coating, and interior care for enthusiasts who want honest process and lasting gloss." />
      <TrustBar headline="Collectors trust GlossLab for careful correction and coating" />
      <div className={styles.section}><IndustryPainPoints industry="luxury & collectors" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Enthusiasts & Collectors" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Collectors Book Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="GlossLab vs. Rush Shops" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Collector Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Collector Detailing FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Collector Package Quote" cityName="Waco" slug="industries/luxury-collectors" spot="collectors-industry-form" formVariant={2} /></div>
      <CTABanner headline="Ready for Correction and Coating Done Right?" subline="Honest inspection. Controlled process. Satisfaction Re-Detail Guarantee." primaryText="Call (254) 950-1616" primaryLink="tel:+12549501616" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
