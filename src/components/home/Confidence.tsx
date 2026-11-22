"use client";

import { Calendar, CheckCircle, CreditCard, MessageCircle } from "lucide-react";

const items = [
  { icon: CheckCircle, title: "Clear inclusions", desc: "Guide, transport, and entrance fees listed up front on every package." },
  { icon: Calendar, title: "Flexible dates", desc: "Need to move your day? Message us and we’ll help reschedule when we can." },
  { icon: MessageCircle, title: "WhatsApp support", desc: "Fast replies for pickup points, itinerary questions, and last-minute changes." },
  { icon: CreditCard, title: "Transparent pricing", desc: "No surprise fees — know what’s included before you book." },
];

export default function Confidence() {
  return (
    <section className="relative py-14 md:py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Book with confidence</h2>
          <p className="text-slate-500 mt-3">Simple booking, local care, and clear expectations for every Addis Ababa tour.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
              <div className="size-12 rounded-xl bg-[#e11d48]/10 text-[#e11d48] flex items-center justify-center mb-4">
                <item.icon className="size-5" />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
