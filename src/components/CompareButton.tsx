"use client";

import { useState } from "react";
import Link from "next/link";
import { CompareResult, useCompare } from "@/lib/use-compare";

const messages: Record<CompareResult, string> = {
  added: "Added to compare",
  duplicate: "This college is already selected",
  limit: "You can compare up to 3 colleges",
};

export function CompareButton({
  collegeId,
  collegeName = "this college",
}: {
  collegeId: string;
  collegeName?: string;
}) {
  const { addCollege, isSelected } = useCompare();
  const [message, setMessage] = useState("");

  function handleClick() {
    const result = addCollege(collegeId);
    setMessage(messages[result]);
  }

  return (
    <div>
      <button
        type="button"
        aria-label={`Add ${collegeName} to comparison list`}
        onClick={handleClick}
        className="shine rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 hover:bg-orange-600"
      >
        {isSelected(collegeId) ? "Selected for Compare" : "Add to Compare"}
      </button>
      {message ? (
        <div className="mt-3 flex flex-wrap items-center gap-3" role="status" aria-live="polite">
          <p className="text-sm font-bold text-slate-700">{message}</p>
          {message !== messages.limit ? (
            <Link href="/compare" className="text-sm font-black text-orange-700 hover:text-orange-900">
              Go to Compare
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
