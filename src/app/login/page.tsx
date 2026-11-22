import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Mesfin Shumet Tour and Travel account.",
};

export default function LoginPage() {
  return (
    <section className="md:h-screen py-36 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/images/bg/6.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md rounded-md">
            <Link href="/">
              <Image src="/images/logo-icon.png" width={64} height={64} className="mx-auto" alt="Mesfin Shumet Tour and Travel" />
            </Link>
            <h5 className="my-6 text-xl font-semibold text-center">Login</h5>
            <form>
              <div className="mb-4">
                <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                <input id="LoginEmail" type="email" className="mt-3 w-full py-2 px-3 h-10 rounded outline-none border border-gray-100" placeholder="name@example.com" />
              </div>
              <div className="mb-4">
                <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 rounded outline-none border border-gray-100" placeholder="Password" />
              </div>
              <button type="submit" className="py-2 px-5 bg-red-500 text-white rounded-md w-full">Login / Sign in</button>
              <div className="text-center mt-4">
                <Link href="/" className="text-slate-400 text-sm hover:text-red-500">Back to home</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
