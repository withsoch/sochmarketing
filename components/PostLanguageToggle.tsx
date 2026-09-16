"use client";

// components/PostLanguageToggle.tsx
//
// English / Eesti switch for a bilingual post. Both languages are rendered on
// the server; this only flips `data-post-lang` on the wrapper and the two rules
// in globals.css hide the other one. Nothing re-renders, so the switch is
// instant and the page still works with JavaScript disabled (English shows).

import { useState } from "react";

type Lang = "en" | "et";

export function PostLanguageToggle({ targetId = "post-languages" }: { targetId?: string }) {
  const [lang, setLang] = useState<Lang>("en");

  const pick = (next: Lang) => {
    setLang(next);
    const wrapper = document.getElementById(targetId);
    if (wrapper) wrapper.dataset.postLang = next;
  };

  const option = (value: Lang, label: string) => (
    <button
      type="button"
      onClick={() => pick(value)}
      aria-pressed={lang === value}
      className={
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors " +
        (lang === value
          ? "bg-ink text-white"
          : "text-slate hover:text-ink")
      }
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Article language"
      className="inline-flex items-center gap-1 rounded-full border border-line bg-white p-1"
    >
      {option("en", "English")}
      {option("et", "Eesti")}
    </div>
  );
}
