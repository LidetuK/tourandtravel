"use client";

import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", meta: "UK · Entoto & Unity Park", desc: "Felt like exploring with a friend who knows every corner of Addis. Smooth pickup, great pace, unforgettable views." },
  { name: "Daniel O.", meta: "Business visitor", desc: "Professional, on time, and deep local knowledge of Merkato and the National Museum. Perfect for a short layover." },
  { name: "Anna B.", meta: "Family traveler", desc: "Our full-day package was perfectly paced. Holy Trinity and Entoto were highlights for the whole family." },
];

export default function Reviews() {
  return (
    <section className="relative py-14 md:py-20 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Loved by guests</h2>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-slate-900">4.9 / 5</span>
              <span className="text-slate-500">guest rating</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm h-full">
              <div className="flex text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 leading-relaxed">&ldquo;{r.desc}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <p className="font-bold text-slate-900">{r.name}</p>
                <p className="text-sm text-slate-500">{r.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
