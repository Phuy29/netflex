"use client";

import * as React from "react";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // change background color on scroll
  React.useEffect(() => {
    const changeBgColor = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", changeBgColor);
    return () => window.removeEventListener("scroll", changeBgColor);
  }, [isScrolled]);

  return (
    <header
      aria-label="Header"
      className={cn(
        "sticky top-0 z-40 w-full",
        isScrolled ? "bg-neutral-900 shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </nav>
    </header>
  );
};

export default SiteHeader;
