"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  period?: string;
  tags: string[];
  content: string;
  link?: string;
  onBack: string;
}

export function DetailLayout({
  title,
  subtitle,
  period,
  tags,
  content,
  link,
  onBack,
}: DetailLayoutProps) {
  const paragraphs = content.split("\n\n");

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 bg-[#F4F1ED] dark:bg-[#1A1A18]">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={onBack}
            className="inline-flex items-center gap-2 text-sm text-[#8E8E8E] dark:text-[#6E6E68] hover:text-[#2A2A2A] dark:hover:text-[#F4F1ED] transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-light">Back</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-3 text-[#2A2A2A] dark:text-[#F4F1ED]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-[#8E8E8E] dark:text-[#6E6E68] mb-4 font-light">
              {subtitle}
            </p>
          )}
          {period && (
            <div className="flex items-center gap-2 text-[#8E8E8E] dark:text-[#6E6E68] mb-8">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-light tracking-wide">{period}</span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="gap-1.5 text-xs font-light tracking-wide px-3 py-1 bg-[#FDECE8] dark:bg-[#3A2A25] text-[#2A2A2A] dark:text-[#E8A690] border-0"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-[#E8A690] via-[#E8E4DE] to-transparent dark:from-[#C48060] dark:via-[#2E2C29] to-transparent mb-12"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {paragraphs.map((para, i) => {
            if (para.startsWith("**") && para.includes("\n")) {
              const lines = para.split("\n");
              const heading = lines[0].replace(/\*\*/g, "");
              const rest = lines.slice(1).join("\n").trim();
              return (
                <div key={i} className="mb-10">
                  <h3 className="text-lg font-medium mb-4 text-[#2A2A2A] dark:text-[#F4F1ED]">
                    {heading}
                  </h3>
                  {rest && (
                    <div className="space-y-3">
                      {rest.split("\n").filter(Boolean).map((line, j) => {
                        if (line.trim().startsWith("- ")) {
                          return (
                            <div key={j} className="flex items-start gap-4">
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#E8A690] dark:bg-[#C48060] flex-shrink-0" />
                              <span className="text-[#555555] dark:text-[#A8A8A0] font-light leading-relaxed">
                                {line.trim().replace(/^- /, "")}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <p key={j} className="text-[#555555] dark:text-[#A8A8A0] font-light leading-relaxed">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.trim().startsWith("- "));
              return (
                <ul key={i} className="space-y-3 my-6">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#E8A690] dark:bg-[#C48060] flex-shrink-0" />
                      <span className="text-[#555555] dark:text-[#A8A8A0] font-light leading-relaxed">
                        {item.trim().replace(/^- /, "")}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[#555555] dark:text-[#A8A8A0] font-light leading-relaxed my-5">
                {para}
              </p>
            );
          })}
        </motion.div>

        {/* External link */}
        {link && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-[#E8E4DE] dark:border-[#2E2C29]"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-full border border-[#D4D0CA] dark:border-[#3A3835] text-[#2A2A2A] dark:text-[#F4F1ED] hover:bg-[#FDECE8] dark:hover:bg-[#252523] hover:border-[#E8A690] dark:hover:border-[#C48060] hover:text-[#2A2A2A] dark:hover:text-[#E8A690] transition-all text-sm font-medium"
            >
              Visit Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
