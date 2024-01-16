import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "@/public/logo.png";


import MobileMenu from "@/components/shared/navbar/mobile-navbar";
import SigninButton from "@/components/auth/signInButton";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <header className="fixed left-0 right-0 z-10">
      <nav className="bg-card border-border border-b px-4 lg:px-6 py-3.5">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} width={35} height={35} alt="Medic AI Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Medic AI
            </span>
          </Link>

          <ul className="hidden font-medium lg:flex lg:items-center lg:space-x-2 lg:mt-0">
            <NavLinks/>
          </ul>
          <div className="flex gap-8">
            <div className="flex items-center">
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
