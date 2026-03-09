"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/products", label: "Products" },
    { href: "/parts", label: "3D Parts" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
];

const navLinkClass = "inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-border py-4 shadow-sm"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-lg group-hover:scale-105 transition-transform">
                        YSP
                    </div>
                    <span className={`font-display font-black text-lg sm:text-2xl tracking-tight uppercase transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                        YSP<span className="text-primary"> SPARES</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={navLinkClass}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 pl-8 border-l border-neutral-200">
                        <Link href="/contact">
                            <Button className="bg-primary text-black font-bold hover:bg-primary/90 rounded-none px-6">
                                Get Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
                    aria-label="Toggle navigation menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl p-6 lg:hidden max-h-[80vh] overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full mt-4 bg-primary text-black font-bold">Get Quote</Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
