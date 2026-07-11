import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/services/headlight-restoration`;

export const metadata: Metadata = {
  title: "Headlight Restoration Waco TX | GlossLab Auto Detailing",
  description: "Headlight restoration in Waco, TX — cut, polish, and UV seal cloudy lenses for safer night driving.",
  keywords: ["headlight restoration Waco TX","headlight polish Waco","cloudy headlights Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Headlight Restoration Waco TX | GlossLab Auto Detailing",
    description: "Headlight restoration in Waco, TX — cut, polish, and UV seal cloudy lenses for safer night driving.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Headlight Restoration — GlossLab Auto Detailing Waco TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headlight Restoration Waco TX | GlossLab",
    description: "Headlight restoration in Waco, TX — cut, polish, and UV seal cloudy lenses for safer night driving.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Headlight Restoration",
  description: "Headlight restoration in Waco, TX — cut, polish, and UV seal cloudy lenses for safer night driving.",
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
  serviceType: "Headlight Restoration",
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
