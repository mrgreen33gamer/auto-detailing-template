import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/industries/dealerships`;

export const metadata: Metadata = {
  title: "Dealership Detailing | GlossLab Auto Detailing Waco TX",
  description: "Dealership auto detailing packages in Waco and Central Texas — lot-ready full details, correction, and interior resets with reliable turnaround.",
  alternates: { canonical: url },
  openGraph: {
    title: "Dealership | GlossLab Auto Detailing",
    description: "Dealership auto detailing packages in Waco and Central Texas — lot-ready full details, correction, and interior resets with reliable turnaround.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
