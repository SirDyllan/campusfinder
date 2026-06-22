import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
}

export function EmptyState({ title, description, actionHref, actionLabel }: EmptyStateProps) {
  return (
    <div className="glass-strong reveal-up rounded-3xl border-dashed px-6 py-12 text-center">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">{description}</p>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="shine mt-6 inline-flex rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
