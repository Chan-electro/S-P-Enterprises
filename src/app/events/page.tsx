
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events & Exhibitions | S.P. Enterprises',
    description: 'Our participation in industry trade shows, equipment exhibitions, and business expos.',
};

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary text-primary font-bold uppercase tracking-widest">Connect With Us</Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-black uppercase mb-6">Events & Exhibitions</h1>
                    <p className="text-xl text-neutral-600">
                        We actively participate in industry trade shows, equipment exhibitions, and business expos to showcase our innovations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Event 1 */}
                    <div className="group border border-neutral-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                        <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                            <img src="/images/hero-excavator.png" alt="Excon Exhibition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-primary text-black font-bold px-3 py-1 text-sm rounded-sm">
                                UPCOMING
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors">EXCON 2026</h2>
                            <div className="flex flex-col gap-2 mb-6 text-neutral-600">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> December 12-16, 2026</span>
                                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> BIEC, Bangalore</span>
                            </div>
                            <p className="text-neutral-500 leading-relaxed">
                                Visit our stall to experience our latest range of precision components and undercarriage parts.
                            </p>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="group border border-neutral-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 bg-neutral-50 opacity-80 hover:opacity-100">
                        <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                            <img src="/images/factory-floor.png" alt="Bauma Conexpo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" />
                            <div className="absolute top-4 left-4 bg-neutral-800 text-white font-bold px-3 py-1 text-sm rounded-sm">
                                COMPLETED
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-black mb-4">Bauma Conexpo India</h2>
                            <div className="flex flex-col gap-2 mb-6 text-neutral-600">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Jan 2025</span>
                                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Greater Noida</span>
                            </div>
                            <p className="text-neutral-500 leading-relaxed">
                                Showcased our new line of heavy-duty gears and shafts. Thank you to everyone who visited!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
