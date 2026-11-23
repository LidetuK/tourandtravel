import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import TripTypes from "../../components/home/TripTypes";

export const metadata: Metadata = {
  title: "Trip Types",
  description: "Choose your Addis Ababa package — Short, Half-Day, Full-Day, or Airport Layover city tour.",
};

export default function TripsPage() {
  return (
    <>
      <PageHero
        eyebrow="Find your style"
        title="Trip types"
        subtitle="Pick the duration that fits your day in Ethiopia's capital — then open a matching package."
        image="/images/listing/7.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Trips" }]}
      />
      <TripTypes />
      <section className="relative pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 items-center p-8 md:p-10 rounded-md bg-slate-50">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Not sure which trip fits?</h2>
              <p className="text-slate-400">Message us with your dates and interests — we&apos;ll suggest the best short, half-day, full-day, or layover plan.</p>
            </div>
            <div className="md:text-end space-x-3">
              <Link href="/tours" className="py-2.5 px-5 inline-block bg-red-500 hover:bg-red-600 text-white rounded-md">Browse all tours</Link>
              <Link href="/contact" className="py-2.5 px-5 inline-block border border-slate-300 rounded-md hover:border-red-500 hover:text-red-500">Ask us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
