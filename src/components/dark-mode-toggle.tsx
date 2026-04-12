"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative h-9 w-9 rounded-full border flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:scale-110 active:scale-95",
        // Light mode
        "border-[#D4D0CA] bg-[#F4F1ED]/50 hover:bg-[#E8E4DE]",
        // Dark mode overrides
        "dark:border-[#3A3835] dark:bg-[#252523]/80 dark:hover:bg-[#2E2C29]"
      )}
      aria-label="Toggle dark mode"
    >
      <Sun
        className={cn(
          "h-4 w-4 transition-all duration-300",
          theme === "dark"
            ? "opacity-0 rotate-90 scale-0 text-[#8E8E8E]"
            : "opacity-100 rotate-0 scale-100 text-[#2A2A2A]"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          theme === "light"
            ? "opacity-0 -rotate-90 scale-0 text-[#A8A8A0]"
            : "opacity-100 rotate-0 scale-100 text-[#F4F1ED]"
        )}
      />
    </button>
  );
}
