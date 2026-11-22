"use client";

import { MessageCircle, Phone } from "lucide-react";
import { sitePhoneHref } from "../../lib/site";

export default function FloatingContact() {
  const wa = "https://wa.me/251911000000";
  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-2 md:bottom-6">
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="size-12 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:bg-emerald-600"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={sitePhoneHref}
        className="size-12 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 flex items-center justify-center hover:bg-red-600 md:hidden"
        aria-label="Call"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
