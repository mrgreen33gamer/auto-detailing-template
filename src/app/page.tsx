// GlossLab Auto Detailing — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faCar, faShieldHalved, faSprayCanSparkles, faCouch, faLightbulb, faCalendarCheck,
  faTrophy, faChartLine, faClock,
  faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faGem,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faCar,
      title: "Full Detail",
      body: "Complete interior + exterior refresh — wash, decon, polish prep, vacuum, steam, and protection. Showroom results for daily drivers and weekend cars.",
      link: "/services/full-detail",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faShieldHalved,
      title: "Ceramic Coating",
      body: "Professional multi-year ceramic coatings that lock in gloss, repel water, and stand up to Central Texas UV, heat, and road film.",
      link: "/services/ceramic-coating",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faSprayCanSparkles,
      title: "Paint Correction",
      body: "Single- and multi-stage correction to remove swirls, haze, and light scratches before coating — measured results, not marketing fluff.",
      link: "/services/paint-correction",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faCouch,
      title: "Interior Detail",
      body: "Deep vacuum, extraction, steam, leather/vinyl care, and odor treatment so the cabin feels as clean as the paint looks.",
      link: "/services/interior-detail",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faLightbulb,
      title: "Headlight Restoration",
      body: "Cut, polish, and UV-seal cloudy lenses so night visibility and curb appeal come back — without cheap temporary kits.",
      link: "/services/headlight-restoration",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faCalendarCheck,
      title: "Maintenance Detail",
      body: "Keep ceramic-coated and daily-driven vehicles looking sharp with scheduled wash, decon, and interior top-ups.",
      link: "/services/maintenance-detail",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 9000, label: "Vehicles detailed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 11,   label: "Years of local detailing experience",    suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",           suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Transparent Packages & Pricing",
      description: "Clear menus for full detail, ceramic, correction, and interior work. You know the scope before we start — no mystery line items mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "Product-Certified Detailers",
      description: "Bonded & insured studio with product-certified installers. We use proven coatings, pads, and chemistry — not gas-station shortcuts.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2015",
      description: "Founded in Waco by Jade Nguyen. Every decision is made locally — from coating brands to how we treat your interior plastics.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Book Online or Call",
      description: "Tell us vehicle type, condition goals, and preferred drop-off window. We'll confirm a slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Inspect & Recommend",
      description: "We assess paint, interior, and headlights in plain English — then recommend the right package, not the biggest one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "Detail With Care",
      description: "Wash, decontaminate, correct, coat, or deep-clean interiors with controlled processes and clean workspace standards.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Reveal & Guarantee",
      description: "Walk-through of results, aftercare tips, and our Satisfaction Re-Detail Guarantee if something isn't right.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Condition Assessment",
      description: "We show you paint defects and interior issues under good light so expectations match reality before any correction or coating.",
    },
    {
      icon: faGem,
      title: "Careful Product Selection",
      description: "Coatings, polishes, and interior chemistry matched to your paint hardness, film type, and how you actually use the vehicle.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Package Pricing",
      description: "Written package scope before work begins. If we find something that changes the plan, we call you first.",
    },
    {
      icon: faStar,
      title: "Finish Quality You Can See",
      description: "Even lighting checks, panel wipe-downs, and a final reveal so you leave confident — not guessing about swirls under the sun.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking and most flexible drop-off windows.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential detailing coverage. Easy in-and-out for daily drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway and nearby neighborhoods.",               badge: "" },
    { town: "Temple",       benefit: "Central Texas coverage with scheduled slots for Temple clients.",         badge: "" },
    { town: "China Spring", benefit: "Rural drop-offs welcome — call ahead for same-week availability.",        badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area vehicles.",                badge: "" },
  ];

  const faq = [
    {
      question: "How much does a full detail cost in Waco?",
      answer: "Most full details fall in a mid-range package depending on vehicle size and condition. Ceramic coating and multi-stage paint correction are quoted after inspection. We always confirm scope and price before starting.",
    },
    {
      question: "How long does ceramic coating take?",
      answer: "Plan for multi-day service when paint correction is included. Maintenance-friendly single-stage polish + coat jobs can often be completed faster. We'll set a realistic timeline at booking.",
    },
    {
      question: "Do I need paint correction before ceramic?",
      answer: "If the paint has visible swirls or haze, correction first locks in a better result under the coating. Light single-stage polish may be enough for well-kept paint — we'll recommend honestly.",
    },
    {
      question: "What services do you offer?",
      answer: "Full detail, ceramic coating, paint correction, interior detail, headlight restoration, and maintenance detail packages for daily drivers, fleets, dealerships, and collector vehicles.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — GlossLab is bonded & insured with product-certified detailers. Credentials available on request.",
    },
    {
      question: "What is the Satisfaction Re-Detail Guarantee?",
      answer: "If something we completed isn't right within the agreed scope, we re-detail the affected work. We stand behind the finish — not just the invoice.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted auto detailing studio — product-certified, insured, and guarantee-backed"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Auto Detailing Services"
          cards={services}
        />
      </div>
      <CTABanner
        headline="Showroom Gloss. Real Protection."
        subline="Ceramic coating, paint correction, and interior detail packages — mobile or in-bay across Central Texas."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="See Packages"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes GlossLab Different"
        />
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
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Visit, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Auto Detailing Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Book a Detail or Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
