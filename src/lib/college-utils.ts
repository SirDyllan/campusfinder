import { colleges } from "@/data/colleges";
import { College, CollegeFilters } from "@/types/college";

export const defaultFilters: CollegeFilters = {
  query: "",
  location: "All",
  course: "All",
  maxFees: Math.max(...colleges.map((college) => college.fees)),
  minRating: 0,
  type: "All",
};

export function formatCurrency(value?: number) {
  if (typeof value !== "number") {
    return "Fees unavailable";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getCollegeById(id: string) {
  return colleges.find((college) => college.id === id);
}

export function getLocations() {
  return Array.from(new Set(colleges.map((college) => college.location))).sort();
}

export function getCourses() {
  return Array.from(new Set(colleges.flatMap((college) => college.courses))).sort();
}

export function filterColleges(items: College[], filters: CollegeFilters) {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return items.filter((college) => {
    const matchesQuery =
      !normalizedQuery ||
      college.name.toLowerCase().includes(normalizedQuery) ||
      college.courses.some((course) => course.toLowerCase().includes(normalizedQuery));
    const matchesLocation = filters.location === "All" || college.location === filters.location;
    const matchesCourse = filters.course === "All" || college.courses.includes(filters.course);
    const matchesFees = college.fees <= filters.maxFees;
    const matchesRating = college.rating >= filters.minRating;
    const matchesType = filters.type === "All" || college.type === filters.type;

    return (
      matchesQuery &&
      matchesLocation &&
      matchesCourse &&
      matchesFees &&
      matchesRating &&
      matchesType
    );
  });
}

export function getCollegesByIds(ids: string[]) {
  return ids
    .map((id) => getCollegeById(id))
    .filter((college): college is College => Boolean(college));
}
