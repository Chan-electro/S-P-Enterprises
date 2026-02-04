import { parts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoveLeft, ArrowRight, ShieldCheck, Ruler, Clock, FileText } from "lucide-react";
import Link from "next/link";
import GenericPart3D from "@/components/3d/generic-part";

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const part = parts.find((p) => p.id === resolvedParams.id);

    if (!part) return { title: 'Not Found' };

    return {
        title: `${part.name} | TitanX Parts`,
        description: `Official specification for ${part.name}.`,
    };
}

export default async function PartDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const part = parts.find((p) => p.id === resolvedParams.id);

    if (!part) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-6">

                {/* Breadcrumb */}
                <Link href="/parts" className="inline-flex items-center text-neutral-500 hover:text-black mb-8 transition-colors font-medium">
                    <MoveLeft className="mr-2 h-4 w-4" /> Back to Catalog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Visuals */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-neutral-50 rounded-sm border border-neutral-200 overflow-hidden relative aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white,transparent)] z-0" />
                            <div className="relative z-10 w-full h-full">
                                {/* Reusing 3D component but it needs to fit the light theme (it renders transparently usually) */}
                                <GenericPart3D />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs font-mono border border-neutral-200">
                                Schematic
                            </div>
                            <div className="aspect-square bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs font-mono border border-neutral-200">
                                Dimensions
                            </div>
                            <div className="aspect-square bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs font-mono border border-neutral-200">
                                Mounting
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Data */}
                    <div className="lg:col-span-7">
                        <div className="mb-4">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-sm">{part.category}</span>
                        </div>
                        <h1 className="text-4xl font-display font-black text-black mb-2">{part.name}</h1>
                        <div className="text-2xl text-neutral-600 font-light mb-8 flex items-baseline gap-4">
                            {part.price}
                            <span className="text-sm text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">In Stock</span>
                        </div>

                        <div className="bg-white border border-neutral-200 p-0 rounded-sm mb-8 overflow-hidden">
                            <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200">
                                <h3 className="text-black font-bold flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <Ruler className="text-neutral-500 h-4 w-4" /> Component Specifications
                                </h3>
                            </div>
                            <Table>
                                <TableBody>
                                    <TableRow className="border-neutral-100">
                                        <TableCell className="text-neutral-500 bg-neutral-50/50 w-1/3">Part ID</TableCell>
                                        <TableCell className="text-black font-mono">{part.id}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-neutral-100">
                                        <TableCell className="text-neutral-500 bg-neutral-50/50">Material</TableCell>
                                        <TableCell className="text-black">{part.material}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-neutral-100">
                                        <TableCell className="text-neutral-500 bg-neutral-50/50">Weight</TableCell>
                                        <TableCell className="text-black">{part.weight}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-neutral-100">
                                        <TableCell className="text-neutral-500 bg-neutral-50/50">Compatibility</TableCell>
                                        <TableCell className="text-black text-xs">
                                            {part.compatible.join(", ").toUpperCase()}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="border border-neutral-200 p-4 rounded-sm flex gap-3">
                                <ShieldCheck className="text-primary h-6 w-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm text-black">2-Year Warranty</h4>
                                    <p className="text-xs text-neutral-500">Full replacement coverage.</p>
                                </div>
                            </div>
                            <div className="border border-neutral-200 p-4 rounded-sm flex gap-3">
                                <FileText className="text-primary h-6 w-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm text-black">Docs Included</h4>
                                    <p className="text-xs text-neutral-500">Installation guide PDF.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button size="lg" className="flex-1 bg-black text-white font-bold hover:bg-neutral-800 rounded-none h-14 uppercase tracking-wide">
                                Add to Order
                            </Button>
                            <Button size="lg" variant="outline" className="flex-1 border-neutral-200 hover:bg-neutral-50 text-black h-14">
                                Download Spec Sheet
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
