"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";

export default function GenericPart3D() {
    return (
        <Canvas shadows camera={{ position: [2, 2, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={1} castShadow />
            <Suspense fallback={null}>
                <Stage intensity={0.5} environment="studio">
                    {/* Simple Cylinder Representation */}
                    <mesh castShadow receiveShadow rotation={[0.5, 0.5, 0]}>
                        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
                        <meshStandardMaterial color="#2A2C30" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 1, 0]}>
                        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
                        <meshStandardMaterial color="#F6C335" metalness={0.5} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
                        <meshStandardMaterial color="#F6C335" metalness={0.5} roughness={0.2} />
                    </mesh>
                </Stage>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={2} />
        </Canvas>
    )
}
