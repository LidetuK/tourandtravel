"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TourFaq as Faq } from "../../lib/tours";

export default function TourFaq({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={faq.q} className={`relative shadow-sm rounded-md overflow-hidden ${i ? "mt-4" : ""}`}>
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-start"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{faq.q}</span>
            <ChevronDown className={`size-4 shrink-0 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i ? (
            <div className="px-5 pb-5">
              <p className="text-slate-400">{faq.a}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
