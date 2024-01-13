import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "@/public/logo.png";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/navbar/mobile-navbar";
import { navData } from "@/components/navbar/nav-data";
import SigninButton from "@/components/auth/signInButton";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-card border-border border-b px-4 lg:px-6 py-2.5">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={35} height={35} alt="Healthify Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Healthify
            </span>
          </Link>

          <ul className="hidden font-medium lg:flex lg:items-center lg:space-x-2 lg:mt-0">
            {navData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-base text-muted-foreground hover:text-primary"
                  )}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-8">
            <div className="flex gap-8 items-center">
              <Button>Get started</Button>
              <SigninButton />
            </div>
            <div className="justify-end lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
