import type { Metadata } from "next";
import { CompareTray } from "@/components/CompareTray";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampusFinder",
  description: "Find, compare, and choose the right college with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-950">
        <Navbar />
        <main className="pb-28 sm:pb-24">{children}</main>
        <CompareTray />
      </body>
    </html>
  );
}
