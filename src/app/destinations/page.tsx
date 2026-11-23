import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import Destinations from "../../components/home/Destinations";

export const metadata: Metadata = {
  title: "Addis Ababa Destinations",
  description:
    "Explore main Addis Ababa attractions — National Museum, Mount Entoto, Holy Trinity Cathedral, Unity Park, Merkato, Meskel Square, coffee ceremony and gemstone store.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Main attractions"
        title="Destinations in Addis Ababa"
        subtitle="The places travelers love most — guided by Mesfin Shumet Tour and Travel."
        image="/images/bg/3.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />
      <Destinations showHeader={false} />
      <section className="relative pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Short City Tour",
                desc: "4 hours — main city highlights including Meskel Square, coffee ceremony and gemstone store.",
                href: "/tours/short-city-tour",
              },
              {
                title: "Half-Day City Tour",
                desc: "6 hours — history, culture and landmarks across museum, cathedral and markets.",
                href: "/tours/half-day-city-tour",
              },
              {
                title: "Full-Day City Tour",
                desc: "8 hours — comprehensive city experience from Entoto to Unity Park and Merkato.",
                href: "/tours/full-day-city-tour",
              },
              {
                title: "Airport Layover Tour",
                desc: "6–8 hours — airport pickup, city sightseeing and return timed to your flight.",
                href: "/tours/airport-layover-tour",
              },
            ].map((x) => (
              <div key={x.title} className="p-6 rounded-md border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">{x.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{x.desc}</p>
                <Link href={x.href} className="text-red-500 text-sm font-medium">
                  View package →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
