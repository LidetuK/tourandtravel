"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const rows = [
  {
    title: "Crafted by local travel lovers",
    body: "Every Mesfin Shumet itinerary is built in Addis Ababa by people who live the city — so you get the real places, not a checklist of tourist traps.",
  },
  {
    title: "Authentic local experiences",
    body: "Coffee ceremonies, Merkato alleys, Entoto viewpoints, museum stories, and a gemstone store stop — experiences that feel like Addis, with clear inclusions and fair prices.",
  },
  {
    title: "Made to spark friendships",
    body: "Travel solo, as a couple, or with friends. Small groups and private options keep the day social, comfortable, and easy to join.",
  },
];

export default function WhyUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container max-w-4xl">
        <p className="text-[#e11d48] font-semibold text-sm mb-3 text-center">Why Mesfin Shumet</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 text-center mb-10 md:mb-14">
          Travel that feels local
        </h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {rows.map((row, i) => {
            const isOpen = open === i;
            return (
              <div key={row.title}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-start py-6 md:py-8 flex items-start justify-between gap-4 group"
                >
                  <span
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight duration-200 ${
                      isOpen ? "text-[#e11d48]" : "text-slate-900 group-hover:text-[#e11d48]"
                    }`}
                  >
                    {row.title}
                  </span>
                  <span className={`mt-2 text-2xl font-light ${isOpen ? "text-[#e11d48]" : "text-slate-400"}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-slate-500 text-lg max-w-2xl leading-relaxed">{row.body}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
