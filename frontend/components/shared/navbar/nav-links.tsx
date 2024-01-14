"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navData } from "./nav-data";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname().substring(3);
  return (
    <>
      {navData.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-base text-muted-foreground hover:text-primary",
              pathname === item.link ? "text-primary" : ""
            )}
            aria-current="page"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
