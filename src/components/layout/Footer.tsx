import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { navLinks, siteEmail, siteName, sitePhone, sitePhoneHref } from "../../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-slate-900 relative text-gray-200">
      <div className="container relative">
        <div className="py-[60px]">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-3 md:col-span-12">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-red-500 text-white text-sm font-bold">MS</span>
                <span className="font-semibold text-white leading-tight">
                  <span className="block">Mesfin Shumet</span>
                  <span className="block text-xs text-gray-400 font-medium">Tour and Travel</span>
                </span>
              </Link>
              <p className="mt-6 text-gray-300">
                {siteName} — authentic Addis Ababa city tours, cultural experiences, and day packages across Ethiopia&apos;s capital.
              </p>
              <ul className="flex gap-2 mt-6 list-none">
                {[Share2, Globe, Share2, Mail].map((Icon, i) => (
                  <li key={i}>
                    <a
                      href={Icon === Mail ? `mailto:${siteEmail}` : "#"}
                      className="size-8 inline-flex items-center justify-center border border-gray-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                <h5 className="tracking-[1px] text-gray-100 mt-6">{siteName}</h5>
                <div className="flex mt-4">
                  <MapPin className="size-4 text-red-500 me-2 mt-1 shrink-0" />
                  <h6 className="text-gray-300">Addis Ababa,<br />Ethiopia</h6>
                </div>
                <div className="flex mt-4">
                  <Mail className="size-4 text-red-500 me-2 mt-1 shrink-0" />
                  <a href={`mailto:${siteEmail}`} className="text-slate-300 hover:text-slate-400">{siteEmail}</a>
                </div>
                <div className="flex mt-4">
                  <Phone className="size-4 text-red-500 me-2 mt-1 shrink-0" />
                  <a href={sitePhoneHref} className="text-slate-300 hover:text-slate-400">{sitePhone}</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">Explore</h5>
                <ul className="list-none mt-6 space-y-2.5">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-gray-300 hover:text-gray-400">
                        › {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
              <p className="mt-6">Get Addis Ababa travel tips and new tour offers.</p>
              <form className="mt-4" >
                <label className="form-label text-sm">Write your email <span className="text-red-600">*</span></label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="mt-2 w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 rounded outline-none"
                />
                <button type="submit" className="mt-3 py-2 px-5 inline-block font-semibold bg-red-500 text-white rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] border-t border-gray-800">
        <div className="container text-center">
          <p className="mb-0">© {year} {siteName}. Addis Ababa, Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
}
