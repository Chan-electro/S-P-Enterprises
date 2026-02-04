"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial, Group } from "three";
import { Float } from "@react-three/drei";

const metalMaterial = new MeshStandardMaterial({
    color: "#D9DCE0", // Steel Silver
    roughness: 0.3,
    metalness: 0.9,
});

const yellowMaterial = new MeshStandardMaterial({
    color: "#F7B500", // Titan Industrial Yellow
    roughness: 0.2,
    metalness: 0.6,
});

const blackMaterial = new MeshStandardMaterial({
    color: "#1A1A1A", // Dark Grey (tracks/vents)
    roughness: 0.8,
    metalness: 0.4,
});

export function Excavator({ explodeProgress = 0, ...props }: any) {
    const group = useRef<Group>(null);

    // Slight idle animation only if not exploding
    useFrame((state) => {
        if (group.current && explodeProgress === 0) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    // Calculate positions based on explosion
    // Tracks spread out X
    const leftTrackPos = [-1 - explodeProgress * 2, 0, 0] as [number, number, number];
    const rightTrackPos = [1 + explodeProgress * 2, 0, 0] as [number, number, number];

    // Cab moves up
    const cabPos = [0, 1 + explodeProgress * 1.5, 0] as [number, number, number];
    // Boom group moves up and forward
    const boomGroupPos = [0.5, 0.5 + explodeProgress, 1 + explodeProgress * 2] as [number, number, number];

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Chassis / Tracks */}
            <group position={[0, 0.5, 0]}>
                {/* Left Track */}
                <mesh position={leftTrackPos} castShadow receiveShadow material={blackMaterial}>
                    <boxGeometry args={[0.5, 1, 3]} />
                </mesh>
                {/* Right Track */}
                <mesh position={rightTrackPos} castShadow receiveShadow material={blackMaterial}>
                    <boxGeometry args={[0.5, 1, 3]} />
                </mesh>
                {/* Base Body */}
                <mesh position={[0, 0.6, 0]} castShadow receiveShadow material={metalMaterial}>
                    <boxGeometry args={[2.5, 0.5, 3]} />
                </mesh>

                {/* Rotatable Cab & Upper Structure */}
                <group position={cabPos}>
                    {/* Main Cab Body */}
                    <mesh position={[0, 0.75, -0.5]} castShadow receiveShadow material={yellowMaterial}>
                        <boxGeometry args={[2.2, 1.5, 2.5]} />
                    </mesh>
                    {/* Operator Cabin (Glass) */}
                    <mesh position={[-0.6, 1, 1]} castShadow receiveShadow>
                        <boxGeometry args={[0.9, 1, 1.2]} />
                        <meshStandardMaterial color="#111" opacity={0.7} transparent roughness={0.0} metalness={0.9} />
                    </mesh>

                    {/* Engine Vent/Detail */}
                    <mesh position={[0, 0.8, -1.8]} material={blackMaterial}>
                        <boxGeometry args={[1.8, 0.8, 0.5]} />
                    </mesh>

                    {/* Boom Pivot */}
                    <group position={boomGroupPos}>
                        {/* Boom */}
                        <mesh position={[0, 2, 1.5]} rotation={[0.5, 0, 0]} castShadow receiveShadow material={yellowMaterial}>
                            <boxGeometry args={[0.4, 5, 0.4]} />
                        </mesh>

                        {/* Arm Pivot (at end of boom) */}
                        <group position={[0, 4, 3]}>
                            {/* Arm */}
                            <mesh position={[0, -1.5, 0.5]} rotation={[-0.8, 0, 0]} castShadow receiveShadow material={yellowMaterial}>
                                <boxGeometry args={[0.35, 3.5, 0.35]} />
                            </mesh>

                            {/* Bucket Pivot */}
                            <group position={[0, -3.5, 1.5]}>
                                <mesh rotation={[0, 0, 0]} castShadow receiveShadow material={blackMaterial}>
                                    <cylinderGeometry args={[0.8, 0.5, 1, 8]} />
                                </mesh>
                            </group>
                        </group>

                        {/* Hydraulic Cylinders (Decorative) */}
                        <mesh position={[0, 1.5, 2]} rotation={[0.5, 0, 0]} material={metalMaterial}>
                            <cylinderGeometry args={[0.1, 0.1, 2]} />
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}
