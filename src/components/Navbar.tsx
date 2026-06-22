"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCompare } from "@/lib/use-compare";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" },
  { href: "/compare", label: "Compare" },
];

export function Navbar() {
  const pathname = usePathname();
  const { ids, ready } = useCompare();

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label="CampusFinder home">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-emerald-600 text-sm font-black text-white shadow-lg shadow-orange-500/20 group-hover:rotate-6">
            CF
          </span>
          <span className="hidden text-lg font-black text-slate-950 group-hover:text-orange-700 min-[380px]:inline">
            CampusFinder
          </span>
        </Link>
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-white/80 bg-white/60 p-1 shadow-sm backdrop-blur">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-bold sm:px-3 sm:text-sm ${
                  active
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-orange-700"
                }`}
              >
                {item.label}
                {item.href === "/compare" && ready && ids.length > 0 ? (
                  <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-800">
                    {ids.length}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
