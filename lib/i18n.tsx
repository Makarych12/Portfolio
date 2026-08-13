"use client";

import { useCallback, useSyncExternalStore } from "react";
import { en, type Dictionary } from "@/locales/en";
import { ru } from "@/locales/ru";
import { bg } from "@/locales/bg";

export type Locale = "en" | "ru" | "bg";

const dictionaries: Record<Locale, Dictionary> = { en, ru, bg };

let currentLocale: Locale = "en";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

function getSnapshot() {
  return currentLocale;
}

export function setLocale(l: Locale) {
  currentLocale = l;
  listeners.forEach(fn => fn());
}

function getByPath(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function useTranslation() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const t = useCallback(
    (path: string) => getByPath(dictionaries[locale] as unknown as Record<string, unknown>, path),
    [locale]
  );

  return { locale, setLocale, t };
}
