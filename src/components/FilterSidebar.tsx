import { CollegeFilters } from "@/types/college";
import { formatCurrency } from "@/lib/college-utils";

interface FilterSidebarProps {
  filters: CollegeFilters;
  locations: string[];
  courses: string[];
  maxFees: number;
  onChange: (filters: CollegeFilters) => void;
  onReset: () => void;
}

export function FilterSidebar({
  filters,
  locations,
  courses,
  maxFees,
  onChange,
  onReset,
}: FilterSidebarProps) {
  return (
    <aside className="glass-strong rounded-3xl p-5 lg:sticky lg:top-24" aria-label="College filters">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-black text-slate-950">Filters</h2>
        <button
          type="button"
          aria-label="Reset all college filters"
          onClick={onReset}
          className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-800 hover:bg-orange-200"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 space-y-5">
        <FilterSelect
          label="Location"
          value={filters.location}
          options={["All", ...locations]}
          onChange={(location) => onChange({ ...filters, location })}
        />
        <FilterSelect
          label="Course"
          value={filters.course}
          options={["All", ...courses]}
          onChange={(course) => onChange({ ...filters, course })}
        />
        <div>
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="fees" className="text-sm font-medium text-slate-700">
              Maximum fees
            </label>
            <span className="text-sm font-semibold text-slate-950">
              {formatCurrency(filters.maxFees)}
            </span>
          </div>
          <input
            id="fees"
            type="range"
            aria-label={`Maximum fees ${formatCurrency(filters.maxFees)}`}
            min={2000}
            max={maxFees}
            step={500}
            value={filters.maxFees}
            onChange={(event) => onChange({ ...filters, maxFees: Number(event.target.value) })}
            className="mt-3 w-full accent-emerald-700"
          />
        </div>
        <div>
          <label htmlFor="rating" className="text-sm font-medium text-slate-700">
            Minimum rating
          </label>
          <select
            id="rating"
            value={filters.minRating}
            onChange={(event) => onChange({ ...filters, minRating: Number(event.target.value) })}
            className="mt-2 w-full rounded-xl border border-white/80 bg-white/80 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          >
            <option value={0}>Any rating</option>
            <option value={3.5}>3.5+</option>
            <option value={4}>4.0+</option>
            <option value={4.5}>4.5+</option>
          </select>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">College type</p>
          <div className="mt-2 grid grid-cols-3 rounded-2xl border border-white/80 bg-white/60 p-1 shadow-sm" role="group" aria-label="Filter by college type">
            {(["All", "Public", "Private"] as const).map((type) => (
              <button
                type="button"
                key={type}
                aria-pressed={filters.type === type}
                onClick={() => onChange({ ...filters, type })}
                className={`rounded-md px-2 py-2 text-sm font-medium ${
                  filters.type === type
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-orange-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-white/80 bg-white/80 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
