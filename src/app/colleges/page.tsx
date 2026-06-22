import { TypingText } from "@/components/TypingText";
import { CollegeExplorer } from "@/components/CollegeExplorer";

export default function CollegesPage() {
  return (
    <div className="mesh-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="reveal-up mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
          Explore colleges
        </p>
        <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
          <TypingText text="Search and filter colleges" />
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Use location, course, fees, rating, and ownership filters to build a focused shortlist.
        </p>
      </div>
      <CollegeExplorer />
      </div>
    </div>
  );
}
