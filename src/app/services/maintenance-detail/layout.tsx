import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/maintenance-detail`;

export const metadata: Metadata = {
  title: "Maintenance Detail Waco TX | GlossLab Auto Detailing",
  description: "Maintenance detailing in Waco, TX — ceramic-safe wash, decon, and interior top-ups on a flexible schedule.",
  keywords: ["maintenance detail Waco TX","ceramic maintenance wash Waco","car detail plan Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Maintenance Detail Waco TX | GlossLab Auto Detailing",
    description: "Maintenance detailing in Waco, TX — ceramic-safe wash, decon, and interior top-ups on a flexible schedule.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Maintenance Detail — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance Detail Waco TX | GlossLab",
    description: "Maintenance detailing in Waco, TX — ceramic-safe wash, decon, and interior top-ups on a flexible schedule.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance Detail",
  description: "Maintenance detailing in Waco, TX — ceramic-safe wash, decon, and interior top-ups on a flexible schedule.",
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
  serviceType: "Maintenance Detail",
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
