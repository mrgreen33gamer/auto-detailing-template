import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/ceramic-coating`;

export const metadata: Metadata = {
  title: "Ceramic Coating Waco TX | GlossLab Auto Detailing",
  description: "Professional ceramic coating in Waco, TX — multi-year protection, gloss, and easier maintenance for Central Texas UV and heat.",
  keywords: ["ceramic coating Waco TX","car ceramic coat Waco","paint protection Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Ceramic Coating Waco TX | GlossLab Auto Detailing",
    description: "Professional ceramic coating in Waco, TX — multi-year protection, gloss, and easier maintenance for Central Texas UV and heat.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Ceramic Coating — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceramic Coating Waco TX | GlossLab",
    description: "Professional ceramic coating in Waco, TX — multi-year protection, gloss, and easier maintenance for Central Texas UV and heat.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Coating",
  description: "Professional ceramic coating in Waco, TX — multi-year protection, gloss, and easier maintenance for Central Texas UV and heat.",
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
  serviceType: "Ceramic Coating",
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
