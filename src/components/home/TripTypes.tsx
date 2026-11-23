"use client";

import Link from "next/link";

const types = [
  {
    title: "Short City Tour",
    desc: "4 hours · Main city highlights",
    img: "/images/listing/7.jpg",
    href: "/tours/short-city-tour",
  },
  {
    title: "Half-Day City Tour",
    desc: "6 hours · History, culture and landmarks",
    img: "/images/listing/3.jpg",
    href: "/tours/half-day-city-tour",
  },
  {
    title: "Full-Day City Tour",
    desc: "8 hours · Comprehensive city experience",
    img: "/images/listing/1.jpg",
    href: "/tours/full-day-city-tour",
  },
  {
    title: "Airport Layover Tour",
    desc: "6–8 hours · Pickup, sightseeing and return",
    img: "/images/listing/6.jpg",
    href: "/tours/airport-layover-tour",
  },
];

export default function TripTypes() {
  return (
    <section className="relative py-14 md:py-20 bg-slate-50">
      <div className="container mb-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 text-center md:text-start">
          Package duration experience
        </h2>
        <p className="text-slate-500 mt-2 max-w-2xl text-center md:text-start">
          Choose the Addis Ababa city tour that fits your time — from a short highlight run to a full day or airport layover.
        </p>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] min-w-max">
          {types.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="relative w-[220px] sm:w-[260px] h-[320px] shrink-0 rounded-2xl overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-bold text-lg leading-snug">{t.title}</h3>
                <p className="text-sm text-white/75 mt-1">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
