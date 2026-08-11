# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences the site must serve equally well (confirmed by the owner):

1. **Hiring managers and tech recruiters** evaluating Farhaan for a full-time
   engineering role. They arrive from LinkedIn or a CV, skim in under a minute,
   and are checking: what does he actually build, what stack, is the evidence
   verifiable, is there a CV they can forward. The résumé timeline, the
   certificates, and both CV PDFs are load-bearing for this audience.
2. **Freelance and agency clients** buying a build. They want to see finished
   products, the range across mobile/web/hardware, and craft they can judge
   directly. For them the site itself is the work sample.

Both read on desktop and on mid-range phones. Neither may be served by
sidelining the other.

## Product Purpose

A personal portfolio for Farhaan Beeharry — Software & Mobile Engineer, based in
Port-Louis, Mauritius — that converts a skim into either a hiring conversation or
a project enquiry. Success is a contact: an email to contact@farhaan.info, a
WhatsApp message, or a downloaded CV.

## Positioning

A Flutter-first mobile engineer with genuine full-stack and hardware reach, whose
work is shipped and checkable rather than described. The specific, non-copyable
facts:

- Apps live on the App Store under the XEFI Software developer account.
- Commercial delivery for clients in three countries: Mauritius, UAE
  (WearTwice — Flutter app, Strapi backend, MAMO Pay, Aj-Ex delivery), and
  European/French clients via XEFI.
- Four competition placements, all with certificates on file — first prize at
  MCB InovApp Challenge 3.0 (2023), third at the FSC Mobile App Design
  Competition, second at UoM Inter-university Techwar, second at Digicup.
- Range that most portfolios in this category cannot claim: an Arduino-driven
  automatic irrigation system sits in the same body of work as a CRM and an
  App Store app.

## Operating Context

- 21 project case studies live at `/portfolio/<slug>` and are already written.
  They stay as they are; this work restyles the site shell and homepage around
  them.
- Deployed to cPanel via `.cpanel.yml` and a GitHub Actions overlay-only
  workflow. The build is Vite; the site is a React 18 SPA with react-router.
- Legacy static URLs (`/portfolio/<slug>/index.html`) must keep resolving.
- Visitors frequently arrive on a phone from a LinkedIn link.

## Capabilities and Constraints

- **Stack (fixed, existing):** React 18 + Vite 5 + react-router-dom 6. Content
  lives in `src/data/site.js` and `src/data/projects.js`.
- **Approved new dependency:** three.js, for one genuine WebGL scene in the
  first viewport only. Everything else is CSS 3D / scroll-driven, with no
  further runtime dependencies.
- **Must keep working:** routing including the legacy `index.html` URLs, the
  service-worker eviction script in `index.html`, both CV downloads, every
  certificate and testimonial download link, the mailto/tel/WhatsApp actions.
- **Removed at the owner's instruction:** self-rated percentage skill bars
  (`codingSkills`, `otherSkills`) and the vanity stat counters (cups of coffee,
  WPM, "62 projects completed"). Skill evidence must come from the work instead.
- **Kept at the owner's instruction:** all 16 certificates, the competition
  wins, and both CV PDFs (English and French), all prominently reachable.
- **Icons:** Font Awesome 6 is loaded from CDN today.
- Accessibility, reduced-motion support, and performance on mid-range Android
  are real constraints, not aspirations — the WebGL scene must degrade cleanly.

## Brand Commitments

- Name: Farhaan Beeharry. Title in use: "Software & Mobile Engineer".
- Domain and contact: contact@farhaan.info, +230 5707 6881.
- Portrait photo at `/img/profile_picture.jpg` is real and stays.
- Social presence: LinkedIn, GitHub, CodeSignal, Behance, Instagram, WhatsApp.
- No colour, typeface, or visual-system commitment exists. The current
  dark-navy / indigo-violet-cyan gradient look is explicitly **not** binding —
  the owner's brief is that it reads as generic AI output and is to be replaced.

## Evidence on Hand

Real, verifiable, on disk — none of this needs inventing:

- 21 project case studies with thumbnails and write-ups under `/portfolio/`.
- 16 certificate PDFs/JPGs under `/assets/`, plus the InovApp winner photo at
  `/img/inovapp_winner.jpg`.
- 4 named testimonials with photos (Tashley Toocaram, Zubair Tofy, Dalilah
  Kalla, Mudassir Lallmahamood) at `/img/testimonials/`.
- 7 recommendation letters and 5 employer testimonial documents under
  `/assets/`.
- Full employment history 2019–present across 9 roles, and education through
  BSc Computer Science (Systems Engineering), First Class Honours, Middlesex
  University Mauritius, 2021.
- English and French CV PDFs.

**Absences future work must not fabricate:** no client revenue figures, no user
or download counts, no NPS/benchmark numbers, no named customers beyond those
already listed above, no availability or rate claims beyond the existing
"available for freelance & full-time opportunities" line.

## Product Principles

1. **Evidence over self-assessment.** Every claim resolves to something a
   visitor can open — a case study, a certificate, a testimonial, an App Store
   listing. This is why the percentage bars are gone.
2. **The work is the argument.** Shipped products lead; biography supports them.
3. **One page must satisfy two readers.** A recruiter's 45-second skim and a
   client's deep browse are both first-class paths through the same page.
4. **Range is the differentiator.** Mobile, web, and hardware in one body of
   work — the site should make that breadth legible rather than flatten it into
   a uniform grid.
5. **Nothing decorative may cost the content.** Motion and depth serve reading
   order and memory; they never delay, obscure, or gate the evidence.

## Accessibility & Inclusion

- `prefers-reduced-motion` must be honoured throughout, including the WebGL
  scene and every scroll-driven transform.
- Content is visible without JavaScript-driven reveal completing; no
  scroll-gated content.
- Keyboard-reachable navigation, visible focus, and real alt text on the
  portrait, thumbnails, and certificate logos.
- Target: WCAG 2.1 AA contrast on all text.
