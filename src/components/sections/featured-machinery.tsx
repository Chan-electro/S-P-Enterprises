"use client";

import { motion } from "framer-motion";
import { ArrowRight, Weight, Cog, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredMachines = [
    {
        id: "tx-9000",
        name: "TX-9000 Excavator",
        category: "Mining Excavator",
        image: "/images/hero-excavator.png", // Reusing for now
        power: "850 HP",
        weight: "92 Tons",
        capacity: "6.5 m³"
    },
    {
        id: "rx-550",
        name: "RX-550 Wheel Loader",
        category: "Wheel Loader",
        image: "/images/hero-excavator.png", // Placeholder
        power: "420 HP",
        weight: "35 Tons",
        capacity: "4.2 m³"
    },
    {
        id: "hx-120",
        name: "HX-120 Hydraulic Drill",
        category: "Specialized Drill",
        image: "/images/hero-excavator.png", // Placeholder
        power: "300 HP",
        weight: "28 Tons",
        capacity: "N/A"
    }
];

export default function FeaturedMachinery() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-black uppercase">Featured Products</h2>
                    </div>
                    <Link href="/products" className="hidden md:block">
                        <Button variant="link" className="text-black font-bold text-lg group">
                            View Full Catalog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredMachines.map((machine, index) => (
                        <motion.div
                            key={machine.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/machinery/${machine.id}`} className="group block bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden">
                                {/* Yellow Accent Bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                                <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                                    <img src={machine.image} alt={machine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-white/90 text-black border-none backdrop-blur-sm font-bold shadow-sm">{machine.category}</Badge>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-black text-black uppercase mb-4 group-hover:text-primary transition-colors">{machine.name}</h3>

                                    <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-6">
                                        <div className="text-center">
                                            <Weight className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                                            <span className="block text-sm font-bold text-neutral-800">{machine.weight}</span>
                                            <span className="text-xs text-neutral-500">Weight</span>
                                        </div>
                                        <div className="text-center border-l border-neutral-100">
                                            <Activity className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                                            <span className="block text-sm font-bold text-neutral-800">{machine.power}</span>
                                            <span className="text-xs text-neutral-500">Power</span>
                                        </div>
                                        <div className="text-center border-l border-neutral-100">
                                            <Cog className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                                            <span className="block text-sm font-bold text-neutral-800">{machine.capacity}</span>
                                            <span className="text-xs text-neutral-500">Capacity</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/machinery">
                        <Button size="lg" className="w-full bg-black text-white rounded-none">View Full Catalog</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
