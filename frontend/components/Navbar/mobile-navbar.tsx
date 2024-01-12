"use client";

import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import clsx from "clsx";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";
import { navData } from "./nav-data";
import Link from "next/link";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  }, []);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    }
    return function cleanup() {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, handleEscape, handleOutsideClick]);

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="relative inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <Menu size={24} />
      </Button>

      <div
        className={clsx(!isMenuOpen && "hidden", "fixed inset-0 p-2 bg-card")}
        ref={menuRef}
      >
        <div
          className={clsx(
            "dark:bg-gray bg- space-y-10 rounded-lg px-2 py-3 shadow-lg ring-1 ring-black ring-opacity-5 transition flex flex-col items-center"
          )}
        >
          <div className="flex w-full items-center justify-between pt-0.5 sm:px-2">
            <NextLink href="/" className="flex items-center">
              <Image src={logo} alt="GitWonk Logo" className="h-9 w-auto" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Healthify
              </span>
            </NextLink>
            <Button
              size="icon"
              variant="secondary"
              className={clsx("visible lg:hidden")}
              aria-label="Toggle menu"
              type="button"
              onClick={closeMenu}
            >
              <X />
            </Button>
          </div>

          <ul className="grid w-full grid-cols-2 gap-y-4 gap-x-8 px-4">
            {navData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
