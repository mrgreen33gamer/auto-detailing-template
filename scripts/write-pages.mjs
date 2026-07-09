/**
 * Write GlossLab service/industry/blog pages + shared component defaults.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, content) => {
  fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');
  console.log('wrote', rel);
};

// ── Shared: TrustBar ─────────────────────────────────────────────────────────
// Patch via read+replace for TrustBar badges - write full file from garage pattern
const trustBarPath = 'components/PageComponents/TrustBar/TrustBar.tsx';
let trust = fs.readFileSync(path.join(ROOT, trustBarPath), 'utf8');
// Replace badge title/sub pairs common in HVAC
const badgeReplacements = [
  ["title: 'Licensed & Insured'", "title: 'Bonded & Insured'"],
  ["sub: 'Bonded · Full Coverage'", "sub: 'Full Coverage'"],
  ["title: 'Same-Day Service'", "title: 'Flexible Booking'"],
  ["sub: 'Emergency calls welcome'", "sub: 'Drop-off slots available'"],
  ["title: 'Flat-Rate Pricing'", "title: 'Transparent Packages'"],
  ["sub: 'No surprises, ever'", "sub: 'Scope before we start'"],
  ["title: 'Product-Certified'", "title: 'Product-Certified'"],
  ["title: 'NATE Certified'", "title: 'Product-Certified'"],
  ["sub: 'Bonded & Insured'", "sub: 'Installer-trained'"],
  ["title: '1-Year Warranty'", "title: 'Re-Detail Guarantee'"],
  ["title: '1-Yr Parts & Labor'", "title: 'Re-Detail Guarantee'"],
  ["sub: 'Parts & labor included'", "sub: 'We make it right'"],
  ["sub: 'On all repairs'", "sub: 'We make it right'"],
  ["title: '4.9★ Google Rating'", "title: '4.9★ Google Rating'"],
  ["sub: '300+ verified reviews'", "sub: '1,600+ verified reviews'"],
  ["sub: '500+ verified reviews'", "sub: '1,600+ verified reviews'"],
  ["sub: '1,200+ verified reviews'", "sub: '1,600+ verified reviews'"],
];
for (const [a,b] of badgeReplacements) trust = trust.split(a).join(b);
fs.writeFileSync(path.join(ROOT, trustBarPath), trust);

// ── CTABanner defaults ───────────────────────────────────────────────────────
let cta = fs.readFileSync(path.join(ROOT, 'components/PageComponents/CTABanner/CTABanner.tsx'), 'utf8');
cta = cta
  .replace(/headline\s*=\s*"[^"]*"/, 'headline      = "Ready for Gloss That Actually Lasts?"')
  .replace(/subline\s*=\s*"[^"]*"/, 'subline   = "Book ceramic coating, paint correction, full detail, or interior care. Transparent packages — Satisfaction Re-Detail Guarantee."')
  .replace(/primaryText\s*=\s*"[^"]*"/, 'primaryText  = "Call (254) 950-1616"')
  .replace(/primaryLink\s*=\s*"[^"]*"/, 'primaryLink   = "tel:+12549501616"')
  .replace(/Central Texas [A-Za-z &]+ Since 20\d\d/, 'Central Texas Detailing Experts Since 2015')
  .replace(/Central Texas Garage Door Experts Since 2011/, 'Central Texas Detailing Experts Since 2015');
// Fix remaining HVAC-ish eyebrow
cta = cta.replace(/Central Texas [^<\n]+Since 2015/, 'Central Texas Detailing Experts Since 2015');
fs.writeFileSync(path.join(ROOT, 'components/PageComponents/CTABanner/CTABanner.tsx'), cta);

// ── GuaranteeSection ─────────────────────────────────────────────────────────
w('components/PageComponents/GuaranteeSection/GuaranteeSection.tsx', `// components/PageComponents/GuaranteeSection/GuaranteeSection.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faRotateLeft,
  faTag,
  faCertificate,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteeSectionProps {
  title?:      string;
  headline?:   string;
  guarantees?: Guarantee[];
  ctaText?:    string;
  ctaLink?:    string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  {
    icon: faTag,
    title: "Transparent Package Pricing",
    description:
      "You get a clear package scope before we start — vehicle size, condition level, and included steps. No mystery upsells mid-detail.",
  },
  {
    icon: faShieldHalved,
    title: "Satisfaction Re-Detail Guarantee",
    description:
      "If work we completed within the agreed scope is not right, we re-detail the affected area. We stand behind the finish.",
  },
  {
    icon: faRotateLeft,
    title: "Careful Handling Always",
    description:
      "Soft mitts, proper decon, controlled polish steps, and interior-safe chemistry. Your vehicle is treated like a showpiece.",
  },
  {
    icon: faCertificate,
    title: "Product-Certified Detailers",
    description:
      "Bonded & insured studio with product-certified installers. Proven coatings and processes — not gas-station shortcuts.",
  },
  {
    icon: faCalendarCheck,
    title: "No Membership Lock-In",
    description:
      "Maintenance plans are flexible. We earn repeat visits with results — not long contracts.",
  },
  {
    icon: faStar,
    title: "On-Time Drop-Off Windows",
    description:
      "We respect your schedule. If timing shifts, we communicate early so you are never left guessing.",
  },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title      = "Our Promise to You",
  headline   = "We back every detail\\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText    = "Book a Detail",
  ctaLink    = "/contact",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{title}</span>
          <h2 className={styles.headline}>
            {headline.split('\\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
        </div>

        <div className={styles.grid}>
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className={styles.iconWrap}>
                <FontAwesomeIcon icon={g.icon} />
              </span>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardBody}>{g.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link
            href={ctaLink}
            className={styles.cta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: ctaText, section: 'GuaranteeSection' })}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
`);

// Helper for service page template
function servicePage({
  comment, fnName, title, subtitle, expectations, whyFeatures, processSteps, metrics,
  comparisonRows, faq, related, breadcrumbLabel, trustHeadline, formTitle,
}) {
  return `// GlossLab — ${comment}
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

export default function ${fnName}() {

  const expectations = ${JSON.stringify(expectations, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const whyFeatures = ${JSON.stringify(whyFeatures, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const processSteps = ${JSON.stringify(processSteps, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const metrics = ${JSON.stringify(metrics, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  const localAreas = [
    { town: "Waco",         benefit: "Studio home base — fastest booking windows.", badge: "Fastest" },
    { town: "Hewitt",       benefit: "Full ${title.toLowerCase()} coverage for Hewitt drivers.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway vehicles.", badge: "" },
    { town: "Bellmead",     benefit: "Easy drop-off for Bellmead clients.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.", badge: "" },
    { town: "Temple",       benefit: "Scheduled slots for Temple-area vehicles.", badge: "" },
  ];

  const comparisonRows = ${JSON.stringify(comparisonRows, null, 2)};

  const faq = ${JSON.stringify(faq, null, 2)};

  const related = ${JSON.stringify(related, null, 2).replace(/"icon": "([^"]+)"/g, 'icon: $1')};

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "${breadcrumbLabel}" },
      ]} />

      <SectionIntro
        title="${title} in Waco & Central Texas"
        subtitle="${subtitle}"
      />

      <TrustBar headline="${trustHeadline}" />

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
        <FAQ cityName="Waco" faq={faq} title="${title} FAQs" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={related} />
      </div>

      <CTABanner
        headline="Ready to Book ${title}?"
        subline="Call (254) 950-1616 or request a package quote online. Satisfaction Re-Detail Guarantee."
        primaryText="Call (254) 950-1616"
        primaryLink="tel:+12549501616"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="${formTitle}" cityName="Waco" slug="/services" spot="service-${breadcrumbLabel.toLowerCase().replace(/\\s+/g,'-')}" formVariant={2} />
      </div>
    </main>
  );
}
`;
}

const sharedProcess = [
  { number: 1, title: "Book Online or Call", description: "Share vehicle type, goals, and preferred drop-off. We confirm your slot.", icon: "faHeadset" },
  { number: 2, title: "Inspect & Recommend", description: "Paint and cabin assessment in plain English — right package, not the biggest one.", icon: "faSearch" },
  { number: 3, title: "Detail With Care", description: "Controlled wash, decon, polish, coat, or interior steps in a clean workspace.", icon: "faFileContract" },
  { number: 4, title: "Reveal & Guarantee", description: "Final walk-through, aftercare tips, Satisfaction Re-Detail Guarantee.", icon: "faCheckCircle" },
];

const relatedDefault = [
  { icon: "faCar", title: "Full Detail", body: "Complete interior + exterior refresh.", link: "/services/full-detail" },
  { icon: "faShieldHalved", title: "Ceramic Coating", body: "Multi-year protection and gloss.", link: "/services/ceramic-coating" },
  { icon: "faStar", title: "Paint Correction", body: "Swirl and haze removal before coating.", link: "/services/paint-correction" },
];

// Full Detail
w('src/app/services/full-detail/page.tsx', servicePage({
  comment: 'Full Detail',
  fnName: 'FullDetailPage',
  title: 'Full Detail',
  breadcrumbLabel: 'Full Detail',
  subtitle: 'Interior + exterior refresh — decontamination, polish prep, cabin deep-clean, and protection. Showroom results for daily drivers and weekend cars.',
  trustHeadline: '9,000+ vehicles detailed by GlossLab across Central Texas',
  formTitle: 'Book a Full Detail',
  expectations: [
    { icon: "faSearch", title: "Condition Check", description: "We review paint film, interior soils, and wheels so the package matches real needs." },
    { icon: "faFileContract", title: "Clear Package Scope", description: "You know which exterior and interior steps are included before we start." },
    { icon: "faCheckCircle", title: "Showroom Finish", description: "Exterior decon and interior extraction so the whole vehicle feels new again." },
    { icon: "faShieldHalved", title: "Re-Detail Guarantee", description: "If agreed work is not right, we make it right." },
  ],
  whyFeatures: [
    { icon: "faClock", title: "Flexible Drop-Off", description: "Book around work and travel — we confirm realistic completion windows." },
    { icon: "faCar", title: "All Vehicle Types", description: "Sedans, trucks, SUVs, and performance cars — sized packages for each." },
    { icon: "faShieldHalved", title: "Product-Certified Team", description: "Bonded & insured studio with disciplined process control." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 9000, label: "Vehicles detailed across Central Texas", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years serving Waco drivers", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Package scope before work starts", us: "✅ Always written", others: "❌ Vague menu only" },
    { feature: "Satisfaction Re-Detail Guarantee", us: "✅ Every package", others: "❌ Rare or none" },
    { feature: "Product-certified detailers", us: "✅ Studio standard", others: "❌ Hit-or-miss" },
    { feature: "Interior + exterior included options", us: "✅ Full menu", others: "❌ Exterior-only focus" },
    { feature: "Aftercare guidance", us: "✅ Always", others: "❌ Optional" },
  ],
  faq: [
    { question: "How long does a full detail take?", answer: "Most full details are same-day for typical sedans and small SUVs. Larger trucks, heavy soil, or add-on correction can need more time — we confirm at booking." },
    { question: "What is included in a full detail?", answer: "Exterior wash and decon, wheels/tires, interior vacuum and surfaces, glass, and finishing protection. Exact package levels vary — ask for the menu that fits your vehicle." },
    { question: "Can I add ceramic coating later?", answer: "Yes. Many clients start with a full detail or correction, then schedule ceramic coating as a dedicated multi-day service." },
    { question: "Do you detail fleets?", answer: "Yes — talk to us about rotating maintenance details for service vans and sales fleets." },
  ],
  related: relatedDefault,
}));

// Ceramic Coating
w('src/app/services/ceramic-coating/page.tsx', servicePage({
  comment: 'Ceramic Coating',
  fnName: 'CeramicCoatingPage',
  title: 'Ceramic Coating',
  breadcrumbLabel: 'Ceramic Coating',
  subtitle: 'Professional multi-year ceramic coatings that lock in gloss, repel water, and handle Central Texas UV, heat, and road film.',
  trustHeadline: 'Product-certified ceramic installers · Satisfaction Re-Detail Guarantee',
  formTitle: 'Request Ceramic Coating Quote',
  expectations: [
    { icon: "faSearch", title: "Paint Assessment", description: "We evaluate swirls and oxidation so correction recommendations are honest." },
    { icon: "faFileContract", title: "Prep Before Coat", description: "Wash, decon, and polish steps that actually let ceramic bond correctly." },
    { icon: "faCheckCircle", title: "Controlled Application", description: "Even application, proper flash, and cure windows — not rushed driveway installs." },
    { icon: "faShieldHalved", title: "Aftercare Plan", description: "Wash guidance and maintenance detail options so the coating stays healthy." },
  ],
  whyFeatures: [
    { icon: "faShieldHalved", title: "Real Ceramic Systems", description: "Professional coatings with documented prep — not spray-bottle 'ceramic' gimmicks." },
    { icon: "faClock", title: "Texas-Ready Protection", description: "Built for UV, heat, pollen, and summer storms common in Central Texas." },
    { icon: "faStar", title: "Gloss You Can Measure", description: "Correction + coat packages aimed at depth and clarity, not just hydrophobics." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 2500, label: "Ceramic packages installed", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 98, label: "Client satisfaction", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years coating vehicles in Waco", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Paint correction options before coat", us: "✅ Single- or multi-stage", others: "❌ Coat over defects" },
    { feature: "Professional coating systems", us: "✅ Product-certified", others: "❌ Consumer spray wax" },
    { feature: "Cure and aftercare guidance", us: "✅ Written plan", others: "❌ Minimal" },
    { feature: "Maintenance detail support", us: "✅ Available", others: "❌ One-and-done only" },
  ],
  faq: [
    { question: "How long does ceramic coating last?", answer: "Longevity depends on product level, prep quality, and maintenance. With proper wash habits and maintenance details, multi-year performance is realistic." },
    { question: "Do I need paint correction first?", answer: "If swirls or haze are visible, correction first locks a better result under the coating. Light polish may be enough for well-kept paint." },
    { question: "Can I wash at home after coating?", answer: "Yes — use pH-balanced soap, soft mitts, and avoid automatic brushes. We provide aftercare guidance at delivery." },
    { question: "Is ceramic coating worth it in Texas?", answer: "For drivers who want lasting gloss and easier decontamination under UV and heat, professional ceramic is one of the highest-ROI protections available." },
  ],
  related: relatedDefault,
}));

// Paint Correction
w('src/app/services/paint-correction/page.tsx', servicePage({
  comment: 'Paint Correction',
  fnName: 'PaintCorrectionPage',
  title: 'Paint Correction',
  breadcrumbLabel: 'Paint Correction',
  subtitle: 'Single- and multi-stage correction to remove swirls, haze, and light scratches — measured results before ceramic coating or show-day polish.',
  trustHeadline: 'Machine polishing done right — not rushed dual-action guesses',
  formTitle: 'Book Paint Correction',
  expectations: [
    { icon: "faSearch", title: "Defect Mapping", description: "We show you swirls, holograms, and oxidation under good light before quoting stages." },
    { icon: "faFileContract", title: "Stage Plan", description: "Single-stage refresh vs multi-stage correction based on paint thickness and goals." },
    { icon: "faCheckCircle", title: "Controlled Machine Work", description: "Proper pads, compounds, and technique to refine gloss without reckless cut." },
    { icon: "faShieldHalved", title: "Protect After", description: "Sealant or ceramic options so corrected paint does not immediately re-swirl." },
  ],
  whyFeatures: [
    { icon: "faStar", title: "Realistic Expectations", description: "We tell you what can improve and what paint damage cannot fully erase." },
    { icon: "faClock", title: "Patience Over Speed", description: "Correction is process work — we schedule enough time for quality results." },
    { icon: "faShieldHalved", title: "Coating-Ready Finish", description: "Ideal prep path for ceramic coating packages." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 1800, label: "Correction packages completed", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 97, label: "Clients who add protection after", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years refining paint in Waco", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Defect inspection before quoting", us: "✅ Always", others: "❌ Generic package" },
    { feature: "Multi-stage capability", us: "✅ Available", others: "❌ One pad only" },
    { feature: "Honest limitation talk", us: "✅ Standard", others: "❌ Overpromise" },
    { feature: "Protection after correction", us: "✅ Sealant or ceramic", others: "❌ Optional afterthought" },
  ],
  faq: [
    { question: "What is paint correction?", answer: "Machine polishing that levels microscopic clear-coat peaks causing swirls and haze, restoring clarity and depth." },
    { question: "Will correction remove deep scratches?", answer: "Deep scratches that catch a fingernail may not fully disappear. We set expectations honestly after inspection." },
    { question: "How many stages do I need?", answer: "Well-kept paint often needs a single refining stage. Neglected dark paint may need compound + polish stages." },
    { question: "Should I ceramic coat after?", answer: "Strongly recommended if you want the corrected finish to last under Texas sun and wash cycles." },
  ],
  related: relatedDefault,
}));

// Interior Detail
w('src/app/services/interior-detail/page.tsx', servicePage({
  comment: 'Interior Detail',
  fnName: 'InteriorDetailPage',
  title: 'Interior Detail',
  breadcrumbLabel: 'Interior Detail',
  subtitle: 'Deep vacuum, extraction, steam, leather/vinyl care, and odor treatment so the cabin feels as clean as the paint looks.',
  trustHeadline: 'Cabin-focused detailing for families, pets, and daily drivers',
  formTitle: 'Book Interior Detail',
  expectations: [
    { icon: "faSearch", title: "Soil & Odor Assessment", description: "We identify stains, pet soils, and odor sources before choosing chemistry." },
    { icon: "faFileContract", title: "Safe Process", description: "Material-safe cleaners for leather, vinyl, fabric, and plastics." },
    { icon: "faCheckCircle", title: "Deep Clean Finish", description: "Extraction and steam where appropriate — not just a surface wipe." },
    { icon: "faShieldHalved", title: "Fresh Cabin Feel", description: "Clean scent without heavy perfume masking leftover soils." },
  ],
  whyFeatures: [
    { icon: "faCar", title: "Family & Pet Ready", description: "Built for real life — crumbs, sports gear, and Texas dust included." },
    { icon: "faClock", title: "Pair With Exterior", description: "Combine with full detail or maintenance packages for complete results." },
    { icon: "faShieldHalved", title: "Careful Chemistry", description: "We protect delicate screens, trim, and perforated leather." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 3200, label: "Interiors refreshed", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 99, label: "Clients who would rebook", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years of cabin detailing", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Extraction / steam options", us: "✅ Available", others: "❌ Wipe-only" },
    { feature: "Material-safe chemistry", us: "✅ Matched to surfaces", others: "❌ One cleaner for all" },
    { feature: "Odor treatment approach", us: "✅ Source-focused", others: "❌ Air freshener only" },
    { feature: "Re-Detail Guarantee", us: "✅ Agreed scope", others: "❌ No follow-up" },
  ],
  faq: [
    { question: "Can you remove pet odors?", answer: "Often yes when soils are accessible. Severe odor may need multiple treatments — we assess honestly." },
    { question: "Do you clean leather?", answer: "Yes — clean and condition appropriate leather types. We avoid products that dry or over-darken." },
    { question: "How long does interior detail take?", answer: "Most cabins are same-day. Heavy soil, large SUVs, or stain extraction can take longer." },
    { question: "Can this pair with ceramic coating?", answer: "Yes — many clients book interior detail while paint is being prepped or coated." },
  ],
  related: relatedDefault,
}));

// Headlight Restoration
w('src/app/services/headlight-restoration/page.tsx', servicePage({
  comment: 'Headlight Restoration',
  fnName: 'HeadlightRestorationPage',
  title: 'Headlight Restoration',
  breadcrumbLabel: 'Headlight Restoration',
  subtitle: 'Cut, polish, and UV-seal cloudy lenses so night visibility and curb appeal return — without cheap temporary kits.',
  trustHeadline: 'UV-sealed headlight restoration for safer night driving',
  formTitle: 'Book Headlight Restoration',
  expectations: [
    { icon: "faSearch", title: "Lens Inspection", description: "We check haze depth, pitting, and moisture to confirm restoration vs replacement." },
    { icon: "faFileContract", title: "Multi-Step Refinement", description: "Sanding and polish stages matched to oxidation level." },
    { icon: "faCheckCircle", title: "UV Seal", description: "Protective seal so lenses do not yellow again in a month." },
    { icon: "faShieldHalved", title: "Visibility First", description: "Clear output and appearance — safety and looks together." },
  ],
  whyFeatures: [
    { icon: "faClock", title: "Fast Add-On", description: "Often completed as an add-on during full detail or maintenance visits." },
    { icon: "faStar", title: "Real UV Protection", description: "Sealing is the difference between lasting clarity and quick fade-back." },
    { icon: "faShieldHalved", title: "Honest Call", description: "If lenses are too far gone, we say so." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 1400, label: "Headlight sets restored", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 96, label: "Clients notice night-driving improvement", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years restoring lenses", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Multi-stage cut & polish", us: "✅ Yes", others: "❌ Wipe-on kit" },
    { feature: "UV seal included", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Pair with full detail", us: "✅ Easy add-on", others: "❌ Separate shop only" },
  ],
  faq: [
    { question: "How long does restoration last?", answer: "With proper UV seal and normal care, results last far longer than drugstore kits. Extreme sun exposure still benefits from periodic checks." },
    { question: "Is restoration better than new housings?", answer: "When lenses are structurally sound, restoration is a strong value. Cracked or failed sealed beams may need replacement." },
    { question: "Can you restore only one side?", answer: "We usually restore as a pair for even appearance and beam quality." },
  ],
  related: relatedDefault,
}));

// Maintenance Detail
w('src/app/services/maintenance-detail/page.tsx', servicePage({
  comment: 'Maintenance Detail',
  fnName: 'MaintenanceDetailPage',
  title: 'Maintenance Detail',
  breadcrumbLabel: 'Maintenance Detail',
  subtitle: 'Keep ceramic-coated and daily-driven vehicles looking sharp with scheduled wash, decon, and interior top-ups.',
  trustHeadline: 'Protect your investment with scheduled maintenance details',
  formTitle: 'Book Maintenance Detail',
  expectations: [
    { icon: "faSearch", title: "Coat-Friendly Wash", description: "Safe wash methods that preserve ceramic and sealant performance." },
    { icon: "faFileContract", title: "Decon When Needed", description: "Iron and tar removal on a smart schedule — not every single visit." },
    { icon: "faCheckCircle", title: "Interior Top-Up", description: "Quick cabin refresh so daily life does not undo your last full detail." },
    { icon: "faShieldHalved", title: "Flexible Cadence", description: "Monthly, quarterly, or seasonal — no long lock-in required." },
  ],
  whyFeatures: [
    { icon: "faClock", title: "Faster Than Full Redo", description: "Maintenance keeps results alive without paying for a full correction every time." },
    { icon: "faStar", title: "Ceramic-Friendly", description: "Ideal follow-up path after coating packages." },
    { icon: "faShieldHalved", title: "Fleet Options", description: "Rotating schedules for small fleets and dealerships." },
  ],
  processSteps: sharedProcess,
  metrics: [
    { icon: "faTrophy", value: 2100, label: "Maintenance visits completed", suffix: "+", duration: 3 },
    { icon: "faChartLine", value: 98, label: "Return-visit rate", suffix: "%", duration: 2 },
    { icon: "faClock", value: 11, label: "Years of local care plans", suffix: "+", duration: 2 },
  ],
  comparisonRows: [
    { feature: "Ceramic-safe process", us: "✅ Standard", others: "❌ Harsh brushes" },
    { feature: "Flexible schedule", us: "✅ No lock-in", others: "❌ Annual contract" },
    { feature: "Interior + exterior options", us: "✅ Menu-based", others: "❌ Exterior only" },
  ],
  faq: [
    { question: "How often should I book maintenance?", answer: "Many daily drivers do well every 4–8 weeks. Ceramic-coated vehicles can often stretch intervals with careful home washing between visits." },
    { question: "Is this the same as a full detail?", answer: "No — maintenance is a lighter, faster refresh designed to preserve previous work rather than rebuild from neglected condition." },
    { question: "Do you offer fleet schedules?", answer: "Yes — contact us for multi-vehicle rotations." },
  ],
  related: relatedDefault,
}));

console.log('service pages done');
