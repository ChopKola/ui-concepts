import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { NavigateFunction } from "react-router-dom";

export const slugify = (text: string): string =>
    text
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "") // remove diacritics
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const isObjectEmpty = (obj: Record<string, unknown> | null | undefined): boolean =>  {
    if (obj == null || typeof obj !== 'object') {
        return true;
    }

    return Object.keys(obj).length === 0;
}

export const nameToInitials = (name: string): string => {
  if (!name?.trim()) return "";

  const words = name
    .trim()
    .split(/\s+/) // split on one or more spaces
    .filter(Boolean);

  const initials = words.slice(0, 2).map(word => word[0].toUpperCase()).join("");

  return initials;
};

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const navigateToTargetUrl = (
  url: string,
  navigate: NavigateFunction,
  onClose?: () => void
) => {
  if (!url) {
    console.warn("navigateToTargetUrl was called with an empty URL.");
    return;
  }

  navigate(url);
  onClose?.(); // safe optional call
};