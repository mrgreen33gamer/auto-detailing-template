import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/blogs/how-often-detail-your-car-texas`;

export const metadata: Metadata = {
  title: "How Often to Detail Your Car in Texas | GlossLab",
  description: "How often you should detail your car in Texas heat — schedules for daily drivers, ceramic-coated cars, fleets, and collectors.",
  keywords: ["how often detail car Texas","car detail schedule Waco","maintenance detail Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "How Often to Detail Your Car in Texas | GlossLab",
    description: "How often you should detail your car in Texas heat — schedules for daily drivers, ceramic-coated cars, fleets, and collectors.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
