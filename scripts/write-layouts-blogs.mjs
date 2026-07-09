import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, content) => {
  fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');
  console.log('wrote', rel);
};

function serviceLayout({ slug, title, description, keywords, serviceType }) {
  const urlPath = `/services/${slug}`;
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = \`\${BASE_URL}${urlPath}\`;

export const metadata: Metadata = {
  title: "${title} Waco TX | GlossLab Auto Detailing",
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} Waco TX | GlossLab Auto Detailing",
    description: ${JSON.stringify(description)},
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: \`\${BASE_URL}/logos/scott-apps-banner.png\`, alt: "${title} — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title} Waco TX | GlossLab",
    description: ${JSON.stringify(description)},
    images: [\`\${BASE_URL}/logos/scott-apps-banner.png\`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${title}",
  description: ${JSON.stringify(description)},
  provider: {
    "@type": "AutomotiveBusiness",
    name: "GlossLab Auto Detailing",
    url: BASE_URL,
    telephone: "+12549501616",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2701 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "${serviceType}",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
`;
}

const services = [
  {
    slug: 'full-detail',
    title: 'Full Detail',
    description: 'Professional full detail in Waco, TX — interior and exterior wash, decon, polish prep, and protection for daily drivers and weekend cars.',
    keywords: ['full detail Waco TX', 'car detailing Waco', 'auto detail Central Texas', 'GlossLab full detail'],
    serviceType: 'Full Detail',
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: 'Professional ceramic coating in Waco, TX — multi-year protection, gloss, and easier maintenance for Central Texas UV and heat.',
    keywords: ['ceramic coating Waco TX', 'car ceramic coat Waco', 'paint protection Central Texas'],
    serviceType: 'Ceramic Coating',
  },
  {
    slug: 'paint-correction',
    title: 'Paint Correction',
    description: 'Paint correction in Waco, TX — swirl removal, haze refinement, and multi-stage polishing before ceramic coating.',
    keywords: ['paint correction Waco TX', 'swirl removal Waco', 'car polish Central Texas'],
    serviceType: 'Paint Correction',
  },
  {
    slug: 'interior-detail',
    title: 'Interior Detail',
    description: 'Interior car detailing in Waco, TX — deep vacuum, extraction, steam, leather care, and odor treatment.',
    keywords: ['interior detail Waco TX', 'car interior cleaning Waco', 'leather detail Central Texas'],
    serviceType: 'Interior Detail',
  },
  {
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    description: 'Headlight restoration in Waco, TX — cut, polish, and UV seal cloudy lenses for safer night driving.',
    keywords: ['headlight restoration Waco TX', 'headlight polish Waco', 'cloudy headlights Central Texas'],
    serviceType: 'Headlight Restoration',
  },
  {
    slug: 'maintenance-detail',
    title: 'Maintenance Detail',
    description: 'Maintenance detailing in Waco, TX — ceramic-safe wash, decon, and interior top-ups on a flexible schedule.',
    keywords: ['maintenance detail Waco TX', 'ceramic maintenance wash Waco', 'car detail plan Central Texas'],
    serviceType: 'Maintenance Detail',
  },
];

for (const s of services) {
  w(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s));
}

// Industry layouts
function industryLayout({ slug, title, description }) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = \`\${BASE_URL}/industries/${slug}\`;

export const metadata: Metadata = {
  title: "${title} Detailing | GlossLab Auto Detailing Waco TX",
  description: ${JSON.stringify(description)},
  alternates: { canonical: url },
  openGraph: {
    title: "${title} | GlossLab Auto Detailing",
    description: ${JSON.stringify(description)},
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

w('src/app/industries/dealerships/layout.tsx', industryLayout({
  slug: 'dealerships',
  title: 'Dealership',
  description: 'Dealership auto detailing packages in Waco and Central Texas — lot-ready full details, correction, and interior resets with reliable turnaround.',
}));
w('src/app/industries/fleet-vehicles/layout.tsx', industryLayout({
  slug: 'fleet-vehicles',
  title: 'Fleet',
  description: 'Fleet vehicle detailing in Waco and Central Texas — rotating maintenance details and full resets for vans, trucks, and sales fleets.',
}));
w('src/app/industries/luxury-collectors/layout.tsx', industryLayout({
  slug: 'luxury-collectors',
  title: 'Luxury & Collector',
  description: 'Luxury and collector vehicle detailing in Waco — paint correction, ceramic coating, and careful interior care by appointment.',
}));

// Blogs
w('src/app/blogs/ceramic-coating-vs-wax/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faShieldHalved, faSun, faClock, faDollarSign, faCar, faStar } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "If you drive in Waco or anywhere in Central Texas, your paint lives under harsh UV, heat, pollen, and summer storms. Wax still has a place — but ceramic coatings last longer and make decontamination easier when installed correctly. Here is an honest comparison from GlossLab.",
  },
  {
    type: 'cards',
    heading: 'Ceramic Coating vs. Wax — Quick Hits',
    cards: [
      { icon: faShieldHalved, title: 'Durability', body: 'Quality ceramic systems can last years with proper care. Traditional wax often needs reapplication every 1–3 months in Texas heat.' },
      { icon: faSun, title: 'UV & Heat', body: 'Ceramic forms a harder sacrificial layer that holds gloss better under Central Texas sun than soft wax alone.' },
      { icon: faClock, title: 'Maintenance', body: 'Coated paint releases road film easier. Wax can look great for a weekend show but fades quickly on daily drivers.' },
      { icon: faDollarSign, title: 'Upfront Cost', body: 'Ceramic costs more initially, especially when paint correction is included. Wax is cheaper short-term.' },
      { icon: faCar, title: 'Best Use Cases', body: 'Wax: temporary shine before an event. Ceramic: daily drivers, trucks, and anyone tired of constant re-waxing.' },
      { icon: faStar, title: 'Prep Still Matters', body: 'Coating over swirls locks them in. Correction first is what makes ceramic look expensive — not the bottle alone.' },
    ],
  },
  {
    type: 'table',
    heading: 'Side-by-Side for Central Texas Drivers',
    tableHeaders: ['Factor', 'Traditional Wax', 'Professional Ceramic'],
    tableRows: [
      ['Typical longevity', 'Weeks to a few months', 'Multi-year with care'],
      ['Hydrophobics', 'Good when fresh', 'Strong and longer lasting'],
      ['UV resistance', 'Limited', 'Stronger sacrificial layer'],
      ['Wash ease', 'Moderate', 'Easier decontamination'],
      ['Upfront investment', 'Low', 'Higher (prep + install)'],
      ['Best for', 'Short-term shine', 'Daily protection + gloss'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your paint is swirled, budget correction before ceramic. Coating a flawed finish only makes defects shinier. Call GlossLab at (254) 950-1616 for an honest inspection.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Inspect paint in bright sun or LED light for swirls and haze',
      'Decide daily-driver protection vs one-event shine',
      'Ask for single-stage vs multi-stage correction options',
      'Plan maintenance washes that protect ceramic',
      'Book a GlossLab coating consult in Waco',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Ceramic Coating vs. Wax: What Waco Drivers Should Choose"
        description="Wax still has a place, but ceramic coatings last longer under Central Texas sun and heat. Here is an honest comparison for daily drivers and weekend cars."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Ceramic coating vs wax comparison for Waco TX vehicles"
        category="Protection"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Curious About Ceramic?"
        body="Get an honest paint inspection and package recommendation from GlossLab Auto Detailing in Waco."
        buttonText="Book Ceramic Consult"
        buttonHref="/services/ceramic-coating"
      />
      <NewsletterSignup variant={1} spot="ceramic-coating-vs-wax-blog" />
    </>
  );
}
`);

w('src/app/blogs/how-often-detail-your-car-texas/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faCar, faCalendarCheck, faWater, faBug, faRoad } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas is hard on vehicles. UV cooks clear coat, pollen rains down every spring, summer storms leave mineral spots, and farm/highway miles stack road film fast. How often you should detail depends on how you drive — not a one-size internet answer.",
  },
  {
    type: 'cards',
    heading: 'What Drives Detailing Frequency in Texas',
    cards: [
      { icon: faSun, title: 'UV Exposure', body: 'Cars parked outside need more frequent protection top-ups than garage-kept vehicles.' },
      { icon: faBug, title: 'Pollen & Bugs', body: 'Spring pollen and summer bug guts etch if left sitting — rinse and safe wash matter between full details.' },
      { icon: faRoad, title: 'Highway Miles', body: 'Commuters pick up film and iron fallout faster than short neighborhood drivers.' },
      { icon: faWater, title: 'Hard Water Spots', body: 'Irrigation overspray and storm water can spot paint — do not let spots bake in the sun.' },
      { icon: faCar, title: 'Dark Paint', body: 'Black and dark colors show swirls sooner — maintenance details protect previous correction work.' },
      { icon: faCalendarCheck, title: 'Ceramic Status', body: 'Coated cars can stretch intervals, but still need ceramic-safe maintenance washes.' },
    ],
  },
  {
    type: 'table',
    heading: 'Practical Schedule Guidelines',
    tableHeaders: ['Driver Profile', 'Maintenance Detail', 'Full Detail / Deeper Work'],
    tableRows: [
      ['Daily driver, outdoor parking', 'Every 4–6 weeks', '2–4× per year'],
      ['Garage-kept weekend car', 'Every 8–12 weeks', '1–2× per year'],
      ['Ceramic-coated daily driver', 'Every 6–8 weeks', 'As needed + annual check'],
      ['Fleet / client-facing van', 'Every 3–6 weeks', 'Quarterly deep reset'],
      ['Collector / show car', 'Before shows + seasonal', 'Correction as needed'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Maintenance details exist to protect previous correction and coating work. Waiting until the car looks neglected usually means paying for a full redo. Call (254) 950-1616 to set a cadence.",
  },
  {
    type: 'tips',
    heading: 'Between Studio Visits',
    items: [
      'Use pH-balanced soap and soft wash media',
      'Avoid automatic brush washes on corrected or coated paint',
      'Remove bird droppings and bugs ASAP',
      'Dry with clean microfiber — do not air-dry in the sun',
      'Book GlossLab maintenance before summer pollen peaks',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Detail Your Car in Texas Heat?"
        description="UV, pollen, road film, and summer storms beat up paint and interiors fast. A practical detailing schedule for Central Texas drivers."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="How often to detail your car in Texas heat guide"
        category="Maintenance"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Maintenance Cadence?"
        body="GlossLab builds flexible maintenance details for daily drivers, fleets, and ceramic-coated vehicles."
        buttonText="Book Maintenance Detail"
        buttonHref="/services/maintenance-detail"
      />
      <NewsletterSignup variant={1} spot="how-often-detail-texas-blog" />
    </>
  );
}
`);

w('src/app/blogs/paint-correction-explained/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSearch, faLayerGroup, faShieldHalved, faExclamationTriangle, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Paint correction is machine polishing that refines clear coat to reduce swirls, haze, and light scratches. It is not magic, and it is not the same as a quick polish-and-go wash. Understanding stages helps you set realistic expectations before ceramic coating.",
  },
  {
    type: 'cards',
    heading: 'Paint Correction Essentials',
    cards: [
      { icon: faSearch, title: 'Inspect First', body: 'Defects look different under LED vs sunlight. A good shop shows you what is actually there before quoting stages.' },
      { icon: faLayerGroup, title: 'Stages Mean Cut + Refine', body: 'Multi-stage uses more aggressive compounds first, then refining polish. Single-stage is lighter refinement for milder defects.' },
      { icon: faExclamationTriangle, title: 'Depth Has Limits', body: 'Scratches that catch a fingernail may not fully disappear without risking clear coat. Honesty beats overpromise.' },
      { icon: faShieldHalved, title: 'Protect After', body: 'Corrected paint needs sealant or ceramic. Otherwise wash marring returns quickly.' },
      { icon: faStar, title: 'Dark Paint Shows Everything', body: 'Black and dark colors need careful technique — holograms from poor polishing are real.' },
      { icon: faCheck, title: 'Coating Is Optional Timing', body: 'Many clients correct then ceramic coat in one project plan for maximum lasting gloss.' },
    ],
  },
  {
    type: 'table',
    heading: 'Single-Stage vs Multi-Stage',
    tableHeaders: ['Situation', 'Likely Approach', 'Notes'],
    tableRows: [
      ['Light wash marring', 'Single-stage', 'Faster, lower cost'],
      ['Moderate swirls / haze', 'One or two stages', 'Depends on paint hardness'],
      ['Neglected daily driver', 'Multi-stage', 'More time, bigger visual jump'],
      ['Deep isolated scratches', 'Spot assessment', 'May not fully remove'],
      ['Pre-ceramic prep', 'As needed stages', 'Do not coat over defects'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask your detailer what percentage of defect reduction is realistic — not whether the paint will be 'perfect.' GlossLab sets expectations after inspection. Call (254) 950-1616.",
  },
  {
    type: 'tips',
    heading: 'Before You Book Correction',
    items: [
      'Wash the car so inspection is honest',
      'Share photos of problem panels in sunlight',
      'Ask whether ceramic is recommended after',
      'Plan enough shop time — correction is not a 1-hour wash',
      'Budget protection so results last',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Paint Correction Explained: Swirls, Oxidation & Real Results"
        description="What multi-stage paint correction actually fixes, when a single-stage polish is enough, and how to set realistic expectations before ceramic coating."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Paint correction explained for swirl removal and gloss"
        category="Paint Care"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for Real Paint Clarity?"
        body="Book a paint correction inspection with GlossLab — honest stages, measured results, coating options."
        buttonText="Book Paint Correction"
        buttonHref="/services/paint-correction"
      />
      <NewsletterSignup variant={1} spot="paint-correction-explained-blog" />
    </>
  );
}
`);

// Blog layouts
function blogLayout({ slug, title, description, keywords }) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = \`\${BASE_URL}/blogs/${slug}\`;

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(keywords)},
  alternates: { canonical: url },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

w('src/app/blogs/ceramic-coating-vs-wax/layout.tsx', blogLayout({
  slug: 'ceramic-coating-vs-wax',
  title: 'Ceramic Coating vs. Wax | GlossLab Auto Detailing',
  description: 'Ceramic coating vs wax for Waco and Central Texas drivers — longevity, UV protection, cost, and when correction comes first.',
  keywords: ['ceramic coating vs wax', 'ceramic coating Waco TX', 'car wax vs ceramic'],
}));
w('src/app/blogs/how-often-detail-your-car-texas/layout.tsx', blogLayout({
  slug: 'how-often-detail-your-car-texas',
  title: 'How Often to Detail Your Car in Texas | GlossLab',
  description: 'How often you should detail your car in Texas heat — schedules for daily drivers, ceramic-coated cars, fleets, and collectors.',
  keywords: ['how often detail car Texas', 'car detail schedule Waco', 'maintenance detail Texas'],
}));
w('src/app/blogs/paint-correction-explained/layout.tsx', blogLayout({
  slug: 'paint-correction-explained',
  title: 'Paint Correction Explained | GlossLab Auto Detailing',
  description: 'Paint correction explained for swirl removal, multi-stage polishing, and realistic results before ceramic coating in Waco TX.',
  keywords: ['paint correction explained', 'swirl removal Waco', 'multi-stage polish'],
}));

// Sitemap
w('src/app/sitemap.xml/route.ts', `// GlossLab Auto Detailing — XML Sitemap
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.glosslabdetail.com';
  const today   = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  const coreServices = [
    { url: '/services/full-detail',            priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/ceramic-coating',        priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/paint-correction',       priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/interior-detail',        priority: '0.85', changefreq: 'monthly' },
    { url: '/services/headlight-restoration',  priority: '0.85', changefreq: 'monthly' },
    { url: '/services/maintenance-detail',     priority: '0.85', changefreq: 'monthly' },
  ];

  const industries = [
    { url: '/industries/dealerships',       priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/fleet-vehicles',    priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/luxury-collectors', priority: '0.80', changefreq: 'monthly' },
  ];

  const blogPages = getAllPosts().map((post: any) => ({
    url: \`/blogs/\${post.slug}\`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...coreServices, ...industries, ...blogPages];

  let xml = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += \`  <url>
    <loc>\${baseUrl}\${url}</loc>
    <lastmod>\${today}</lastmod>
    <changefreq>\${changefreq}</changefreq>
    <priority>\${priority}</priority>
  </url>\\n\`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
`);

console.log('layouts + blogs + sitemap done');
