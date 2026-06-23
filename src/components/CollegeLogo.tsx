import Image from "next/image";
import { College } from "@/types/college";
import { getCollegeInitials, getCollegeLogo } from "@/lib/college-visuals";

interface CollegeLogoProps {
  college: College;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

export function CollegeLogo({
  college,
  className = "size-12 rounded-2xl",
  imageClassName = "",
  sizes = "48px",
}: CollegeLogoProps) {
  const logo = getCollegeLogo(college);
  const positionClass = /\b(absolute|fixed|relative|sticky)\b/.test(className) ? "" : "relative";

  return (
    <span
      className={`${positionClass} grid shrink-0 place-items-center overflow-hidden bg-white text-sm font-black text-slate-950 shadow-lg ${className}`}
      aria-label={logo ? logo.alt : `${college.name} initials`}
    >
      {logo ? (
        <Image
          src={logo.image}
          alt=""
          fill
          sizes={sizes}
          className={`object-contain p-1.5 ${imageClassName}`}
        />
      ) : (
        getCollegeInitials(college.name)
      )}
    </span>
  );
}
