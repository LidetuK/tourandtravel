import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import Reviews from "../../components/home/Reviews";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mesfin Shumet Tour and Travel — local Addis Ababa guides for city tours and day packages.",
};

const team = [
  { img: "/images/team/mesfin-shumet.svg", name: "Mesfin Shumet", title: "Founder & Guide" },
  { img: "/images/team/sara-bekele.svg", name: "Sara Bekele", title: "Cultural Guide" },
  { img: "/images/team/daniel-haile.svg", name: "Daniel Haile", title: "City Guide" },
  { img: "/images/team/hanna-tadesse.svg", name: "Hanna Tadesse", title: "Guest Experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Mesfin Shumet"
        subtitle="Local expertise for authentic Addis Ababa experiences."
        image="/images/bg/cta.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
            <div className="md:col-span-5">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about.jpg" className="mx-auto rounded-3xl shadow-sm w-[90%]" alt="Addis Ababa with Mesfin Shumet" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="lg:ms-8">
                <h3 className="mb-6 md:text-3xl text-2xl font-semibold">
                  Discover Addis Ababa with<br />Mesfin Shumet Tour and Travel
                </h3>
                <p className="text-slate-400 max-w-xl mb-6">
                  Mesfin Shumet Tour and Travel is your local guide to Ethiopia&apos;s capital. From Mount Entoto viewpoints and Unity Park to the National Museum, Merkato, and Holy Trinity Cathedral — we craft authentic city tours, cultural experiences, and day packages across Addis Ababa.
                </p>
                <Link href="/tours" className="py-2 px-5 inline-block bg-red-500 text-white rounded-md">
                  View Tours →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { t: "Local", d: "Addis-based guides who know the city's rhythms, shortcuts, and stories." },
              { t: "Clear", d: "Straightforward pricing, flexible pacing, and honest recommendations." },
              { t: "Human", d: "Private and small-group days designed around how you actually travel." },
            ].map((x) => (
              <div key={x.t} className="p-6 rounded-md bg-slate-50">
                <p className="text-3xl font-semibold text-red-500 mb-2">{x.t}</p>
                <p className="text-slate-400 text-sm">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="mb-6 md:text-3xl text-2xl font-semibold">Our team</h3>
              <p className="text-slate-400 max-w-xl mx-auto">Friendly local guides who know Addis Ababa&apos;s history, culture, and hidden corners.</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 mt-8 gap-8">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name} className="mx-auto h-52 w-52 rounded-full object-cover" />
                  <h4 className="text-xl font-medium mt-3">{m.name}</h4>
                  <p className="text-slate-400">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="relative pb-24">
        <div className="container">
          <div className="p-8 md:p-10 rounded-md bg-slate-900 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Ready to explore Addis?</h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">Browse tours or message us for a custom day.</p>
            <Link href="/tours" className="py-2.5 px-6 inline-block bg-red-500 hover:bg-red-600 text-white rounded-md me-2">View tours</Link>
            <Link href="/contact" className="py-2.5 px-6 inline-block border border-white/20 text-white hover:border-red-500 hover:text-red-500 rounded-md">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
