import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CompareButton } from "@/components/CompareButton";
import { TypingText } from "@/components/TypingText";
import { colleges } from "@/data/colleges";
import { getCollegeInitials, getCollegeVisual } from "@/lib/college-visuals";
import { formatCurrency, getCollegeById } from "@/lib/college-utils";

export function generateStaticParams() {
  return colleges.map((college) => ({ id: college.id }));
}

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const college = getCollegeById(id);

  if (!college) {
    notFound();
  }
  const visual = getCollegeVisual(college);

  return (
    <div className="mesh-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/colleges" className="text-sm font-bold text-orange-700 hover:text-orange-900">
        Back to colleges
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
        <section className="glass-strong reveal-up overflow-hidden rounded-3xl">
          <div className="relative h-64">
            <Image
              src={visual.image}
              alt={`${visual.label} themed campus visual`}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="grid size-16 place-items-center rounded-3xl bg-white/90 text-lg font-black text-slate-950 shadow-xl backdrop-blur">
                {getCollegeInitials(college.name)}
              </span>
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-black text-slate-800 shadow-sm backdrop-blur">
                {visual.label} focus
              </span>
            </div>
          </div>
          <div className="p-6">
          <p className="text-sm font-bold text-orange-700">
            {college.location}, {college.country}
          </p>
          <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
            <TypingText text={college.name} />
          </h1>
          <p className="mt-4 leading-7 text-slate-600">{college.overview}</p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DetailMetric label="Fees" value={formatCurrency(college.fees)} />
            <DetailMetric label="Rating" value={`${college.rating.toFixed(1)}/5`} />
            <DetailMetric label="Placement rate" value={`${college.placementRate}%`} />
            <DetailMetric label="Type" value={college.type} />
          </dl>

          <div className="mt-8">
            <h2 className="text-xl font-black text-slate-950">Courses offered</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {college.courses.map((course) => (
                <span key={course} className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-900">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-black text-slate-950">Admission information</h2>
            <p className="mt-3 leading-7 text-slate-600">{college.admissionInfo}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-black text-slate-950">Reviews</h2>
            <div className="mt-4 grid gap-4">
              {college.reviews.length > 0 ? (
                college.reviews.map((review) => (
                  <article key={`${review.author}-${review.rating}`} className="hover-lift rounded-2xl border border-white/80 bg-white/70 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-bold text-slate-950">{review.author}</h3>
                      <span className="text-sm font-black text-emerald-800">{review.rating.toFixed(1)}/5</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{review.comment}</p>
                  </article>
                ))
              ) : (
                <p className="text-sm text-slate-600">No reviews available yet.</p>
              )}
            </div>
          </div>
          </div>
        </section>

        <aside className="glass-panel reveal-up reveal-delay-2 h-fit rounded-3xl p-6 lg:sticky lg:top-24">
          <h2 className="text-lg font-black text-slate-950">Shortlist this college</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add this option to your persistent comparison list. You can compare up to 3 colleges.
          </p>
          <div className="mt-5">
            <CompareButton collegeId={college.id} collegeName={college.name} />
          </div>
        </aside>
      </div>
      </div>
    </div>
  );
}

function DetailMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="hover-lift rounded-2xl bg-white/70 p-4 shadow-sm">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-lg font-black text-slate-950">{value}</dd>
    </div>
  );
}
