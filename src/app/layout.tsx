import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { venue } from "@/lib/venue";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const description =
  "Singhi Palace is Kolkata's premier heritage event and banquet venue — an address for weddings, receptions, engagements, corporate galas, and private soirées of distinction. Marble floors, brass fittings, and calm grandeur in the heart of the city.";

export const metadata: Metadata = {
  metadataBase: new URL(venue.url),
  title: {
    default: "Singhi Palace | Heritage Event Venue, Kolkata",
    template: "%s · Singhi Palace",
  },
  description,
  keywords: [
    "Singhi Palace Kolkata",
    "premium banquet hall Kolkata",
    "heritage wedding venue Kolkata",
    "luxury event venue Kolkata",
    "wedding hall Kolkata",
    "corporate event venue Kolkata",
    "reception hall Kolkata",
  ],
  authors: [{ name: venue.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: venue.url,
    siteName: venue.name,
    title: "Singhi Palace — Heritage Event Venue, Kolkata",
    description,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singhi Palace — An address for occasions worth remembering.",
    description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "@id": `${venue.url}/#venue`,
  name: venue.name,
  description,
  url: venue.url,
  telephone: venue.phone,
  email: venue.email,
  image: `${venue.url}/images/hero.jpg`,
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: venue.address.street,
    addressLocality: venue.address.locality,
    addressRegion: venue.address.region,
    postalCode: venue.address.postalCode,
    addressCountry: venue.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: venue.geo.latitude,
    longitude: venue.geo.longitude,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: venue.rating,
    reviewCount: venue.reviewCount,
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Valet Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "In-house Catering", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${workSans.variable} bg-ivory font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
