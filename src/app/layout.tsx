import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google"; // Outfit for headings, Inter for body
import "./globals.css";
import ClientLayout from "@/components/client-layout";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  weight: ['800'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yspspares.com"),
  title: {
    default: "YSP Spares Bangalore | Excavator & Earthmoving Equipment Spare Parts",
    template: "%s | YSP Spares Bangalore",
  },
  description: "YSP Spares is Bangalore's trusted supplier of genuine excavator spare parts, undercarriage systems, and custom precision components since 1995. Serving Caterpillar, Komatsu, Hitachi, Volvo & Hyundai across South India.",
  keywords: [
    "excavator spare parts Bangalore",
    "heavy earthmoving equipment spares",
    "undercarriage parts supplier India",
    "Komatsu spare parts Bangalore",
    "Caterpillar excavator parts",
    "Hitachi excavator parts India",
    "precision components manufacturer Bangalore",
    "gear hobbing Bangalore",
    "CNC machining Bangalore",
    "track roller supplier Karnataka",
    "sprocket segment manufacturer India",
    "YSP Spares",
    "SP Enterprises Bangalore",
  ],
  authors: [{ name: "YSP Spares" }],
  creator: "YSP Spares",
  publisher: "YSP Spares",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yspspares.com",
    siteName: "YSP Spares",
    title: "YSP Spares Bangalore | Excavator & Earthmoving Equipment Spare Parts",
    description: "Genuine excavator spare parts, undercarriage systems & custom precision components. 30+ years. Pan-India distribution from Bangalore.",
    images: [
      {
        url: "/images/hero-excavator.png",
        width: 1200,
        height: 630,
        alt: "YSP Spares — Heavy Earthmoving Equipment Spare Parts Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YSP Spares Bangalore | Excavator Spare Parts",
    description: "Genuine excavator spare parts & custom precision components since 1995. Serving CAT, Komatsu, Hitachi, Volvo & Hyundai.",
    images: ["/images/hero-excavator.png"],
  },
  alternates: {
    canonical: "https://www.yspspares.com",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.yspspares.com/#organization",
      name: "YSP Spares",
      alternateName: ["S.P. Enterprises", "SP Enterprises", "A.S. Tech Industries"],
      url: "https://www.yspspares.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.yspspares.com/ysp-logo.png",
        width: 200,
        height: 60,
      },
      image: "https://www.yspspares.com/images/hero-excavator.png",
      description:
        "YSP Spares is a Bangalore-based manufacturer, importer, and stockist of genuine spare parts for heavy earthmoving equipment including excavators, backhoe loaders, and cranes. Established in 1995.",
      foundingDate: "1995",
      founder: { "@type": "Person", name: "Mr. H.S. Shivanandaswamy" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "#66/2, 5th Cross, Sreematha Badavane, Sharadhamba Nagar, Jalahalli",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560013",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0457,
        longitude: 77.5533,
      },
      telephone: ["+919902012222", "+919448481737"],
      email: ["speblr1995@gmail.com", "ceo@spenterprises.com"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Salem" },
        { "@type": "City", name: "Coimbatore" },
        { "@type": "City", name: "Cochin" },
        { "@type": "City", name: "Hospet" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Heavy Earthmoving Equipment Spare Parts & Precision Components",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Excavator Undercarriage Parts" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Precision Gears" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Track Rollers & Sprockets" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hydraulic Cylinders & Pins" } },
        ],
      },
      sameAs: [
        "https://www.yspspares.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.yspspares.com/#website",
      url: "https://www.yspspares.com",
      name: "YSP Spares",
      description: "Genuine excavator spare parts and custom precision components manufacturer in Bangalore, India.",
      publisher: { "@id": "https://www.yspspares.com/#organization" },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontDisplay.variable,
        fontPoppins.variable
      )}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
