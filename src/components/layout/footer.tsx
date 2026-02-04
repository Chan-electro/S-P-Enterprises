import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border pt-20 pb-10 text-neutral-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black text-black text-lg">SP</div>
                            <span className="font-display font-black text-xl uppercase tracking-tight">S.P.<span className="text-primary">ENTERPRISES</span></span>
                        </div>
                        <p className="text-neutral-500 max-w-xs leading-relaxed">
                            Serving the industry since 1995 with precision components and genuine spares for heavy earthmoving equipment.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-transparent shadow-sm hover:border-primary hover:text-primary transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-black">Offerings</h4>
                        <ul className="space-y-4 text-neutral-500">
                            <li><Link href="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-black">Company</h4>
                        <ul className="space-y-4 text-neutral-500">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Locations</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-black">Stay Connected</h4>
                        <p className="text-neutral-500 mb-4 text-sm">Get the latest industry news and product updates.</p>
                        <div className="flex bg-white p-1 shadow-sm border border-border rounded-sm">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-black placeholder:text-neutral-400"
                            />
                            <button className="bg-primary text-black px-4 py-2 font-bold hover:bg-primary/90 transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>&copy; 2026 S.P. ENTERPRISES. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">Privacy Policy</a>
                        <a href="#" className="hover:text-black">Terms of Service</a>
                        <a href="#" className="hover:text-black">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
