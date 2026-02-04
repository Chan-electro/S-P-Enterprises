"use client";

import { useRef, useLayoutEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Excavator } from "@/components/3d/excavator";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function ExplodedPreview() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [explodeProgress, setExplodeProgress] = useState(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Create a scroll trigger that updates the progress state
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: true, // Pin the section content
                onUpdate: (self) => {
                    setExplodeProgress(self.progress);
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* 3D Scene */}
                <div className="absolute inset-0 z-0">
                    <Canvas shadows camera={{ position: [5, 5, 8], fov: 40 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                        <Suspense fallback={null}>
                            <Environment preset="studio" />
                            <Excavator explodeProgress={explodeProgress} rotation={[0, -Math.PI / 4, 0]} scale={1.2} />
                            <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Overlay Content using Explode Progress to control opacity of labels/text */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center text-center p-4">
                    <div className="transition-opacity duration-300" style={{ opacity: 1 - explodeProgress * 2 }}>
                        <h2 className="text-5xl font-display font-black text-white mb-2">PRECISION ENGINEERING</h2>
                        <p className="text-gray-400">Scroll to explore the architecture</p>
                    </div>
                </div>

                {/* Labels that fade in when exploded */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Cab Label */}
                    <div className="absolute top-1/4 left-1/4 transition-opacity duration-500" style={{ opacity: explodeProgress > 0.3 ? 1 : 0, transform: `translate(${explodeProgress * -50}px, 0)` }}>
                        <div className="text-primary font-bold text-xl uppercase">Operator Cabin</div>
                        <div className="text-white text-sm max-w-xs">Reinforced safety glass with 360° visibility and climate control.</div>
                        <div className="w-12 h-[1px] bg-primary mt-2"></div>
                    </div>

                    {/* Engine Label */}
                    <div className="absolute bottom-1/3 right-1/4 text-right transition-opacity duration-500" style={{ opacity: explodeProgress > 0.6 ? 1 : 0, transform: `translate(${explodeProgress * 50}px, 0)` }}>
                        <div className="text-primary font-bold text-xl uppercase">Hybrid Power Unit</div>
                        <div className="text-white text-sm max-w-xs ml-auto">V8 Twin-Turbo Diesel matched with 150kW Electric Motor.</div>
                        <div className="w-12 h-[1px] bg-primary mt-2 ml-auto"></div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 pointer-events-auto" style={{ opacity: explodeProgress > 0.8 ? 1 : 0 }}>
                    <Button size="lg" className="bg-primary text-black font-bold">See Full Specifications</Button>
                </div>

            </div>
        </section>
    );
}
