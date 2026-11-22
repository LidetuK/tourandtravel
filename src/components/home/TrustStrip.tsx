"use client";

import Link from "next/link";
import { Star } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="relative py-8 md:py-10 bg-white border-b border-slate-100">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center sm:text-start">
        <Link href="/about" className="group">
          <p className="text-sm text-slate-500">Trusted by travelers in Addis</p>
          <p className="text-lg font-bold text-slate-900 group-hover:text-[#e11d48] duration-200">
            2,500+ guests explored with us
          </p>
        </Link>
        <div className="hidden sm:block h-10 w-px bg-slate-200" />
        <Link href="/contact" className="group inline-flex items-center gap-3">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <div>
            <p className="font-bold text-slate-900 group-hover:text-[#e11d48]">Excellent 4.9 out of 5</p>
            <p className="text-sm text-slate-500">Based on guest reviews</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
