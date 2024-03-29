import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Providers } from "@/components/providers";
import NavBar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Medic AI",
  description: "AI Powered Health Assistant",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "max-w-screen-2xl mx-auto relative flex flex-col min-h-screen items-center justify-between"
        )}
      >
        <Providers>
          <NavBar />
          <main className="w-full">{children}</main>
          <Footer />
          <Toaster theme="light" richColors position="bottom-center" closeButton/>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
