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
  faTruck, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faCar, faCouch, faCalendarCheck, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function FleetVehiclesIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No rotating clean schedule", consequence: "Client-facing vans and sales cars look inconsistent week to week." },
    { icon: faFileInvoiceDollar, problem: "Detailing treated as random expense", consequence: "Without a plan, costs spike after events instead of staying budgeted." },
    { icon: faUsers, problem: "Drivers cannot wait all day", consequence: "Ops need predictable drop-off windows that do not strand routes." },
    { icon: faTruck, problem: "Work trucks vs executive cars mixed together", consequence: "One package does not fit soil levels across mixed fleets." },
    { icon: faClipboardList, problem: "No brand-standard interior/exterior baseline", consequence: "Logos and brand colors look dull when wash quality varies by shop." },
    { icon: faHandshake, problem: "Vendors cancel or overbook", consequence: "Missed clean dates create client meeting embarrassment." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Rotating Fleet Cadence", description: "Scheduled maintenance details so every unit cycles through on a plan." },
    { icon: faFileInvoiceDollar, title: "Predictable Per-Unit Pricing", description: "Tiered packages for vans, trucks, and executive vehicles." },
    { icon: faUsers, title: "Ops-Friendly Windows", description: "Drop-off timing that respects routes, meetings, and shift changes." },
  ];

  const processSteps = [
    { number: 1, title: "Fleet Audit", description: "Vehicle mix, soil levels, and client-facing priority units.", icon: faSearch },
    { number: 2, title: "Cadence Plan", description: "Monthly/quarterly rotation with package tiers.", icon: faCalendarAlt },
    { number: 3, title: "Execute & Report", description: "Consistent standards with simple completion notes.", icon: faRocket },
    { number: 4, title: "Adjust Volume", description: "Scale up for seasonal hiring or new routes.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 60, label: "Fleet accounts supported", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 900, label: "Fleet units maintained", suffix: "+", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas fleets", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Rotating multi-unit schedule", us: "✅ Planned cadence", others: "❌ Ad-hoc only" },
    { feature: "Package tiers by vehicle type", us: "✅ Van / truck / sedan", others: "❌ One price guess" },
    { feature: "Ops communication", us: "✅ Clear ETAs", others: "❌ Silent delays" },
    { feature: "Bonded & insured studio", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "What fleet sizes do you support?", answer: "From small 3–10 vehicle teams to larger rotating programs. We size cadence to your volume." },
    { question: "Can you prioritize client-facing units?", answer: "Yes — sales cars and branded vans can cycle more often than back-of-house trucks." },
    { question: "Do you invoice monthly?", answer: "We can structure billing to match your accounting preferences for standing schedules." },
    { question: "Do you service after hours?", answer: "Selected windows can be arranged for fleet drops — ask when scoping." },
  ];

  const services = [
    { icon: faCar, title: "Full Detail", body: "Deep reset when units are heavily soiled.", link: "/services/full-detail" },
    { icon: faCalendarCheck, title: "Maintenance Detail", body: "Rotating keep-clean packages.", link: "/services/maintenance-detail" },
    { icon: faCouch, title: "Interior Detail", body: "Cabin resets for client rides and crews.", link: "/services/interior-detail" },
    { icon: faLightbulb, title: "Headlight Restoration", body: "Safer night routes for aging fleets.", link: "/services/headlight-restoration" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Studio base for fleet rotations.", badge: "Home Base" },
    { town: "Temple", benefit: "Bell County fleet support.", badge: "" },
    { town: "Killeen", benefit: "Service and sales fleets near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Local contractor and service vans.", badge: "" },
    { town: "Woodway", benefit: "Executive and sales vehicle care.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor fleet vehicles.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Fleet Vehicles" }]} />
      <SectionIntro title="Auto Detailing for Fleet Vehicles" subtitle="Rotating maintenance details and full resets for service vans, sales fleets, and mixed commercial vehicles across Central Texas." />
      <TrustBar headline="Fleet operators trust GlossLab for consistent brand presentation" />
      <div className={styles.section}><IndustryPainPoints industry="fleet vehicles" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Fleet Operations" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Fleets Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} title="GlossLab vs. Ad-Hoc Wash Shops" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Fleet Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Fleet Detailing FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Fleet Program Quote" cityName="Waco" slug="industries/fleet-vehicles" spot="fleet-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Detailing Cadence Your Ops Can Trust?" subline="Rotating schedules. Package tiers. Clear communication." primaryText="Call (254) 950-1616" primaryLink="tel:+12549501616" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
