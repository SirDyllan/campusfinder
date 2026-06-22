import { College } from "@/types/college";

export interface CollegeVisual {
  image: string;
  label: string;
  accent: string;
}

const visuals: Record<string, CollegeVisual> = {
  medicine: {
    image: "/college-visuals/medicine.svg",
    label: "Medicine",
    accent: "from-rose-500 to-orange-400",
  },
  engineering: {
    image: "/college-visuals/engineering.svg",
    label: "Engineering",
    accent: "from-sky-500 to-cyan-400",
  },
  business: {
    image: "/college-visuals/business.svg",
    label: "Business",
    accent: "from-amber-500 to-yellow-300",
  },
  design: {
    image: "/college-visuals/design.svg",
    label: "Design",
    accent: "from-violet-500 to-fuchsia-400",
  },
  science: {
    image: "/college-visuals/science.svg",
    label: "Science",
    accent: "from-indigo-500 to-teal-400",
  },
  campus: {
    image: "/college-visuals/campus.svg",
    label: "Campus",
    accent: "from-emerald-500 to-lime-400",
  },
};

export function getCourseVisual(label: string): CollegeVisual {
  const normalized = label.toLowerCase();

  if (/(medicine|health|nursing|biomedicine|veterinary|public health)/.test(normalized)) {
    return visuals.medicine;
  }

  if (/(engineering|computer|software|technology|architecture|data|information|ai|security)/.test(normalized)) {
    return visuals.engineering;
  }

  if (/(business|finance|commerce|accounting|economics|marketing|hospitality|management|entrepreneurship)/.test(normalized)) {
    return visuals.business;
  }

  if (/(design|journalism|media|visual|arts)/.test(normalized)) {
    return visuals.design;
  }

  if (/(science|biology|agriculture|environmental|psychology|research)/.test(normalized)) {
    return visuals.science;
  }

  return visuals.campus;
}

export function getCollegeVisual(college: College): CollegeVisual {
  return getCourseVisual(college.courses.join(" "));
}

export function getCollegeInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
