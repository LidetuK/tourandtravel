import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import { dealSlugs, getTourBySlug } from "../../lib/tours";

export const metadata: Metadata = {
  title: "Deals & Offers",
  description: "Current Addis Ababa tour deals from Mesfin Shumet Tour and Travel.",
};

export default function DealsPage() {
  const deals = dealSlugs.map((s) => getTourBySlug(s)!).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow="Limited-time savings"
        title="Deals & offers"
        subtitle="Save on selected Addis Ababa experiences with Mesfin Shumet Tour and Travel."
        image="/images/about.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Deals" }]}
      />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {deals.map((item) => (
              <div key={item.slug} className="group relative overflow-hidden rounded-md shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} className="w-full h-80 object-cover scale-110 group-hover:scale-100 duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-90" />
                {item.discount ? (
                  <div className="absolute top-4 start-4">
                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md">{item.discount}</span>
                  </div>
                ) : null}
                <div className="absolute bottom-0 start-0 end-0 p-6">
                  <p className="text-white/70 text-sm mb-1">{item.location}</p>
                  <Link href={`/tours/${item.slug}`} className="text-xl font-semibold text-white hover:text-red-500">{item.title}</Link>
                  <p className="text-white/70 text-sm mt-2">{item.summary}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-red-500 font-medium">{item.priceLabel}</p>
                    <Link href={`/tours/${item.slug}`} className="text-white text-sm hover:text-red-500">View deal →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tours" className="py-2.5 px-6 inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md">See all tours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
