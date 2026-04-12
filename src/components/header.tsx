"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#F4F1ED]/90 dark:bg-[#1A1A18]/90 backdrop-blur-2xl border-b border-[#E8E4DE] dark:border-[#2E2C29]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-medium text-base tracking-tight text-[#2A2A2A] dark:text-[#F4F1ED]">
          Philipp<span className="text-[#8E8E8E] dark:text-[#6E6E68]">.pm</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#8E8E8E] dark:text-[#6E6E68] hover:text-[#2A2A2A] dark:hover:text-[#F4F1ED] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2A2A2A] dark:bg-[#F4F1ED] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <DarkModeToggle />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-[#D4D0CA] dark:border-[#3A3835] bg-[#F4F1ED]/50 dark:bg-[#252523]/80 backdrop-blur-sm hover:bg-[#E8E4DE] dark:hover:bg-[#2E2C29] transition-all cursor-pointer">
              <Menu className="h-4 w-4 text-[#2A2A2A] dark:text-[#F4F1ED]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#F4F1ED] dark:bg-[#1A1A18] border-l border-[#E8E4DE] dark:border-[#2E2C29] p-8">
              <nav className="flex flex-col gap-8 mt-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-light text-[#2A2A2A] dark:text-[#F4F1ED] hover:text-[#8E8E8E] dark:hover:text-[#6E6E68] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
