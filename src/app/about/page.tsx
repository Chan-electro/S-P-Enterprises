
import { Badge } from "@/components/ui/badge";
import { Users, Hammer, Globe, Trophy, Building2, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | S.P. Enterprises',
    description: 'Established in 1995. precision components manufacturer and heavy earthmoving equipment spares supplier.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <img src="/images/factory-floor.png" alt="S.P. Enterprises Factory" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/80" />
                <div className="relative z-10 text-center max-w-4xl px-4">
                    <Badge variant="outline" className="mb-4 text-black border-black font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm">Since 1995</Badge>
                    <h1 className="text-4xl md:text-6xl font-display font-black text-black uppercase mb-6 drop-shadow-sm">Precision & Power</h1>
                    <p className="text-xl md:text-2xl text-neutral-600 font-medium max-w-2xl mx-auto">
                        "Create a good future with advanced technology, excellent quality, and top-grade service."
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 border-b border-neutral-100 bg-neutral-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Years Experience", value: "30+", icon: Trophy },
                            { label: "Distribution Offices", value: "5", icon: Globe },
                            { label: "Product Accuracy", value: "<10μ", icon: Hammer },
                            { label: "Satisfied Clients", value: "Pan-India", icon: Users },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-4xl font-display font-black text-black mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-black text-black uppercase mb-6">Company Overview</h2>
                            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                                S.P. Enterprises, established in 1995 under the leadership of Mr. H.S. Shivanandaswamy, specializes in precision components manufacture and heavy earth moving spare parts.
                            </p>
                            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                                We operate as a manufacturer, importer, and stockist for genuine spares. Our facility is equipped with advanced production technology including CNC Turning Centers, Gear Hobbing, and Induction Hardening machines.
                            </p>
                            <div className="bg-neutral-50 p-6 rounded-sm border-l-4 border-primary">
                                <h3 className="font-bold text-black mb-2">Our Mission</h3>
                                <p className="text-neutral-600 italic">"To create a good future with advanced technology, excellent quality, and top-grade service by hand in hand with business people in our homeland."</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white p-6 shadow-sm border border-neutral-100 rounded-sm">
                                <Building2 className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">S.P. Enterprises</h3>
                                <p className="text-neutral-500 mb-2">Sharadhamba Nagar, Jalahalli, Bangalore</p>
                                <p className="text-sm text-neutral-400">Head Office • Manufacturing • Sales</p>
                            </div>
                            <div className="bg-white p-6 shadow-sm border border-neutral-100 rounded-sm">
                                <Building2 className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">A.S. Tech Industries</h3>
                                <p className="text-neutral-500 mb-2">HMT Factory Main Road, Bangalore</p>
                                <p className="text-sm text-neutral-400">Manufacturing Division</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Scope */}
            <section className="py-24 bg-neutral-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-display font-black text-white uppercase text-center mb-16">Our Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Precision Manufacturing", desc: "Custom manufacturing based on customer samples or drawings with high precision." },
                            { title: "Genuine Spares Import", desc: "Importer and stockist for genuine heavy earthmoving equipment spares." },
                            { title: "Undercarriage Systems", desc: "Complete range of track rollers, sprockets, idlers, and track chains." },
                        ].map((item, i) => (
                            <div key={i} className="bg-neutral-800 p-8 rounded-sm border border-neutral-700 hover:border-primary transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
