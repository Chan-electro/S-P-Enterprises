"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text Reveal
            const tl = gsap.timeline();
            tl.from(".hero-text-line", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            tl.from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-white">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <img
                    ref={bgRef}
                    src="/images/hero-excavator.png"
                    alt="YSP Spares Heavy Equipment"
                    className="w-full h-[120%] object-cover object-center"
                />
                {/* Subtle Overlay to ensure text readability without being dark */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div ref={textRef} className="max-w-3xl">
                    <div className="overflow-hidden mb-2">
                        <p className="hero-text-line text-primary font-bold tracking-widest uppercase mb-4 text-xs sm:text-sm md:text-base">
                            ISO Certified Manufacturing • Est. 1995
                        </p>
                    </div>
                    <div className="overflow-hidden mb-4">
                        <h1 className="hero-text-line text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-black leading-[1.1] tracking-tighter uppercase">
                            Powering Machineries <br />
                            <span className="text-secondary-foreground">With Precision</span> <br />
                            Since 1995
                        </h1>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <p className="hero-text-line text-base sm:text-lg md:text-xl text-neutral-600 font-medium max-w-xl leading-relaxed">
                            Your trusted partner for high-performance earthmoving equipment spares and custom precision components. Serving Caterpillar, Komatsu, Hitachi, Volvo & Hyundai.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 hero-btn">
                        <Link href="/products">
                            <Button size="lg" className="bg-primary text-black hover:bg-yellow-400 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-none font-bold shadow-lg shadow-yellow-500/20">
                                Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-none font-bold bg-transparent">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <ChevronDown className="w-8 h-8 text-black/50" />
            </div>
        </section>
    );
}
