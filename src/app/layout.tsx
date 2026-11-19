import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Šapa Trans | Prevoz kućnih ljubimaca Zrenjanin – Srbija i Evropa",
    template: "%s | Šapa Trans",
  },
  description:
    "Siguran, human i profesionalan prevoz pasa i mačaka iz Zrenjanina. Prevoz do veterinara, selidbe sa ljubimcima i međunarodni transport po Srbiji i Evropi.",
  keywords: [
    "prevoz kućnih ljubimaca",
    "prevoz pasa",
    "prevoz mačaka",
    "Zrenjanin",
    "međunarodni prevoz ljubimaca",
    "Šapa Trans",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Šapa Trans – Prevoz kućnih ljubimaca",
    description: "Siguran, human i profesionalan prevoz. Srbija i cela Evropa.",
    url: site.url,
    siteName: site.name,
    locale: "sr_RS",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: "Prevoz kućnih ljubimaca – Srbija i Evropa",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zrenjanin",
    addressCountry: "RS",
  },
  areaServed: ["Srbija", "Evropa"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
