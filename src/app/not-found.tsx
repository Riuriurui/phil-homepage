import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#F4F1ED] dark:bg-[#1A1A18]">
      <h1 className="text-5xl font-light mb-4 tracking-tight text-[#2A2A2A] dark:text-[#F4F1ED]">404</h1>
      <p className="text-[#8E8E8E] dark:text-[#6E6E68] mb-10 font-light">
        Page not found
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 h-11 rounded-full border border-[#D4D0CA] dark:border-[#3A3835] text-[#2A2A2A] dark:text-[#F4F1ED] hover:bg-[#F3EFF8] dark:hover:bg-[#252523] hover:border-[#9B7FBF] dark:hover:border-[#B89AD4] transition-all text-sm font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
