
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, User } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | S.P. Enterprises',
    description: 'Get in touch with S.P. Enterprises and A.S. Tech Industries. Headquartered in Bangalore with distribution across South India.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-neutral-50">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-5xl font-display font-black text-black mb-6 uppercase">Contact Us</h1>
                    <p className="text-neutral-500 text-lg">
                        Get in touch for inquiries about manufacturing, spare parts, or dealership opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Info */}
                    <div className="space-y-8">

                        {/* Head Offices */}
                        <Card className="p-8 border-none shadow-sm bg-white">
                            <h3 className="text-xl font-bold text-black mb-6 border-b pb-2">Head Offices</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center shrink-0 text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-black text-lg">A.S. TECH INDUSTRIES</span>
                                        <span className="text-neutral-500 block mb-2">Manufacturing Division</span>
                                        <span className="text-neutral-600 block">
                                            #5 HMT Factory Main Road, Jalahalli Village<br />
                                            Bangalore-560013, Karnataka
                                        </span>
                                        <div className="flex items-center gap-2 mt-2 text-sm text-neutral-500">
                                            <Mail className="w-3 h-3" /> astechindustries1995@rediffmail.com
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center shrink-0 text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-black text-lg">S.P. ENTERPRISES</span>
                                        <span className="text-neutral-500 block mb-2">Sales & Distribution</span>
                                        <span className="text-neutral-600 block">
                                            #66/2, 5th Cross, Sreematha Badavane<br />
                                            Sharadhamba Nagar, Jalahalli<br />
                                            Bangalore-560013, Karnataka
                                        </span>
                                        <div className="flex flex-col gap-1 mt-2 text-sm text-neutral-500">
                                            <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> speblr1995@gmail.com</span>
                                            <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> ceo@spenterprises.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Key Contacts */}
                        <Card className="p-8 border-none shadow-sm bg-white">
                            <h3 className="text-xl font-bold text-black mb-6 border-b pb-2">Key Contacts</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full text-primary"><User className="w-4 h-4" /></div>
                                    <div>
                                        <span className="font-bold text-black block">Mr. H S SHIVANAND SWAMY</span>
                                        <span className="text-xs font-bold text-primary uppercase">Proprietor / Founder</span>
                                        <span className="text-neutral-500 block text-sm">+91 9902012222, +91 9448481737</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full text-primary"><User className="w-4 h-4" /></div>
                                    <div>
                                        <span className="font-bold text-black block">Mr. H.S PRAKUL</span>
                                        <span className="text-neutral-500 block text-sm">+91 9739210995</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full text-primary"><User className="w-4 h-4" /></div>
                                    <div>
                                        <span className="font-bold text-black block">Mr. VINAY KUMAR TM</span>
                                        <span className="text-neutral-500 block text-sm">+91 9035711084</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column: Form & Distribution */}
                    <div className="space-y-8">
                        {/* Form */}
                        <Card className="p-8 border-none shadow-lg bg-white">
                            <h2 className="text-2xl font-display font-black text-black mb-6 uppercase">Get A Free Quote!</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-500 uppercase">First Name</label>
                                        <Input placeholder="John" className="bg-neutral-50 border-neutral-200" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-neutral-500 uppercase">Phone</label>
                                        <Input placeholder="+91 9876543210" className="bg-neutral-50 border-neutral-200" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-500 uppercase">Email Address</label>
                                    <Input type="email" placeholder="john@company.com" className="bg-neutral-50 border-neutral-200" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-500 uppercase">Project / Idea</label>
                                    <Textarea placeholder="I'm interested in..." className="bg-neutral-50 border-neutral-200 min-h-[100px]" />
                                </div>

                                <Button className="w-full h-12 bg-primary text-black font-bold uppercase tracking-wider hover:bg-primary/90">
                                    Get A Free Quote!
                                </Button>
                            </form>
                        </Card>

                        {/* Distribution Network */}
                        <Card className="p-8 border-none shadow-sm bg-neutral-900 text-white">
                            <h3 className="text-xl font-bold text-primary mb-6 border-b border-neutral-700 pb-2">Distribution Network</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-lg">Salem</h4>
                                    <p className="text-gray-400 text-sm">#511/169, Angammal Colony, Salem-636009</p>
                                    <p className="text-primary text-sm mt-1">Manju: +91 9597214702</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Coimbatore</h4>
                                    <p className="text-gray-400 text-sm">#1/468, Ganesha Nagar, Malumichampatti</p>
                                    <p className="text-primary text-sm mt-1">Pradeep: +91 9626304702</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Cochin</h4>
                                    <p className="text-gray-400 text-sm">#16-766, MC Road, Perumbavoor</p>
                                    <p className="text-primary text-sm mt-1">Manjunath: +91 9567333350</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Hospet</h4>
                                    <p className="text-gray-400 text-sm">#509/4, Vani Nilaya, Patel Nagar</p>
                                    <p className="text-primary text-sm mt-1">Mansoor: +91 9902012238</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
