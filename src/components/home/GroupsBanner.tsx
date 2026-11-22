"use client";

import Link from "next/link";

export default function GroupsBanner() {
  return (
    <section className="relative py-14 md:py-20 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/bg/3.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
      <div className="container relative grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#fb7185] font-semibold text-sm mb-2">Private & company groups</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Bring your crew.
            <span className="block text-white/80 font-bold text-2xl md:text-3xl mt-2">We&apos;ll handle Addis.</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-md">
            Families, friends, and corporate days out — custom routes, pickup, and a local guide who knows the capital.
          </p>
          <Link
            href="/groups"
            className="mt-8 inline-flex rounded-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold px-6 py-3"
          >
            Discover group tours
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["/images/listing/6.jpg", "/images/listing/8.jpg", "/images/listing/9.jpg", "/images/listing/2.jpg"].map((src) => (
            <div key={src} className="aspect-square rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
