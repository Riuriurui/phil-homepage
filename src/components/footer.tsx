import * as React from "react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-[#1A1A1A] dark:bg-[#0F0F0E]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6E6E68]">
        <p className="font-light">© 2026 Philipp — Built with Next.js</p>
        <p className="font-light tracking-wide">Made in Berlin 🇩🇪</p>
      </div>
    </footer>
  );
}
