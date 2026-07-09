// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.glosslabdetail.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact GlossLab Auto Detailing | Book a Detail in Waco & Central Texas',
  description:
    'Contact GlossLab Auto Detailing to book ceramic coating, paint correction, full detail, or interior care. Serving Waco, Hewitt, Killeen, Temple, and Central Texas. Call (254) 950-1616.',
  keywords: [
    'contact GlossLab Auto Detailing',
    'book car detail Waco TX',
    'ceramic coating appointment Waco',
    'detailing estimate Central Texas',
    'GlossLab contact',
    '254-950-1616',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact GlossLab Auto Detailing | Book a Detail in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Transparent packages, Satisfaction Re-Detail Guarantee, product-certified detailers.',
    url,
    siteName: 'GlossLab Auto Detailing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GlossLab Auto Detailing | Waco & Central Texas',
    description: 'Book a detail or get a package quote. Call (254) 950-1616.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
