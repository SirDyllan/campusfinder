"use client";

import Link from "next/link";
import Image from "next/image";
import { College } from "@/types/college";
import { getCollegeInitials, getCollegeVisual } from "@/lib/college-visuals";
import { formatCurrency } from "@/lib/college-utils";
import { useCompare } from "@/lib/use-compare";
import { EmptyState } from "@/components/EmptyState";

interface CompareTableProps {
  colleges: College[];
}

export function CompareTable({ colleges }: CompareTableProps) {
  const { removeCollege, clearCompare } = useCompare();

  if (colleges.length === 0) {
    return (
      <EmptyState
        title="No colleges selected yet"
        description="Add 2 to 3 colleges from the listing page to compare fees, ratings, placement outcomes, and course fit."
        actionHref="/colleges"
        actionLabel="Explore Colleges"
      />
    );
  }

  return (
    <div className="space-y-4">
      {colleges.length === 1 ? (
        <div className="reveal-up rounded-2xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm font-bold text-amber-900 shadow-sm">
          Add at least one more college for a useful side-by-side comparison.
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">{colleges.length} of 3 colleges selected</p>
        <button
          type="button"
          aria-label="Clear all selected colleges from comparison"
          onClick={clearCompare}
          className="rounded-xl border border-white/80 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:-translate-y-0.5 hover:bg-white"
        >
          Clear comparison
        </button>
      </div>
      <div className="grid gap-4 md:hidden">
        {colleges.map((college) => (
          <article key={college.id} className="glass-strong overflow-hidden rounded-3xl">
            <div className="relative h-32">
              <Image
                src={getCollegeVisual(college).image}
                alt={`${college.courses[0]} visual`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-2xl bg-white text-xs font-black text-slate-950 shadow-sm">
                {getCollegeInitials(college.name)}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <Link href={`/colleges/${college.id}`} className="text-lg font-black text-slate-950 hover:text-orange-700">
                  {college.name}
                </Link>
                <button
                  type="button"
                  aria-label={`Remove ${college.name} from comparison`}
                  onClick={() => removeCollege(college.id)}
                  className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700 hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <MobileMetric label="Fees" value={formatCurrency(college.fees)} />
                <MobileMetric label="Rating" value={`${college.rating.toFixed(1)}/5`} />
                <MobileMetric label="Placement" value={`${college.placementRate}%`} />
                <MobileMetric label="Type" value={college.type} />
                <div className="col-span-2 rounded-2xl bg-white/70 p-3">
                  <dt className="text-xs font-bold text-slate-500">Location</dt>
                  <dd className="mt-1 font-black text-slate-950">{college.location}, {college.country}</dd>
                </div>
                <div className="col-span-2 rounded-2xl bg-white/70 p-3">
                  <dt className="text-xs font-bold text-slate-500">Courses</dt>
                  <dd className="mt-1 leading-6 font-bold text-slate-800">{college.courses.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className="glass-strong hidden overflow-x-auto rounded-3xl md:block">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/80 bg-slate-950 text-white">
              <th className="w-44 px-4 py-4 font-black">Criteria</th>
              {colleges.map((college) => (
                <th key={college.id} className="px-4 py-4 align-top">
                  <div className="space-y-3">
                    <div className="relative h-24 overflow-hidden rounded-2xl bg-white/10">
                      <Image
                        src={getCollegeVisual(college).image}
                        alt={`${college.courses[0]} visual`}
                        fill
                        sizes="(min-width: 768px) 20vw, 50vw"
                        className="object-cover opacity-85"
                      />
                      <span className="absolute bottom-2 left-2 grid size-9 place-items-center rounded-xl bg-white text-xs font-black text-slate-950">
                        {getCollegeInitials(college.name)}
                      </span>
                    </div>
                    <Link href={`/colleges/${college.id}`} className="font-black text-white hover:text-orange-200">
                      {college.name}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Remove ${college.name} from comparison`}
                      onClick={() => removeCollege(college.id)}
                      className="block text-xs font-bold text-orange-200 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <CompareRow label="Fees" values={colleges.map((college) => formatCurrency(college.fees))} />
            <CompareRow label="Rating" values={colleges.map((college) => `${college.rating.toFixed(1)}/5`)} />
            <CompareRow label="Placement rate" values={colleges.map((college) => `${college.placementRate}%`)} />
            <CompareRow label="Location" values={colleges.map((college) => `${college.location}, ${college.country}`)} />
            <CompareRow label="Type" values={colleges.map((college) => college.type)} />
            <CompareRow label="Courses" values={colleges.map((college) => college.courses.join(", "))} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MobileMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-3">
      <dt className="text-xs font-bold text-slate-500">{label}</dt>
      <dd className="mt-1 font-black text-slate-950">{value}</dd>
    </div>
  );
}

function CompareRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr>
      <th className="bg-white/60 px-4 py-4 font-black text-slate-800">{label}</th>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className="px-4 py-4 leading-6 text-slate-700">
          {value || "Not available"}
        </td>
      ))}
    </tr>
  );
}
