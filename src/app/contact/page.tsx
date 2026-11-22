import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import { siteEmail, sitePhone, sitePhoneHref } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mesfin Shumet Tour and Travel in Addis Ababa — book tours or plan a custom itinerary.",
};

type Props = { searchParams: Promise<{ tour?: string; date?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const sp = await searchParams;
  const tour = sp.tour?.trim() || "";

  return (
    <>
      <PageHero
        eyebrow="We're here to help"
        title="Contact us"
        subtitle="Reach Mesfin Shumet Tour and Travel in Addis Ababa — tours, groups, and custom days."
        image="/images/bg/2.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold mb-3">Let&apos;s plan your Addis day</h2>
              <p className="text-slate-400 mb-8">Share your dates and interests. We&apos;ll reply with tour options, timing, and a clear next step.</p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="size-11 shrink-0 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center"><Phone className="size-4" /></div>
                  <div>
                    <p className="font-medium">Phone / WhatsApp</p>
                    <a href={sitePhoneHref} className="text-slate-400 hover:text-red-500">{sitePhone}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-11 shrink-0 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center"><Mail className="size-4" /></div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${siteEmail}`} className="text-slate-400 hover:text-red-500">{siteEmail}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-11 shrink-0 rounded-md bg-red-500/10 text-red-500 flex items-center justify-center"><MapPin className="size-4" /></div>
                  <div>
                    <p className="font-medium">Based in</p>
                    <p className="text-slate-400">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white rounded-md shadow-sm p-6 md:p-8 border border-gray-100">
                <h3 className="mb-6 text-xl font-semibold">Send a message</h3>
                <form>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
                    <div className="lg:col-span-6">
                      <label className="font-semibold text-sm">Your name</label>
                      <input name="name" type="text" placeholder="Full name" className="mt-2 w-full py-2 px-3 h-11 rounded outline-none border border-gray-100" />
                    </div>
                    <div className="lg:col-span-6">
                      <label className="font-semibold text-sm">Your email</label>
                      <input name="email" type="email" placeholder="you@email.com" className="mt-2 w-full py-2 px-3 h-11 rounded outline-none border border-gray-100" />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="font-semibold text-sm">Subject</label>
                      <input name="subject" defaultValue={tour ? `Inquiry: ${tour}` : ""} placeholder="Tour inquiry" className="mt-2 w-full py-2 px-3 h-11 rounded outline-none border border-gray-100" />
                    </div>
                    <div className="lg:col-span-12">
                      <label className="font-semibold text-sm">Message</label>
                      <textarea name="comments" defaultValue={tour ? `I'm interested in: ${tour}` : ""} placeholder="Dates, group size, and what you'd like to see" className="mt-2 w-full py-2 px-3 h-32 rounded outline-none border border-gray-100" />
                    </div>
                  </div>
                  <button type="submit" className="py-2.5 px-6 bg-red-500 hover:bg-red-600 text-white rounded-md mt-4">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full leading-[0]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.23954954888!2d38.6528615!3d9.005401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
          className="w-full h-[420px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Addis Ababa map"
        />
      </div>
    </>
  );
}
