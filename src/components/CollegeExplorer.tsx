"use client";

import { useMemo, useState } from "react";
import { CollegeCard } from "@/components/CollegeCard";
import { EmptyState } from "@/components/EmptyState";
import { FilterSidebar } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { colleges } from "@/data/colleges";
import { defaultFilters, filterColleges, getCourses, getLocations } from "@/lib/college-utils";

export function CollegeExplorer() {
  const [filters, setFilters] = useState(defaultFilters);
  const locations = useMemo(() => getLocations(), []);
  const courses = useMemo(() => getCourses(), []);
  const maxFees = defaultFilters.maxFees;
  const filteredColleges = useMemo(() => filterColleges(colleges, filters), [filters]);

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <FilterSidebar
        filters={filters}
        locations={locations}
        courses={courses}
        maxFees={maxFees}
        onChange={setFilters}
        onReset={() => setFilters(defaultFilters)}
      />
      <section>
        <div className="glass-strong reveal-up rounded-3xl p-4">
          <SearchBar value={filters.query} onChange={(query) => setFilters({ ...filters, query })} />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <p>
              Showing <span className="font-semibold text-slate-950">{filteredColleges.length}</span> of{" "}
              <span className="font-semibold text-slate-950">{colleges.length}</span> colleges
            </p>
            <p className="rounded-full bg-orange-100 px-3 py-1 font-bold text-orange-800">
              Compare any 2 to 3 colleges side by side.
            </p>
          </div>
        </div>

        <div className="mt-6">
          {filteredColleges.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No colleges match your filters"
              description="Try a broader search, raise the fees range, or reset filters to see more options."
            />
          )}
        </div>
      </section>
    </div>
  );
}
