"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "What packages do you offer?", a: "Four duration packages: Short City Tour (4 hours), Half-Day City Tour (6 hours), Full-Day City Tour (8 hours), and Airport Layover Tour (6–8 hours with airport pickup and return)." },
  { q: "Which attractions are covered?", a: "Main stops include the National Museum of Ethiopia, Mount Entoto, Holy Trinity Cathedral, Unity Park, Merkato, Meskel Square, a traditional coffee ceremony, and a gemstone store — matched to your package length." },
  { q: "Are flights included?", a: "No — our packages are Addis Ababa city tours. Flights are separate. For layovers, we handle airport pickup, city sightseeing, and return." },
  { q: "Can I see who’s in the group before I book?", a: "Private tours are just your party. Shared small-group days vary by date — ask us when you enquire and we’ll share what’s available." },
  { q: "What does the package include?", a: "Typically a licensed local guide, transport, and bottled water. Entrance fees, meals, and personal shopping (including gemstones) are usually extra unless stated on the tour page." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-14 md:py-20 bg-white">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Got questions?</h2>
          <p className="text-slate-500 mt-3">Straight answers before you book an Addis tour.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-slate-900 hover:bg-[#e11d48] text-white font-semibold px-5 py-2.5 text-sm">
            Talk to us
          </Link>
          <Link href="/about" className="mt-3 block text-sm font-semibold text-slate-600 hover:text-[#e11d48]">
            Read all FAQs →
          </Link>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-slate-200">
              <button
                type="button"
                className="flex justify-between items-center py-5 w-full font-semibold text-start text-slate-900 gap-4"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`size-5 shrink-0 duration-300 ${open === i ? "rotate-180 text-[#e11d48]" : "text-slate-400"}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === i ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-slate-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
