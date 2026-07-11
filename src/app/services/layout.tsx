// src/app/services/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// ✅ FIX: This file was previously a copy of
//    /services/website-design/killeen-tx/layout.tsx (KilleenWebDesignLayout).
//    That caused a metadata collision — Google saw Killeen keyword targeting
//    on the /services parent route.
//
//    This is now the correct /services parent layout with:
//    - Broad "all services" metadata (no city/keyword cannibalization)
//    - OfferCatalog schema listing all 4 services
//    - BreadcrumbList for the /services route
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://auto-detailing-template.vercel.app';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Services | Web Design, Software, Branding & Marketing | GlossLab",
  description:
    "GlossLab offers custom web design, software engineering, graphic design, and digital marketing for Central Texas businesses. Fixed pricing, no contracts, you own everything.",
  keywords: [
    "web design Waco TX",
    "custom software Central Texas",
    "graphic design Waco",
    "digital marketing Waco TX",
    "GlossLab services",
    "digital agency Waco Texas",
    "website development Central Texas",
    "local SEO Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Services | Web Design, Software, Branding & Marketing | GlossLab",
    description:
      "Custom websites, software, branding, and marketing for Central Texas businesses. Fixed price, no contracts, direct developer access.",
    url,
    siteName: "GlossLab",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        alt: "GlossLab — Services for Central Texas Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | GlossLab",
    description:
      "Web design, custom software, graphic design, and digital marketing for Central Texas. Fixed pricing, full ownership.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "GlossLab — Digital Services",
  description:
    "Full-service digital agency offerings for Central Texas businesses: web design, custom software, graphic design, and digital marketing.",
  provider: {
    "@type": "LocalBusiness",
    name: "GlossLab",
    url: BASE_URL,
    telephone: "+12549002520",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website Design",
        description:
          "Mobile-first, SEO-optimized websites built on Next.js for Central Texas businesses. Fixed price, you own everything.",
        url: `${BASE_URL}/services/website-design`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Software Engineering",
        description:
          "Custom CRMs, client portals, business tools, and web applications. Fixed price, direct developer access.",
        url: `${BASE_URL}/services/software-engineering`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Graphic Design",
        description:
          "Custom logos, brand identities, and marketing collateral. Unlimited revisions, full source file ownership.",
        url: `${BASE_URL}/services/graphic-design`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Digital Marketing & Local SEO",
        description:
          "Local SEO, Google Ads, Google Business Profile management, and social media. Month-to-month, no contracts.",
        url: `${BASE_URL}/services/marketing-solutions`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
