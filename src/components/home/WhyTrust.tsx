"use client";

import { Compass, Heart, MapPin, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerGrid } from "../motion/Reveal";

const reasons = [
  { icon: MapPin, title: "Local Addis guides", desc: "We know the routes, timing, and stories — so your day feels easy." },
  { icon: Compass, title: "Clear packages", desc: "Duration, price, and inclusions shown before you enquire." },
  { icon: Heart, title: "Your pace", desc: "Private or small-group options for families, friends, and solo travelers." },
  { icon: MessageCircle, title: "Fast replies", desc: "WhatsApp and email support for pickup points and date changes." },
];

export default function WhyTrust() {
  return (
    <section className="relative md:py-20 py-14 bg-white">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-red-500 font-medium mb-2">Why book with us</p>
            <h2 className="md:text-3xl text-2xl font-semibold mb-4">Mesfin Shumet Tour and Travel</h2>
            <p className="text-slate-400 mb-6">
              A local Addis Ababa operator focused on city tours that are honest, well-paced, and easy to book.
            </p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <p className="text-2xl font-bold text-slate-900">2,500+</p>
                <p className="text-slate-400 text-sm">Happy guests</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 inline-flex items-center gap-1">
                  4.9 <Star className="size-5 fill-amber-400 text-amber-400" />
                </p>
                <p className="text-slate-400 text-sm">Guest rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">8+</p>
                <p className="text-slate-400 text-sm">Curated packages</p>
              </div>
            </div>
            <Link href="/about" className="text-red-500 font-medium hover:underline">
              Learn about our team →
            </Link>
          </div>
          <div className="lg:col-span-7">
            <StaggerGrid className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="p-5 rounded-xl bg-slate-50 border border-gray-100 h-full">
                  <div className="size-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-3">
                    <r.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </StaggerGrid>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
