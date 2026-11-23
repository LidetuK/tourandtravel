"use client";

import Link from "next/link";
import { mainAttractions } from "../../lib/tours";

export default function Destinations({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="relative py-14 md:py-20 bg-white">
      <div className="container">
        {showHeader ? (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-[#e11d48] font-semibold text-sm mb-1">Main attractions</p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">What you&apos;ll see in Addis</h2>
            </div>
            <Link href="/destinations" className="text-sm font-semibold text-slate-900 hover:text-[#e11d48]">
              See all attractions →
            </Link>
          </div>
        ) : null}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mainAttractions.map((d) => (
            <Link key={d.title} href={d.href} className="group relative min-h-[18rem] rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="text-lg md:text-xl font-bold leading-snug">{d.title}</h3>
                <p className="mt-2 text-sm text-white/80">{d.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
