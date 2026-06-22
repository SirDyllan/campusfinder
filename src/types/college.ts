export type CollegeType = "Public" | "Private";

export interface CollegeReview {
  author: string;
  rating: number;
  comment: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  country: string;
  fees: number;
  rating: number;
  placementRate: number;
  type: CollegeType;
  courses: string[];
  overview: string;
  reviews: CollegeReview[];
  admissionInfo: string;
}

export interface CollegeFilters {
  query: string;
  location: string;
  course: string;
  maxFees: number;
  minRating: number;
  type: "All" | CollegeType;
}
