interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "We could not load this view. Please refresh the page or try again later.",
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-8 text-center">
      <h2 className="text-lg font-semibold text-red-950">{title}</h2>
      <p className="mt-2 text-sm text-red-800">{description}</p>
    </div>
  );
}
