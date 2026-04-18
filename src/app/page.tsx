import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero";
import FeaturedMachinery from "@/components/sections/featured-machinery";
import WhyYSPSpares from "@/components/sections/why-spenterprises";
import IndustryApplications from "@/components/sections/industry-applications";
import CTASection from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "YSP Spares Bangalore | Excavator Spare Parts & Undercarriage Systems Since 1995",
  description: "YSP Spares supplies genuine excavator spare parts, undercarriage systems, and custom precision components in Bangalore since 1995. Compatible with Caterpillar, Komatsu, Hitachi, Volvo & Hyundai. Pan-India distribution.",
  alternates: {
    canonical: "https://www.yspspares.com",
  },
  openGraph: {
    title: "YSP Spares Bangalore | Excavator Spare Parts Since 1995",
    description: "Genuine excavator spares, undercarriage systems & custom precision gears. Serving South India from Bangalore for 30+ years.",
    url: "https://www.yspspares.com",
  },
};

const faqs = [
  {
    question: "What is YSP Spares?",
    answer:
      "YSP Spares (brand of S.P. Enterprises) is a Bangalore-based manufacturer, importer, and stockist of genuine spare parts for heavy earthmoving equipment. Established in 1995, we supply undercarriage systems, precision components, gears, pins, and cylinders for excavators, backhoe loaders, and cranes.",
  },
  {
    question: "Which excavator brands are compatible with YSP Spares parts?",
    answer:
      "YSP Spares supplies genuine and aftermarket spare parts compatible with Caterpillar, Komatsu, Hitachi, Kobelco, Hyundai, and Volvo excavators and heavy earthmoving equipment.",
  },
  {
    question: "What types of excavator spare parts does YSP Spares supply?",
    answer:
      "We supply a complete range including: Track Rollers (Bottom Rollers), Top Rollers / Carrier Rollers, Sprocket Segments, Front Idler Assemblies, Track Chain / Track Link Assemblies, Track Shoe Assemblies, Pins & Bushings, Recoil Springs, Swing Bearing Circles, and custom precision gears, shafts, and cylinders.",
  },
  {
    question: "Where is YSP Spares located?",
    answer:
      "YSP Spares head office is at #66/2, 5th Cross, Sharadhamba Nagar, Jalahalli, Bangalore-560013, Karnataka, India. We also have distribution offices in Salem, Coimbatore, Cochin, and Hospet.",
  },
  {
    question: "Does YSP Spares do custom precision component manufacturing?",
    answer:
      "Yes. Through our A.S. Tech Industries manufacturing division in Bangalore, we manufacture custom precision components including spur gears, helical gears, internal gears, bi-metal bushes, pins, shafts (up to 2.5m), cylinders, and flanges — made strictly to customer samples or drawings with CNC accuracy under 10 microns.",
  },
  {
    question: "How long has YSP Spares been in business?",
    answer:
      "YSP Spares (S.P. Enterprises) has been in business since 1995 — over 30 years of experience in precision components manufacturing and heavy earthmoving equipment spare parts supply.",
  },
  {
    question: "Does YSP Spares ship across India?",
    answer:
      "Yes. YSP Spares operates a pan-India distribution network with offices in Bangalore (Karnataka), Salem (Tamil Nadu), Coimbatore (Tamil Nadu), Cochin (Kerala), and Hospet (Karnataka), serving customers across South India.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Heavy Earthmoving Equipment Spare Parts Supply",
  provider: { "@id": "https://www.yspspares.com/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Supply of genuine spare parts for excavators and heavy earthmoving equipment including undercarriage systems, precision gears, track rollers, sprocket segments, and custom components.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Excavator Spare Parts",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Track Roller / Bottom Roller" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sprocket Segment" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Front Idler Assembly" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Track Chain / Track Link Assembly" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Precision Gears" } },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HeroSection />
      <WhyYSPSpares />
      <IndustryApplications />
      <FeaturedMachinery />

      {/* FAQ Section — feeds Google AI Overviews & Perplexity */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-black uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 mt-4 text-lg max-w-xl mx-auto">
              Everything you need to know about YSP Spares — excavator parts, manufacturing, and distribution in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-neutral-200 rounded-sm bg-white open:border-primary transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-black text-base list-none hover:text-primary transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-2xl text-neutral-300 group-open:text-primary group-open:rotate-45 transition-transform select-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
