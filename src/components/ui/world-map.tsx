"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

const locations = [
    { id: 1, name: "HQ - Pennsylvania", x: 28, y: 35 },
    { id: 2, name: "Berlin Hub", x: 52, y: 28 },
    { id: 3, name: "Tokyo Office", x: 85, y: 38 },
    { id: 4, name: "Sydney Distribution", x: 88, y: 75 },
    { id: 5, name: "Dubai Service", x: 60, y: 45 },
    { id: 6, name: "Sao Paulo", x: 32, y: 70 },
];

export default function WorldMap() {
    const [activeLoc, setActiveLoc] = useState<number | null>(null);

    return (
        <div className="relative w-full aspect-[2/1] bg-neutral-100 rounded-lg overflow-hidden">
            {/* Abstract World Map SVG Background */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 50">
                <path d="M20,30 Q25,25 35,35 T50,30 T70,35 T90,30 V50 H0 V30 H20" fill="#000" />
                {/* Simplified shapes for continents - abstract */}
                <rect x="20" y="20" width="15" height="20" fill="#000" rx="2" /> {/* N. America */}
                <rect x="25" y="45" width="10" height="15" fill="#000" rx="2" /> {/* S. America */}
                <rect x="45" y="20" width="15" height="15" fill="#000" rx="2" /> {/* Europe */}
                <rect x="48" y="40" width="15" height="15" fill="#000" rx="2" /> {/* Africa */}
                <rect x="70" y="20" width="20" height="15" fill="#000" rx="2" /> {/* Asia */}
                <rect x="80" y="60" width="10" height="10" fill="#000" rx="2" /> {/* Australia */}
            </svg>

            {/* Dynamic Dots */}
            {locations.map((loc) => (
                <motion.div
                    key={loc.id}
                    className="absolute cursor-pointer group"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + loc.id * 0.1 }}
                    onMouseEnter={() => setActiveLoc(loc.id)}
                    onMouseLeave={() => setActiveLoc(null)}
                >
                    <div className="relative">
                        <MapPin className={`w-6 h-6 ${activeLoc === loc.id ? 'text-primary' : 'text-gray-500'} transition-colors`} />
                        <div className={`absolute -bottom-1 -left-1 w-8 h-1 bg-black/50 blur-sm rounded-full`} />

                        {/* Pulse effect */}
                        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100" />

                        {/* Tooltip */}
                        {activeLoc === loc.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-black text-xs font-bold px-2 py-1 rounded-sm shadow-xl"
                            >
                                {loc.name}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            ))}

            <div className="absolute bottom-4 left-4 text-xs text-gray-600">
                * interactive dealer map
            </div>
        </div>
    );
}
