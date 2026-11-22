"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/bg/3.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>
      <div className="container relative text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight">
          Find your Addis trip
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
          Tell us your dates — we&apos;ll match the right tour and pickup.
        </p>
        <Link
          href="/tours"
          className="mt-8 inline-flex rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-base px-8 py-3.5"
        >
          Find your trip
        </Link>
      </div>
    </section>
  );
}
