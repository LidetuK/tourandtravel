"use client";

import Link from "next/link";
import { Reveal, StaggerGrid } from "../motion/Reveal";

const items = [
  {
    title: "Nature & Entoto",
    desc: "Viewpoints and highland air above the city",
    img: "/images/listing/1.jpg",
    href: "/tours/mount-entoto-viewpoint-tour",
    meta: "From $45 · Half day",
  },
  {
    title: "Culture & museums",
    desc: "Lucy, imperial history, and local stories",
    img: "/images/listing/3.jpg",
    href: "/tours/national-museum-lucy-tour",
    meta: "From $40 · Half day",
  },
  {
    title: "Markets & coffee",
    desc: "Merkato energy and Ethiopian hospitality",
    img: "/images/listing/4.jpg",
    href: "/tours/merkato-market-experience",
    meta: "From $35 · Half day",
  },
  {
    title: "Full city day",
    desc: "The classic Addis highlights in one itinerary",
    img: "/images/listing/7.jpg",
    href: "/tours/full-day-addis-ababa-city-tour",
    meta: "From $89 · Full day",
  },
];

export default function Explore() {
  return (
    <section className="relative md:py-20 py-14 bg-slate-50">
      <div className="container">
        <Reveal className="text-center md:text-start pb-8 max-w-2xl md:max-w-none">
          <p className="text-red-500 font-medium mb-2">Explore by style</p>
          <h2 className="md:text-3xl text-2xl font-semibold">Where do you want to start?</h2>
          <p className="text-slate-400 mt-2 max-w-xl">Four clear paths — open a tour or browse the full list.</p>
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
