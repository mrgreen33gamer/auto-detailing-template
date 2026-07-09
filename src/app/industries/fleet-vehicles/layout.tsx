import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/industries/fleet-vehicles`;

export const metadata: Metadata = {
  title: "Fleet Detailing | GlossLab Auto Detailing Waco TX",
  description: "Fleet vehicle detailing in Waco and Central Texas — rotating maintenance details and full resets for vans, trucks, and sales fleets.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fleet | GlossLab Auto Detailing",
    description: "Fleet vehicle detailing in Waco and Central Texas — rotating maintenance details and full resets for vans, trucks, and sales fleets.",
    url,
    siteName: "GlossLab Auto Detailing",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
