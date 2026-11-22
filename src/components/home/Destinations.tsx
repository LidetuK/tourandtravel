"use client";

import Link from "next/link";

const destinations = [
  {
    title: "Mount Entoto",
    desc: "Sunrise viewpoints, highland air, and the story of Addis from above.",
    price: 45,
    img: "/images/listing/1.jpg",
    href: "/tours/mount-entoto-viewpoint-tour",
  },
  {
    title: "Unity Park",
    desc: "Palace grounds, museums, and gardens in the heart of the capital.",
    price: 55,
    img: "/images/listing/2.jpg",
    href: "/tours/unity-park-imperial-palace",
  },
  {
    title: "National Museum",
    desc: "Meet Lucy and walk Ethiopia’s archaeological timeline.",
    price: 40,
    img: "/images/listing/3.jpg",
    href: "/tours/national-museum-lucy-tour",
  },
  {
    title: "Merkato",
    desc: "Africa’s largest open-air market — spice, craft, and city energy.",
    price: 35,
    img: "/images/listing/4.jpg",
    href: "/tours/merkato-market-experience",
  },
];

export default function Destinations({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="relative py-14 md:py-20 bg-white">
      <div className="container">
        {showHeader ? (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-[#e11d48] font-semibold text-sm mb-1">Most loved</p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Places guests ask for first</h2>
            </div>
            <Link href="/destinations" className="text-sm font-semibold text-slate-900 hover:text-[#e11d48]">
              See trips here →
            </Link>
          </div>
        ) : null}
        <div className="grid md:grid-cols-2 gap-5">
          {destinations.map((d) => (
            <Link key={d.title} href={d.href} className="group relative min-h-[22rem] rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold">{d.title}</h3>
                <p className="mt-2 text-white/80 max-w-md">{d.desc}</p>
                <p className="mt-4 inline-flex rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-sm font-semibold">
                  Starting from $ {d.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
