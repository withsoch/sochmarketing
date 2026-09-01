"use client";

import { BOOKING_URL, CAL_LINK } from "@/lib/content";
import { openCalModal } from "@/lib/calEmbed";

export function BookFooterLink() {
  const calLink = CAL_LINK;
  return (
    <li>
      <a
        href={BOOKING_URL}
        target={calLink ? undefined : "_blank"}
        rel={calLink ? undefined : "noopener noreferrer"}
        onClick={
          calLink
            ? (e) => {
                e.preventDefault();
                openCalModal(calLink);
              }
            : undefined
        }
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        Get a quote
      </a>
    </li>
  );
}
