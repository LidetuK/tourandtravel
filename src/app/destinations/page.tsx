import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import Destinations from "../../components/home/Destinations";

export const metadata: Metadata = {
  title: "Addis Ababa Destinations",
  description: "Explore top Addis Ababa destinations — Mount Entoto, Unity Park, National Museum, Merkato and more.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to go"
        title="Destinations in Addis Ababa"
        subtitle="The places travelers love most — guided by Mesfin Shumet Tour and Travel."
        image="/images/bg/3.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />
      <Destinations showHeader={false} />
      <section className="relative pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {[
              { title: "Holy Trinity Cathedral", desc: "Faith, architecture, and imperial history in one landmark visit.", href: "/tours/holy-trinity-cathedral-visit" },
              { title: "Entoto Park", desc: "Forest air and open space above the city — ideal for a nature half-day.", href: "/tours/entoto-park-nature-escape" },
              { title: "Full city day", desc: "Combine multiple destinations in one classic Addis itinerary.", href: "/tours/full-day-addis-ababa-city-tour" },
            ].map((x) => (
              <div key={x.title} className="p-6 rounded-md border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">{x.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{x.desc}</p>
                <Link href={x.href} className="text-red-500 text-sm font-medium">View tour →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
