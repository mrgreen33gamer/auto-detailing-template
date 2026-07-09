// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About GlossLab Auto Detailing — Waco TX Studio Since 2015",
  description:
    "Meet GlossLab Auto Detailing. Locally owned in Waco, Texas since 2015 by Jade Nguyen. Product-certified detailers, bonded & insured, Satisfaction Re-Detail Guarantee. Ceramic coatings, paint correction, full detail, and interior care for Central Texas.",
  keywords: [
    "about GlossLab Auto Detailing",
    "Waco auto detailing company",
    "auto detailing studio Waco TX",
    "Jade Nguyen GlossLab",
    "ceramic coating Waco TX",
    "product-certified detailers Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About GlossLab Auto Detailing — Waco TX Studio Since 2015",
    description:
      "Locally owned in Waco since 2015. Product-certified detailers, transparent packages, Satisfaction Re-Detail Guarantee.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GlossLab Auto Detailing — Waco TX Since 2015",
    description:
      "Locally owned auto detailing studio in Waco, TX. Product-certified, bonded & insured, Re-Detail Guarantee.",
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
