import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { getAllTours, getRelatedTours, getTourBySlug } from "../../../lib/tours";
import { sitePhone, sitePhoneHref } from "../../../lib/site";
import TourFaq from "../../../components/tours/TourFaq";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTours().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour not found" };
  return { title: tour.title, description: tour.summary };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  const related = getRelatedTours(tour.slug);
  const gallery = tour.gallery.slice(0, 4);
  const layouts = [
    "md:col-span-8 col-span-7",
    "md:col-span-4 col-span-5",
    "md:col-span-4 col-span-5",
    "md:col-span-8 col-span-7",
  ];

  return (
    <>
      <section
        className="relative table w-full py-40 bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${tour.img}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-10 text-center mt-10">
            <p className="text-red-500 font-medium mb-2">{tour.type}</p>
            <h1 className="text-3xl md:text-4xl leading-normal tracking-wider font-semibold text-white">{tour.title}</h1>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">{tour.summary}</p>
            <p className="flex items-center justify-center text-white/80 font-medium mt-4">
              <MapPin className="size-4 me-1 text-red-500" /> {tour.location}
            </p>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block text-white/50 text-[13px] font-bold uppercase">
            <li className="inline-block hover:text-white"><Link href="/">Home</Link></li>
            <li className="inline-block mx-1">›</li>
            <li className="inline-block hover:text-white"><Link href="/tours">Tours</Link></li>
            <li className="inline-block mx-1">›</li>
            <li className="inline-block text-white">Detail</li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {gallery.map((g, i) => (
                  <div key={g} className={layouts[i] ?? "col-span-6"}>
                    <div className="group relative overflow-hidden rounded-md shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={g} alt={tour.title} className="w-full lg:h-60 md:h-44 h-48 object-cover" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                  <span className="text-slate-900 text-sm ms-1">{tour.rating} ({tour.reviews})</span>
                </div>
                {tour.discount ? (
                  <span className="bg-red-500 text-white text-xs px-2.5 py-1 font-medium rounded-md">{tour.discount}</span>
                ) : null}
              </div>

              <h2 className="text-2xl font-semibold mt-5">{tour.title}</h2>
              <p className="flex items-center text-slate-400 font-medium mt-2">
                <MapPin className="size-4 me-1 text-red-500" /> {tour.location}
              </p>

              <ul className="list-none flex flex-wrap gap-x-6">
                {[
                  { icon: Clock, label: "Duration", value: tour.duration },
                  { icon: Activity, label: "Type", value: tour.type },
                  { icon: Users, label: "Group", value: tour.groupSize },
                  { icon: Globe, label: "Languages", value: tour.languages },
                  { icon: DollarSign, label: tour.priceLabel, value: "per person" },
                ].map((m) => (
                  <li key={m.label} className="inline-flex items-center mt-5">
                    <m.icon className="size-6 text-red-500" />
                    <div className="ms-3">
                      <p className="font-medium">{m.label}</p>
                      <span className="text-slate-400 font-medium text-sm">{m.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Tour description</h3>
                <p className="text-slate-400 mt-4">{tour.description}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Highlights</h3>
                <ul className="list-none mt-4 space-y-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start text-slate-400">
                      <span className="text-red-500 me-2">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md bg-slate-50">
                  <h4 className="font-semibold mb-3">Included</h4>
                  <ul className="space-y-2">
                    {tour.includes.map((x) => (
                      <li key={x} className="text-slate-400 text-sm">+ {x}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-md bg-slate-50">
                  <h4 className="font-semibold mb-3">Not included</h4>
                  <ul className="space-y-2">
                    {tour.excludes.map((x) => (
                      <li key={x} className="text-slate-400 text-sm">− {x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">Sample itinerary</h3>
                <div className="mt-4 space-y-4">
                  {tour.itinerary.map((step) => (
                    <div key={step.time} className="flex gap-4 p-4 rounded-md border border-gray-100">
                      <div className="shrink-0 size-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-semibold text-sm">
                        {step.time[0]}
                      </div>
                      <div>
                        <p className="font-medium">{step.time}</p>
                        <p className="text-slate-400 text-sm mt-1">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Questions & answers</h3>
                <TourFaq faqs={tour.faqs} />
              </div>

              {related.length ? (
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-5">You may also like</h3>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/tours/${r.slug}`} className="group block rounded-md overflow-hidden shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.img} alt={r.title} className="w-full h-40 object-cover group-hover:scale-105 duration-500" />
                        <div className="p-4">
                          <p className="font-medium group-hover:text-red-500">{r.title}</p>
                          <p className="text-red-500 text-sm mt-1">{r.priceLabel}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="p-6 rounded-md shadow-sm bg-white sticky top-24">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-slate-400 text-sm">From</p>
                    <p className="text-2xl font-semibold text-red-500">{tour.priceLabel}</p>
                  </div>
                  <p className="text-slate-400 text-sm pb-1">per person</p>
                </div>
                <form className="mt-6 space-y-4" action="/contact" method="get">
                  <div>
                    <label className="font-semibold text-sm">Preferred date</label>
                    <input name="date" type="text" placeholder="Select date" className="mt-2 w-full py-2 px-3 h-10 rounded outline-none border border-gray-100" />
                  </div>
                  <div>
                    <label className="font-semibold text-sm">Adults</label>
                    <input type="number" min={1} defaultValue={2} className="mt-2 w-full py-2 px-3 h-10 rounded outline-none border border-gray-100" />
                  </div>
                  <div>
                    <label className="font-semibold text-sm">Children</label>
                    <input type="number" min={0} defaultValue={0} className="mt-2 w-full py-2 px-3 h-10 rounded outline-none border border-gray-100" />
                  </div>
                  <input type="hidden" name="tour" value={tour.title} />
                  <button type="submit" className="py-2.5 px-5 bg-red-500 hover:bg-red-600 text-white rounded-md w-full">
                    Request this tour
                  </button>
                </form>
                <a href={sitePhoneHref} className="mt-3 py-2.5 px-5 inline-block text-center border border-slate-200 rounded-md w-full hover:border-red-500 hover:text-red-500">
                  Call {sitePhone}
                </a>
                <div className="mt-6">
                  <h5 className="text-lg font-medium">Tour map</h5>
                  <div className="mt-3 overflow-hidden rounded-md">
                    <iframe src={tour.map} style={{ border: 0 }} className="w-full h-[220px]" allowFullScreen loading="lazy" title="Tour map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
