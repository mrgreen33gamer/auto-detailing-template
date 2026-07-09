import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/blogs/paint-correction-explained`;

export const metadata: Metadata = {
  title: "Paint Correction Explained | GlossLab Auto Detailing",
  description: "Paint correction explained for swirl removal, multi-stage polishing, and realistic results before ceramic coating in Waco TX.",
  keywords: ["paint correction explained","swirl removal Waco","multi-stage polish"],
  alternates: { canonical: url },
  openGraph: {
    title: "Paint Correction Explained | GlossLab Auto Detailing",
    description: "Paint correction explained for swirl removal, multi-stage polishing, and realistic results before ceramic coating in Waco TX.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
