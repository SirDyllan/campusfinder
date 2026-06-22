import Link from "next/link";
import { EmptyState } from "@/components/EmptyState";

export default function CollegeNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <EmptyState
        title="College not found"
        description="The college ID in the URL does not match any college in the CampusFinder dataset."
        actionHref="/colleges"
        actionLabel="Browse colleges"
      />
      <div className="mt-6 text-center">
        <Link href="/" className="text-sm font-semibold text-emerald-800 hover:text-emerald-950">
          Return home
        </Link>
      </div>
    </div>
  );
}
