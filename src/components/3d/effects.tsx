"use client";

import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects() {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0.5}
                luminanceSmoothing={0.9}
                height={300}
                intensity={0.5}
            />
            <ChromaticAberration
                blendFunction={BlendFunction.NORMAL}
                offset={[0.0002, 0.0002]}
            />
            <Vignette
                eskil={false}
                offset={0.1}
                darkness={0.9}
            />
        </EffectComposer>
    );
}
