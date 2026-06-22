export function LoadingState() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading colleges">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-72 animate-pulse rounded-lg border border-slate-200 bg-white p-5">
          <div className="h-4 w-28 rounded bg-slate-200" />
          <div className="mt-4 h-6 w-3/4 rounded bg-slate-200" />
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="h-16 rounded bg-slate-100" />
            <div className="h-16 rounded bg-slate-100" />
            <div className="h-16 rounded bg-slate-100" />
          </div>
          <div className="mt-8 h-10 rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}
