import { NextResponse } from "next/server";
import { colleges } from "@/data/colleges";

export function GET() {
  return NextResponse.json({ colleges });
}
