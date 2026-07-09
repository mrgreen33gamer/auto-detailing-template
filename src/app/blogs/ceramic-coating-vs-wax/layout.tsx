import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/blogs/ceramic-coating-vs-wax`;

export const metadata: Metadata = {
  title: "Ceramic Coating vs. Wax | GlossLab Auto Detailing",
  description: "Ceramic coating vs wax for Waco and Central Texas drivers — longevity, UV protection, cost, and when correction comes first.",
  keywords: ["ceramic coating vs wax","ceramic coating Waco TX","car wax vs ceramic"],
  alternates: { canonical: url },
  openGraph: {
    title: "Ceramic Coating vs. Wax | GlossLab Auto Detailing",
    description: "Ceramic coating vs wax for Waco and Central Texas drivers — longevity, UV protection, cost, and when correction comes first.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
