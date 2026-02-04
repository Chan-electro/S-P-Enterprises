import ExcavatorDemoClient from "@/components/sections/excavator-demo-client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Interactive 3D Demo | TitanX Earthmovers',
    description: 'Experience the TX-9000 in full interactive 3D. Explore components, explode view, and technical details.',
};

export default function ExcavatorDemoPage() {
    return (
        <ExcavatorDemoClient />
    );
}
