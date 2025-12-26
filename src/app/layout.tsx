import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unisonvalves.in"),
  title: {
    default: "Unison Valves | Ball Valve & Industrial Valve Manufacturers in India",
    template: "%s | Unison Valves"
  },
  description: "India's leading ball valve and industrial valve manufacturer with 40+ years of excellence. ISO 9001:2015 certified. Ball valves, butterfly valves, gate valves, globe valves, check valves. Manufacturing in Pune, Maharashtra. 5M+ valves delivered to 5000+ customers.",
  keywords: [
    "ball valve manufacturers in India",
    "industrial valve manufacturers India",
    "ball valve suppliers Pune",
    "butterfly valve manufacturers",
    "gate valve manufacturers India",
    "fire safe ball valve",
    "API 607 ball valve",
    "DNV certified valve",
    "industrial valves Pune",
    "valve manufacturers Maharashtra"
  ],
  authors: [{ name: "Unison Valves Pvt. Ltd." }],
  creator: "Unison Valves",
  publisher: "Unison Valves Pvt. Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.unisonvalves.in",
    siteName: "Unison Valves",
    title: "Unison Valves | India's Premier Industrial Valve Manufacturer",
    description: "40+ years of manufacturing excellence. Ball valves, butterfly valves, and industrial flow control solutions. ISO 9001:2015 & DNV certified.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unison Valves - Industrial Valve Manufacturer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unison Valves | Ball Valve Manufacturers in India",
    description: "India's leading industrial valve manufacturer. 40+ years of excellence, 5M+ valves delivered.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.unisonvalves.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
