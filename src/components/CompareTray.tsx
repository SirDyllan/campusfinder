"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CollegeLogo } from "@/components/CollegeLogo";
import { useCompare } from "@/lib/use-compare";

export function CompareTray() {
  const pathname = usePathname();
  const { selectedColleges, removeCollege, clearCompare, maxCompare } = useCompare();

  if (selectedColleges.length === 0 || pathname === "/compare") {
    return null;
  }

  return (
    <aside
      aria-label="Selected colleges comparison tray"
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-4xl rounded-3xl border border-white/80 bg-white/90 p-3 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:bottom-5 sm:p-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">
            Compare shortlist
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedColleges.map((college) => (
              <span
                key={college.id}
                className="inline-flex max-w-full items-center gap-2 rounded-2xl bg-slate-100 px-2.5 py-2 text-xs font-bold text-slate-800"
              >
                <CollegeLogo college={college} className="size-7 rounded-xl" sizes="28px" />
                <span className="max-w-36 truncate sm:max-w-48">{college.name}</span>
                <button
                  type="button"
                  aria-label={`Remove ${college.name} from comparison`}
                  onClick={() => removeCollege(college.id)}
                  className="rounded-full px-1.5 py-0.5 text-slate-500 hover:bg-white hover:text-red-700"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <p className="hidden text-xs font-bold text-slate-500 sm:block">
            {selectedColleges.length}/{maxCompare} selected
          </p>
          <button
            type="button"
            onClick={clearCompare}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Clear
          </button>
          <Link
            href="/compare"
            aria-label={`Go to compare page with ${selectedColleges.length} selected colleges`}
            className="shine rounded-xl bg-orange-500 px-4 py-2 text-center text-xs font-black text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
          >
            Go to Compare
          </Link>
        </div>
      </div>
    </aside>
  );
}
