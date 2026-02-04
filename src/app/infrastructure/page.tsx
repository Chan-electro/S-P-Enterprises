
import { Badge } from "@/components/ui/badge";
import { Settings, CheckCircle2, Factory } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Infrastructure & Manufacturing | S.P. Enterprises',
    description: 'State-of-the-art manufacturing facility with CNC Turning, Gear Hobbing, and Induction Hardening capabilities.',
};

const capabilities = [
    {
        title: "CNC Turning Center",
        specs: ["High-precision turning operations", "Consistent quality", "Excellent surface finish"],
        desc: "Ensures better quality in terms of performance and finish."
    },
    {
        title: "Gear Hobbing Machines",
        specs: ["Spur Gears & Helical Gears", "Module Range: 1 to 10", "Heavy equipment applications"],
        desc: "Specialized in manufacturing various gears for heavy equipment."
    },
    {
        title: "CNC Machining Center",
        specs: ["Hole Size Accuracy", "PCD Accuracy < 10 microns", "Critical component precision"],
        desc: "High accuracy machining for critical components."
    },
    {
        title: "Gear Shaping Machine",
        specs: ["Internal Gears & Step Gears", "Module: 0.5 to 6", "Diameter: Up to 600mm"],
        desc: "Capable of producing complex gear geometries."
    },
    {
        title: "Induction Hardening",
        specs: ["Pins & Shafts Heat Treatment", "Length Capacity: 2.5 meters", "wear resistance"],
        desc: "Enhanced durability and wear resistance for shafts and pins."
    },
    {
        title: "Gear Grinding Machine",
        specs: ["Spur & Helical Gears", "Module: 1 to 6", "Superior Finish"],
        desc: "Precision grinding for superior surface finish."
    }
];

export default function InfrastructurePage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-primary text-primary font-bold uppercase tracking-widest">Manufacturing Excellence</Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-black uppercase mb-6">Infrastructure</h1>
                    <p className="text-xl text-neutral-600">
                        Our facility is equipped with latest technology machines ensuring high precision and quality output for heavy earthmoving spares.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="group p-8 border border-neutral-200 rounded-sm hover:border-primary hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">{cap.title}</h3>
                            <p className="text-neutral-500 mb-6">{cap.desc}</p>
                            <ul className="space-y-2">
                                {cap.specs.map((spec, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-neutral-900 rounded-sm p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-black uppercase mb-4">Quality Assurance</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Quality is at the core of our manufacturing process. We maintain strict adherence to customer samples and drawings, ensuring every component meets the highest standards.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" /> Strict quality control at every stage</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" /> Testing and validation procedures</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" /> High-end bi-metal bushes implementation</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Factory className="w-48 h-48 text-neutral-800" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
