import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import TourCard from "../../components/tours/TourCard";
import { getAllTours } from "../../lib/tours";

export const metadata: Metadata = {
  title: "Addis Ababa Tours",
  description: "Browse guided Addis Ababa tour packages with Mesfin Shumet Tour and Travel.",
};

export default function ToursPage() {
  const tours = getAllTours();
  return (
    <>
      <PageHero
        eyebrow="Handpicked experiences"
        title="Addis Ababa Tours"
        subtitle="Day tours and city experiences led by Mesfin Shumet Tour and Travel — clear pricing, local guides, flexible pacing."
        image="/images/bg/2.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Tours" }]}
      />
      <section className="relative py-10 border-b border-gray-100 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-center md:text-start">
            <div><p className="text-2xl font-semibold text-red-500">4</p><p className="text-slate-400 text-sm">Duration-based packages</p></div>
            <div><p className="text-2xl font-semibold text-red-500">Local guides</p><p className="text-slate-400 text-sm">English & Amharic support</p></div>
            <div><p className="text-2xl font-semibold text-red-500">Flexible</p><p className="text-slate-400 text-sm">Private or small-group options</p></div>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center md:text-start">
            <h2 className="md:text-3xl text-2xl font-semibold">Choose your Addis day</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">Short, half-day, full-day, and airport layover packages covering Addis Ababa&apos;s main attractions.</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {tours.map((t) => <TourCard key={t.slug} tour={t} />)}
          </div>
          <div className="mt-14 p-8 md:p-10 rounded-md bg-slate-900 text-center">
            <h3 className="text-2xl font-semibold text-white">Need something custom?</h3>
            <p className="text-slate-400 max-w-xl mx-auto mt-3 mb-6">Tell us your dates, group size, and interests — we&apos;ll build the right itinerary.</p>
            <Link href="/contact" className="py-2.5 px-6 inline-block bg-red-500 hover:bg-red-600 text-white rounded-md">Ask about a custom tour</Link>
          </div>
        </div>
      </section>
    </>
  );
}
