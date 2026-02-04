"use client";

import { useState } from "react";
import { machines } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Weight, Zap, Ruler } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function MachineryCatalogClient() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const categories = ["All", "Excavators", "Loaders", "Drills", "Trucks"];

    const filteredMachines = machines.filter(m => {
        const matchesCategory = filter === "All" || m.category === filter;
        const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-8">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-black flex items-center gap-2">
                        <Filter className="w-5 h-5 text-primary" /> Filters
                    </h3>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search model..."
                            className="pl-10 bg-white border-neutral-200 focus:border-primary"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-sm text-neutral-500 uppercase tracking-widest">Category</h4>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <div key={cat} className="flex items-center gap-2">
                                <Checkbox
                                    id={cat}
                                    checked={filter === cat}
                                    onCheckedChange={() => setFilter(cat)}
                                    className="border-neutral-300 data-[state=checked]:bg-primary data-[state=checked]:text-black"
                                />
                                <label htmlFor={cat} className="text-sm font-medium text-neutral-700 cursor-pointer hover:text-black">
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-sm text-neutral-500 uppercase tracking-widest">Operating Weight</h4>
                    <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                    <div className="flex justify-between text-xs text-neutral-500 font-mono">
                        <span>0 Tons</span>
                        <span>100+ Tons</span>
                    </div>
                </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-neutral-500 text-sm">Showing <span className="font-bold text-black">{filteredMachines.length}</span> outcomes</p>
                    {/* Sort Dropdown Placeholder */}
                    <Button variant="outline" size="sm" className="text-sm">Sort by: Newest</Button>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredMachines.map((machine, i) => (
                            <motion.div
                                layout
                                key={machine.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link href={`/machinery/${machine.id}`}>
                                    <Card className="h-full border border-neutral-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-white">
                                        <div className="aspect-[4/3] bg-neutral-50 relative p-4 flex items-center justify-center">
                                            <div className="text-5xl font-black text-neutral-200 group-hover:text-primary/20 transition-colors uppercase tracking-tighter">
                                                {machine.id}
                                            </div>
                                            <div className="absolute top-3 left-3">
                                                <Badge variant="secondary" className="bg-white shadow-sm font-bold text-xs">{machine.category}</Badge>
                                            </div>
                                            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="text-primary w-6 h-6" />
                                            </div>
                                        </div>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="font-display text-xl text-black">{machine.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500">
                                                <div className="flex items-center gap-2"><Weight className="w-3 h-3 text-primary" /> {machine.weight}</div>
                                                <div className="flex items-center gap-2"><Zap className="w-3 h-3 text-primary" /> {machine.power}</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredMachines.length === 0 && (
                    <div className="text-center py-24 text-neutral-400">
                        No machines found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
