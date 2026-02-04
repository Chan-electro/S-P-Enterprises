
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Cog, Layers, Truck } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-display font-black text-black uppercase mb-4">Products & Services</h1>
                    <p className="text-xl text-neutral-600">
                        From custom precision components to complete undercarriage systems for all major brands.
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
                                <h2 className="text-3xl font-display font-black text-black uppercase">A.S. TECH PRODUCTS</h2>
                            </div>
                            <div className="md:w-1/3">
                                <p className="text-neutral-500 text-sm">Custom manufactured precision components made strictly according to customer samples or drawings.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Gears", desc: "Spur, Helical, Internal, Step Gears" },
                                { name: "Bushes", desc: "High-end bi-metal bushes for swing devices" },
                                { name: "Pins", desc: "Various sizes and specifications" },
                                { name: "Rod Pistons", desc: "Custom specifications" },
                                { name: "Shafts", desc: "Up to 2.5 meters in length" },
                                { name: "Cylinders", desc: "Multiple sizes and applications" },
                                { name: "Flanges", desc: "Custom designs" },
                                { name: "Pusher Assembly", desc: "Complete assemblies" },
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
                                <h2 className="text-3xl font-display font-black text-black uppercase">Undercarriage Products</h2>
                            </div>
                            <div className="md:w-1/3">
                                <p className="text-neutral-500 text-sm">Complete range of undercarriage parts for Komatsu, Hitachi, Kobelco, Caterpillar, Hyundai, Volvo, and more.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-neutral-900 text-white p-8 rounded-sm">
                                <h3 className="text-xl font-bold mb-6 text-primary border-b border-neutral-700 pb-2">Complete Range</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Track Roller / Bottom Roller", "Top Roller / Carrier Roller", "Sprocket Segment", "Front Idler Assembly", "Track Chain / Link Assembly", "Track Shoe Assembly", "Track Bolts & Nuts", "Pins & Bushings", "Recoil Spring", "Swing Bearing Circle"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative rounded-sm overflow-hidden min-h-[300px] bg-neutral-100">
                                {/* Placeholder for image */}
                                <img src="/images/hero-excavator.png" alt="Undercarriage Parts" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Compatible Brands</h3>
                                        <p className="text-gray-300">Komatsu • Hitachi • Kobelco • Caterpillar • Hyundai • Volvo</p>
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
                                    <h2 className="text-3xl font-display font-black text-black uppercase mb-4">SPE Genuine Spares</h2>
                                    <p className="text-neutral-600 mb-6 text-lg">
                                        We are specialized in importing and stocking genuine spares for heavy earthmoving equipment under the name M/s SP Enterprises.
                                    </p>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-primary w-5 h-5" /> Complete Undercarriage Systems</li>
                                        <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-primary w-5 h-5" /> High-Quality Aftermarket Components</li>
                                    </ul>
                                    <Link href="/contact">
                                        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 font-bold">Inquire Now</Button>
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

                    {/* Downloads Wrapper */}
                    <div className="mt-12 text-center">
                        <Button variant="outline" size="lg" className="gap-2 border-2">
                            <Download className="w-5 h-5" /> Download Product Catalog
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
