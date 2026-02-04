"use client";

import { ReactNode } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SmoothScroll />
            <Header />
            {children}
            <Footer />
        </QueryClientProvider>
    );
}
