"use client";

import * as React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-[#2A2A2A] dark:text-[#F4F1ED]">
            Let&apos;s work together
          </h2>
          <p className="text-[#555555] dark:text-[#A8A8A0] mb-12 leading-relaxed font-light text-base md:text-lg">
            Du suchst einen Product Manager mit Tech-Affinität und AI-Experience?
            Ich freue mich auf neue Herausforderungen und spannende Projekte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:phil@example.com"
              className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-full bg-[#2A2A2A] dark:bg-[#F4F1ED] text-[#F4F1ED] dark:text-[#1A1A1A] hover:bg-[#3A3A3A] dark:hover:bg-[#E8E4DE] transition-colors text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://linkedin.com/in/philipp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-full border border-[#D4D0CA] dark:border-[#3A3835] text-[#2A2A2A] dark:text-[#F4F1ED] hover:bg-[#F3EFF8] dark:hover:bg-[#252523] hover:border-[#9B7FBF] dark:hover:border-[#B89AD4] hover:text-[#2A2A2A] dark:hover:text-[#9B7FBF] transition-all text-sm font-medium"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
