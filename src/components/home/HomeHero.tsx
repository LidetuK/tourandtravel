"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, MapPin, Search, type LucideIcon } from "lucide-react";

const whereOptions = [
  { value: "addis", label: "Addis Ababa" },
  { value: "entoto", label: "Mount Entoto" },
  { value: "unity", label: "Unity Park" },
  { value: "museum", label: "National Museum" },
  { value: "merkato", label: "Merkato" },
  { value: "trinity", label: "Holy Trinity" },
];

function FieldSelect({
  label,
  icon: Icon,
  options,
  value,
  onChange,
}: {
  label: string;
  icon: LucideIcon;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value)?.label ?? options[0].label;

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition"
      >
        <span className="block text-[11px] uppercase tracking-wider text-white/60 font-semibold">{label}</span>
        <span className="mt-1 flex items-center gap-2 text-white font-semibold">
          <Icon className="size-4 text-white/80" />
          {selected}
          <ChevronDown className="size-4 ms-auto opacity-70" />
        </span>
      </button>
      {open ? (
        <div className="absolute start-0 end-0 top-full mt-2 z-30 rounded-xl bg-white shadow-xl overflow-hidden border border-slate-100">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              className={`block w-full text-left px-4 py-3 text-sm hover:bg-rose-50 ${
                o.value === value ? "text-[#e11d48] font-semibold" : "text-slate-800"
              }`}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function HomeHero() {
  const [where, setWhere] = useState("addis");

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster="/images/listing/1.jpg">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/addis-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-10 md:pb-14 pt-28">
        <p className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white mb-4">
          Addis Ababa city tours
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-4xl">
          Discover Addis Ababa
          <span className="block text-white/90 font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
            with people who know the city
          </span>
        </h1>

        <form action="/tours" className="mt-8 md:mt-10 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-stretch gap-2 rounded-3xl bg-black/45 backdrop-blur-md border border-white/20 p-2 shadow-2xl">
            <FieldSelect label="Where?" icon={MapPin} options={whereOptions} value={where} onChange={setWhere} />
            <div className="hidden sm:block w-px bg-white/20 my-3" />
            <div className="flex-1 px-4 py-3 rounded-2xl">
              <span className="block text-[11px] uppercase tracking-wider text-white/60 font-semibold">When?</span>
              <span className="mt-1 flex items-center gap-2 text-white font-semibold">
                <Calendar className="size-4 text-white/80" />
                <input
                  name="date"
                  placeholder="Whenever"
                  className="bg-transparent outline-none placeholder:text-white w-full font-semibold"
                />
              </span>
            </div>
            <button
              type="submit"
              className="sm:ms-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e11d48] hover:bg-[#be123c] text-white font-bold px-6 py-4"
            >
              <Search className="size-4" /> Search
            </button>
          </div>
          <p className="mt-3 text-white/70 text-sm">
            Or{" "}
            <Link href="/tours" className="underline underline-offset-2 hover:text-white">
              browse all Addis tours
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
