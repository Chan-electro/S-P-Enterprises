"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { useExcavatorStore } from "@/store/excavator-store";
import { Excavator } from "@/components/3d/excavator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Maximize2, RotateCcw, Box, ArrowUpCircle } from "lucide-react";
import { EffectComposer, Outline, Selection, Select } from "@react-three/postprocessing";

export default function ExcavatorDemoClient() {
    const { exploded, toggleExploded, selectedPart, setSelectedPart, viewMode, setViewMode } = useExcavatorStore();
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        if (controlsRef.current) {
            let targetPos = [5, 5, 8];
            let targetLookAt = [0, 0, 0];

            switch (viewMode) {
                case 'cabin':
                    targetPos = [1.5, 2, 1.5];
                    targetLookAt = [0, 1.5, 0];
                    break;
                case 'tracks':
                    targetPos = [4, 1, 4];
                    targetLookAt = [0, 0.5, 0];
                    break;
                case 'engine':
                    targetPos = [-2, 2, -3];
                    targetLookAt = [0, 1, -1];
                    break;
            }
            controlsRef.current.object.position.set(...targetPos);
            controlsRef.current.target.set(...targetLookAt);
            controlsRef.current.update();
        }
    }, [viewMode]);

    return (
        <div className="w-full h-screen bg-neutral-100 relative flex flex-col pt-16">

            {/* 3D Canvas */}
            <div className="flex-1 relative">
                <Canvas shadows camera={{ position: [5, 5, 8], fov: 45 }}>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />

                    <Suspense fallback={null}>
                        <Environment preset="studio" />

                        <Selection>
                            <EffectComposer autoClear={false}>
                                <Outline blur edgeStrength={10} width={1000} visibleEdgeColor={0x1959A8} hiddenEdgeColor={0xdddddd} />
                            </EffectComposer>

                            <Select enabled={!!selectedPart}>
                                <Excavator
                                    explodeProgress={exploded ? 1 : 0}
                                    onClick={(e: any) => {
                                        e.stopPropagation();
                                        setSelectedPart("Generic Part");
                                    }}
                                />
                            </Select>
                        </Selection>

                        <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
                    </Suspense>

                    <OrbitControls ref={controlsRef} makeDefault />
                </Canvas>

                {/* UI Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Card className="p-4 bg-white/90 backdrop-blur-md border-neutral-200 text-black w-64 shadow-lg">
                        <h3 className="font-display font-bold mb-2 uppercase tracking-wide">Controls</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Button variant={exploded ? "default" : "outline"} onClick={toggleExploded} size="sm" className={exploded ? "bg-primary text-black" : "text-black border-neutral-300"}>
                                <Maximize2 className="mr-2 h-4 w-4" /> Explode
                            </Button>
                            <Button variant={viewMode === 'default' ? "default" : "outline"} onClick={() => setViewMode('default')} size="sm" className={viewMode === 'default' ? "bg-primary text-black" : "text-black border-neutral-300"}>
                                <RotateCcw className="mr-2 h-4 w-4" /> Reset
                            </Button>
                            <Button variant={viewMode === 'cabin' ? "default" : "outline"} onClick={() => setViewMode('cabin')} size="sm" className={viewMode === 'cabin' ? "bg-primary text-black" : "text-black border-neutral-300"}>
                                Cabin
                            </Button>
                            <Button variant={viewMode === 'tracks' ? "default" : "outline"} onClick={() => setViewMode('tracks')} size="sm" className={viewMode === 'tracks' ? "bg-primary text-black" : "text-black border-neutral-300"}>
                                Tracks
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Part Details Sheet */}
            <Sheet open={!!selectedPart} onOpenChange={(open) => !open && setSelectedPart(null)}>
                <SheetContent side="right" className="bg-white border-l border-neutral-200 text-black w-[400px] shadow-2xl">
                    <SheetHeader>
                        <SheetTitle className="text-black font-display font-black text-2xl uppercase">Component Details</SheetTitle>
                        <SheetDescription className="text-neutral-500">
                            Technical specifications and maintenance info.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="mt-8 space-y-6">
                        <div className="aspect-video bg-neutral-50 rounded-sm flex items-center justify-center border border-neutral-200">
                            <Box className="w-12 h-12 text-neutral-300" />
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-2 text-black">TX-9000 Chassis Segment</h4>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                High-strength steel alloy chassis designed to withstand torsion and impact loads in mining environments.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-100">
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500 font-bold uppercase text-xs">Material</span>
                                <span className="font-mono text-black">Hardox® 500</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500 font-bold uppercase text-xs">Weight</span>
                                <span className="font-mono text-black">12,500 kg</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500 font-bold uppercase text-xs">Service Interval</span>
                                <span className="font-mono text-black">5000 Hrs</span>
                            </div>
                        </div>

                        <Button className="w-full gap-2 bg-black text-white font-bold hover:bg-neutral-800 h-12 rounded-none uppercase tracking-wide">
                            Order Replacement <ArrowUpCircle size={16} />
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
