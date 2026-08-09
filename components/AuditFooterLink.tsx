"use client";

import { useAuditModal } from "@/context/AuditModalContext";

export function AuditFooterLink({ children = "Free social audit" }: { children?: React.ReactNode }) {
  const { openModal } = useAuditModal();
  return (
    <li>
      <button
        type="button"
        onClick={openModal}
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        {children}
      </button>
    </li>
  );
}
