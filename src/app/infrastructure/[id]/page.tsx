import { machines } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Detail3DViewer from "@/components/3d/detail-viewer"; // Keep 3D viewer but check its container
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const machine = machines.find((m) => m.id === resolvedParams.id);

    if (!machine) return { title: 'Not Found' };

    return {
        title: `${machine.name} | TitanX Earthmovers`,
        description: machine.description,
    };
}

export default async function MachineDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const machine = machines.find((m) => m.id === resolvedParams.id);

    if (!machine) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">

            {/* Section 1: Clean Hero Area */}
            <div className="container mx-auto px-6 mb-24">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="bg-neutral-100 text-neutral-600 hover:bg-neutral-200 uppercase tracking-widest font-bold px-3 py-1 rounded-sm">
                                    {machine.category}
                                </Badge>
                                <span className="text-sm font-mono text-neutral-400">ID: {machine.id.toUpperCase()}</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-display font-black text-black leading-[0.9] uppercase tracking-tight">
                                {machine.name}
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed font-light max-w-lg">
                                {machine.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-primary text-black font-bold text-lg h-14 px-8 rounded-none hover:bg-primary/90">
                                Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-neutral-200 text-black font-bold text-lg h-14 px-8 rounded-none hover:bg-neutral-50">
                                <Download className="mr-2 w-5 h-5" /> Spec Sheet
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content - Uncluttered */}
                    <div className="lg:w-1/2">
                        {/* 
                       If it's the excavator, show the 3D model. 
                       Otherwise, show the hero image we just generated or assigned.
                       This handles 'clutter' by giving a clear distinct visual.
                    */}
                        {machine.category === "Excavator" ? (
                            <div className="aspect-square bg-neutral-50 rounded-sm relative overflow-hidden">
                                <Detail3DViewer />
                            </div>
                        ) : (
                            <div className="aspect-[4/3] bg-white rounded-sm relative overflow-hidden flex items-center justify-center">
                                <img
                                    src={machine.image}
                                    alt={machine.name}
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Section 2: Key Metrics (Clean Cards) */}
            <div className="bg-neutral-50 py-24 border-y border-neutral-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-neutral-500 font-bold uppercase text-xs tracking-widest mb-2">Operating Weight</div>
                            <div className="text-5xl font-display font-black text-black">{machine.weight}</div>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-neutral-500 font-bold uppercase text-xs tracking-widest mb-2">Engine Power</div>
                            <div className="text-5xl font-display font-black text-primary">{machine.power}</div>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-neutral-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-neutral-500 font-bold uppercase text-xs tracking-widest mb-2">Capacity</div>
                            <div className="text-5xl font-display font-black text-black">{machine.capacity}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Features List */}
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-display font-black text-black uppercase mb-12 text-center">Engineered Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {machine.features && machine.features.length > 0 ? (
                            machine.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border-b border-neutral-100">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">{feature}</h3>
                                        <p className="text-neutral-500 text-sm mt-1">
                                            Optimized for performance and durability in extreme conditions.
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-neutral-500">Standard configuration features apply.</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
