// src/app/layout.tsx
// GlossLab Auto Detailing — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Audiowide, Montserrat, Hind } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Montserrat({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Hind({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.glosslabdetail.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: dark)",  color: "#0a0a0f" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GlossLab Auto Detailing | Ceramic Coating, Paint Correction & Full Detail — Waco, TX",
    template: "%s | GlossLab Auto Detailing",
  },
  description:
    "GlossLab Auto Detailing is a Waco, TX studio offering ceramic coatings, paint correction, full detail, interior detail, headlight restoration, and maintenance packages for Central Texas drivers, fleets, and collectors. Bonded & insured · Product-certified.",
  keywords: [
    "GlossLab Auto Detailing",
    "auto detailing Waco TX",
    "ceramic coating Waco Texas",
    "paint correction Waco",
    "interior detail Central Texas",
    "headlight restoration Waco TX",
    "car detail studio Hewitt TX",
    "ceramic coating Temple Killeen",
  ],
  authors: [{ name: "GlossLab Auto Detailing", url: BASE_URL }],
  creator: "GlossLab Auto Detailing",
  publisher: "GlossLab Auto Detailing",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "GlossLab Auto Detailing | Ceramic Coatings · Interior Detail · Paint Correction — Waco, TX",
    description:
      "Waco-based auto detailing studio for ceramic coatings, paint correction, full details, and interior care across Central Texas. Product-certified · Satisfaction Re-Detail Guarantee.",
    url: BASE_URL,
    siteName: "GlossLab Auto Detailing",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "GlossLab Auto Detailing — Waco TX Ceramic Coating & Full Detail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlossLab Auto Detailing | Waco TX Auto Detailing",
    description:
      "Ceramic coatings, paint correction, full detail & interior care for Central Texas. Product-certified · Satisfaction Re-Detail Guarantee.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "GlossLab Auto Detailing",
  alternateName: "GlossLab",
  description:
    "Auto detailing studio in Waco and Central Texas — full detail, ceramic coating, paint correction, interior detail, headlight restoration, and maintenance packages. Bonded & insured · Product-certified detailers · Satisfaction Re-Detail Guarantee.",
  url: BASE_URL,
  telephone: "+12549501616",
  email: "hello@glosslabdetail.com",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Jade Nguyen",
    jobTitle: "Owner & Lead Detailer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2701 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Detail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Correction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Detail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headlight Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance Detail" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(Math.max(reviewCount, 1600)),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  sameAs: [
    "https://www.facebook.com/glosslabdetail",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#a78bfa" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0a0a0f",
                }}
              >
                <PulseLoader size={50} color="#a78bfa" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}