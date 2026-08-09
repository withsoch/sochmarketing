import type { Metadata } from "next";
import { ConfirmationContent } from "./ConfirmationContent";

export const metadata: Metadata = {
  title: "Audit Submitted · Soch",
  description:
    "Your profiles are with us. Umair will review them personally and send you the full breakdown within 24 hours.",
};

export default function ConfirmationPage() {
  return <ConfirmationContent />;
}
