import Link from "next/link";
import { Clock, MapPin, Star } from "lucide-react";
import type { Tour } from "../../lib/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md duration-300 h-full">
      <div className="md:flex md:items-stretch h-full">
        <div className="relative overflow-hidden md:shrink-0 md:w-52">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tour.img}
            alt={tour.title}
            className="h-52 w-full object-cover md:h-full group-hover:scale-105 duration-500"
          />
          {tour.discount ? (
            <div className="absolute top-3 start-3">
              <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md">
                {tour.discount}
              </span>
            </div>
          ) : null}
        </div>
        <div className="p-5 w-full flex flex-col justify-between">
          <div>
            <p className="flex items-center text-slate-400 font-medium mb-2 text-sm">
              <MapPin className="text-red-500 size-4 me-1 shrink-0" /> {tour.location}
            </p>
            <Link href={`/tours/${tour.slug}`} className="text-lg font-semibold hover:text-red-500 duration-300 leading-snug">
              {tour.title}
            </Link>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm">
              <span className="inline-flex items-center text-slate-500">
                <Clock className="size-4 me-1 text-red-500" />
                {tour.duration}
              </span>
              <span className="inline-flex items-center text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
                <span className="text-slate-500 ms-1.5">
                  {tour.rating} ({tour.reviews})
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-slate-400">From</p>
              <p className="text-red-500 font-semibold text-lg leading-tight">{tour.priceLabel}</p>
            </div>
            <Link
              href={`/tours/${tour.slug}`}
              className="py-2 px-4 text-sm font-medium rounded-md bg-slate-900 text-white hover:bg-red-500 duration-300"
            >
              View tour
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
