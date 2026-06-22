interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">Search colleges by name or course</span>
      <input
        value={value}
        aria-label="Search colleges by college name or course"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by college name or course"
        className="w-full rounded-2xl border border-white/80 bg-white/80 px-5 py-4 text-sm font-medium text-slate-950 shadow-lg shadow-slate-900/5 outline-none placeholder:text-slate-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      />
    </label>
  );
}
