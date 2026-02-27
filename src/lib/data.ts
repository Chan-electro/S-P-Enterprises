export const machines = [
    {
        id: "spe-9000",
        name: "SPE-9000 Excavator",
        category: "Excavator",
        image: "/images/hero-excavator.png",
        description: "The flagship SPE-9000 sets new standards in mining efficiency. Featuring an autonomous-ready drive system and eco-mode hydraulics.",
        weight: "92 Tons",
        power: "850 HP",
        capacity: "6.5 m³",
        features: ["Autonomous Drive", "Eco-Hydraulics", "360 Vision"]
    },
    {
        id: "spe-550",
        name: "SPE-550 Wheel Loader",
        category: "Wheel Loader",
        image: "/images/hero-excavator.png", // Updated from titanx-loader.png
        description: "Versatile and powerful. The SPE-550 is designed for rapid material handling in both construction and quarry environments.",
        weight: "35 Tons",
        power: "420 HP",
        capacity: "4.2 m³",
        features: ["Quick-Hitch System", "High-Torque Drive", "Comfort Cab"]
    },
    {
        id: "spe-120",
        name: "SPE-120 Hydraulic Drill",
        category: "Drill",
        image: "/images/hero-excavator.png", // Fallback for now
        description: "Precision drilling for deep mining operations. The HX-120 delivers consistent power with minimal vibration.",
        weight: "28 Tons",
        power: "300 HP",
        capacity: "N/A",
        features: ["Precision Depth Control", "Vibration Dampening", "Remote Op"]
    },
    {
        id: "spe-300",
        name: "SPE-300 Compact Excavator",
        category: "Excavators",
        weightClass: "30 Ton",
        engineType: "Diesel",
        year: 2023,
        power: "180 kW",
        weight: "32,000 kg",
        depth: "8.2 m",
        description: "Versatile medium-duty excavator for urban construction projects.",
        image: "/placeholder-excavator-small.png"
    }
];

export const parts = [
    {
        id: "p-hyd-cyl-01",
        name: "Main Boom Cylinder",
        category: "Hydraulic Cylinders",
        compatible: ["spe-9000", "spe-300"],
        material: "Chromed Steel",
        price: "$4,500",
        weight: "450 kg"
    },
    {
        id: "p-track-link-90",
        name: "Heavy Duty Track Link",
        category: "Track Systems",
        compatible: ["spe-9000"],
        material: "Forged Steel",
        price: "$1,200",
        weight: "120 kg"
    },
    {
        id: "p-valve-con-x",
        name: "Flow Control Valve X",
        category: "Control Valves",
        compatible: ["spe-550", "spe-120"],
        material: "Brass/Steel",
        price: "$850",
        weight: "15 kg"
    }
];
