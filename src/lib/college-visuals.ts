import { College } from "@/types/college";

export interface CollegeVisual {
  image: string;
  label: string;
  accent: string;
}

export interface CollegeLogo {
  image: string;
  alt: string;
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

const collegeLogos: Record<string, CollegeLogo> = {
  uct: { image: "/college-logos/uct.png", alt: "University of Cape Town logo" },
  wits: { image: "/college-logos/wits.png", alt: "University of the Witwatersrand logo" },
  stellenbosch: { image: "/college-logos/stellenbosch.jpg", alt: "Stellenbosch University logo" },
  up: { image: "/college-logos/up.png", alt: "University of Pretoria logo" },
  unisa: { image: "/college-logos/unisa.jpg", alt: "University of South Africa logo" },
  ukzn: { image: "/college-logos/ukzn.png", alt: "University of KwaZulu-Natal logo" },
  rhodes: { image: "/college-logos/rhodes.png", alt: "Rhodes University logo" },
  uz: { image: "/college-logos/uz.jpg", alt: "University of Zimbabwe logo" },
  "africa-university": { image: "/college-logos/africa-university.png", alt: "Africa University logo" },
  hit: { image: "/college-logos/hit.png", alt: "Harare Institute of Technology logo" },
  "midlands-state": { image: "/college-logos/midlands-state.jpg", alt: "Midlands State University logo" },
  bindura: { image: "/college-logos/bindura.jpg", alt: "Bindura University logo" },
  solusi: { image: "/college-logos/solusi.png", alt: "Solusi University logo" },
  mit: { image: "/college-logos/mit.png", alt: "Massachusetts Institute of Technology logo" },
  oxford: { image: "/college-logos/oxford.png", alt: "University of Oxford logo" },
  toronto: { image: "/college-logos/toronto.png", alt: "University of Toronto logo" },
  melbourne: { image: "/college-logos/melbourne.png", alt: "University of Melbourne logo" },
  nus: { image: "/college-logos/nus.png", alt: "National University of Singapore logo" },
  ashesi: { image: "/college-logos/ashesi.png", alt: "Ashesi University logo" },
  strathmore: { image: "/college-logos/strathmore.png", alt: "Strathmore University logo" },
  aau: { image: "/college-logos/aau.jpg", alt: "Addis Ababa University logo" },
  covenant: { image: "/college-logos/covenant.jpg", alt: "Covenant University logo" },
  mauritius: { image: "/college-logos/mauritius.jpg", alt: "University of Mauritius logo" },
  minerva: { image: "/college-logos/minerva.png", alt: "Minerva University logo" },
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

export function getCollegeLogo(college: College): CollegeLogo | null {
  return collegeLogos[college.id] ?? null;
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
