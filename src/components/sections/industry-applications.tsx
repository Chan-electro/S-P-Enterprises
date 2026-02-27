"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    { name: "Mining", img: "/images/hero-excavator.png", desc: "Supporting extraction with durable spare parts." },
    { name: "Construction", img: "/images/factory-floor.png", desc: "Reliable components for infrastructure development." },
    { name: "Infrastructure", img: "/images/hero-excavator.png", desc: "Precision parts for heavy duty machinery." },
    { name: "Maintenance", img: "/images/factory-floor.png", desc: "Keeping fleets running with genuine spares." },
];

export default function IndustryApplications() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // No horizontal scroll on mobile

        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { translateX: 0 },
                {
                    translateX: "-300vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=3000",
                        scrub: 0.6,
                        pin: true,
                        anticipatePin: 1,
                    },
                }
            );
        }, triggerRef);
        return () => ctx.revert();
    }, [isMobile]);

    // Mobile: vertical stacking
    if (isMobile) {
        return (
            <div className="bg-black py-16 px-4">
                <div className="max-w-lg mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white mb-4">
                        Industries We <span className="text-primary">Serve</span>
                    </h2>
                    <p className="text-base text-gray-400">
                        From construction sites to mining operations, S.P. Enterprises keeps your equipment running.
                    </p>
                </div>
                <div className="space-y-6 max-w-lg mx-auto">
                    {industries.map((ind, i) => (
                        <div key={i} className="relative rounded-sm overflow-hidden aspect-video">
                            <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="absolute bottom-0 left-0 p-6 z-10">
                                <h3 className="text-2xl font-display font-black text-white uppercase mb-2">{ind.name}</h3>
                                <p className="text-sm text-white/80 border-l-4 border-primary pl-4">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Desktop: horizontal scroll
    return (
        <div className="overflow-hidden bg-black pb-24">
            <div ref={triggerRef} className="h-screen w-full">
                <div ref={sectionRef as any} className="flex h-screen w-[400vw] relative will-change-transform">

                    {/* Intro Slide */}
                    <div className="w-screen h-full bg-black text-white flex items-center justify-center p-12 shrink-0">
                        <div className="max-w-4xl">
                            <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-8">
                                Industries We <span className="text-primary">Serve</span>
                            </h2>
                            <p className="text-2xl text-gray-400 max-w-2xl">
                                From construction sites to mining operations, S.P. Enterprises keeps your equipment running.
                            </p>
                            <div className="mt-12 flex items-center gap-4 text-primary animate-pulse">
                                Scroll to Explore <ArrowRight />
                            </div>
                        </div>
                    </div>

                    {/* Industry Slides */}
                    {industries.map((ind, i) => (
                        <div key={i} className="w-screen h-full relative shrink-0">
                            <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute bottom-0 left-0 p-12 md:p-24 z-10">
                                <h3 className="text-6xl md:text-8xl font-display font-black text-white uppercase mb-4">{ind.name}</h3>
                                <p className="text-xl md:text-2xl text-white/80 max-w-xl border-l-4 border-primary pl-6">{ind.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
