"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
                    <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center font-black text-black text-xl tracking-tighter shadow-lg group-hover:scale-105 transition-transform">
                        SP
                    </div>
                    <span className={`font-display font-black text-2xl tracking-tight uppercase ${isScrolled ? 'text-black' : 'text-black'}`}>
                        S.P.<span className="text-primary">ENTERPRISES</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/infrastructure" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Infrastructure
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/products" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Products
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/gallery" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Gallery
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/events" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Events
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary/50 data-[state=open]:bg-secondary/50">
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-4 pl-8 border-l border-neutral-200">
                        <Button variant="ghost" size="icon" className="text-neutral-500 hover:text-primary">
                            <Search className="w-5 h-5" />
                        </Button>
                        <Link href="/contact">
                            <Button className="bg-primary text-black font-bold hover:bg-primary/90 rounded-none px-6">
                                Get Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-black"
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
                        className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl p-6 lg:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>About</Link>
                            <Link href="/infrastructure" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Infrastructure</Link>
                            <Link href="/products" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                            <Link href="/gallery" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                            <Link href="/events" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                            <Link href="/contact" className="text-lg font-bold text-neutral-800" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
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
