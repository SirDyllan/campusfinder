"use client";

import { useMemo, useSyncExternalStore } from "react";
import { colleges } from "@/data/colleges";
import { getCollegesByIds } from "@/lib/college-utils";

const STORAGE_KEY = "campusfinder.compare";
const MAX_COMPARE = 3;

function readStoredIds() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter((id): id is string => typeof id === "string")
      .filter((id) => colleges.some((college) => college.id === id))
      .slice(0, MAX_COMPARE);
  } catch {
    return [];
  }
}

function writeStoredIds(ids: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent("campusfinder-compare-change", { detail: ids }));
}

export type CompareResult = "added" | "duplicate" | "limit";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("campusfinder-compare-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("campusfinder-compare-change", callback);
  };
}

function getSnapshot() {
  return readStoredIds().join("|");
}

function getServerSnapshot() {
  return "";
}

export function useCompare() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ids = useMemo(() => (snapshot ? snapshot.split("|") : []), [snapshot]);
  const selectedColleges = useMemo(() => getCollegesByIds(ids), [ids]);

  function addCollege(id: string): CompareResult {
    if (ids.includes(id)) {
      return "duplicate";
    }

    if (ids.length >= MAX_COMPARE) {
      return "limit";
    }

    const nextIds = [...ids, id];
    writeStoredIds(nextIds);
    return "added";
  }

  function removeCollege(id: string) {
    const nextIds = ids.filter((selectedId) => selectedId !== id);
    writeStoredIds(nextIds);
  }

  function clearCompare() {
    writeStoredIds([]);
  }

  return {
    ids,
    selectedColleges,
    ready: true,
    addCollege,
    removeCollege,
    clearCompare,
    isSelected: (id: string) => ids.includes(id),
    maxCompare: MAX_COMPARE,
  };
}
