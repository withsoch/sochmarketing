"use client";

import { useEffect } from "react";
import { useAuditModal } from "@/context/AuditModalContext";
import { BOOKING_URL, CAL_LINK } from "@/lib/content";
import { openCalModal } from "@/lib/calEmbed";

export function BookAutoOpen() {
  const { openModal: openAuditModal } = useAuditModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("book") === "true") {
      if (CAL_LINK) {
        openCalModal(CAL_LINK);
      } else {
        window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
      }
      const url = new URL(window.location.href);
      url.searchParams.delete("book");
      window.history.replaceState({}, "", url.pathname);
    }

    if (params.get("audit") === "true") {
      openAuditModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("audit");
      window.history.replaceState({}, "", url.pathname);
    }
  }, [openAuditModal]);

  return null;
}
