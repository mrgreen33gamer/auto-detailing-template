import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/paint-correction`;

export const metadata: Metadata = {
  title: "Paint Correction Waco TX | GlossLab Auto Detailing",
  description: "Paint correction in Waco, TX — swirl removal, haze refinement, and multi-stage polishing before ceramic coating.",
  keywords: ["paint correction Waco TX","swirl removal Waco","car polish Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Paint Correction Waco TX | GlossLab Auto Detailing",
    description: "Paint correction in Waco, TX — swirl removal, haze refinement, and multi-stage polishing before ceramic coating.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Paint Correction — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Correction Waco TX | GlossLab",
    description: "Paint correction in Waco, TX — swirl removal, haze refinement, and multi-stage polishing before ceramic coating.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paint Correction",
  description: "Paint correction in Waco, TX — swirl removal, haze refinement, and multi-stage polishing before ceramic coating.",
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
  serviceType: "Paint Correction",
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
