"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "12k", label: "Machines Deployed" },
    { value: "35", label: "Years of Excellence" },
    { value: "24/7", label: "Global Support" },
];

export default function CompanyOverview() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <Badge variant="outline" className="mb-4 text-primary border-primary rounded-none px-4 py-1 uppercase tracking-widest">
                            Who We Are
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase leading-none">
                            Engineering <br /> <span className="text-gray-500">Resilience</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                TitanX Earthmovers is a globally recognised manufacturer of excavators, loaders, hydraulic systems, and OEM-grade heavy machinery components.
                            </p>
                            <p>
                                Since 1986, we have served the mining, construction, roadworks, and industrial sectors with precision-engineered machinery designed to withstand the harshest environments on Earth.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="border-l-2 border-primary pl-4">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image / Visual Content */}
                    <div className="md:w-1/2 relative h-[500px] w-full bg-neutral-900 rounded-sm overflow-hidden group">
                        {/* Placeholder for real image - using CSS pattern for now */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black opacity-80" />

                        {/* Abstract grid lines overlay */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                        />

                        {/* Dynamic Content */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10">
                            <h4 className="text-xl font-display font-bold text-white mb-2">Sustainable Mining Solutions</h4>
                            <p className="text-sm text-gray-400">Leading the industry with hybrid engine technology and reduced carbon footprint machinery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
