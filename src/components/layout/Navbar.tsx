"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { navLinks, siteName } from "../../lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between min-h-[64px] md:min-h-[72px]">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={siteName}>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#e11d48] text-white text-sm font-black tracking-tight">
            MS
          </span>
          <span className={`hidden sm:block font-bold text-[15px] ${solid ? "text-slate-900" : "text-white"}`}>
            Mesfin Shumet
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/contact"
            className={`hidden md:inline text-sm font-semibold ${solid ? "text-slate-800 hover:text-[#e11d48]" : "text-white hover:text-white/80"}`}
          >
            Contact us
          </Link>
          <Link
            href="/login"
            className={`inline-flex items-center justify-center size-10 rounded-full ${
              solid ? "bg-slate-100 text-slate-800 hover:bg-slate-200" : "bg-white/15 text-white hover:bg-white/25 backdrop-blur"
            }`}
            aria-label="Log in"
          >
            <User className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex items-center justify-center size-10 rounded-full ${
              solid ? "bg-slate-100 text-slate-800" : "bg-white/15 text-white backdrop-blur"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full bg-white border-t border-slate-100 shadow-lg">
          <ul className="max-w-7xl mx-auto px-4 py-4 grid sm:grid-cols-2 gap-1 list-none m-0">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block px-3 py-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 hover:text-[#e11d48]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
