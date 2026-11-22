import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image = "/images/bg/2.jpg",
  crumbs,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  crumbs: Crumb[];
}) {
  return (
    <section
      className="relative table w-full py-40 bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />
      <div className="container relative">
        <div className="grid grid-cols-1 pb-10 text-center mt-10">
          {eyebrow ? <p className="text-red-500 font-medium mb-2">{eyebrow}</p> : null}
          <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">{title}</h1>
          {subtitle ? <p className="text-white/70 mt-3 max-w-xl mx-auto">{subtitle}</p> : null}
        </div>
      </div>
      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          {crumbs.map((c, i) => (
            <li key={`${c.label}-${i}`} className="inline-block">
              {i > 0 ? (
                <span className="inline-block text-base text-white/50 mx-0.5">›</span>
              ) : null}
              {c.href ? (
                <Link
                  href={c.href}
                  className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="inline-block uppercase text-[13px] font-bold text-white" aria-current="page">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
