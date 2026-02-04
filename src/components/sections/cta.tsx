import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-black text-black uppercase mb-6 drop-shadow-sm">
                    Ready to Build the Future?
                </h2>
                <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto mb-12 font-medium">
                    Equip your fleet with the world's most reliable heavy machinery.
                    Contact our engineering team today for a custom consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wide h-16 w-full sm:w-auto">
                            Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/machinery">
                        <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-white/50 text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wide bg-transparent h-16 w-full sm:w-auto">
                            Browse Full Catalog
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
