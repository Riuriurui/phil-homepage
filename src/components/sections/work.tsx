"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { workItems } from "@/content/work";

export function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-20"
        >
          <Briefcase className="h-4 w-4 text-[#E8A690] dark:text-[#C48060]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#8E8E8E] dark:text-[#6E6E68] font-light">
            Work Experience
          </span>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/work/${item.slug}`} className="block group">
                <Card className="group h-full overflow-hidden border border-[#E8E4DE] dark:border-[#2E2C29] bg-white dark:bg-[#252523] shadow-sm hover:shadow-xl hover:border-[#D4D0CA] dark:hover:border-[#3A3835] transition-all duration-500 cursor-pointer">
                  <CardContent className="p-8 flex flex-col h-full relative">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E8A690] to-[#FDECE8] dark:from-[#C48060] dark:to-[#3A2A25] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex-1">
                      {/* Period */}
                      <p className="text-xs text-[#8E8E8E] dark:text-[#6E6E68] mb-4 font-light tracking-wide">
                        {item.period}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-medium mb-1 text-[#2A2A2A] dark:text-[#F4F1ED] group-hover:text-[#E8A690] dark:group-hover:text-[#C48060] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#8E8E8E] dark:text-[#6E6E68] mb-6 font-light">
                        {item.company}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-[#555555] dark:text-[#A8A8A0] leading-relaxed font-light">
                        {item.summary}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-8">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-light tracking-wide bg-[#FDECE8] dark:bg-[#3A2A25] text-[#2A2A2A] dark:text-[#E8A690] border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 mt-8 text-sm text-[#8E8E8E] dark:text-[#6E6E68] group-hover:text-[#2A2A2A] dark:group-hover:text-[#F4F1ED] transition-colors duration-300">
                      <span className="font-light">Mehr lesen</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
