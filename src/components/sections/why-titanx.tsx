"use client";

import { ShieldCheck, Leaf, Globe, Settings, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "30+ Years Experience",
        desc: "Established in 1995, we bring decades of expertise in precision components and heavy equipment spares.",
        icon: ShieldCheck,
        colSpan: "md:col-span-2",
        bg: "bg-white"
    },
    {
        title: "High Precision",
        desc: "State-of-the-art manufacturing with accuracy up to 10 microns for critical components.",
        icon: Settings,
        colSpan: "md:col-span-1",
        bg: "bg-primary/10" // Yellow tint
    },
    {
        title: "Pan-India Network",
        desc: "Distribution offices in Bangalore, Salem, Coimbatore, Cochin, and Hospet.",
        icon: Globe,
        colSpan: "md:col-span-1",
        bg: "bg-neutral-100"
    },
    {
        title: "Comprehensive Range",
        desc: "Complete range of undercarriage parts for Komatsu, Hitachi, Kobelco, Caterpillar, and more.",
        icon: Leaf,
        colSpan: "md:col-span-2",
        bg: "bg-white"
    },
];

export default function WhyTitanX() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-display font-black text-black uppercase mb-4">Business Highlights</h2>
                    <p className="text-neutral-500 text-lg">Leading the industry with advanced technology and excellent quality since 1995.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className={`${feature.colSpan} ${feature.bg} p-8 rounded-sm border border-neutral-100 relative group overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-6 h-6 text-primary" />
                            </div>

                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white border border-neutral-200 shadow-sm text-primary`}>
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-display font-bold text-black mb-2">{feature.title}</h3>
                            <p className="text-neutral-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
