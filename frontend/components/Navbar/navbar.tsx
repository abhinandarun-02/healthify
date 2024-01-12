import Image from "next/image";
import React from "react";

import logo from "../../public/logo.png";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import MobileMenu from "./mobile-navbar";
import { navData } from "./nav-data";
import { cn } from "@/lib/utils";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-card border-border border-b border-2 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={70} height={70} alt="Healthify Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Healthify
            </span>
          </Link>

          <ul className="hidden lg:flex sm:items-center font-medium lg:space-x-8 lg:mt-0">
            {navData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={cn(buttonVariants({variant: "link"}), "text-muted-foreground hover:text-foreground")}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <Button variant="secondary" className="text-primary">
                Login
              </Button>
              <Button>Get started</Button>
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
