"use client";

import Link from "next/link";

const types = [
  { title: "Perfect for first-timers", desc: "Half-day highlights of Addis", img: "/images/listing/7.jpg", href: "/tours" },
  { title: "Iconic Addis", desc: "Entoto, Unity Park & museums", img: "/images/listing/1.jpg", href: "/tours/mount-entoto-viewpoint-tour" },
  { title: "Culture & history", desc: "Lucy, churches & royal stories", img: "/images/listing/3.jpg", href: "/tours/national-museum-lucy-tour" },
  { title: "Markets & food", desc: "Merkato and coffee culture", img: "/images/listing/4.jpg", href: "/tours/merkato-market-experience" },
  { title: "Private & groups", desc: "Custom days for your crew", img: "/images/listing/2.jpg", href: "/groups" },
];

export default function TripTypes() {
  return (
    <section className="relative py-14 md:py-20 bg-slate-50">
      <div className="container mb-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 text-center md:text-start">
          Find the Addis trip that&apos;s right for you
        </h2>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] min-w-max">
          {types.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="relative w-[220px] sm:w-[240px] h-[320px] shrink-0 rounded-2xl overflow-hidden group"
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
