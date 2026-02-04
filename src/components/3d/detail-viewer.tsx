"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Excavator } from "@/components/3d/excavator"; // Reuse basic model

export default function Detail3DViewer() {
    return (
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <Suspense fallback={null}>
                <Environment preset="studio" />
                <Stage intensity={1} environment="city" adjustCamera={false}>
                    <Excavator explodeProgress={0} />
                </Stage>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
    );
}
