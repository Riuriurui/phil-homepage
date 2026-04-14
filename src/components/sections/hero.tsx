"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HERO_TEXT =
  "Hi, I'm a Berlin-based Product Manager combining user-centric discovery and AI-leveraged workflows to build products that solve real problems and drive positive change.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Subtle background - uses CSS variable for accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-accent/40 dark:from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero text with EB Garamond */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl text-center"
      >
        <h1
          className={cn(
            "font-garamond font-normal",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "leading-[1.25] tracking-tight",
            "text-foreground"
          )}
        >
          {HERO_TEXT}
        </h1>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}