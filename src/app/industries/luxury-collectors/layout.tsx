import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/industries/luxury-collectors`;

export const metadata: Metadata = {
  title: "Luxury & Collector Detailing | GlossLab Auto Detailing Waco TX",
  description: "Luxury and collector vehicle detailing in Waco — paint correction, ceramic coating, and careful interior care by appointment.",
  alternates: { canonical: url },
  openGraph: {
    title: "Luxury & Collector | GlossLab Auto Detailing",
    description: "Luxury and collector vehicle detailing in Waco — paint correction, ceramic coating, and careful interior care by appointment.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
