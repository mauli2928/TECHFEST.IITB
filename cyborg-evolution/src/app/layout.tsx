import type { Metadata, Viewport } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers/providers";
import { ClientEffects } from "@/components/providers/client-effects";
import { AmbientBackground } from "@/components/effects/ambient-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { HolographicFrame } from "@/components/effects/holographic-frame";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Techfest IIT Bombay — Enter The Future",
  description:
    "Asia's Largest Science & Technology Festival at IIT Bombay. Robowars, international competitions, exhibitions, workshops, and 180,000+ innovators building tomorrow.",
  keywords: [
    "Techfest",
    "IIT Bombay",
    "technology festival",
    "innovation",
    "cyborg",
    "AI",
    "robotics",
  ],
  openGraph: {
    title: "Techfest IIT Bombay",
    description: "The future is no longer coming. It's here.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8eef6" },
    { media: "(prefers-color-scheme: dark)", color: "#010308" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} min-h-screen antialiased`}
      >
        <Providers>
          <ClientEffects>
            <AmbientBackground />
            <HolographicFrame />
            <ScrollProgress />
            <CustomCursor />
          </ClientEffects>
          <Navbar />
          <main className="relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
