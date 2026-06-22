import { TypingText } from "@/components/TypingText";
import { CompareClient } from "@/components/CompareClient";

export default function ComparePage() {
  return (
    <div className="mesh-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="reveal-up mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
          Compare colleges
        </p>
        <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
          <TypingText text="Side-by-side comparison" />
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Review selected colleges across cost, location, courses, rating, placement rate, and type.
        </p>
      </div>
      <CompareClient />
      </div>
    </div>
  );
}
