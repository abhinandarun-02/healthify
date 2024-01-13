import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/navbar/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Healthify",
  description: "AI Powered Health Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn( inter.className, "max-w-screen-2xl mx-auto")}>
        <Providers>
          <NavBar />
          {children}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
