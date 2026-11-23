import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Map, Users } from "lucide-react";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Groups & Private Tours",
  description: "Private and group Addis Ababa tours for families, friends, and teams.",
};

export default function GroupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel together"
        title="Groups & private tours"
        subtitle="Your people, your pace — planned the way we plan every Addis experience."
        image="/images/listing/2.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Groups" }]}
      />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {[
              { icon: Users, title: "Private city tours", desc: "Just your family or friends — flexible timing, hotel pickup, and a dedicated local guide." },
              { icon: Briefcase, title: "Team & corporate", desc: "Offsites and hosting guests in Addis — culture stops, viewpoints, and one clear proposal." },
              { icon: Map, title: "Custom itineraries", desc: "Tell us your interests and group size — we'll craft the right Addis Ababa day." },
            ].map((c) => (
              <div key={c.title} className="p-7 rounded-md shadow-sm bg-white border border-transparent hover:border-red-500/20 duration-500">
                <div className="size-12 flex items-center justify-center bg-red-500 text-white rounded-md mb-5">
                  <c.icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { href: "/tours/full-day-city-tour", img: "/images/listing/1.jpg", tag: "Popular for groups", title: "Full-Day City Tour" },
              { href: "/tours/half-day-city-tour", img: "/images/listing/3.jpg", tag: "Great for families", title: "Half-Day City Tour" },
            ].map((x) => (
              <Link key={x.href} href={x.href} className="group relative overflow-hidden rounded-md min-h-[220px] block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={x.img} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-500" />
                <div className="absolute inset-0 bg-slate-900/70" />
                <div className="relative p-6 flex flex-col justify-end h-full min-h-[220px]">
                  <p className="text-red-500 text-sm font-medium">{x.tag}</p>
                  <h3 className="text-xl font-semibold text-white mt-1">{x.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 p-8 md:p-10 rounded-md bg-slate-900 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Ready to plan a group tour?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">Share your dates and headcount — Mesfin Shumet Tour and Travel will reply with options.</p>
            <Link href="/contact" className="py-2.5 px-6 inline-block bg-red-500 hover:bg-red-600 text-white rounded-md">Get a proposal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
