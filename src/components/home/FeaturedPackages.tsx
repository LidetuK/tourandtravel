"use client";

import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getAllTours } from "../../lib/tours";

export default function FeaturedPackages() {
  const tours = getAllTours().slice(0, 8);
  // Duplicate for a seamless loop with few slides
  const slides = [...tours, ...tours];

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden" id="packages">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[#e11d48] font-semibold text-sm mb-1">Packages in Addis</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
              Explore the packages
            </h2>
            <p className="text-slate-500 mt-2 max-w-lg">
              Short, half-day, full-day, and layover city tours with clear prices and local guides.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex self-start md:self-auto items-center justify-center rounded-full bg-slate-900 hover:bg-[#e11d48] text-white text-sm font-semibold px-5 py-2.5 duration-200"
          >
            See all packages
          </Link>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          loop
          speed={4500}
          grabCursor
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove
          className="deals-swiper"
        >
          {slides.map((t, i) => (
            <SwiperSlide key={`${t.slug}-${i}`} className="!w-[260px] sm:!w-[280px]">
              <article className="group relative rounded-2xl overflow-hidden bg-slate-100 h-full">
                <Link href={`/tours/${t.slug}`} className="block relative aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.img}
                    alt={t.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {t.discount ? (
                    <span className="absolute top-3 start-3 rounded-full bg-[#e11d48] text-white text-xs font-bold px-2.5 py-1">
                      {t.discount}
                    </span>
                  ) : null}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <div className="flex items-center gap-1 text-amber-300 text-xs mb-2">
                      <Star className="size-3.5 fill-current" />
                      <span className="font-semibold text-white">{t.rating}</span>
                      <span className="text-white/70">({t.reviews})</span>
                    </div>
                    <h3 className="font-bold text-[15px] leading-snug line-clamp-2 group-hover:underline underline-offset-2">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">{t.duration}</p>
                    <p className="mt-1 text-base font-bold">From ${t.price}</p>
                  </div>
                </Link>
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-3 end-3 size-9 rounded-full bg-white/90 text-slate-700 flex items-center justify-center z-10"
                >
                  <Heart className="size-4" />
                </span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
