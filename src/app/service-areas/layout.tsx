// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://auto-detailing-template.vercel.app';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'detailing Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | GlossLab',
  description:
    'GlossLab Auto Detailing serves Waco, Hewitt, Woodway, Robinson, China Spring, Killeen, Temple, Valley Mills, Hillsboro, and all of Central Texas. Flat-rate pricing, same-day service, Re-Detail Guarantee.',
  keywords: [
    'detailing service areas Central Texas',
    'detailing Waco TX',
    'detailing Hewitt TX',
    'detailing Killeen TX',
    'detailing Temple TX',
    'auto detailing Central Texas',
    'heating repair Waco',
    'GlossLab Auto Detailing service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'detailing Service Areas | GlossLab Auto Detailing — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate detailing repair, installation, and maintenance. Same-day service available.',
    url,
    siteName: 'GlossLab Auto Detailing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'detailing Service Areas | GlossLab Auto Detailing — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, same-day service, Re-Detail Guarantee.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: 'GlossLab Auto Detailing',
  url: BASE_URL,
  telephone: '+12549501616',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2701 Franklin Ave',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76710',
    addressCountry: 'US',
  },
  areaServed: [
    'Waco, TX', 'Hewitt, TX', 'Woodway, TX', 'Robinson, TX',
    'China Spring, TX', 'Killeen, TX', 'Temple, TX', 'Valley Mills, TX', 'Hillsboro, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
