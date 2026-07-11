import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/interior-detail`;

export const metadata: Metadata = {
  title: "Interior Detail Waco TX | GlossLab Auto Detailing",
  description: "Interior car detailing in Waco, TX — deep vacuum, extraction, steam, leather care, and odor treatment.",
  keywords: ["interior detail Waco TX","car interior cleaning Waco","leather detail Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Interior Detail Waco TX | GlossLab Auto Detailing",
    description: "Interior car detailing in Waco, TX — deep vacuum, extraction, steam, leather care, and odor treatment.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Interior Detail — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Detail Waco TX | GlossLab",
    description: "Interior car detailing in Waco, TX — deep vacuum, extraction, steam, leather care, and odor treatment.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Detail",
  description: "Interior car detailing in Waco, TX — deep vacuum, extraction, steam, leather care, and odor treatment.",
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
  serviceType: "Interior Detail",
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
