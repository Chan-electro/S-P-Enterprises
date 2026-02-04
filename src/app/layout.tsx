import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Outfit for headings, Inter for body
import "./globals.css";
import ClientLayout from "@/components/client-layout";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.P. Enterprises | Heavy Earth Moving Equipment & Spares",
  description: "Specialized in precision components manufacture, genuine spares for heavy earthmoving equipment, and undercarriage products. Serving the industry since 1995.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontDisplay.variable
      )}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
