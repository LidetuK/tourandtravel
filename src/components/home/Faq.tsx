"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "Are flights included?", a: "No — our packages are Addis Ababa city tours. Flights and international travel are arranged separately. We can help with airport pickup once you land." },
  { q: "Can I see who’s in the group before I book?", a: "Private tours are just your party. Shared small-group days vary by date — ask us when you enquire and we’ll share what’s available." },
  { q: "Will I be sharing a room?", a: "These are day tours, not overnight packages. Hotel stays are separate unless we’ve arranged a multi-day custom trip for you." },
  { q: "Who is the guide and what is their role?", a: "A local Mesfin Shumet guide leads your day — timing, storytelling, logistics, and making sure you hit the highlights comfortably." },
  { q: "What does the package include?", a: "Typically a licensed local guide, transport, and listed entrance fees. Meals and personal shopping are usually extra unless stated on the tour page." },
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
