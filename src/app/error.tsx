"use client";

import { ErrorState } from "@/components/ErrorState";

export default function GlobalError() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <ErrorState />
    </div>
  );
}
