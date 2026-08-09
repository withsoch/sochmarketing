# Soch - Website

Marketing site for **Soch**, an organic social media management agency for B2B
founders & CEOs. Sister brand to Soch Catalyst (a LinkedIn-only agency) — same
design system and component grammar, broadened to cover social media management
across every major channel. Soch does not run paid ads or SEO.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion.

## Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build (run build first)
npm run lint     # ESLint
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the real values before launch:

- `NEXT_PUBLIC_BOOKING_URL` - Cal.com/Calendly link used by every "Book a Discovery
  Call" button (defaults to a placeholder Cal.com slug).
- `NEXT_PUBLIC_SCHEDULER_URL` - optional live scheduler embed for `/book` (falls back
  to a styled contact card when unset).
- `NEXT_PUBLIC_AUDIT_WEBHOOK_URL` - webhook the "Free Social Audit" form posts to
  (falls back to a prefilled `mailto:` when unset).

## Placeholder content

`lib/content.ts` contains placeholder testimonials, case studies, and client logos,
all clearly labeled. Replace them with real client results before launch. The logo
in `components/Logo.tsx` is a vector placeholder (no real brand artwork exists yet)
and can be swapped for real assets without touching any call sites.

## Project structure

```
app/                 # routes (App Router) - one folder per page
components/          # section components + components/ui primitives
lib/content.ts        # single source of copy, services, stats, nav, FAQs
context/              # audit modal state
```
