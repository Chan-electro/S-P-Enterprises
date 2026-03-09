"use client";

import { ReactNode, useState } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <SmoothScroll />
            <Header />
            <main>{children}</main>
            <Footer />
        </QueryClientProvider>
    );
}
