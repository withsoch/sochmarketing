"use client";

/**
 * Loads the Cal.com embed script and opens bookings as an in-page modal
 * instead of navigating away to cal.com. Mirrors the official embed
 * snippet (https://cal.com/docs/embeds) without needing the npm package.
 */

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

type CalApi = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalApi>;
  q: unknown[][];
};

let initialized = false;

export function initCalEmbed() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  (function (C: Window, A: string, L: string) {
    const p = (a: CalApi, ar: unknown) => a.q.push(ar as unknown[]);
    const d = C.document;
    C.Cal =
      C.Cal ||
      (function (...args: unknown[]) {
        const cal = C.Cal as CalApi;
        const ar = args;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).setAttribute("src", A);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function (...innerArgs: unknown[]) {
            p(api as unknown as CalApi, innerArgs);
          } as unknown as CalApi;
          const namespace = ar[1] as string;
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      } as unknown as CalApi);
  })(window, "https://app.cal.com/embed/embed.js", "init");

  window.Cal?.("init", { origin: "https://cal.com" });
}

/** Opens the given cal.com event link (e.g. "consult-with-riz/marketing-discovery-call") as an in-page modal. */
export function openCalModal(calLink: string) {
  initCalEmbed();
  window.Cal?.("modal", {
    calLink,
    config: { layout: "month_view" },
  });
}
