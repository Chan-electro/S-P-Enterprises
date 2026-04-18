
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle2, Download, Cog, Truck } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Excavator Spare Parts & Precision Components in Bangalore | YSP Spares',
    description: 'Genuine excavator undercarriage parts, custom gears, track rollers, sprockets & hydraulic components in Bangalore. Compatible with CAT, Komatsu, Hitachi, Volvo & Hyundai. Get a free quote.',
    alternates: { canonical: 'https://www.yspspares.com/products' },
    openGraph: {
        title: 'Excavator Spare Parts Bangalore | YSP Spares Products',
        description: 'Complete undercarriage systems, custom precision gears, track rollers & sprockets. Compatible with all major brands. Serving South India since 1995.',
        url: 'https://www.yspspares.com/products',
    },
};

const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.yspspares.com" },
                { "@type": "ListItem", position: 2, name: "Products & Services", item: "https://www.yspspares.com/products" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://www.yspspares.com/products#undercarriage",
            name: "Excavator Undercarriage Parts Supply",
            serviceType: "Heavy Equipment Spare Parts",
            provider: { "@id": "https://www.yspspares.com/#organization" },
            areaServed: [
                { "@type": "State", name: "Karnataka" },
                { "@type": "State", name: "Tamil Nadu" },
                { "@type": "State", name: "Kerala" },
                { "@type": "Country", name: "India" },
            ],
            description:
                "Supply of complete undercarriage parts for excavators and heavy earthmoving equipment. Products include track rollers, top rollers, sprocket segments, front idlers, track chains, track shoes, pins, bushings, and swing bearing circles.",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Undercarriage Products",
                itemListElement: [
                    "Track Roller / Bottom Roller",
                    "Top Roller / Carrier Roller",
                    "Sprocket Segment",
                    "Front Idler Assembly",
                    "Track Chain / Track Link Assembly",
                    "Track Shoe Assembly / Track Shoe Plates",
                    "Track Bolts & Nuts",
                    "Pins & Bushings",
                    "Recoil Spring",
                    "Swing Bearing Circle",
                ].map((name) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name },
                })),
            },
        },
        {
            "@type": "Service",
            "@id": "https://www.yspspares.com/products#manufacturing",
            name: "Custom Precision Components Manufacturing Bangalore",
            serviceType: "Precision Components Manufacturing",
            provider: { "@id": "https://www.yspspares.com/#organization" },
            areaServed: { "@type": "Country", name: "India" },
            description:
                "Custom precision components manufacturing in Bangalore via A.S. Tech Industries. Products include spur gears, helical gears, internal gears, bi-metal bushes, pins, shafts up to 2.5 meters, cylinders, flanges, and pusher assemblies — made to customer samples or drawings.",
        },
    ],
};

const faqs = [
    {
        question: "What undercarriage parts does YSP Spares supply for excavators?",
        answer:
            "YSP Spares supplies a complete range of excavator undercarriage parts including Track Rollers (Bottom Rollers), Top Rollers / Carrier Rollers, Sprocket Segments, Front Idler Assemblies, Track Chain / Track Link Assemblies, Track Shoe Assemblies, Track Bolts & Nuts, Pins & Bushings, Recoil Springs, and Swing Bearing Circles. All parts are compatible with Komatsu, Hitachi, Kobelco, Caterpillar, Hyundai, and Volvo.",
    },
    {
        question: "Can YSP Spares manufacture custom gears and precision components?",
        answer:
            "Yes. Through our A.S. Tech Industries manufacturing division in Bangalore, we manufacture custom spur gears, helical gears, internal gears, step gears, bi-metal bushes, pins, shafts (up to 2.5 meters), cylinders, flanges, and complete pusher assemblies — strictly to customer samples or drawings.",
    },
    {
        question: "Which excavator brands are compatible with YSP Spares products?",
        answer:
            "YSP Spares products are compatible with all major brands: Caterpillar (CAT), Komatsu, Hitachi, Kobelco, Hyundai, and Volvo. We serve all brands of excavators, backhoe loaders, loaders, cranes, and RMCs.",
    },
    {
        question: "What is the gear manufacturing module range at YSP Spares?",
        answer:
            "Our gear hobbing machines handle modules from 1 to 10 for spur and helical gears. Our gear shaping machines handle modules from 0.5 to 6, with diameter capacity up to 600mm, for internal gears and step gears.",
    },
    {
        question: "How do I get a quote for excavator spare parts from YSP Spares?",
        answer:
            "You can request a free quote by calling Mr. H.S. Shivanand Swamy at +91 9902012222, emailing speblr1995@gmail.com, or using the contact form at our website. We typically respond within 24 hours.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Header */}
            <div className="container mx-auto px-6 mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4 border-primary text-primary font-bold uppercase tracking-widest">SPE &amp; ASTECH</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-black uppercase mb-4">Excavator Spare Parts &amp; Precision Components</h1>
                    <p className="text-xl text-neutral-600">
                        Genuine undercarriage systems and custom precision manufacturing in Bangalore. Serving Caterpillar, Komatsu, Hitachi, Volvo &amp; Hyundai since 1995.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">

                {/* Categories Grid */}
                <div className="grid grid-cols-1 gap-16">

                    {/* Astech Products */}
                    <div id="manufacturing" className="scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 md:items-center mb-8 pb-4 border-b border-neutral-200">
                            <div className="flex-1">
                                <Badge variant="outline" className="mb-2 border-primary text-primary font-bold">Manufacturing Division</Badge>
                                <h2 className="text-2xl sm:text-3xl font-display font-black text-black uppercase">A.S. TECH Precision Components</h2>
                            </div>
                            <div className="md:w-1/3">
                                <p className="text-neutral-500 text-sm">Custom manufactured precision components made strictly according to customer samples or drawings. CNC accuracy under 10 microns.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Gears", desc: "Spur, Helical, Internal, Step Gears — Module 1 to 10" },
                                { name: "Bushes", desc: "High-end bi-metal bushes for swing device planetary gears" },
                                { name: "Pins", desc: "Various sizes and specifications with induction hardening" },
                                { name: "Rod Pistons", desc: "Custom specifications to drawing" },
                                { name: "Shafts", desc: "Up to 2.5 meters in length" },
                                { name: "Cylinders", desc: "Multiple sizes and applications" },
                                { name: "Flanges", desc: "Custom designs to specification" },
                                { name: "Pusher Assembly", desc: "Complete assemblies per customer requirement" },
                            ].map((item, i) => (
                                <Card key={i} className="bg-neutral-50 border-neutral-100 hover:border-primary transition-colors group">
                                    <div className="p-6">
                                        <Cog className="w-8 h-8 text-neutral-300 group-hover:text-primary mb-4 transition-colors" />
                                        <h3 className="font-bold text-lg text-black mb-2">{item.name}</h3>
                                        <p className="text-sm text-neutral-500">{item.desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Undercarriage Products */}
                    <div id="undercarriage" className="scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 md:items-center mb-8 pb-4 border-b border-neutral-200">
                            <div className="flex-1">
                                <Badge variant="outline" className="mb-2 border-primary text-primary font-bold">Stockist & Supply</Badge>
                                <h2 className="text-2xl sm:text-3xl font-display font-black text-black uppercase">Excavator Undercarriage Parts</h2>
                            </div>
                            <div className="md:w-1/3">
                                <p className="text-neutral-500 text-sm">Complete range of undercarriage parts for Komatsu, Hitachi, Kobelco, Caterpillar, Hyundai, Volvo, and more.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-neutral-900 text-white p-8 rounded-sm">
                                <h3 className="text-xl font-bold mb-6 text-primary border-b border-neutral-700 pb-2">Complete Undercarriage Range</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Track Roller / Bottom Roller", "Top Roller / Carrier Roller", "Sprocket Segment", "Front Idler Assembly", "Track Chain / Link Assembly", "Track Shoe Assembly", "Track Bolts & Nuts", "Pins & Bushings", "Recoil Spring", "Swing Bearing Circle"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative rounded-sm overflow-hidden min-h-[300px] bg-neutral-100">
                                <img src="/images/hero-excavator.png" alt="Excavator Undercarriage Parts — YSP Spares Bangalore" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Compatible Brands</h3>
                                        <p className="text-neutral-300">Komatsu • Hitachi • Kobelco • Caterpillar • Hyundai • Volvo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SPE Products */}
                    <div id="spe-products" className="scroll-mt-24">
                        <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <h2 className="text-2xl sm:text-3xl font-display font-black text-black uppercase mb-4">SPE Genuine Spares</h2>
                                    <p className="text-neutral-600 mb-6 text-lg">
                                        We are specialized in importing and stocking genuine spares for heavy earthmoving equipment under the name M/s YSP Spares. Our 30+ years of sourcing experience ensures quality and authenticity.
                                    </p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-primary w-5 h-5" /> Complete Undercarriage Systems</li>
                                        <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-primary w-5 h-5" /> High-Quality Aftermarket Components</li>
                                        <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-primary w-5 h-5" /> Pan-India Distribution from Bangalore</li>
                                    </ul>
                                    <Link href="/contact">
                                        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 font-bold">Get a Free Quote</Button>
                                    </Link>
                                </div>
                                <div className="md:w-1/3 flex justify-center">
                                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                        <Truck className="w-20 h-20 text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Downloads */}
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" className="gap-2 border-2">
                            <Download className="w-5 h-5" /> Download Product Catalog
                        </Button>
                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-24 bg-neutral-50 border-t border-neutral-100 mt-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Product FAQs</p>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-black uppercase">
                            Questions About Our Parts
                        </h2>
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
        </div>
    );
}
