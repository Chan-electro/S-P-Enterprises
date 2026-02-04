
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | S.P. Enterprises',
    description: 'Showcasing our precision manufacturing facility, machinery, and finished components.',
};

export default function GalleryPage() {
    const categories = [
        { name: "Manufacturing Facility", images: [1, 2, 3] },
        { name: "Heavy Equipment", images: [1, 2, 3] },
        { name: "Finished Components", images: [1, 2, 3] },
        { name: "Quality Control", images: [1, 2] },
    ];

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary text-primary font-bold uppercase tracking-widest">Our Work</Badge>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-black uppercase mb-6">Gallery</h1>
                    <p className="text-xl text-neutral-600">
                        A glimpse into our state-of-the-art facility, precision capabilities, and the heavy machinery we sustain.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-bold text-black mb-8 border-l-4 border-primary pl-4 uppercase">{category.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {category.images.map((img, j) => (
                                    <div key={j} className="aspect-[4/3] bg-neutral-100 rounded-sm overflow-hidden group relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-mono text-xs">
                                            IMAGE PLACEHOLDER
                                        </div>
                                        <img
                                            src="/images/factory-floor.png"
                                            alt={`${category.name} ${j + 1}`}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
