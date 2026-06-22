"use client";

import { CompareTable } from "@/components/CompareTable";
import { LoadingState } from "@/components/LoadingState";
import { useCompare } from "@/lib/use-compare";

export function CompareClient() {
  const { selectedColleges, ready } = useCompare();

  if (!ready) {
    return <LoadingState />;
  }

  return <CompareTable colleges={selectedColleges} />;
}
