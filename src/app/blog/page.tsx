import type { Metadata } from "next";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Addis Ababa travel tips, culture guides, and tour stories from Mesfin Shumet Tour and Travel.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories & tips"
        title="Travel blog"
        subtitle="Guides and stories to help you explore Addis Ababa with confidence."
        image="/images/bg/cta.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {blogPosts.map((item) => (
              <div key={item.id} className="group relative overflow-hidden">
                <div className="relative overflow-hidden rounded-md shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} className="group-hover:scale-110 group-hover:rotate-3 duration-500 w-full h-56 object-cover" />
                  <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md">{item.category}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex mb-4 text-slate-400 text-sm gap-3">
                    <span className="flex items-center"><Clock className="size-4 text-slate-900 me-1.5" />5 min read</span>
                    <span className="flex items-center"><User className="size-4 text-slate-900 me-1.5" />Mesfin Shumet</span>
                  </div>
                  <Link href="/blog" className="text-lg font-medium hover:text-red-500 duration-500">{item.title}</Link>
                  <p className="text-slate-400 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
