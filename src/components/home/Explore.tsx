"use client";

import Link from "next/link";
import { Reveal, StaggerGrid } from "../motion/Reveal";

const items = [
  {
    title: "Short City Tour",
    desc: "Main city highlights",
    img: "/images/listing/7.jpg",
    href: "/tours/short-city-tour",
    meta: "From $49 · 4 hours",
  },
  {
    title: "Half-Day City Tour",
    desc: "History, culture and landmarks",
    img: "/images/listing/3.jpg",
    href: "/tours/half-day-city-tour",
    meta: "From $69 · 6 hours",
  },
  {
    title: "Full-Day City Tour",
    desc: "Comprehensive city experience",
    img: "/images/listing/1.jpg",
    href: "/tours/full-day-city-tour",
    meta: "From $89 · 8 hours",
  },
  {
    title: "Airport Layover Tour",
    desc: "Airport pickup, sightseeing and return",
    img: "/images/listing/6.jpg",
    href: "/tours/airport-layover-tour",
    meta: "From $99 · 6–8 hours",
  },
];

export default function Explore() {
  return (
    <section className="relative md:py-20 py-14 bg-slate-50">
      <div className="container">
        <Reveal className="text-center md:text-start pb-8 max-w-2xl md:max-w-none">
          <p className="text-red-500 font-medium mb-2">Packages by duration</p>
          <h2 className="md:text-3xl text-2xl font-semibold">Which experience fits your day?</h2>
          <p className="text-slate-400 mt-2 max-w-xl">Four clear packages — open a tour or browse the full list.</p>
        </Reveal>
        <StaggerGrid className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-xl min-h-[17rem] block shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                <p className="text-red-400 text-sm font-medium mt-3">{item.meta}</p>
              </div>
            </Link>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
