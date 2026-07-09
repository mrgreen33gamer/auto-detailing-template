import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/full-detail`;

export const metadata: Metadata = {
  title: "Full Detail Waco TX | GlossLab Auto Detailing",
  description: "Professional full detail in Waco, TX — interior and exterior wash, decon, polish prep, and protection for daily drivers and weekend cars.",
  keywords: ["full detail Waco TX","car detailing Waco","auto detail Central Texas","GlossLab full detail"],
  alternates: { canonical: url },
  openGraph: {
    title: "Full Detail Waco TX | GlossLab Auto Detailing",
    description: "Professional full detail in Waco, TX — interior and exterior wash, decon, polish prep, and protection for daily drivers and weekend cars.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Full Detail — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Detail Waco TX | GlossLab",
    description: "Professional full detail in Waco, TX — interior and exterior wash, decon, polish prep, and protection for daily drivers and weekend cars.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Detail",
  description: "Professional full detail in Waco, TX — interior and exterior wash, decon, polish prep, and protection for daily drivers and weekend cars.",
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
  serviceType: "Full Detail",
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
