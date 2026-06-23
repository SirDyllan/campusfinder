import Link from "next/link";
import Image from "next/image";
import { CollegeLogo } from "@/components/CollegeLogo";
import { TypingText } from "@/components/TypingText";
import { colleges } from "@/data/colleges";
import { getCourseVisual } from "@/lib/college-visuals";
import { formatCurrency } from "@/lib/college-utils";

export default function Home() {
  const featured = colleges.slice(0, 5);
  const categories = [
    {
      label: "Engineering",
      detail: "CS, AI, Civil, Mechanical",
      image: "/study-paths/engineering.jpg",
      query: "Engineering",
    },
    {
      label: "Medicine",
      detail: "Health sciences, medicine and nursing",
      image: "/study-paths/medicine.jpg",
      query: "Medicine",
    },
    {
      label: "Business",
      detail: "Finance, analytics, commerce",
      image: "/study-paths/business.jpg",
      query: "Business",
    },
    {
      label: "Design",
      detail: "UX, media, visual studies",
      image: "/study-paths/design.jpg",
      query: "Design",
    },
  ];
  const stats = [
    { label: "Colleges", value: `${colleges.length}+` },
    { label: "Courses mapped", value: "50+" },
    { label: "Filters", value: "5" },
    { label: "Compare slots", value: "3" },
  ];

  return (
    <div className="mesh-bg">
      <section className="relative overflow-hidden border-b border-white/70">
        <Image
          src="/home-design.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/82 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eef6ff] via-transparent to-transparent" />
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="reveal-up relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-orange-500" />
              Explore colleges, courses, and outcomes
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-slate-950 sm:text-7xl">
              <TypingText text="CampusFinder" />
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-bold leading-9 text-slate-800">
              Find, compare, and choose the right college with confidence.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A high-signal discovery experience inspired by education portals: search first,
              filter fast, scan outcomes, and compare your shortlist without losing context.
            </p>

            <div className="mt-8 max-w-2xl rounded-2xl border border-white/80 bg-white/80 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex min-h-14 flex-1 items-center rounded-xl bg-slate-50 px-4 text-sm font-medium text-slate-500">
                  Search colleges, courses, locations and placement outcomes
                </div>
                <Link
                  href="/colleges"
                  className="shine rounded-xl bg-orange-500 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                >
                  Start Exploring
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/colleges"
                className="rounded-xl bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore Colleges
              </Link>
              <Link
                href="/compare"
                className="rounded-xl border border-white/80 bg-white/70 px-5 py-3 text-center text-sm font-bold text-slate-800 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:bg-white"
              >
                Compare Colleges
              </Link>
            </div>
          </div>

          <div className="reveal-up reveal-delay-2 relative z-10">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-orange-300/50 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 size-36 rounded-full bg-cyan-300/50 blur-3xl" />
            <div className="glass-panel float-slow relative rounded-3xl p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                    Smart shortlist
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">Top matches today</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {featured.map((college, index) => (
                  <Link
                    key={college.id}
                    href={`/colleges/${college.id}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                  >
                    <CollegeLogo college={college} className="size-12 rounded-2xl" sizes="48px" />
                    <span>
                      <span className="block font-bold text-slate-950 group-hover:text-orange-700">
                        {college.name}
                      </span>
                      <span className="mt-1 block text-sm text-slate-600">
                        {college.location} | {college.courses[0]}
                      </span>
                    </span>
                    <span className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm">
                      {index + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-strong hover-lift reveal-up rounded-2xl p-5">
              <p className="text-4xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Browse like a portal
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Popular study paths</h2>
          </div>
          <Link href="/colleges" className="text-sm font-bold text-slate-800 hover:text-orange-700">
            View all colleges
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href={`/colleges?query=${encodeURIComponent(category.query)}`}
              key={category.label}
              className="hover-lift group relative min-h-64 overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-sm backdrop-blur"
            >
              <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={category.image}
                alt={`${category.label} study path illustration`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              </div>
              <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${getCourseVisual(category.label).accent}`} />
              <div className="p-5">
              <div className={`mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${getCourseVisual(category.label).accent} text-lg font-black text-white shadow-lg`}>
                {category.label.slice(0, 2)}
              </div>
              <h3 className="text-xl font-black text-slate-950 group-hover:text-orange-700">
                {category.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.detail}</p>
              <p className="mt-5 text-sm font-bold text-slate-900">Explore path</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="glass-panel grid gap-6 rounded-3xl p-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Outcome scanner
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Compare value, not just names</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Fees, ratings, placement rates, type, location, and courses are surfaced in compact
              comparison rows so students can make calmer decisions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {colleges.slice(15, 18).map((college) => (
              <div key={college.id} className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
                <div className="relative h-24 w-full overflow-hidden">
                <Image
                  src={getCourseVisual(college.courses.join(" ")).image}
                  alt={`${college.courses[0]} visual`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                </div>
                <div className="p-4">
                <p className="text-sm font-bold text-slate-950">{college.name}</p>
                <p className="mt-2 text-xs font-semibold text-slate-500">{college.location}</p>
                <div className="mt-4 rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">Annual fees</p>
                  <p className="mt-1 text-lg font-black text-slate-950">{formatCurrency(college.fees)}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
