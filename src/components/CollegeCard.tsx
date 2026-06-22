"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { College } from "@/types/college";
import { getCollegeInitials, getCollegeVisual } from "@/lib/college-visuals";
import { formatCurrency } from "@/lib/college-utils";
import { CompareResult, useCompare } from "@/lib/use-compare";

interface CollegeCardProps {
  college: College;
}

const messages: Record<CompareResult, string> = {
  added: "Added to compare",
  duplicate: "Already in compare",
  limit: "Compare up to 3 colleges",
};

export function CollegeCard({ college }: CollegeCardProps) {
  const { addCollege, isSelected } = useCompare();
  const [message, setMessage] = useState("");
  const visual = getCollegeVisual(college);

  function handleAdd() {
    const result = addCollege(college.id);
    setMessage(messages[result]);
  }

  return (
    <article className="hover-lift reveal-up group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/75 bg-white/80 shadow-sm backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-emerald-500 to-sky-500 opacity-80" />
      <div className="relative h-36 overflow-hidden">
        <Image
          src={visual.image}
          alt={`${visual.label} themed illustration`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-2xl bg-white/90 text-sm font-black text-slate-950 shadow-lg backdrop-blur">
            {getCollegeInitials(college.name)}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-800 shadow-sm backdrop-blur">
            {visual.label}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-bold text-orange-700">
            {college.location}, {college.country}
          </p>
          <h3 className="mt-1 line-clamp-2 text-lg font-black text-slate-950 group-hover:text-orange-700">{college.name}</h3>
        </div>
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
          {college.type}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
        <Metric label="Fees" value={formatCurrency(college.fees)} />
        <Metric label="Rating" value={`${college.rating.toFixed(1)}/5`} />
        <Metric label="Placement" value={`${college.placementRate}%`} />
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {college.courses.slice(0, 3).map((course) => (
          <span key={course} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
            {course}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {message ? (
          <p className="mb-3 text-sm font-bold text-slate-600" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={`/colleges/${college.id}`}
            aria-label={`View details for ${college.name}`}
            className="rounded-xl border border-slate-300 bg-white/70 px-4 py-2 text-center text-sm font-bold text-slate-800 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
          >
            View Details
          </Link>
          <button
            type="button"
            aria-label={`Add ${college.name} to comparison list`}
            onClick={handleAdd}
            className="shine rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            {isSelected(college.id) ? "Selected" : "Add to Compare"}
          </button>
        </div>
      </div>
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3 transition group-hover:bg-white">
      <dt className="text-xs font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm font-bold text-slate-950">{value}</dd>
    </div>
  );
}
